## Layout

1. In you project folder, create a new folder called `Component`. Inside, create a file called `Layout.tsx`. Give it the basic structure, create an interface, pass the props. Style the return section.

2. Go to `_app.tsx` and, in the return section, wrap the `<Component>` with the `<Layout>` component we just created. Don't forget to import it.

3. Go back to `Layout.tsx` and keep stlying, add the new components `<Sidebar>` and `<FollowBar>`.

4. In the `components` folder, create another folder called `layout`. Inside, create a new file called `Sidebar.tsx` and `FollorBar.tsx` ----> `components/layout/Sidebar.tsx

5. Install React-icons.

```sh
npm install react-icons
```

6. Style `Sidebar.tsx`. You will need 2 new components `SidebarItem`, `SidebarLogo` and `SidebarTweetButton`. Create these 3 files in the same `components/layour` folder. Import them in `Sidebar.tsx`.

7. Fill in and style this 3 files.

8. Go back to `Layout.tsx` and add the component `<FollowBar>`. This doesn't exist yet.

9. Create `FollowBar.tsx` in `components/layout` folder. Style it. We cannot display the users because we dont have any and we havent settup the database yet.

10. Changing the central column. Go to `pages/index.tsx`. Edit the return section. We need 3 new components: `<Header>`, `<Form>` and `Postfeed>`.

11. Create the files `Header.tsx` and `Form.tsx` in the components folder. For `Postfeed.tsx`, create a new folder called `posts` inside the `component` folder and inside create our file. --> path: `components/posts/Postfeed.tsx`.

12. Style `Header.tsx`
