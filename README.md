## Under construction

## 👷‍♂️🏗️🚧⚠️

# Build your own Twitter clone

### Technologies used

Language

-   Typescript

Frontend

-   React
-   Tailwind CSS (_npm install -D tailwindcss postcss autoprefixer_, _npx tailwindcss init -p_)
-   React-icons (_npm install react-icons_)
-   Zustand: global state management (_npm install zustand_)
-   SWR (stale-while-revalidate): a React Hooks library for data fetching.
-   React Hot Toast: notifications (_npm install react-hot-toast_)
-   React-spinners: visual loader animations (_npm install react-spinners_)
-   React-dropzone: enable drag and drop files (_npm install react-dropzone_)

Backend: Server side and Routing

-   Next.js
-   Axios (_npm install axios_)

Data management

-   Prisma (_npm install -D prisma_, _npx prisma init_)

Database

-   MongoDB

Authetication

-   Auth.js --> But "@next-auth/prisma-adapter" 2023, which is the official primsa adapter for Auth.js / NextAuth.js. (Serves to loggin using several social media profiles/accounts like github, google, facebook, etc.) (npm install next-auth @next-auth/prisma-adapter)
-   Bcrypt. A library that helps hash passwords (this means Encrypt passwords changing them into a completely different string made of different characters) (npm install bcrypt). For its types: (npm install -D @types/bcrypt)

Data and Time manipulation (front and back)

-   date-fns: toolset for manipulating JavaScript dates in a browser & Node.js. (_npm install date-fns_)

### Features

-   Authentication system
-   Notification system
-   Image Upload using Base64 strings
-   Prisma ORM with MongoDB
-   Responsive Layout
-   1 To Many Relations (User - Post)
-   Many To Many Relations (Post - Comment)
-   Following functionality
-   Comments / Replies
-   Likes functionality
-   Vercel Deployment

## Instructions to build your Twitter clone from scratch

1. [Environment setup](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/01_Environment_setup.md)
2. [Layout](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/02_Layout.md)
3. [Auth UI](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/03_Auth%20UI.md)
4. [Prisma, Mongo, NextAuth](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/04_Prisma_mongo_nextauth.md)
5. [Users and Individual User Profile](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/05_users_and_individual_profile.md)
6. [Edit User, Image Upload](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/06_edit_user_image_upload.md)
7. [Load and Create Posts](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/07_load_and_create_posts.md)
8. [Like and Follow Functionality](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/08_like_and_follow_functionality.md)
9. [Comments](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/09_comments.md)
10. [Notifications](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/10_notifications.md)
11. [Vercel Deployment](https://github.com/rubenarturopj/twitter_clone_001/blob/main/01_Instructions/11_vercel_deployment.md)

### BUGS FIXES part 1

You may encounter some bugs during the EDIT/FOLLOW functionality, throwing "Not Signed In" error. This happens because Next and NextAuth have been updated to a newer version. But there is a simple fix to this problem:

1. Your `[...nextauth].ts` file should export `authOptions` separately (change the function declaration and the export at the bottom).
2. Your `serverAuth.ts` file should use `getServerSession(req, res, authOptions)` instead of `getSession({req})`. (Deal with the imports as well)
3. Modify `serverAuth(req)` to `serverAuth(req, res)` everytwhere in your code.
4. Logout, shutdown the app, login again, everything should work.

### More BUGS FIXES part 2

You may find errors in unfollowing / unliking a tweet functionalities. This is happening wherever the DELETE method is called, the reason has something to do with how axios treats the requests. These are the lines of code to re-write:

-   in like.ts

```sh
const postId = req.method === "POST" ? req.body.postId : req.query.postId;
```

-   in useLike.ts

```sh
request = () => axios.delete("/api/like", { params: { postId } });
```

-   in follow.ts

```sh
const userId = req.method === "POST" ? req.body.userId : req.query.userId;
```

-   in useFollow.ts

```sh
axios.delete("/api/follow", { params: { userId } });
```

### BUG FIX 3

Bug FIX 3

Users can follow only one other user. If they try to follow another person, they lose the one they had before.

Antonio's file "Follow.ts"
Line 30

```sh
let updatedFollowingIds = [...(user.followingIds || [])];
```

CoderAtH0me's file "Follow.ts"
Line 33

```sh
let updatedFollowingIds = [...(currentUser.followingIds || [])];
```

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/twitter-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Credits

[Code with Antonio](https://youtu.be/ytkG7RT6SvU)
