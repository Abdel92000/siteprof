import { animated, to, useSpring } from "@react-spring/web";
import Slogant from "../components/Slogant";
import "../style/inscription.css"
import { useEffect, useState } from "react";
import { set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export default function Inscription() {

    const [mdp, setMdp] = useState("")
    const [email, setEmail] = useState("")

    const [passwordInputClasseName, setpasswordInputClasseName] = useState("malFormedPassword")



    function verifMdp(e) {

        const mdp = e.target.value
        setMdp(mdp)

        if (mdp.length < 8) {
            setpasswordInputClasseName("malFormedPassword")
        }
        else {
            setpasswordInputClasseName("rightPassword")
        }
    }

    function verifEmail(e) {

        const email = e.target.value
        setEmail(email)


    }




    const handleSubmit = async (e) => {
        e.preventDefault();



        console.log("l'adress email est " + email)
        console.log("le mot de passe est " + mdp)
        try {
            const userinfo = await createUserWithEmailAndPassword(auth, email, mdp)
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


            <h1>Complétez le formulaire ci-dessous pour vous inscrire</h1>

            <form action="">

                <label htmlFor="email"> Entrez une adresse email : </label>
                <input type="email" name="email" id="email" onChange={verifEmail} />


                <label htmlFor="">Crée votre mot de passe : </label>
                <input type="password" name="password" id="password" className={passwordInputClasseName} onChange={verifMdp} />

                <label htmlFor="">Confirmer votre mot de passe : </label>
                <input type="password" name="password" id="password" className={passwordInputClasseName} onChange={verifMdp} />

                <button type="submit" onClick={(e) => { handleSubmit(e) }}>Valider la création de votre compte </button>

            </form>



        </>

    )
}
