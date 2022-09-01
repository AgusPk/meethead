import { LinkedinProfile } from 'types';
import './content-scripts.css';
import { getLinkedinData } from './helpers';
// Function called when a new message is received

const CONTACTS_ENDPOINT = 'http://localhost:8080/contacts/630e1928ff1f3882d139e838';

const sendProfileToDb = async (profile: LinkedinProfile) => {
  try {
    await fetch(CONTACTS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });

    console.log('profile sent!');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
  }
};

const buttonClicked = () => {
  const profile = getLinkedinData();
  sendProfileToDb(profile);
};

const mountButton = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'ADD TO POPR';
  btn.setAttribute('id', 'poprIdButton');
  btn.onclick = buttonClicked;
  document.body.appendChild(btn);
  btn.classList.add('btn');
};

const isInLinkedinProfile = (request: any) =>
  request && request.type === 'inLinkedinProfile' && window.location.href.includes('https://www.linkedin.com/in');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const poprButton = document.getElementById('poprIdButton');
  if (isInLinkedinProfile(request) && !poprButton) {
    // call method which gets fired as if new page is opened
    mountButton();
  }
  if (!isInLinkedinProfile(request) && poprButton) {
    poprButton.parentElement?.removeChild(poprButton);
  }
  sendResponse({});
  return true;
});
