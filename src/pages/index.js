import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import landingStyle from '@/styles/Landing.module.css'

import Landing from '../components/Landing.js'
import Section from '../components/Section.js'
import Navbar from '../components/Navbar.js'

import { Sections } from "@/data/dummyLandingData.json"

export default function Home() {
  return (
    <>
      <Head>
        <title style = {{width: "300px"}}>Quality Sealed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <Landing
            imagePath = "/images/sampleImage1.png"
            title = "Quality Sealed"
            description = "Producer and pioneer"
          />
          {Sections.map((section) => (
            <Section
              key = {Sections.indexOf(section)}
              imagePath = {JSON.stringify(section.imagePath)}
              title = {section.title}
              description = {section.description}
            />
          ))}
      </main>
    </>
  )
}
