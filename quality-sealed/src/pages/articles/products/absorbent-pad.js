import Head from 'next/head'
import Image from 'next/image'

import ProductShowcase from '@/components/ProductShowcase_Pad.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import cardStyles from '@/styles/ProductCard.module.scss'

import { Products } from "@/data/dummyProductsData.json"
import { Pad } from "@/data/absorbent_pad_data.json"
import Carousel from 'react-bootstrap/Carousel';


export default function VacuumBag() {
    let imageArray = []
    Products.map((product) => imageArray.push(product["imagePath"]))

    return (
    <>
      <Head>
        <title>Pad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <Carousel>
          {Pad.map((tray) => {
            return (
                <Carousel.Item className = {cardStyles.item}>
                  <ProductShowcase
                    key = {Pad.indexOf(tray)}
                    name = {tray.name}
                    navLink = "/articles/products"
                    sku = {tray.sku}
                    description = {tray.description}
                    img_source = {tray.imagePath}
                  />
                </Carousel.Item>
            )
          })}
          
        </Carousel>
      </main>
    </>
  )
}
