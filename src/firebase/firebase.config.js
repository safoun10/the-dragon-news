import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCz6vDiynVZEkhdx2EV7EpFFGK_sHE8lF8",
    authDomain: "the-dragon-news-by-safoun.firebaseapp.com",
    projectId: "the-dragon-news-by-safoun",
    storageBucket: "the-dragon-news-by-safoun.appspot.com",
    messagingSenderId: "412298662226",
    appId: "1:412298662226:web:4172c1e0693367675e6a8b"
};

const app = initializeApp(firebaseConfig);

export default app;