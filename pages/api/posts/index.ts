import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST" && req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        // post     to tweet / to create a post
        if (req.method === "POST") {
            const { currentUser } = await serverAuth(req, res);
            const { body } = req.body;

            const post = await prisma.post.create({
                data: {
                    body,
                    userId: currentUser.id,
                },
            });

            return res.status(200).json(post);
        }

        // get    to read a tweet/posts  and display them on the UI
        if (req.method === "GET") {
            const { userId } = req.query;

            console.log(
                "-----> making sure we're passing a userId in pages/api/posts/index.ts"
            );
            console.log({ userId });

            let posts;
            // to get the posts of the user only and display them on profile
            if (userId && typeof userId === "string") {
                posts = await prisma.post.findMany({
                    where: {
                        userId,
                    },
                    include: {
                        user: true,
                        comments: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                });
            } else {
                // to get all the posts of all users and display them in FEED
                posts = await prisma.post.findMany({
                    include: {
                        user: true,
                        comments: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                });
            }

            return res.status(200).json(posts);
        }
    } catch (error) {
        console.log(error);
        console.log("Error in pages/api/posts/index.ts");
        return res.status(400).end();
    }
}

export const config = {
    api: {
        responseLimit: false,
    },
};
