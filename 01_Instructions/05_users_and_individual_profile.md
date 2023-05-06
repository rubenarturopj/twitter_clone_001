## Users and individual profile

### Create routes to fetch all users and individual user as well

1. Go to `pages/api` folder and inside create a new folder called `users`. Inside, for now create a file called `index.ts`.

2. Write our handler to get ALL USERS in descendant order.

3. Now in the same folder `pages/api/users`, create a new file called `[userId].ts`. This file is similar to the previous in some ways. In this file we are going to get ONE SINGLE USER and ALL THEIR FOLLOWERS.

4. Now we will extract our `userId` that we will get because of the special NEXT.JS syntax used to name the file (`[userId].ts`). In this syntax, our `userId` will be transfered in our `request.query`. So, let's keep writing the file.

5. Create a hook in the hooks folder called `useUsers.ts`. (users in plural). You can copy the content of `useCurrentUser.ts` and paste it in our new file as it is basically the same. Just make sure to change the names. AND change the ROUTER PATH to `"/api/users"`.

6. In the same folder, create a new file called `useUser.ts` (user in singular). Copy the content from `useUsers.ts` and paste it in our new file. The main function will accept a parameter.

-   We are creating the different routers here

### Create Avatar

1. Go to `components` folder and create a new file called `Avatar.tsx`.

### Fill `Who to follow` component
