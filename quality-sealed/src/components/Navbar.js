import * as React from 'react';
import styles from '@/styles/Navbar.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { document } from 'browser-monads';

export default function Landing() {
    return (
        <div className = {styles.container}>
            <div>
                <a href = "/">
                <Image
                    src = "/images/navbar_logo.svg"
                    alt = "logo"
                    width = {120}
                    height = {80}
                />
                </a>
            </div>
            <div className = {styles.linksContainer}>
                <Link href = "/articles/about" style = {{textDecoration: "none"}}><p className = {styles.a}>About Us</p></Link>
                <Link href = "/articles/qualifications" style = {{textDecoration: "none"}}><p className = {styles.a} style = {{textDecoration: "none !important"}}>Qualifications</p></Link>
                <Link href = "/articles/products" style = {{textDecoration: "none"}}><p className = {styles.a}>Products</p></Link>
                {/* <Link href = "" style = {{textDecoration: "none"}}><p className = {styles.a}>Testimonials</p></Link> */}
                <Link href = "" style = {{textDecoration: "none"}}><p className = {styles.a}>Contact Us</p></Link>
            </div>
        </div>
    )
}