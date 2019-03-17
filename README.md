# Skyrocket (previously AKAI Jobs)

Board with job and internship advertisements for students.

## Development

Install dependencies

```
npm install
```

Provide secret enviroment variables in `.env.development`:

```
REACT_APP_FIREBASE_API_KEY='example'
REACT_APP_FIREBASE_AUTH_DOMAIN='example'
REACT_APP_FIREBASE_DATABASE_URL='example'
REACT_APP_FIREBASE_PROJECT_ID='example'
REACT_APP_FIREBASE_STORAGE_BUCKET='example'
REACT_APP_FIREBASE_MESSAGING_SENDER_ID='example'
```

Instead of example use real Firebase credentials. If you don't have one, check **Add Firebase to your app** section from [this tutorial](https://firebase.google.com/docs/web/setup).

Then start development server:

```
npm start
```

Application will be avaiable on `http://localhost:3000`

## Deployment

To deploy, create TravisCI job and provide required secret enviroment variables in admin panel.

```
REACT_APP_FIREBASE_API_KEY='example'
REACT_APP_FIREBASE_AUTH_DOMAIN='example'
REACT_APP_FIREBASE_DATABASE_URL='example'
REACT_APP_FIREBASE_PROJECT_ID='example'
REACT_APP_FIREBASE_STORAGE_BUCKET='example'
REACT_APP_FIREBASE_MESSAGING_SENDER_ID='example'
```

Instead of example use real Firebase credentials. If you don't have one, check **Add Firebase to your app** section from [this tutorial](https://firebase.google.com/docs/web/setup).

Choose branch for deployment in travis.yml file.

Travis will automaticly deploy app on Firebase hosting.

## Contributors

- Tomasz Gil
- Rafał Rudol
- Mateusz Stempniewicz
