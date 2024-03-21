import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import bcrypt from "bcrypt";
import { query } from "./lib/db";
const login = async (credentials) => {
  try {
    const user = await query({
      query: "SELECT * FROM users WHERE email = ?",
      values: [credentials.email],
    });

    console.log(user[0]);

    if (!user[0]) throw new Error("Wrong Credentials");

    if (user[0].status === "Disable") throw new Error("Something Wrong");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user[0].password
    );

    if (!isPasswordCorrect) throw new Error("Wrong Credentials");

    return user[0];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.number = user.number;
        token.img = user.img;
        token.type = user.type;
        token.status = user.status;
        token.role_id = user.role_id;
        token.gym_id = user.gym_id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.number = token.number;
        session.user.img = token.img;
        session.user.type = token.type;
        session.user.status = token.status;
        session.user.role_id = token.role_id;
        session.user.gym_id = token.gym_id;
      }
      return session;
    },
  },
});
