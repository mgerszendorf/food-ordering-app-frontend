import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMFl9_eA__OqDFwSH_QKwQbOtVc8015CE",
  authDomain: "food-ordering-app-befb0.firebaseapp.com",
  projectId: "food-ordering-app-befb0",
  storageBucket: "food-ordering-app-befb0.appspot.com",
  messagingSenderId: "10703682082",
  appId: "1:10703682082:web:ecaf10c4a491e8aefca87b",
  measurementId: "G-HY0XNVPNB7",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
