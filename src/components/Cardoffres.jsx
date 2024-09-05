import React from 'react';
import { Link } from 'react-router-dom';

function cardOffres({ title, text, srcImg, link }) {


    return (




        <div className="cardOffres">

            <img src={srcImg} className='imgCardOffres' />

            <div className="tilteCard">
                {title}
            </div>
            <div className="textCardOffres">
                {text}
            </div>

            <div className="btnCardOffres">
                <Link to={link}>
                    <button className='btnTarif'> Voir mon tarif </button>
                </Link>
            </div>
        </div>



    );
}

export default cardOffres;
