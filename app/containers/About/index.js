/*
*
* About
*
*/

import React from 'react';
import { connect } from 'react-redux';
// import selectAbout from './selectors';
import styles from './styles.css';

export default class About extends React.Component{ // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className={ styles.about }>
                <h1>About</h1>
            </div>
        );
    }
}

// const mapStateToProps = selectAbout();
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(About);
