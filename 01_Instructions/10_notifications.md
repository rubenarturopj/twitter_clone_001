## Notifications

### Setting up the visual icon for notifications

1. Go to `components/layout/SidebarItem.tsx` and import icons. Also add another property to the interface and extract it in th emain function. IN the return section, for mobile and desktop, add the icon conditioned if there's an alert or not.

2. Go to `components/layout/Sidebar.tsx`. Go to the items array with the icons and add a property to the Bell one. Also in the return section add it to the SidebarItem component. Now we can see the notification dot on top of the bell. But this is not how we want it, we want it do be dynamic, automatic, so go back to the items array and change the true value for `currentUser?.hasNotification`. ALSO very importa add the path or route in the Items array.

### Write our notifications API

1. Go to `pages/api` folder and create a new folder called `notificaitons`. Inside create a new file called `[userId].ts`.

2. Now let's create its hook in `hooks` folder. `useNotifications.ts`.

3. Create the notifications route for when you click on the icon on the left side bar it redirect you to your notifications. Go to `pages` folder and create a new file called `notifications.tsx`. There we're gonna create the return to show in the UI. Also we're creating a protection for the notifications section, if the user has not logged in, no matter if they enter the URL in the browser, they won't be able to access. Also add in the return section a new component we are going to create: `<NotificationsFeed>`

4. Go to `components` folder and create the new component called `notificationsFeed.tsx`. Give it the basic structure. Write the function and style the return. we're using use effect because every time we make a hit to /api/notifications, we reset our has notifications to false for our user. Once we hit that, we want to refetch our user so the alert is removed every time we click on notifications. Then style the conditional returns (if there are notificaions or not)

### Going back into some of our routes

-   We'll go back to some routes like Follow, Likea and Comment, to trigger notifications.

#### Like

1. Go to `pages/api/like.ts`. Create a try catch block where we're adding the notification data into the database. After this, you can go try like your own post and then refreh, you'll see the notification icon and also the ntoificaitons in a list. COpy the try catch block because we're going to use it in more places.

2. Go to `pages/api/comments.ts` and paste the trycatch block there.

3. Got to `pages/api/follow.ts`. Because we had already done something here before, then this time is a bit different. That's it.
