type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {  
    apiKey: "AIzaSyCb31BhpqDRPK9JmwXrMvdEJbIVwtZ3khI",
    authDomain: "ono-project-1.firebaseapp.com",
    projectId: "ono-project-1",
    storageBucket: "ono-project-1.appspot.com",
    messagingSenderId: "320329753462",
    appId: "1:320329753462:web:16686d6a31ae7ae9fd1057"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  
