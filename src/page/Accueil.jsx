import React, { useState } from "react";
import Slogant from "../components/Slogant";
import SearchBar from "../components/Search-bar";
import "../style/acceuil.css"
import villesAutourDeNanterre from "../utils/ville";

import niveauScolaires from "../utils/niveau.js";

import CardOffres from "../components/Cardoffres.jsx";

import imgPrimaire from "./imgPrimaire.jpg"
import imgStage from "./imgStage.jpg"
import imgToussaint from "./imgToussaint.jpg"
import imgfr from "./27099.jpg"
import { Link } from 'react-router-dom';
import Stage from "./StagePréRentrée.jsx";






export default function Accueil() {


    const [userchoice, setUserChoice] = useState("VISIO")




    function displayChoice() {
        if (userchoice == "VISIO") {
            return (
                <div >

                </div>
            )
        }

        if (userchoice == "PRESENTIEL") {
            return (
                <div>
                    <div className="presentiel-div">
                        <div className="ContainerChoixVille">
                            <label for="ville"> Ville</label>
                            <select name="ville" >
                                {villesAutourDeNanterre.map((ville) => <option value={ville}> {ville} </option>)}

                            </select>
                        </div>

                        <div>
                            <div className="ContainerChoixVille">
                                <label for="ville">Classe</label>
                                <select name="niveau" >

                                    {niveauScolaires.map((niveau) => <option value={niveau}> {niveau} </option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <Link to="Planning">
                                <button className="btn-rechercher-presentiel">Rechercher</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function getClassname(actualButton) {
        if (actualButton == userchoice) {
            return "course-option-btn btn-choosen"
        }

        return "course-option-btn "
    }



    return (
        <>

            <Slogant />
            <div className="course-options-container">
                <button className={getClassname("VISIO")} onClick={(e) => { setUserChoice("VISIO") }}  > En visio</button>
                <button className={getClassname('PRESENTIEL')} onClick={(e) => { setUserChoice("PRESENTIEL") }} >En présentiel  </button >

            </div >

            {displayChoice()}






            <div className="containerOfrres">
                <div className="titleOffres"> Découvrir les offres  !
                </div>
                <div className="containerCardOffres" >





                    <CardOffres
                        srcImg={imgPrimaire}
                        title="COURS PARTICULIER"
                        text="Avancer en confiance et à son rythme avec son prof particulier dès la rentrée, ça fait toute la différence pour réussir son année. En avant pour les progrès !"
                        link={"TarifParticulier"}
                    />



                    <CardOffres
                        srcImg={imgStage}
                        title="STAGES DE PRÉ-RENTRÉE"
                        text="4 ou 5 jours pour passer au crible toutes les notions importantes de l'année et se remettre progressivement dans le bain, voilà un programme 100% gagnant pour la rentrée !"
                        link={"Stage"}
                    />


                    <CardOffres
                        srcImg={imgToussaint}
                        title="STAGES DE TOUSSAINT"
                        text="Nouveaux chapitres un peu difficiles, premières notes décevantes… On réagit dès les vacances de la Toussaint pour éviter l’effet boule de neige !"

                    />
                </div>
            </div>




            <div className="containerOffreFrancais">
                <div className="titleOffres"> Progresser en Français à l'oral !</div>
                <div className="cardFrancais">
                    <div className="containerImgFr">
                        <img src={imgfr} className="imgfr" />
                    </div>
                    <div className="titleCardFr"> Stage de Français intensif </div>
                    <div className="subtileCardFr"> Avec une prof en licence lettre ! </div>






                </div>



            </div>

            <div className="titleOffres">Qui vous donnera cours ?</div>
            <div className="containerCardProf">
                <div className="imgProf">  </div>
                <div className="titleCardProf">
                    Meya Bassira
                </div>
                <div className="textCardProf">
                    "Je suis etudiante et donne des cours  particulier"
                </div>



            </div>

            <div className="container-btn-tarif">
                <Link to="TarifParticulier" >

                    <button className="btn-voir-tarif" > Voir mon tarrif </button>
                </Link>



            </div>

        </>

    )

}

