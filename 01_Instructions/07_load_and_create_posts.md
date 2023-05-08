### Fix the PROFILE button on the left sidebar so it redirects to our profile page.

1. Go to `components/layout/Sidebar.tsx`, find the Profile button in the array with the buttons and edit the `href`. ---> `href: "/users/${currentUser?.id}"`.

## Create POSTS as in Tweets (Twitter posts) & Hooks which will load the API routes.

1. Create a folder called `posts` in `pages/api/`. Inside create a new file called `index.ts`. Write the content of this file. Here we are going to create the actions for tweeting / creating a post, fetching the tweets/posts from the loggedin user to display in profile, and all the tweets from other users to display in FEED.

2. We need the hook for this. Go to `hooks` folder and create a new file called `usePosts.ts` (post in PLURAL). Write the content of this file.

3. Go to `components` folder and crate a new file called `Form.tsx`. Give it the basic structure. In this file we will have the form to create a new tweet (to make a post publicacion) and the functions what will take care of this. Also style the return section for the form.

4. Go to `pages/index.tsx` and below the `<Header/>` component, add the `<Form/>` component and pass it a placeholder of What's happening?.

-   At this point, if you try to make a tweet it should work. It should be stored succesfully in the database.

## Make our own tweets visible in our profile page. Create post feed.

1. In the folder `components` crate a new folder called `posts`. Inside create a new file called `PostFeed.tsx`. Give it the basic structure.

2. Go to `pages/index.tsx` and below the `<Form/>` component, add our recently created `<PostFeed/>` component.

3. We are going to start writing the POstfeed component. But we'll need another component called `<PostItem>`. Create this .tsx file in the same folder as Postfeed. Create the functions to redirect to the user profile when clickng on the picture and also to go the tweet page. We are passing the data from the tweet through postfeed.tsx. We're also adding the comments and like icons and somwhat their functionalities.

### Display our tweets in our profile page

1. Go to `pages/users/[userId].tsx` and in the return section add the `PostFeed` component and pass it he props of userId.

## More users

1. To test at more capacity the website. Log out and create more users and tweet.

List
rxxxxxxx.axxxxxxx@ ---> password1
Lara Croft perrito@ ---> password2
Leon S Kennedy churro@ ---> password3
Hermione pozol@ ---> password4
Cabeza Olmeca orejademico@ ---> password5
