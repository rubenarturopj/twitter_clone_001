## Environment setup

### Create project

1. Create your project:

-   npx create-next-app --typescript
-   name your project

FOR THIS PROJECT >>>

-   ESLint - YES
-   src directory - no
-   app directory - no
-   import alias - press enter

2. Run your project

```sh
npm run dev
```

### Clean up workspace

1.  Delete `_document.tsx`.

2.  Go to `index.tsx`. Delete everything except the main function.

3.  Go to `api` folder and delete the `hello.ts` file in it.

4.  Fot to `styles` folder and delete `Home.module.css`. Then go into `global.css` and delete all its content but keep the file.

### Install Tailwind CSS

1. Run the following on the terminal:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

-   You should have 2 new files in your project now: `postcss.config.js` and `tailwind.config.js`.

2. Go to `tailwind.config.js` and in the content array add the following in content array:

```sh
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
```

3. In `global.css` add the following:

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    @apply h-full bg-black;
}

body {
    @apply h-full bg-black;
}
```
