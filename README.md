# printerapi
Contactless Order, Pay and Printing for Digital Printing Studios &amp; Shops

## Creating a new react.js project

```
npx/npm create-react-app my-app
cd my-app
npm start
```

And then for scss management:

```
npm install node-sass
```
For page routing
```
npm install react-router-dom
```

## Organization and Structure

Within the src folder please create the following folders:

1. components (place your reusable code here)
2. images (.svg, .jpg, or storage .ai files)
3. pages (index.js shall house your router)
4. style (contains .scss files, index.scss shall be the main stylesheet)

Remove the following default files:

1. serviceWorker (remove line 5 on the index.js file aka the service worker import, and line 12's service worker .register())
2. setupTests
3. logo.svg (remove the import on the App.js file, and the html reference in the render <img> tag)
4. App.test.js

Now for some renaming, this repo follows a lowercase-lowercase naming convention. Folder files with two works shall be conjoined with a hyphen, -. .JS files with two works shall follow a lowercaseUppercase.js naming system. Rename the following default files:

1. App.css to app.css (also move to an index.scss file in the style folder)
2. App.js to app.js

Move into one file (index.css and app.css into styles > index.scss)

## Installing

This project uses the node and npm ecosystem to build the tool. Before running or installing the
project please download and run [node](https://nodejs.org/en/download/). You will then clone the
following repository to your personal computer and run it through your code editor's terminal.

```
npm install
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
