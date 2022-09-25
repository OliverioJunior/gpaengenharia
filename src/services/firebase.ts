// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCk7FD82Qi-5Otl-Sb0ERo6o7ZIqgNfsnU',
  authDomain: 'gpaengenharia-87185.firebaseapp.com',
  projectId: 'gpaengenharia-87185',
  storageBucket: 'gpaengenharia-87185.appspot.com',
  messagingSenderId: '522136012387',
  appId: '1:522136012387:web:3410f8fbb302193c625a56',
  measurementId: 'G-SH2MEBGRPN',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
