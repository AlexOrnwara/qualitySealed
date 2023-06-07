import Head from 'next/head'
import Image from 'next/image'

import ProductShowcase from '@/components/ProductShowcase.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import cardStyles from '@/styles/ProductCard.module.scss'

import { Products } from "@/data/dummyProductsData.json"
import { Trays } from "@/data/trays_data.json"
console.log(`Trays: ${JSON.stringify(Trays)}`)

import Carousel from 'react-bootstrap/Carousel';

// let trayArray = 
// [
//   ["Classic Tray", "/articles/products", "/images/sampleImage1.png", "xxx"]
//   // , 
//   // ["Tray 1", "/articles/products", "/images/sampleImage2.png"], 
//   // ["Tray 2", "/articles/products", "/images/sampleImage3.png"], 
//   // ["Tray 3", "/articles/products", "/images/sampleImage4.png"]
// ]

export default function Home() {
    let imageArray = []
    Products.map((product) => imageArray.push(product["imagePath"]))

    return (
    <>
      <Head>
        <title>Trays</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <Carousel>
          {Trays.map((tray) => {
            return (
                <Carousel.Item className = {cardStyles.item}>
                  <ProductShowcase
                    key = {Trays.indexOf(tray)}
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
