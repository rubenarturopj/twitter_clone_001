## Prisma, mongo, nextauth

### Prisma

1. In the terminal, install:

```sh
npm install -D prisma
npx prisma init
```

You should see now a couple of new files:

-   1A `prisma` folder with a `schema.prisma` file inside
-   a new file called `.env` for environment

2. Go to `schema.prisma` and change the provider to `mongodb`

-   If you cannot see the `.env` file content in colors, if it's just plain text, then you need to install an extension called: `Prisma`. (prisma extension)

### MongoDB ATLAS

1. We need to get our database URL. Go to mongodb atlas. Sign in.

2. Create a new project > click on `Build a database` > Selec M0 FREE > Provider AWS > Leave Region as it is > Name: you can leave it like that or change it. > Click on `CREATE`.

3. Choose a username and a password. I'll go with admin/admin for this project. > Click on `create user`.

4. For environment, suggested: `Add my current IP address` or you can add manually: `0.0.0.0/0` if you want acces from everywhere. FOR PRODUCTION YOU WANT TO ALLOW ACCES FROM EVERYWHERE USING THE ZEROS COMBINATION. I will use both.

5. Finish and close.

6. In the dashboard of your new cluster, click on `Conect`. Then choose `Connect using VSCode`. It will give you the perfect line of code to connect to copy and paste into VSCODE. IN my case it's:

```sh
mongodb+srv://admin:<password>@cluster0.lh7zjpz.mongodb.net/
```

7. Copy the line of code, go back to VSCODE and into `.env` file, and paste instead of the value given by default of `DATABASE_URL`.

8. CHANGE THE PASSWORD FOR YOUR REAL PASSWORD. Delete the pointy brackets and the word password and type your password there. In my case it is:

```sh
mongodb+srv://admin:admin@cluster0.lh7zjpz.mongodb.net/
```

### Prisma again: data management

-   Tip: If you know with precision how you wanna manage your data, then it's better to create all of the modals now(all the tables in the database), then push the database, and not modify it / touch it ever again.

1. Go to `schema.prisma` file in the `Prisma` folder, and type in all the tables for the database.

2. Push the database schema through the terminal:

```sh
npx prisma db push
```

### Authentication, Loggin and Register controllers

1. Install Prisma Client:

```sh
npm install @prisma/client
```

2. We're going to create a new library. Create a new folder called `libs` (libraries). Inside, create a file named `prismadb.ts`. Inside, import `PrismaClient`. Declare a global variable, create a const and and if conditional. And export it.

-   Explanation: This is a fix for Next.js hot reloading, because it creates a lot of Prisma Clients and will make the app crash. The globlar variable is not affected by hot reload.

3. Go to `pages/api` and create a new folder called `auth`. Inside, create a file called `[...nextauth].ts`. Then we are going to install the following packages:

```sh
npm install bcrypt
npm install -D @types/bcrypt

npm install next-auth
npm install @next-auth/prisma-adapter
```

4. Now lets fill in the file we created in step 3. This file will be in charge of checking if the credentials entered by the user (email, and password) match to a user in the database. To acces or deny the loggin. Finally we are setting up the Tokens for the session, using our SECRET that we havn't created yet.

5. Let's create our SECRET. Go to `.env` file and create the secrets for `NEXTAUTH_JWT_SECRET=` and `NEXTAUTH_SECRET=`.

#### Register endpoint

1. Create a new file called `register.ts` in `pages/api` folder. MAKE SURE NOT TO DO IT IN AUTH. In this file we are going to handle the creation of a new USER and push it into the database. So fill this file in with its corresponding stuff.

2. in the `libs` folder, create a file called `serverAuth.ts`. This library will serve as our server authorization. Fill in this file as in results.

3. Create another route called `current.` to fetch our currentyl logged in user. Go to `pages/api` folder and create a new file called `current.ts`. This file will call the file on step 2. THis router will check if we are logged in, if there is a user. That will be done by using the file on step 2 which looks into the database.

