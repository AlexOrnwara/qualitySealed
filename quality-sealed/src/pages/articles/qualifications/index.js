import Head from 'next/head'
import Image from 'next/image'

import HScroll from '@/components/HorizontalScroll.js'

import styles from '@/styles/Home.module.css'
import qualificationStyle from '@/styles/Qualification.module.scss'

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
            <h1 className = {qualificationStyle.h1}>Qualifications</h1>   
            <div className = {qualificationStyle.container}>
                {imageArray.map((image) => {
                    return (
                        <div>
                            <img 
                              src={image} 
                              alt="Qualification" 
                              className = {qualificationStyle.test_certificate}
                            />
                        </div>
                    )
                })}
            </div>         
      </main>
    </>
  )
}
