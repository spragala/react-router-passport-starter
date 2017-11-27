# React Starter Code
When I was an instructional assistant at a coding bootcamp in San Francisco I had several students that wanted to do their final projects in React but struggled with getting Auth to work with their apps. It inspired me to make some starter code that would work for small projects like the ones my students were making.


Built using the MERN stack and features:
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-router v4](https://reacttraining.com/react-router/)
* [passportjs](http://www.passportjs.org)
* [express-session](https://ewiggin.gitbooks.io/expressjs-middleware/content/express-session.html)
* [express-validator](https://github.com/ctavan/express-validator)
* [Bulma CSS Framework](https://bulma.io/documentation/overview/start/)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [Axios](https://github.com/axios/axios)

# Getting started
Once you've cloned the repo, `cd` into the main directory and `yarn install`.<br />
`cd backend/` and `yarn install` <br />
`cd frontend/` and `yarn install` <br />

In a new terminal window run `mongod` to start the MongoDb system <br />

In the main directory run `npm start`. [Concurrently](https://www.npmjs.com/package/concurrently) will start both the client and backend servers simultaneously.

><em>Note that while concurrently works well in development to help with CORS errors it is not recommended to use in a production environment.</em>

The app is not going to look very pretty at this point. Find the `bulma/` directory in `node_modules` (in the `frontend` directory) and copy and paste the `bulma.css` file into the `public` directory.

Now you're ready to go.

The app should look like this:
<kbd>
  <img width="1024" alt="screen shot 2017-11-27 at 9 50 04 am" src="https://user-images.githubusercontent.com/28071777/33281039-bce8df56-d358-11e7-8929-4ae240dee5e2.png" width="450" style="border: 1px solid black"/>
</kbd>

Happy coding! :computer:
