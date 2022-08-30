import { DOMMessage, DOMMessageResponse } from '../types';
import './content-scripts.css';
import { getId, getName, getProfilePicture, getCompany, getCompanyLogo, getPosition } from './helpers';
// Function called when a new message is received

const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void,
) => {
  if (window.location.href.includes('https://www.linkedin.com/in')) {
    // If the message is a request to evaluate an expression, evaluate the expression and send the result back to the react app
    const id = getId();
    const name = getName();
    const profilePicture = getProfilePicture();
    const company = getCompany();
    const companyLogo = getCompanyLogo();
    const position = getPosition();

    const response: DOMMessageResponse = {
      id,
      name,
      profilePicture,
      company,
      companyLogo,
      position,
    };
    console.log(response);
    sendResponse(response);
  }
};

const mountButton = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'ADD TO POPR';
  btn.setAttribute('id', 'poprIdButton');
  btn.onclick = function () {
    alert('Button is clicked');
  };
  document.body.appendChild(btn);
  btn.classList.add('btn');
  console.log('button created');
};
const isInLinkedinProfile = (request: any) =>
  request && request.type === 'inLinkedinProfile' && window.location.href.includes('https://www.linkedin.com/in');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const poprButton = document.getElementById('poprIdButton');
  if (isInLinkedinProfile(request) && !poprButton) {
    console.log('page rendered');
    // call method which gets fired as if new page is opened
    mountButton();
  }
  if (!isInLinkedinProfile(request) && poprButton) {
    poprButton.parentElement?.removeChild(poprButton);
    console.log('button eliminated');
  }
  sendResponse({});
  return true;
});

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
