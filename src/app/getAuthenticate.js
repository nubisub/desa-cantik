import { auth } from "./services/firebase";

export const getAuthenticate = () => {
  //   listen firebase auth
  auth.onAuthStateChanged((user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
};
