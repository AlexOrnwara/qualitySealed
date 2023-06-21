import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/Article.module.scss';

export default function Article(props) {
    const {title, description, imagePath} = props;
    return (
        <>
            <div className = {styles.articleContainer}>
                <img
                    src = {imagePath}
                    alt = "Packaging Image"
                    className = {styles.img1}
                />
                <div className = {styles.marginLeft}>
                    <h1 className = {styles.h1}>{title}</h1>
                    <p className = {styles.p}>{description}</p>
                </div>
            </div>
            
        </>
    )
}