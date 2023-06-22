import * as React from 'react';
import styles from '@/styles/Footer.module.scss';

import Link from 'next/link';

export default function Landing() {
    return (
        <div className = {styles.container}>
            <img
                src = "/images/navbar_logo.svg"
                alt = "logo"
                className = {styles.logo}
            />
            <div className = {styles.subsection}>
                <p className = {styles.details}>Email: sale1@quality-sealed.com</p>
                <p className = {styles.details}>Phone: +66 (0)81 792 4430</p>
            </div>
            <div className = {styles.subsection}>
                <p className = {styles.details}>Facebook: Quality Sealed Co.,Ltd</p>
                <p className = {styles.details}>Line ID: @492keefw</p>
            </div>
            <div className = {styles.subsection}>
                <p className = {styles.details}>เลขที่ 2 ซอยแบริ่ง 41 แขวงบางนาใต้ เขตบางนา กรุงเทพฯ 10260</p>
                <p className = {styles.details}>2 Soi Bearing 41 South Bangna, Bangna, Bangkok Thailand 1026</p>
            </div>
        </div>
    )
}