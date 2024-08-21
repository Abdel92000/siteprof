
import imgPrimaireVisio from "./imgEleveVisio..jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
export default function tarifParticulier() {


    return (
        <>

            <div className="containerTarif">

                <div className="cardTarifParticulier">

                    <img src={imgPrimaireVisio} />

                    <div className="contenueTextCard">
                        <div className="titleParticulier">
                            <FontAwesomeIcon icon={faComputer} />
                            Cours Particuliers En Visio
                        </div>

                        <div className="textParticulier">
                            <span className="colorWord">Matières</span>  : Mathématiques, Français, Anglais, Méthodologie, Physique-chimie, SES
                            <ul className="listInfoParticulier">
                                <li> <FontAwesomeIcon icon={faCircleCheck} /> 2h30 par matière par jour</li>
                                <li> <FontAwesomeIcon icon={faCircleCheck} /> Des supports pédagogiques de qualité</li>

                            </ul>
                            À partir de 240 € TTC (4 jours, 10 h).
                            Ces stages sont proposés en visio

                        </div>

                        <div className="infosParticulier"></div>
                    </div>

                </div>

                <button className="btn-reserver-visio" onClick={(e) => { e.preventDefault(); }}>Réserver un visio</button>

            </div >








        </>

    )
}


