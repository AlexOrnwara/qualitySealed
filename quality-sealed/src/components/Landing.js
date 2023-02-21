import * as React from 'react';
import styles from '@/styles/Landing.module.css'
export default function Landing(props) {
    const {imagePath, title, description} = props;

    const landing = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        padding: '5rem',
        backgroundImage: 'url(' + imagePath + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'left',
        borderBottom: '1px solid #FFFFFF'
    }

    const h1 = {
        fontFamily: 'Dream Avenue',
        fontSize: '12.5vw',
        fontWeight: '100',
        fontKerning: 'auto',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        width: '300px',
        marginTop: '7.5vh',
        marginBottom: '5vh'
    }

    const p = {
        fontFamily: 'HK Grotesk',
        fontSize: '2vw',
        fontWeight: '100',
        color: '#FFFFFF'
    }

    return (
        <div style = {landing}>
            <h1 style = {h1}>{title}</h1>
            <p style = {p}>{description}</p>
        </div>
    )
}