import argon2 from "argon2";

export default {
  hash: async (plain: string) => {
    return await argon2.hash(plain);
  },
  verify: async (plain: string, hash: string) => {
    return await argon2.verify(hash, plain);
  },
};
