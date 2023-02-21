import $ from 'jquery'

import Head from 'next/head'
import Image from 'next/image'

import ProductDescription_Right_Large from '@/components/ProductDescription.js'

import styles from '@/styles/Home.module.css'
import productStyle from '@/styles/Product.module.css'

export default function Home() {

    return (
    <>
      <Head>
        <title>About QS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className = {productStyle.align_left}>
            <div className = {productStyle.column}>
                <div className = {productStyle.image_small}>
                    <Image 
                        src = "/../public/images/certificate.png" 
                        width = {200} 
                        height = {200} 
                        alt = "Sample Image 1"
                        layout = "responsive"
                    /> 
                </div>
                
                <div className = {productStyle.row}>
                    <h1 className = {productStyle.h2}>Product A</h1>
                    <h3 className = {productStyle.h3}>$15</h3>
                </div>
                
                <p className = {productStyle.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum vehicula finibus. Morbi lectus felis, consequat quis nulla et, rutrum volutpat leo. Quisque ultrices hendrerit iaculis. Aenean ac mauris enim. Nunc condimentum erat non viverra congue. In dictum pretium massa quis congue. Vivamus eget tellus dictum, viverra nulla id, congue lacus. Curabitur lorem ex, ultricies eu risus in, tincidunt efficitur dolor. Morbi mattis quam scelerisque quam sagittis, nec convallis neque hendrerit. Sed fermentum at magna viverra tristique. Ut sagittis orci gravida augue imperdiet dignissim. Proin bibendum commodo vestibulum. In vel urna id est mattis imperdiet eget non enim. Fusce in ullamcorper lorem, in fringilla nunc. Suspendisse vestibulum est in neque euismod fringilla. Integer dapibus dui sit amet hendrerit rutrum. Suspendisse mollis sed lectus a sodales. Phasellus non justo eget nisl consectetur maximus quis in libero. Curabitur et ultrices erat, eu aliquam quam. Sed suscipit at purus sed hendrerit.</p>
            </div>
        </div>
      
      </main>
    </>
  )
}
