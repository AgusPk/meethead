export type DOMMessage = {
  type: 'GET_DOM';
};

export type DOMMessageResponse = {
  name: string;
  company: string;
  profilePicture: string | undefined | null;
  companyLogo: string | undefined | null;
  id: string;
  position: string;
};
