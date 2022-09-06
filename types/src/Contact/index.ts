export class CreateContactDTO {
  name: string;
  companyName: string;
  companyPosition: string;
  linkedInURL: string;
  profilePictureUrl: string | undefined | null;
  companyLogoUrl: string | undefined | null;
}

export class ResponseContactDTO {
  name: string;
  profilePictureS3Id: string;
  companyName: string;
  logoS3Id: string;
  companyPosition: string;
  linkedInURL: string;
}
