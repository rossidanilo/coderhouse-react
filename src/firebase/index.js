import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBH2DvDsxBl_VKv8W0RCxwXTSCqlNwKXmM",
    authDomain: "coderhouse-ecommerce-drossi.firebaseapp.com",
    databaseURL: "https://coderhouse-ecommerce-drossi.firebaseio.com",
    projectId: "coderhouse-ecommerce-drossi",
    storageBucket: "coderhouse-ecommerce-drossi.appspot.com",
    messagingSenderId: "291347413263",
    appId: "1:291347413263:web:ddee20aafb04e0130ba67a"
  });

export function getFirebase(){
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}