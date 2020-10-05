import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyC1gUQuFh22XD7eAwgm4GMPuwd57GjxSYU',
    authDomain: 'wai-netflix.firebaseapp.com',
    databaseURL: 'https://wai-netflix.firebaseio.com',
    projectId: 'wai-netflix',
    storageBucket: 'wai-netflix.appspot.com',
    messagingSenderId: '589140546445',
    appId: '1:589140546445:web:d23bfc5061c2e7452a23c4',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
