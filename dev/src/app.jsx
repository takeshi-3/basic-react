/* ------------------------------------
    Main Source File (essential)
------------------------------------- */

/* ------------- Imports ------------- */
// React Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';

// styles
import global from './styles/global.scss';
import styles from './styles/top.module.scss';

import TextEffect from './components/textEffect.jsx';
/* ------------------------------------ */



/* ------------- Define the Component ------------- */
const Top = () => {
    // write interfaces (views)
    return (
        <main className={styles.top}>
            <h1 className={styles.top_title}>Hello, React!</h1>
            <TextEffect />
        </main>
    );
};
/* ------------------------------------------------ */



/* ------------- Rendering ------------- */
ReactDOM.render(
    <Top />,
    document.getElementById('app')
);
/* ------------------------------------- */