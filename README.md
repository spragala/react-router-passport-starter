# React Starter Code
When I was an instructional assistant at a coding bootcamp in San Francisco I had several students that wanted to do their final projects in React but struggled with getting Auth to work with their apps. It inspired me to make some starter code that would work for small projects like the ones my students were making.

Built using the MERN stack and features:
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [react-router v4](https://reacttraining.com/react-router/)
* [Passportjs](http://www.passportjs.org)
* [express-session](https://ewiggin.gitbooks.io/expressjs-middleware/content/express-session.html)
* [express-validator](https://github.com/ctavan/express-validator)
* [Bulma CSS Framework](https://bulma.io/documentation/overview/start/)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [Axios](https://github.com/axios/axios)

## Getting started
Once you've cloned the repo, `cd` into the main directory and `yarn install`.

```
cd backend/
yarn install

cd frontend/
yarn install
```

In a new terminal window run `mongod` to start the MongoDb system <br />

In the main directory run `npm start`. Concurrently will start both the client and backend servers simultaneously.

><em>Note that while concurrently works well in development to help with CORS errors it is not recommended to use in a production environment.</em>

Create React App should launch http://localhost:3000/ automatically and you'll see the app does not look very pretty at this point. Find the `bulma/` directory in `frontend/node_modules/` and copy and paste the `bulma.css` file into the `frontend/public/`.

The backend server should be running on http://localhost:8080/ <br />
In addition to the user endpoints, the following endpoints are included for demonstration:

```
/api/posts
/api/posts/:id
/api/posts/post_id
```


If everything is working the app should look like this:

<kbd>
  <img width="1024" alt="screen shot 2017-11-27 at 9 50 04 am" src="https://user-images.githubusercontent.com/28071777/33281039-bce8df56-d358-11e7-8929-4ae240dee5e2.png" width="450" />
</kbd>

<br />

<kbd>
  <img width="1024" alt="screen shot 2017-11-27 at 11 42 15 am" src="https://user-images.githubusercontent.com/28071777/33285787-2e225e68-d368-11e7-93e8-79fbec5ab478.png" width="450" />
</kbd>

<br />

You're all set, Happy coding! :computer:
