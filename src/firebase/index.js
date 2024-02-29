// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const vapidKey = "BFxwWe_Xoi8I8nnrLri6m6rxBZDyzk75b-Dboow8hHDeVrg_9aNMNAy_Wn7yHIdTgny3HDQ85HUMT3o7sDeyxvI"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDye0FGKLgGInITg3JUFM3PZlc_wa1TDPg",
    authDomain: "xd-shop.firebaseapp.com",
    projectId: "xd-shop",
    storageBucket: "xd-shop.appspot.com",
    messagingSenderId: "227384463372",
    appId: "1:227384463372:web:be65edb1651b0b08835e29"
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const messaging = getMessaging();

//const currentToken = "cD3v584viUa2YD-7U-Ddae:APA91bFUZsLKWu5r8IO_pcCgin3tEmCvd3OQHna3d5QRLq6OQ66jHJ8ou5LkkEXWaSGFytR5_hmydQOKnYovypqXtZuujhR6n08aZWlnLUm2PoDZnI5MtZqZY_uAaxDKBJwqMbzNn3b2"

getToken(messaging, { vapidKey })
    .then(currentToken => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            sendTokenToServer(currentToken)
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });

const sendTokenToServer = token => {
    if (localStorage.getItem("tokenSent")) return
    //enviar al backend
    localStorage.setItem("tokenSent",'1')
}