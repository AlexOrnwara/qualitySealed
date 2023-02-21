import * as React from 'react';
import styles from '@/styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { document } from 'browser-monads';

export default function Landing() {
    return (
        <div className = {styles.container}>
            <div>
                <Link href = "/">
                <Image
                    src = "/images/navbar_logo.svg"
                    alt = "logo"
                    width = {120}
                    height = {80}
                />
                </Link>
            </div>
            <div className = {styles.container}>
                <Link href = "/articles/about"><p className = {styles.a}>About Us</p></Link>
                <Link href = "/articles/qualifications"><p className = {styles.a}>Qualifications</p></Link>
                <Link href = ""><p className = {styles.a}>Products</p></Link>
                <Link href = ""><p className = {styles.a}>Testimonials</p></Link>
                <div>
                    <Link href = "" style = {{display: "flex", flexDirection: "row"}}>
                        <p className = {styles.a} class = "align-self-center">Contact Us</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}