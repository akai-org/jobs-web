import { auth } from "../firebase/firebase";

const registerUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(response => console.info(response));
};

const login = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(response => console.info(response));
};

const logout = () => {
  auth
    .signOut()
    .then(() => console.log("Sign Out"))
    .catch(error => console.error(error));
};

const createCompanyDetails = () => {
  // TODO: create company in database after successfull register user
};

const checkCompanyStatus = () => {
  // TODO: after login we need to check if company status is ACTIVE and the
};

export {
  registerUser,
  login,
  logout,
  createCompanyDetails,
  checkCompanyStatus
};
