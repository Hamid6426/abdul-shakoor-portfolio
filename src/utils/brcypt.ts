import bcrypt from 'bcryptjs';

export const verifyPassword = async (inputPassword: string, storedPassword: string): Promise<boolean> => {
  return bcrypt.compare(inputPassword, storedPassword); // Returns true if passwords match
};
