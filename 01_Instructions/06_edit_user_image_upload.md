## Under construction

## 👷‍♂️🏗️🚧⚠️

## Edit user, Image upload

### Edit Modal

1. In `pages/api` folder, create a new file called `edit.ts`. We are going to create the route for Edit / update / patch.

2. Go to `hooks` folder and create a new hook for our editing function called `useEditModal.ts`. Fill it in with the stuff needed.

3. Go to `components/users/UserBio.tsx` and import the `useEditModal` as a constant. Also change the empty arrow function of the button in the return section for `editModal.onOpen`.

4. Go to `components/modals` and create the new modal `EditModal.tsx`.

5. For it work, you have to go to `_app.tsx` and add the `<EditModal/>` component under Toaster and REgister Modal.

6. Fill the modal in and style it.

### Edit button

:::::::::::::::::::::::::::::::::::

me quedé en: 2 h - 25 min - 36 s

:::::::::::::::::::::::::::::::::::
