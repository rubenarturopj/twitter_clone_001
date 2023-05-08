import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    try {
        const { currentUser } = await serverAuth(req, res);

        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        console.log("Error in pages/api/current.ts");
        return res.status(400).end();
    }
}

// experiment to avoid problems with vercel and API Response size limit of 4MB
export const config = {
    api: {
        responseLimit: false,
    },
};
