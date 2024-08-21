import { animated, useSpring } from "@react-spring/web";
import Slogant from "../components/Slogant";
import "../style/inscription.css"
import { useEffect, useState } from "react";





export default function Inscription() {

    const [mdp, setMdp] = useState("")



    function verifMdp(e) {

        const mdp = e.target.value
        setMdp(mdp)

        if (mdp.length < 8) {
            const input = document.getElementById('password');
            input.classList.add("passwordFalse")



        } else {
            const input = document.getElementById('password');
            input.classList.add("passwordTrue")

        }

    }


    function leavemdp() {
        const input = document.getElementById('password');




    }












    return (
        <>


            <h1>Complétez le formulaire ci-dessous pour vous inscrire</h1>

            <form action="">

                <label htmlFor="email"> Entrez une adresse email : </label>
                <input type="email" name="email" id="email" />


                <label htmlFor="">Crée votre mot de passe : </label>
                <input type="password" name="password" id="password" onChange={verifMdp} onMouseLeave={leavemdp} />

                <label htmlFor="">Confirmer votre mot de passe : </label>
                <input type="password" name="password" id="password" />

                <button>Valider la création de votre compte </button>

            </form>













        </>

    )
}
