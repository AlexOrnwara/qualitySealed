import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Section.module.css'

export default function Section(props) {
    const {imagePath, title, description} = props;

    return (
        <>
            <div className = {styles.section}  style = {{backgroundImage: `url(${imagePath})`}}>
                <h1 className = {styles.h1}>{title}</h1>
                <p className = {styles.p}>{description}</p>
                <br/>
                <br/>
                <div className = {styles.row}>
                    <Link href = "">
                        <p className = {styles.italic}>
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
        </>
    )
}