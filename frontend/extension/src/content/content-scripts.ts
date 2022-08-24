import { DOMMessage, DOMMessageResponse } from '../types';

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void,
) => {
  if (window.location.href.includes('https://www.linkedin.com/in')) {
    const id = window.location.href.split('/in/')[1].slice(0, -1);
    // If the message is a request to evaluate an expression, evaluate the expression and send the result back to the react app
    const name = Array.from(document.getElementsByTagName<'h1'>('h1')).map((h1) => h1.innerText)[0];
    const company = Array.from(document.getElementsByTagName<'h2'>('h2')).map((h2) => h2.innerText)[1];
    const profilePicture = document.querySelector(`img[alt="${name}"]`)?.getAttribute('src');

    // Prepare the response object with information about the site
    const response: DOMMessageResponse = {
      name,
      company,
      profilePicture,
      id,
    };

    sendResponse(response);
  }
};

if (window.location.href.includes('https://www.linkedin.com/in')) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Save';
  btn.setAttribute('id', 'idButton');
  btn.onclick = function () {
    alert('Button is clicked');
  };
  document.body.appendChild(btn);
}
/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
