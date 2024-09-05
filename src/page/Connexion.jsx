import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { faGoogle, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import lock from "./lock.png"










export default function Connexion() {






    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const handlSubmitGoogle = async (e) => {
        e.preventDefault();
        try {

            const googleProVider = new GoogleAuthProvider
            const userinfo = await signInWithPopup(auth, googleProVider)
            console.log("voici userinfos =>", userinfo)
        } catch (error) {
            console.log("une erreur est survenue lors de l'authentification google", error)

        }

    }



    const handlSubmit = async (e) => {
        e.preventDefault();
        console.log("le numero etudiant est " + email)
        console.log("le mot de passe est " + password)
        try {
            const userinfo = await signInWithEmailAndPassword(auth, email, password)
            console.log("voici userinfos =>", userinfo)
            const token = await userinfo.user.getIdToken()
            console.log("voici le token =>", token)
            window.location.href = '/';

        } catch (error) {
            console.log("une erreur est survenue lors de l'authentification", error)
        }




    }

    return (
        <>
            <p className="titlePage">Connexion</p>
            <div id="firebaseui-auth-container"></div>
            <form action="">

                <label > Adresse Email</label>
                <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                <label htmlFor="Mot-de-passe"> Mot de passe </label>
                <input type="password" onChange={(e) => { setPassword(e.target.value); }}
                />

                <button type="submit" onClick={(e) => { handlSubmit(e) }} className="btn-connexion">Connexion  <img src={lock} alt="" className="lock-3D" /> </button>
                <button type="submit" onClick={(e) => { handlSubmitGoogle(e) }}> Se connecter avec google <FontAwesomeIcon icon={faGoogle} className="google-icon" /></button>
                <Link to="/Inscription">
                    <button > S'inscrire ? </button>
                </Link>
            </form >





        </>

    )
}