## Comments to tweets

1. Go to `pages/api` folder and create a new file called `comment.ts`. Write all the body of this file.

2. Go to `components/Form.tsx`. Rewrite the URL in the onSubmit function so it has 2 optiones depending if we're tweeting or replying to a tweet.

-   If you try now commenting a tweet, if should work. However, you may not see it under the main tweet. We are going to work on that.

### Make the reply to a tweet appear on the tweet individual page

1. Let's create a new component called `<CommentedFeed>`. Go to `components/posts` folder and create a new file called `CommentedFeed.tsx`. Give it the basic structure. To write this file, we will need another new component called `<CommentedItem>`.

2. Create `CommentedItem.tsx` in the same folder as the other component, and give it the basic structure to start.

3. Go to `pages/posts/[postId].tsx` and add the `CommentedFeed` component we just created. Pass the comments props.

4. To make replys to tweets appear in real time, go to `components/users/Form.tsx` and the mutated posts for comments in the constant declaration sectiond and in the onSubmit function as well.

-   You should be able to see the replies to a tweet.
