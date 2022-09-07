import { CreateContactDTO } from '@meethead/types';
import './content-scripts.css';
import { getLinkedinData } from './helpers';
// Function called when a new message is received

const CONTACTS_ENDPOINT = `${process.env.API_URL}/contacts/63120fd98028831ecf43b444`;

const sendProfileToDb = async (profile: CreateContactDTO) => {
  try {
    await fetch(CONTACTS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });
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
  console.log(request.type);
  const poprButton = document.getElementById('poprIdButton');
  if (isInLinkedinProfile(request) && !poprButton) {
    mountButton();
  }
  if (!isInLinkedinProfile(request) && poprButton) {
    poprButton.parentElement?.removeChild(poprButton);
  }
  sendResponse({});
  return true;
});
