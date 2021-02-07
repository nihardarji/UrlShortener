## Available Scripts

In the project directory, you can run:

### `npm install && npm install --prefix frontend`

To install all the dependencies in both frontend and backend

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries used(Backend)

1. express
2. config
3. mongoose
4. nanoid - to generate unique id of 8 character

## Libraries used(Frontend)

1. react
2. material-ui
3. axios

## Limitations

1. nanoid is used for generating unique ids for urls, which has some rare chance of generating duplicate ids.(Though the chances are extremely rare)

## Assumptions

1. original url with its corresponding shortened url is stored in database
2. nanoid is used for generating unique ids for shortened url generation


