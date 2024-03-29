import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_ATLAS_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "hrushikqwerty",
  },
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user?.id;
        return token;
      }
    },
    async session(session, token) {
      session.user.id = token?.id;
      return session;
    },
  },
});
