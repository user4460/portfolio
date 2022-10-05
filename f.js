import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//next.jsでfirebaseを使うための設定,NEXT_PUBLIC_は環境変数
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

//initializeApp()でfirebaseの初期化
const app = initializeApp(firebaseConfig);

//getAuth()でfirebaseの認証機能を使えるようにする
export const auth = getAuth(app);

//dbでfirestoreの設定
export const db = firebase.firestore()
