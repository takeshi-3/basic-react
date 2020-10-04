/* ------------------------------------
    This is just a sample component
------------------------------------- */

// React
import React, {useState} from 'react';

// styles
import styles from "./styles/textEffect.module.scss";

// Material UI Components
import { StylesProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const TextEffect = () => {
    // state of the Component
    const [active, setActive] = useState(false);

    // views
    return (
        <main className={styles.tf}>
        <StylesProvider injectFirst>
            <h2 className={styles.tf_text}>{active ? "Activated!!" : "Default."}</h2>
            <Button
                className={styles.tf_button}
                variant="contained"
                color={active ? "secondary" : "default"}
                onClick={e => setActive(!active)}>
                Toggle
            </Button>
        </StylesProvider>
        </main> 
    );
};

export default TextEffect;