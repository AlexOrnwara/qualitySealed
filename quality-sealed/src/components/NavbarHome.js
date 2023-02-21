import styles from '@/styles/NavbarHome.module.css';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Link href = "/articles/about">
                    <p className = {styles.a}>About Us</p>
                </Link>

                <Link href = "/articles/qualifications">
                    <p className = {styles.a}>Qualifications</p>
                </Link>

                <Link href = "">
                    <p className = {styles.a}>Products</p>
                </Link>
                
                <Link href = "">
                    <p className = {styles.a}>Testimonials</p>
                </Link>

                <div style = {{alignItems: "baseline"}}>
                    <Link href = "" style = {{display: "flex", flexDirection: "row"}}>
                        <p className = {styles.a}>Contact Us</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}