import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        // we are 100% getting the userId because the name of this file is written in
        // special NEXT.JS syntax (((([userId].ts))))
        const { userId } = req.query;

        if (!userId || typeof userId !== "string") {
            throw new Error("Invalid ID");
        }

        // to find only one user
        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        // to find all the followers: the users who are following our userId
        const followersCount = await prisma.user.count({
            where: {
                followingIds: {
                    has: userId,
                },
            },
        });

        return res.status(200).json({ ...existingUser, followersCount });
    } catch (error) {
        console.log("Error in pages/api/users/[userId]");
        console.log(error);
        return res.status(400).end();
    }
}
