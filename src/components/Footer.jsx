import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {


    return (


        <>

            <footer>



                <ul>
                    <li>
                        <a href="https://www.instagram.com/excellence_mathematiques/?hl=fr">  <FontAwesomeIcon icon={faInstagram} className='insta-icon' /></a>
                    </li>
                </ul>

            </footer>

        </>
    )
}

export default Footer