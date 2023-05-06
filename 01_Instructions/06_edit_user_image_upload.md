## Under construction

## 👷‍♂️🏗️🚧⚠️

## Edit user, Image upload

### "Edit" Modal and Button

1. In `pages/api` folder, create a new file called `edit.ts`. We are going to create the route for Edit / update / patch.

2. Go to `hooks` folder and create a new hook for our editing function called `useEditModal.ts`. Fill it in with the stuff needed.

3. Go to `components/users/UserBio.tsx` and import the `useEditModal` as a constant. Also change the empty arrow function of the button in the return section for `editModal.onOpen`.

4. Go to `components/modals` and create the new modal `EditModal.tsx`.

5. For it work, you have to go to `_app.tsx` and add the `<EditModal/>` component under Toaster and REgister Modal.

6. Fill the modal in and style it. For this Modal bodycontent, we are going to need 2 components that we already have created: `Input` and `Modal`; and one new component called `<ImageUpload>`.

-   after placing the inputs, you should be able to change the bio in your profile page. If it throws error, then you need to do the bug fix explained on the main read me file.

7. Create a new file called `ImageUpload.tsx` in `components` folder.

:::::::::::::::::::::::::::::::::::

me quedé en: 2 h - 38 min - 03 s

:::::::::::::::::::::::::::::::::::
