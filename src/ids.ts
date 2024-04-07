export const createPollID = async () => {
  const { customAlphabet } = await import('nanoid');
  return customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6) as unknown as string;
};

export const createUserID = async () => {
  const { nanoid } = await import('nanoid');
  return nanoid();
};

export const createNominationID = async () => {
  const { nanoid } = await import('nanoid');
  return nanoid(8);
};
