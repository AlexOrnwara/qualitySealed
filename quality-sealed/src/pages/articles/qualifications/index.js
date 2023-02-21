import $ from 'jquery'

import Head from 'next/head'
import Image from 'next/image'

import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import qualificationStyle from '@/styles/Qualification.module.css'

import { Qualifications } from "@/data/dummyQualiticationData.json"

export default function Home() {
    let imageArray = []
    Qualifications.map((qualification) => imageArray.push(qualification["imagePath"]))

    return (
    <>
      <Head>
        <title>About QS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
            <h1 className = {styles.h1}>Qualifications</h1>
            <HScroll imageArray = {imageArray} />
            <p className = {styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum vehicula finibus. Morbi lectus felis, consequat quis nulla et, rutrum volutpat leo. Quisque ultrices hendrerit iaculis. Aenean ac mauris enim. Nunc condimentum erat non viverra congue. In dictum pretium massa quis congue. Vivamus eget tellus dictum, viverra nulla id, congue lacus. Curabitur lorem ex, ultricies eu risus in, tincidunt efficitur dolor. 
                <br /><br />
                Morbi mattis quam scelerisque quam sagittis, nec convallis neque hendrerit. Sed fermentum at magna viverra tristique. Ut sagittis orci gravida augue imperdiet dignissim. Proin bibendum commodo vestibulum. In vel urna id est mattis imperdiet eget non enim. Fusce in ullamcorper lorem, in fringilla nunc. Suspendisse vestibulum est in neque euismod fringilla. Integer dapibus dui sit amet hendrerit rutrum. Suspendisse mollis sed lectus a sodales. Phasellus non justo eget nisl consectetur maximus quis in libero. Curabitur et ultrices erat, eu aliquam quam. Sed suscipit at purus sed hendrerit.
            </p>
      </main>
    </>
  )
}
