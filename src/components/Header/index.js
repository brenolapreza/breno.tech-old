import React from 'react';
import {HeaderStyle, ListStyle, Logo} from './style'

export default function Header(){

    return(
        <HeaderStyle>
            <Logo id="logo" href="#">B</Logo>
            <ListStyle>
                <li><a href="#">QUEM SOU</a></li>
                <li><a href="#">TRABALHOS</a></li>
                <li><a href="#">CONTATO</a></li>
                <li><a href="#">EXAMPLE</a></li>
            </ListStyle>
        </HeaderStyle>
    )
}