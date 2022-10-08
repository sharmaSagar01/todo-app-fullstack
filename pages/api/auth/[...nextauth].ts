import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/google'
import Adapters from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@lib/prisma";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        }),
    ],
    session: { strategy: 'jwt' },
    secret: process.env.SECRET,
    adapter: PrismaAdapter(prisma),

});