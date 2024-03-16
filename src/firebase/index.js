/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDye0FGKLgGInITg3JUFM3PZlc_wa1TDPg",
    authDomain: "xd-shop.firebaseapp.com",
    projectId: "xd-shop",
    storageBucket: "xd-shop.appspot.com",
    messagingSenderId: "227384463372",
    appId: "1:227384463372:web:be65edb1651b0b08835e29"
};

const devFirebaseConfig = {
    apiKey: "AIzaSyCkx9QuueaKiGA_xOX6FuCC6etkQE5KbNo",
    authDomain: "xd-shop-dev.firebaseapp.com",
    projectId: "xd-shop-dev",
    storageBucket: "xd-shop-dev.appspot.com",
    messagingSenderId: "274601706212",
    appId: "1:274601706212:web:c59af540e118f022f6e2f1"
  };
// Initialize Firebase
let firebaseApp;
if(process.env.NODE_ENV === 'development'){
    firebaseApp = initializeApp(devFirebaseConfig);
}else{
    firebaseApp = initializeApp(firebaseConfig);
}

const vapidKeyProd = "BFxwWe_Xoi8I8nnrLri6m6rxBZDyzk75b-Dboow8hHDeVrg_9aNMNAy_Wn7yHIdTgny3HDQ85HUMT3o7sDeyxvI"
const vapidKeyDev = "BLu-GN6PgxJnkXnIEqCu5xk-QrbTgBJLL1OpI0T1lHWGWkeFCD2YmBDfKbH11Y0V5uzFVQlb8Fsz4R4J9ttFlX8"

const db = getFirestore(firebaseApp);
export const messaging = getMessaging();

export {
    firebaseApp,
    db
 }
 
//const currentToken = "cD3v584viUa2YD-7U-Ddae:APA91bFUZsLKWu5r8IO_pcCgin3tEmCvd3OQHna3d5QRLq6OQ66jHJ8ou5LkkEXWaSGFytR5_hmydQOKnYovypqXtZuujhR6n08aZWlnLUm2PoDZnI5MtZqZY_uAaxDKBJwqMbzNn3b2"

getToken(messaging, { vapidKey: process.env.NODE_ENV === "production" ? vapidKeyProd : vapidKeyDev })
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

// eslint-disable-next-line no-unused-vars
const sendTokenToServer = token => {
    if (localStorage.getItem("tokenSent")) return
    //enviar al backend
    localStorage.setItem("tokenSent",'1')
}