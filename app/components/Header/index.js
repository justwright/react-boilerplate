/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class Header extends React.Component {
    render() {
        return (
            <ul className={ styles.header }>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/social'>Social</Link></li>
            </ul>
        );
    }

    aboutClick(link) {
        link.preventDefault();

        console.log(1);
        push('/about');
    }
}

export default Header;
