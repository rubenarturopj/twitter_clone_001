import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // for the follow function, we will POST to add a person you want to follor
    //  or DELETE to delete the person from your "following" list
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }

    try {
        const userId =
            req.method === "POST" ? req.body.userId : req.query.userId;

        const { currentUser } = await serverAuth(req, res);

        if (!userId || typeof userId !== "string") {
            throw new Error("Invalid ID");
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new Error("Invalid ID");
        }

        let updatedFollowingIds = [...(user.followingIds || [])];

        // we are following someone
        if (req.method === "POST") {
            updatedFollowingIds.push(userId);
        }

        // if we want to stop following someone
        if (req.method === "DELETE") {
            updatedFollowingIds = updatedFollowingIds.filter(
                (followingId) => followingId !== userId
            );
        }

        // update the user info with the changes we just did before
        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id,
            },
            data: {
                followingIds: updatedFollowingIds,
            },
        });

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}
