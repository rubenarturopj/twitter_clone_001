import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/libs/prismadb";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                // if no email or password have been entered
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                // to look in the database a user registered with the email entered
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                // if there is no user with that email, or if the user doesn't have hashed password
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }
                // check if the password is correct: compare the password entered with the one
                // encrypted in the database
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );
                // if passwords don't match
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials");
                }
                // if the passwords match, return the USER info
                return user;
            },
        }),
    ],
    // we want to turn on the DEBUG if we are in development. This helps a lot because you see
    // a lot of information in your terminal and will help you debug stuff
    debug: process.env.NODE_ENV === "development",
    // Session and JSON WEB TOKEN for sessions
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
