import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";

firebase.initializeApp({});
const auth = firebase.auth();
const db = firebase.firestore();

function Chat() {
  const [user, setuser] = useState(() => auth.currentUser);
  const [init, setinit] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }

      if (init) {
        setinit(false);
      }
    });

    //   clear subscription
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (init) return "Loading....";
  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <p>Welcom to Lyfx Chat</p>
        </>
      ) : (
        <Button onclick={signInWithGoogle}>Sign In With Google</Button>
      )}
    </div>
  );
}

export default Chat;
