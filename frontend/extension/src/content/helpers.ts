export const getId = () => window.location.href.split('/in/')[1].slice(0, -1);
export const getName = () => document.getElementsByTagName('h1').innerText;
export const getProfilePicture = () => document.querySelector(`img[alt="${name}"]`)?.getAttribute('src');
export const getCompany = () => document.getElementsByTagName('button')[12].children[1].innerText;
export const getCompanyLogo = () => document.getElementsByTagName('button')[12].children[0].getAttribute('src');
export const getPosition = () => document.getElementsByClassName('text-body-medium')[0].innerText;
