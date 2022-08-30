import './content-scripts.css';
import { getLinkedinData } from './helpers';
// Function called when a new message is received

const mountButton = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'ADD TO POPR';
  btn.setAttribute('id', 'poprIdButton');
  btn.onclick = function () {
    getLinkedinData();
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
