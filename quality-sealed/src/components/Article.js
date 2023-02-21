import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/Article.module.css';

export default function Article(props) {
    const {title, description} = props;
    return (
        <>
            <div className = {styles.articleContainer}>
                <h1 className = {styles.h1}>{title}</h1>
                <p className = {styles.p}>{description}</p>
            </div>
            
        </>
    )
}