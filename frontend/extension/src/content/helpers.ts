export const getId = () => window.location.href.split('/in/')[1].slice(0, -1);
export const getName = () => document.getElementsByTagName('h1')[0]?.innerText;
export const getProfilePicture = () => document.querySelector(`img[alt="${getName()}"]`)?.getAttribute('src');
export const getCompany = () => {
  const node = document.getElementsByClassName('inline-show-more-text')[0];
  return (node as HTMLElement).innerText;
};
export const getCompanyLogo = () =>
  document.getElementsByClassName('pv-text-details__right-panel-item-text-image')[0].getAttribute('src');
export const getPosition = () => {
  const node = document.getElementsByClassName('text-body-medium')[0];
  return (node as HTMLElement).innerText;
};

export const getLinkedinData = () => {
  const linkedinProfile = {
    id: getId(),
    name: getName(),
    profilePicture: getProfilePicture(),
    company: getCompany(),
    companyLogo: getCompanyLogo(),
    position: getPosition(),
  };
  return linkedinProfile;
};
