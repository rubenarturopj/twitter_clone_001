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
-   React Hot Toast: notifications (npm install react-hot-toast)

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
