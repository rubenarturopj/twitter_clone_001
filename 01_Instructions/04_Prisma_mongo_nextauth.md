## Prisma, mongo, nextauth

### Prisma

1. In the terminal, install:

```sh
npm install -D prisma
npx prisma init
```

You should see now a couple of new files:

-   1A `prisma` folder with a `schema.prisma` file inside
-   a new file called `.env` for environment

2. Go to `schema.prisma` and change the provider to `mongodb`

-   If you cannot see the `.env` file content in colors, if it's just plain text, then you need to install an extension called: `Prisma`. (prisma extension)

### MongoDB ATLAS

1. We need to get our database URL. Go to mongodb atlas. Sign in.

2. Create a new project > click on `Build a database` > Selec M0 FREE > Provider AWS > Leave Region as it is > Name: you can leave it like that or change it. > Click on `CREATE`.

3. Choose a username and a password. I'll go with admin/admin for this project. > Click on `create user`.

4. For environment, suggested: `Add my current IP address` or you can add manually: `0.0.0.0/0` if you want acces from everywhere. FOR PRODUCTION YOU WANT TO ALLOW ACCES FROM EVERYWHERE USING THE ZEROS COMBINATION. I will use both.

5. Finish and close.

6. In the dashboard of your new cluster, click on `Conect`. Then choose `Connect using VSCode`. It will give you the perfect line of code to connect to copy and paste into VSCODE. IN my case it's:

```sh
mongodb+srv://admin:<password>@cluster0.lh7zjpz.mongodb.net/
```

7. Copy the line of code, go back to VSCODE and into `.env` file, and paste instead of the value given by default of `DATABASE_URL`.

8. CHANGE THE PASSWORD FOR YOUR REAL PASSWORD. Delete the pointy brackets and the word password and type your password there. In my case it is:

```sh
mongodb+srv://admin:admin@cluster0.lh7zjpz.mongodb.net/
```

### Prisma again: data management

-   Tip: If you know with precision how you wanna manage your data, then it's better to create all of the modals now(all the tables in the database), then push the database, and not modify it / touch it ever again.

1. Go to `schema.prisma` file in the `Prisma` folder, and type in all the tables for the database.

2. Push the database schema through the terminal:

```sh
npx prisma db push
```

### Authentication, Loggin and Register controllers

1. Install Prisma Client:

```sh
npm install @prisma/client
```

:::::::::::::::::::::::::::::::::::::::::

Me quedé en el minuto: 1 h 18 min 10 s

:::::::::::::::::::::::::::::::::::::::::

### Write our modals

### Connect Authentication with our app
