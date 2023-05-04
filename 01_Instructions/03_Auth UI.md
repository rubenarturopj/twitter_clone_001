## Authentication UI

### Create button component

1. Go to `components` folder and create a new file called `Button.tsx`.

2. Create interface, and style the button.

-   We are going to use this button in our modal

### Create Modal component

1. Create the `Modal.tsx` in `components` folder and give it the basic structure.

2. Go to `_app.tsx`. Put the return in fragments. Above the layout we are going to type in the `<Modal>` component. Import it. Add the prop `isOpen` so we can see it while editing.

3. Fill in and style `Modal.tsx` file.

4. Once completely styled. Delete the modal from `_app.tsx`. and the import.

### Input component

1. in the `component` folder, create a new file called `Input.tsx`. Give it the basic structure. Create an interface and style the return.

### Login Modal

1. Install the following package. We will use Zustand as a light way for global state management.

```sh
npm install zustand
```

2. Create a new folder in your project called: `hooks`. Inside create a file called `useLoginModal.ts`. Fill that file in.

3. Inside the `components` folder. Create new folder called `modals`. Inside, create a file called `LoginModal.tsx`. Give it the basic structure so we can use right away.

4. Go back to `_app.tsx` file and we are gonna place it where we had first put the Modal import before and we deleted it.

5. on `LoginModal.tsx` we are going to trigger the controles four our loggin modal. Fill this file in. Now we have our log in modal. We cannot see it because it's not activate, but if you go to `useLoginModal.ts` and change isOpen to true, there you will be able to see it.

6. Now let's create another modal. Go into `hpoks` folder and creat the new file called `useRegisterModal.ts` and fill it in exactly the same as `useLoginModal.ts`. You can even copy the file and paste it, but changing the main names.

7. Now go to `components/modals` folder and create a new file called `RegisterModal.tsx`. You can also copy the `LoginMoodal.tsx` paste in the same folder and change some stuff in it.

8. Once it's done. Let's go to `_app.tsx` and import it there. To see this modal displaying on the UI. We need to go to `useRegisterModal.ts` and change `isOpen` to `true`. But by default it should be false. Make sure they're both false.

9. in `RegisterModal.tsx`, below bodyContent create another constant for `footerContent`. Style it. Now that this is done. We are going to copy the Toggle function to `LoginModal.tsx`.

### Click button opens a modal

1. Go to `SidebarTweetButton.tsx`. Create the function `onClick` and pass it to the first DIV in the return section. This way we can try that every time you click on TWEET, the modal for loggin in should open. This is only temporary.
