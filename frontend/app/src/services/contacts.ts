export const getContacts = async (userId: string) => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/contacts/${userId}`);
  return response.json();
};
