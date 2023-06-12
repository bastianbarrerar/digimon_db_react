import React from 'react';
import Digivice from '../images/digivice.png'

const Navbar = () =>{
    return(
        <nav>
            <img src={Digivice} alt='digilogo' id='nav--img' />
            <ul>
                <li>Digimon DB</li>
                <li>DigiWiki</li>
            </ul>
        </nav>
    )
}

export default Navbar;