4. Go to `hooks` folder and create a new file called `useCurrentUser.ts`. Before filling this file, let's install another package:

```sh
npm install swr
```

5. Import this package in `useCurrentUser.ts` and keep filling the file.

6. Create another library called `fetcher`, in a file called `fetcher.ts` in the `libs/` folder.

7. To work on `fetcher.tsx` we will need to install another package:

```sh
npm install axios
```

8. `Import axios from "axios"` and fill in the `fetcher.ts` file. Create a constant called FETCHER that we can export.

9. Finish typing `useCurrentUser.ts`. In it, useSWR will fetch the dato from the endpoint established using the fetcher function. This will replace global state like redux, it will store the data and compare later instead of refetching over and over.

#### RegisterModal

1. Go back to `RegisterModal.tsx` and keep typing in the place where we left comments saying to add register and loggin. We are adding `AXIOS` and making a `POST` request to the route `"/api/register"`, but where does this route comes from? How does it exist? Because we created in the file called `register.ts` in the `pages/api` folder. Pass the second parameter to AXIOS.

-   So: what's inside of the API folder becomes a router? No, we are simply saying send the request to this specific file where we have implemented a full function to take care of the request. Yes, for this project yes because we are organized and we are making the API folder the place where we are going to store all our router files.
-   We are also keeping the Auth folder inside API clean, because that will be reserved for authentication purposes. If we add another file in the AUTH folder, then we may break the app.
-   Axios takes 2 parameters: the first one is the route and the second is the data to pass.

2. We want to display a message of succes or failure. So, let's install `React-hot-toast`

```sh
npm install react-hot-toast
```

3. Go to your `_app.tsx` file and import `Toaster` from react-hot-toast and `SessionProvider` from "next-auth/react". Then wrap up everything in the return section inside the `<SessionProvider>` component. Below the opening tag of the sessionprovider, add the single-tag `<Toaster/>` component, above the rest of components.

4. Go back to `RegisterModal.tsx` and add the Toast messages of success/failure. Also, import `SignIn` from "next-auth/react". Finish everything there so we can create a user and also sign in using SingIn.

5. If you test it now and create a user, it works! you'll the the user information in the database. But we can't tell if we are logged in or not, in the UI, because we haven't established it yet.

### Show we are logged in in our UI.

1. Go to `components/layout/Sidebar.tsx`. We are going to use the hook `useCurrentUser.ts`. Import it in out Sidebar and pass it in the main function. Because this hook checks if there's a user signed it, we are going to make a conditional rendering in the return section that will affect the LogOut button. If we are loggedin, the we show the logout button.

2. Also, we are going pass the `signOut()` function to the sign out button. Import it from next-auth/react.

3. Go to `SidebarItem.tsx` and to the first div in the return section, add the `onClick` property and pass a new function. Then create this function above. Import the router. Finish the function. Now if you logout on our UI it will work!!

4. We can see the password we type in, so we're going to add `type="password"` to our password input.

### Enable login modal

1. Go to `components/modals/LoginModal.tsx`. And we are going to add the missing part in the main function and the toast notifications. now if we log in with the same credentials we did before, it should work =) .

2. We can see the password we type in, so we're going to add `type="password"` to our password input.

### Hide/Show/protect -Notifications, profile buttons when were are not logged in.

1. Go to `sidebarItem.tsx` and we are going to add another parameter to the interface, this param will be `auth?: boolean`. Exctract it in props.

2. We are going to check if the router is protected. For that we're going to use our currentUser. So, import "useCurrentUser" from the hook we created. Then add a costant in the main function. THe we're going to do some changes to the "handleClick" so it all works.

3. Go to `Sidebar.tsx` and add the `auth` property to `notifications` and `Profile` in the `items` array. THen we need to pass that in the return section: add `auth={item.auth}` to the `<SidebarItem>` component.
