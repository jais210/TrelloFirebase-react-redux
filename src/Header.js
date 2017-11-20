import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { signOut } from './actions';

const Header = ({ user }) => {
    return (
        <header id='titulo'>
            <span>
                <NavLink to='/boards'>
                    <i class="fa fa-columns" aria-hidden="true"></i>
                    <span> Boards</span>
                </NavLink>
            </span>
            <Image src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" width='200px' />
            <span>
                <a href='#'>
                    <span> {user.name} {user.lastName}</span>
                </a>
                <NavLink to='/signin' onClick={() => signOut()}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    <span> Sign Out</span>
                </NavLink>
            </span>
        </header>
    );
}

export default Header;