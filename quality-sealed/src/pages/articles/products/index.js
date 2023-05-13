import $ from 'jquery'

import Head from 'next/head'
import Image from 'next/image'

import ProductDescription_Right_Large from '@/components/ProductDescription.js'
import ProductCategorySlide from '@/components/ProductCategorySlide.js'
import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import carouselStyles from '@/styles/Carousel.module.scss'
import productStyle from '@/styles/Product.module.css'

import { Products } from "@/data/dummyProductsData.json"

import Carousel from 'react-bootstrap/Carousel';

let productArray = 
[
  ["Trays", "/articles/products/trays", "/images/sampleImage1.png"], 
  ["Films", "/articles/products/films", "/images/sampleImage2.png"], 
  ["Absorbent Pads", "/articles/products/absorbent-pad", "/images/sampleImage3.png"], 
  ["Vacuum Bags", "/articles/products/vacuum-bag", "/images/sampleImage4.png"]
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
          {productArray.map((product) => {
            return (
              <Carousel.Item className = {carouselStyles.item} style = {{backgroundImage: `url(${String(product[2])})`}}>
                <ProductCategorySlide
                  categoryName = {product[0]}
                  navLink = {product[1]}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </main>
    </>
  )
}
