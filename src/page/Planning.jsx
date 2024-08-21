import React from "react";
import { flushSync } from "react-dom";
import planning from "../utils/planning";
import { render } from "@testing-library/react";
import { hover } from "@testing-library/user-event/dist/hover";






function Planning() {



    function returnClassNameByDay(tour) {
        if (tour == 0) {

            return "colonnePlanning premierJour"
        } else {

            return "colonnePlanning"
        }

    }


    function returnClassCrenaux(etat) {
        if (etat == false) {
            return "crenaux crenauxReserver"
        } else {
            return "crenaux crenauxLibre"
        }
    }




    return (


        < div className="containerPlanning" >

            {planning.map((jourSemaine, x) => (

                <div key={x} className={returnClassNameByDay(x)}>

                    <div className="jours">
                        {jourSemaine.nom}

                    </div>


                    {jourSemaine.horaire.map((crenau, y) => (

                        <div key={y} className={returnClassCrenaux(crenau.libre)}>

                            {crenau.description}


                        </div>

                    ))}



                </div>



            ))

            }














        </div >


    )

}
export default Planning