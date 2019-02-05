import { useState, useEffect } from "react";

const useAuthUser = (user, firebase) => {
  const [authUser, setAuthUser] = useState(user);
  useEffect(() => {
    const authUserListener = firebase.auth.onAuthStateChanged(
      authenticatedUser =>
        authenticatedUser ? setAuthUser(authenticatedUser) : setAuthUser(null)
    );

    return () => authUserListener();
  }, []);

  return authUser;
};

export default useAuthUser;
