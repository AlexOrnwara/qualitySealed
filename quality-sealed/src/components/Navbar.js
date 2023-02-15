import styles from '@/styles/Navbar.module.css';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
    return (
        <div className = {styles.container}>
            <div>
                <Image
                    src = "/images/navbar_logo.svg"
                    alt = "logo"
                    width = {120}
                    height = {80}
                />
            </div>
            <div style = {{display: "flex", flexDirection: "row"}}>
                <Link href = ""><p className = {styles.a}>About Us</p></Link>
                <Link href = ""><p className = {styles.a}>Qualifications</p></Link>
                <Link href = ""><p className = {styles.a}>Products</p></Link>
                <Link href = ""><p className = {styles.a}>Testimonials</p></Link>
                <div style = {{alignItems: "baseline"}}>
                    <Link href = "" style = {{display: "flex", flexDirection: "row"}}>
                        <Image
                            src = "/icons/phone.svg"
                            alt = "logo"
                            width = {30}
                            height = {30}
                        />
                        <p className = {styles.a}>Contact Us</p>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}