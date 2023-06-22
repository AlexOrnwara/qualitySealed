import * as React from 'react';
import styles from '@/styles/Landing.module.css'

export default function Landing(props) {
    const {imagePath, title, description} = props;
    console.log(imagePath)

    return (
        <>
            <div className = {styles.landing} style = {{backgroundImage: `url(${imagePath})`}}>
                <i className = {styles.p}>{title}</i>
                <h1 className = {styles.h1}>{description}</h1>
                <h2 className = {styles.h2}>of thermoformed food packaging solutions</h2>
            </div>
        </>
    )
}