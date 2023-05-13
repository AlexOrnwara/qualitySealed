import styles from "@/styles/Carousel.module.scss";
import { window, document, exists } from 'browser-monads';
import carouselStyles from '@/styles/Carousel.module.scss'
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function ProductCategorySlide(props) {
    const {categoryName, navLink} = props;

    return (
        <>
            <div className = {styles.card}>       
                <div style = {{width: "33%"}}></div>
                <h1 className = {styles.h1}>{categoryName}</h1>
                <Link href = {navLink} style = {{display: "flex", placeContent: "center", textDecoration: "none"}}>
                    <Button type = "button" className = "btn btn-view-more">View All</Button>
                </Link>
            </div>
        </>
    )
}