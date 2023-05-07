## Under construction

## 👷‍♂️🏗️🚧⚠️

### Fix the PROFILE button on the left sidebar so it redirects to our profile page.

1. Go to `components/layout/Sidebar.tsx`, find the Profile button in the array with the buttons and edit the `href`. ---> `href: "/users/${currentUser?.id}"`.

## Create POSTS as in Tweets (Twitter posts) & Hooks which will load the API routes.

1. Create a folder called `posts` in `pages/api/`. Inside create a new file called `index.ts`. Write the content of this file. Here we are going to create the actions for tweeting / creating a post, fetching the tweets/posts from the loggedin user to display in profile, and all the tweets from other users to display in FEED.

2. We need the hook for this. Go to `hooks` folder and create a new file called `usePosts.ts` (post in PLURAL). Write the content of this file.

3. Go to `components` folder and crate a new file called `Form.tsx`. Give it the basic structure. In this file we will have the form to create a new tweet (to make a post publicacion) and the functions what will take care of this. Also style the return section for the form.

4. Go to `pages/index.tsx` and below the `<Header/>` component, add the `<Form/>` component and pass it a placeholder of What's happening?.

-   At this point, if you try to make a tweet it should work. It should be stored succesfully in the database.

## Make our own tweets visible in our profile page

1. Me quedé en: 3 h : 07 min : 10 s

### SOMEthing else that will be used later

In the folder `components` crate a new folder called `posts`. Inside create a new file called `PostFeed.tsx`. Give it the basic structure.

Go to `pages/index.tsx` and below the `<Form/>` component, add our recently created `<PostFeed/>` component
