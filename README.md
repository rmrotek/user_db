A simple APP with a mock server to fetch data from. My 1st try at TypeScript and redux-thunk.

Theres a backup db.json in `/backup`

### Features:
- fetch data from API, store data in redux store,
- option to manually re-fetch data,
- add user to database option,
- view user profile,
- edit users data,
- delete a user,
- store receives new data from API after every action

### Tech: 
- React,
- Redux,
- TypeScript, 
- Formik,
- Material-UI,
- JSON server 

## Available Scripts

In the project directory, you can run:

### `npm install`

Obviously... 

### `npm run db`

Will run the mock JSON server on [http://localhost:3001/](http://localhost:3001/).
Need to be running to fetch data into the App.

[Documentation](https://github.com/typicode/json-server) for JSON server.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).