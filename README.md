# Cinematch (A SWEN-444 Project)

## WHATS NOT WORKING:
- Sign in: When you sign in no matter what you put in you'll always be our preset 'admin' user. When you sign up, you'll also still be set as 
that 'admin' user although your account will be stored. We couldn't implement a feature to where the app keeps track of who's signed in.
<br/>
- Guest: When you go to sign in as a guest and enter any code you'll just be brought to the screen of viewing movies like a normal user. This 
feature of viewing movies in real time with another logged in user we found difficult so we hadn't yet implemented that.
<br/>
- Movies: There's only about 7 movies in the system. We didn't have time to figure out a full API to grab the data so we just preset some movie data.
<br/>
- Friends: We didn't have time to implement a button to add friends, you just have to look at the one we had preset.
<br/>
*Along with all this some of the actions you do won't show up in other parts (if you like a movie it won't show up in your lists). There is a bunch of preset data however so you could get a view of what it would look like if you had done some of these actions.


## Setup:
Install Node.JS and import the proper packages needed to run with npm. Then use a command like 'npm start' to run the application.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
