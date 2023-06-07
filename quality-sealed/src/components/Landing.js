import * as React from 'react';
import styles from '@/styles/Landing.module.css'

export default function Landing(props) {
    const {imagePath, title, description} = props;
    console.log(imagePath)

    return (
        <>
            <div className = {styles.landing} style = {{backgroundImage: `url(${imagePath})`}}>
                <h1 className = {styles.h1}>{title}</h1>
                <p className = {styles.p}>{description}</p>
            </div>
        </>
    )
}