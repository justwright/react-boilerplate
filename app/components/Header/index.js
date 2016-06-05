/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

class Header extends React.Component {
    render() {
        return (
            <ul className={ styles.header }>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Social</a></li>
            </ul>
        );
    }
}

export default Header;
