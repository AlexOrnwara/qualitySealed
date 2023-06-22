import Head from 'next/head'
import Image from 'next/image'

import ProductShowcase from '@/components/ProductShowcase_Film.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import cardStyles from '@/styles/ProductCard.module.scss'

import { Products } from "@/data/dummyProductsData.json"
import { Films } from "@/data/film_data.json"
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
    let imageArray = []
    Products.map((product) => imageArray.push(product["imagePath"]))

    return (
    <>
      <Head>
        <title>Films</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <Carousel>
          {Films.map((tray) => {
            return (
                <Carousel.Item className = {cardStyles.item}>
                  <ProductShowcase
                    key = {Films.indexOf(tray)}
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
