const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("@firebase/app");
require("@firebase/firestore");

admin.initializeApp();
const firestore = admin.firestore();

exports.isEmailTaken = functions.https.onCall((data, context) => {
  const result = admin
    .auth()
    .getUserByEmail(data.email)
    .then(result => result.email)
    .catch(error => console.error(error));
  return result;
});

const removeSensitiveData = company => {
  const newCompany = Object.assign({}, company);
  delete newCompany.password;
  delete newCompany.confirmPassword;
  return newCompany;
};

const createCompany = (userUUID, company) => {
  const newCompany = Object.assign({}, removeSensitiveData(company), {
    userId: userUUID
  });
  return firestore
    .collection("companies")
    .doc(userUUID)
    .set(newCompany);
};

exports.registerUser = functions.https.onCall((data, context) => {
  const { email, password } = data.user;
  const result = admin
    .auth()
    .createUser({
      email: email,
      emailVerified: true,
      password: password,
      disabled: false
    })
    .then(result => createCompany(result.uid, data.user))
    .catch(error => console.error(error));
  return result;
});
