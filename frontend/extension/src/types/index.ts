export type DOMMessage = {
  type: 'GET_DOM';
};

export type LinkedinProfile = {
  name: string;
  companyName: string;
  profilePictureUrl: string | undefined | null;
  companyLogoUrl: string | undefined | null;
  linkedInURL: string;
  companyPosition: string;
};
