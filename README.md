# Genesys Boilerplate v2.x

Genesys Boilerplate is a minimal starting point for [Genesys 2](https://github.com/ngodn/genesys) projects.

To get started, we recommend taking a look at [our guide to creating your first project](#). You could also take a look at [Genesys's CLI](https://github.com/ngodn/genesys-cli) or simply fork this repository.

Once you have a local copy of this project to work from, make sure to install its dependencies with `npm install`. With Genesys installed, the first thing to do create an admin user account so you're able to log into the CMS. Run the following command (this will prompt you for a password).

```bash
node app.js apostrophe-users:add admin admin
```

Now you're all set! Just run `node app.js` to start up the local server and head to `localhost:3000` in your web browser.

---------------

For more documentation on Genesys, visit the [A2 documentation site](#).
