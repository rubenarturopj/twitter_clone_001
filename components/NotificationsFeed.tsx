import { BsTwitter } from "react-icons/bs";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

const NotificationsFeed = () => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const { data: fetchedNotifications = [] } = useNotifications(
        currentUser?.id
    );

    // Every time we hit API/notifications (to check our notifications)  we reset the value
    // of has notifications to false for our user. Once done that, we want to refetch our user
    // so the alert is removed.
    // this is how we achieve to click on notifications and the alert goes away.
    useEffect(() => {
        mutateCurrentUser();
    }, [mutateCurrentUser]);

    // if there are no notifications to show
    if (fetchedNotifications.length === 0) {
        return (
            <div className="text-neutral-600 text-center p-6 text-xl">
                No notifications
            </div>
        );
    }

    // if there are notifications
    return (
        <div className="flex flex-col">
            {fetchedNotifications.map((notification: Record<string, any>) => (
                <div
                    key={notification.id}
                    className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
                >
                    <BsTwitter color="white" size={32} />
                    <p className="text-white">{notification.body}</p>
                </div>
            ))}
        </div>
    );
};

export default NotificationsFeed;
