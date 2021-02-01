import firebase,{ analytics, firestore, collection, add } from 'firebase'

const  firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURE_ID
  }

  try{
        !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  }catch(err){
      
      if(!/already_exists/.test(err.message)){
          console.log('Firebase initialization error', err.stack)
      }

  }

const fire = firebase

export default fire
