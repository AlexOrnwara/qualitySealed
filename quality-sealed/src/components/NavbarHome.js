import styles from '@/styles/NavbarHome.module.css';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Landing() {
    return (
        <div className = {styles.container}>
            <Link href = "/">
                <Image
                    src = "/images/navbar_logo.svg"
                    alt = "logo"
                    width = {120}
                    height = {80}
                />
            </Link>
            <div style = {{display: "flex", flexDirection: "row", justifyItems: "flex-end"}}>
                <Link href = "/articles/about" style = {{textDecoration: "none"}}>
                    <p className = {styles.a}>About Us</p>
                </Link>

                <Link href = "/articles/qualifications" style = {{textDecoration: "none"}}>
                    <p className = {styles.a}>Qualifications</p>
                </Link>

                <Link href = "/articles/products" style = {{textDecoration: "none"}}>
                    <p className = {styles.a}>Products</p>
                </Link>
                
                <Link href = "" style = {{textDecoration: "none"}}>
                    <p className = {styles.a}>Testimonials</p>
                </Link>

                <div style = {{alignItems: "baseline"}}>
                    <Link href = "" style = {{display: "flex", flexDirection: "row", textDecoration: "none"}}>
                        <p className = {styles.a}>Contact Us</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}