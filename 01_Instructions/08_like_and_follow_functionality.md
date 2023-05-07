## Like and follow functionality

1. Go to `pages/api/` folder and create a new file `follow.ts`. Type the necessary functions to handle when start following someone and then stop following that user.

2. Now we need a hook for this. So, go to `hooks` folder and create a new file called `useFollow.ts`. Write the file and make sure to export it at the bottom.

3. Go to `components/user/UserBio.tsx`. Create the constant for the hook we just created, import it and pass the function to the button in the return section.

### Tweet / post individual page: let's create a router for that

1. Go to `pages/api/posts` folder and create a new file called `[postId].ts`. Write the router.

2. Now let's create a hook for our router. In `hooks` folder, create a file called `usePost.ts` (post in SINGULAR).

3. Go to `pages` folder and create a new folder called `posts`. Inside create a new file called `[postId].tsx`. This is will be individual page of each post. Set up the basic structure but name the main function and all the exports to something else. Save. Now if you click on a tweet it should show you a page with the returning of that file. Style this page to return what we want. This will show our individual tweet on a separate page.

#### Like functionality

1. Go to `pages/api` folder and create a new file called `like.ts`. Write this file, this API will deal with "when you like a tweet or when you unlike a tweet".

2. Let's create now the hook for the file we created before. Go to `hooks` folder and create a file called `useLike.ts`. Write this file.

-   Side note: the hooks describe what we will do for the frontend, communicating maybe through axios sending stuff to the back end. The other files on PAGES/API with the extension of .ts, are the backend actions. MOre or less.

3. Go to `components/posts/PostItem.tsx` and add the `LIKE` hook we created.
