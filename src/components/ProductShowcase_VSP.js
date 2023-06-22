import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import styles from "@/styles/ProductCard.module.scss";
import Link from 'next/link';
import Image from 'next/image';

export default function ProductShowcase(props) {
    const {name, navLink, sku, description, material, size, thickness, color, packaging, application, img_source} = props;
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>       
                <card className = {styles.card}>
                    <img 
                        src = {img_source}
                        alt = "Product Image"
                        className = "responsiveImage" 
                    />
                    <description className = {styles.description}>
                        <div>
                            <h1 className = {styles.productTitle}>{name}</h1>
                            <br/>
                            <h2 className = {styles.skuSubtitle}>SKU: {sku}</h2>
                        </div>
                        <br/>
                        <div>
                            <p className = {styles.productDescription}>{description}</p>
                        </div>
                    </description>
                </card>
                <br/>
                <div className = {styles.buttonLayout}>
                    <div style = {{display: "flex", placeContent: "center", textDecoration: "none"}}>
                        <Button type = "button" className = "btn btn-get-quote" onClick={handleShow}>Request a quote</Button>
                    </div>
                    <br/>
                    <Link href = {navLink} style = {{display: "flex", placeContent: "center", textDecoration: "none"}}>
                        <Button type = "button" className = "btn btn-back">Back</Button>
                    </Link>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} className = {styles.modal}>
                <Modal.Header class="modal-header border-0" closeButton>
                </Modal.Header>
                <Modal.Body className = {styles.modalBody}>
                    <h1 className = {styles.emailModalHeader}>Request a quote</h1>
                    <h2 className = {styles.emailModalDescription}>
                        Drop us an email regarding the products you are interested in and we will get back to you soon!
                    </h2>
                    <h3 className = {styles.emailModalAddress}>sales@qualitysealed.com</h3>
                    {/* <h2 className = {styles.emailModalDescription}>
                        OR leave us your email and we will reach out to you.
                    </h2>
                    <br/>
                    <div className = {styles.emailModalAddress}>
                        <input type = "text" placeholder = "Email address" className = {styles.emailModalInput}/>
                        <input type = "submit" value = "Submit" className = {styles.emailModalSubmit}/>
                    </div> */}
                </Modal.Body>
            </Modal>
        </>
    )
}