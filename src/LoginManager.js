import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,updateDoc,getDoc,setDoc,doc,getDocs} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCUzIoZdwjBu75OQ_Qvs_jbsiq0zGKWTd4",
    authDomain: "findfind-89d1a.firebaseapp.com",
    projectId: "findfind-89d1a",
    storageBucket: "findfind-89d1a.appspot.com",
    messagingSenderId: "705771427266",
    appId: "1:705771427266:web:912c861dd2ceaf7030f25b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

function loginUser(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then(()=>console.log(getAuth()))
    .catch((error) => {
        console.log(error)
    });
}

function addUser(uid,playerName){
    return addDoc(collection(db,`users/${uid}`),{playerName})
}
async function getWorlds(){
    const worlds={}
    await getDocs(collection(db,"worlds")).then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                worlds[doc.id]=doc.data();
            });
    });
    return worlds
}
function getWorld(worldName){
    return getDoc(doc(db,"worlds",worldName)).then(snap=>snap.data())
}
function addHighscore(worldName,playerName,score){
    return setDoc(doc(db,"worlds",worldName),{highscores:[{[playerName]:score}]})
}
function getChars(worldName){
    return getDoc(doc(db,"worlds",worldName)).then(snap=>snap.data().characters)
}

function getIsLoggedIn(){
    console.log(getAuth())
    return !!(getAuth().currentUser)
}
function setChar(worldName,name,icon,x,y){
    return getWorld(worldName).then((worldData)=>{updateDoc(doc(db,"worlds",worldName),{
        chars:{
            ...worldData.chars,
            [name]:{
                icon,x,y
            }
        }
})})
}


export{loginUser,getAuth,addHighscore,getWorlds,getIsLoggedIn,getWorld,setChar}