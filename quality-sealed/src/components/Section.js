import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Section(props) {
    const {imagePath, title, description} = props;

    const section = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        padding: '3rem 7.5rem',
        backgroundImage: 'url(' + imagePath + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        borderBottom: '1px solid #FFFFFF'
    }
    
    const h1 = {
        fontFamily: 'Dream Avenue',
        fontSize: '10vw',
        fontWeight: '100',
        fontKerning: 'auto',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        marginBottom: '3rem'
    }
    
    const p = {
        fontFamily: 'HK Grotesk',
        fontStyle: 'light',
        fontSize: '1rem',
        fontWeight: '100',
        lineHeight: '2',
        color: '#FFFFFF'
    }

    const italic = {
        fontFamily: 'HK Grotesk',
        fontSize: '1rem',
        fontWeight: '100',
        lineHeight: '2',
        color: '#FFFFFF',
        fontStyle: 'italic'
    }

    const row = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style = {section}>
            <h1 style = {h1}>{title}</h1>
            <p style = {p}>{description}</p>
            <br/>
            <br/>
            <div style = {row}>
                <Link href = "" style = {{marginRight: "1rem"}}>
                    <p style = {italic}>
                        Continue reading
                    </p>
                </Link>
                <Image
                    alt = "arrow"
                    src = "/icons/arrow-right.svg"
                    width = {20}
                    height = {20}
                />
            </div>
        </div>
    )
}