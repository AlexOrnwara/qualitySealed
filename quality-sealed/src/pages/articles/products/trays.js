import Head from 'next/head'
import Image from 'next/image'

import ProductShowcase from '@/components/ProductShowcase_Tray.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import cardStyles from '@/styles/ProductCard.module.scss'

import { Products } from "@/data/dummyProductsData.json"
import { Trays } from "@/data/trays_data.json"
console.log(`Trays: ${JSON.stringify(Trays)}`)

import Carousel from 'react-bootstrap/Carousel';

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
                    material = {tray.material}
                    size = {tray.size}
                    thickness = {tray.thickness}
                    color = {tray.color}
                    packaging = {tray.packaging}
                    application = {tray.application}
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
