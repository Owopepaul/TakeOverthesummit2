import React from 'react';
import styles from '../styles/HomePage.module.css';

const StreamPage = () => {
    return (
        <div className={styles.iframeContainer}>
            <iframe
                src="https://www.youtube.com/embed/3rMkaMEgDJI?si=jBhgrmCc_Kb9Pg4Z"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
                
            </iframe>
        </div>
    );
};


export default StreamPage;
