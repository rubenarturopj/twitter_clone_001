import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

// to protect the router, so only the user logged in can see the notifications.
// to protect the router for unauthorized users to enter the notifications URL
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}

const Notifications = () => {
    return (
        <>
            <Header showBackArrow label="Notifications" />
            <NotificationsFeed />
        </>
    );
};

export default Notifications;
