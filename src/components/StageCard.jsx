import React from 'react';
import "../style/stage.css"

function StageCard({ src, text, title }) {
    return (


        <>

            <div className="containerTarif">
                <div className="cardTarif">
                    <img src={src} alt="" />
                    <div className="contenueCardTarif">

                        <div className="titleCardTarif">
                            {title}
                        </div>
                        <div className="TextCardTarif"></div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default StageCard