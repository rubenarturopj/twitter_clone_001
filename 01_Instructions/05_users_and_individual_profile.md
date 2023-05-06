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

1. Go to `components` folder and create a new file called `Avatar.tsx`. Create the basic structure, add an interface, pass the props, style the return. Work on the main body of the function.

2. To add the `<Avatar>` component to our UI and actually see what we're editing. Go to `FollowBar.tsx` file in `components/layout` folder. Import the `useUsers` (plural) hook. Create a conditional rendering: if users is empty, then return NULL-nothing. Otherwise, return the right colum that contains the followers. Then import our Avatar on top of the file, and pass it on the return section with a property of userId. Style the return.

3. Style `Avatar.tsx`. Add the function to redirect when clicked on it. Inside `public` folder, create a new folder called `images`. Add the PNG image placeholder for image in the `public/images/` folder.

### Fill `Who to follow` component
