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
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        console.log("Error in pages/api/users/index.ts");
        return res.status(400).end();
    }
}

// experiment to avoid problems with vercel and API Response size limit of 4MB
export const config = {
    api: {
        responseLimit: false,
    },
};
