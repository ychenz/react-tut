## React Tutorial Repo for Youtube Channel: Program the web with Yuchen

Suggested usage: Please fork the repo and keep it as you own. Then checkout the `base-template` branch to start coding.

Happy coding! 😄

### TUT 1 (React Navigation):

Branch name for the final version: `tut-1-navbar_slider`

Please run `git checkout tut-1-navbar_slider` in the terminal after cloning the repo.

### TUT 2

Coming soon🍩


## API calls using Redux middleware

Create a action function like the following:

```
export function testApi() {
  return {
    [RSAA]: {
      endpoint: "/api/test",
      method: 'GET',
      types: [REQUEST, RECEIVE, FAILURE]
    }
  }
}
```

Where [REQUEST, RECEIVE, FAILURE] is action type defined to be captured in the reducer. In order, these action types (REQUEST, RECEIVE, FAILURE) are dispatched when: before the request is sent, after successful response and after error response. This API call uses {apiMiddleware} from 'redux-api-middleware' package.

More details please see [redux-api-middleware documentation](https://www.npmjs.com/package/redux-api-middleware).

Assume API runs on localhost port 3001, To change port, please change "proxy" line in package.json file.

## Other tips and trick

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Use npm in China
$ npm config set registry http://r.cnpmjs.org
$ npm install **

### kill task in Windows cygwin
$ netstat -a -b -o|grep 3000
$ taskkill /F /PID 7936

### Available Scripts (createreactapp commands to be run in terminal)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
