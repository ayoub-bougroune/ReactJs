import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAP_Ran0zickSzadGnJXTmkGRScZuoNcOU",
  authDomain: "parkingfinder-6321f.firebaseapp.com",
  databaseURL: "https://parkingfinder-6321f-default-rtdb.firebaseio.com",
  projectId: "parkingfinder-6321f",
  storageBucket: "parkingfinder-6321f.appspot.com",
  messagingSenderId: "955958422328",
  appId: "1:955958422328:web:10a29d2f94058cc7e2afcd"
})

export const auth = app.auth()
export const firestore = app.firestore()
export default app
