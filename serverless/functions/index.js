const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.blockUser = functions.auth.user().onCreate(user => {
  admin
    .auth()
    .updateUser(user.uid, { disabled: true })
    .then(userRecord => userRecord)
    .catch(error => {
      throw new Error(
        `Blokowanie użytkownika email: ${user.email}, uid: ${
          user.uid
        } niepowiodło się. ${error.message}`
      );
    });
});

exports.isEmailTaken = functions.https.onCall((data, context) => {
  console.log(data);
  const result = admin
    .auth()
    .getUserByEmail(data.email)
    .then(result => result.email)
    .catch(error => null);
  console.log(result);
  return result;
});
