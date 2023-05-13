import $ from 'jquery'

import Head from 'next/head'
import Image from 'next/image'

import ProductShowcase from '@/components/ProductShowcase.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import cardStyles from '@/styles/ProductCard.module.scss'
import productStyle from '@/styles/Product.module.css'

import { Products } from "@/data/dummyProductsData.json"

import Carousel from 'react-bootstrap/Carousel';

let trayArray = 
[
  ["Classic Tray", "/articles/products", "/images/sampleImage1.png", "xxx"]
  // , 
  // ["Tray 1", "/articles/products", "/images/sampleImage2.png"], 
  // ["Tray 2", "/articles/products", "/images/sampleImage3.png"], 
  // ["Tray 3", "/articles/products", "/images/sampleImage4.png"]
]

export default function Home() {
    let imageArray = []
    Products.map((product) => imageArray.push(product["imagePath"]))

    return (
    <>
      <Head>
        <title>About QS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Carousel>
          {trayArray.map((tray) => {
            return (
              <Carousel.Item className = {cardStyles.item}>
                <ProductShowcase
                  categoryName = {tray[0]}
                  navLink = {tray[1]}
                  sku = {tray[3]}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </main>
    </>
  )
}
