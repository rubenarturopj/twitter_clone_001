import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "PATCH") {
        return res.status(405).end();
    }

    try {
        // extract our current user
        const { currentUser } = await serverAuth(req, res);
        // values available to update
        const { name, username, bio, profileImage, coverImage } = req.body;
        // safety part
        if (!name || !username) {
            throw new Error("Missing fields");
        }
        // update user
        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id,
            },
            data: {
                name,
                username,
                bio,
                profileImage,
                coverImage,
            },
        });

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log("Error in pages/api/edit.ts");
        console.log(error);
        return res.status(400).end();
    }
}
