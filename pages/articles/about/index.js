import Head from 'next/head'
import Article from '@/components/Article.js'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import articleStyle from '@/styles/Article.module.scss'

import { About } from "@/data/dummyAboutData.json"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About QS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <section>
          <div className = {articleStyle.buffer}></div>
          {About.map((article) => (
            <Article
              title = {article.title}
              description = {article.content}
              imagePath = {article.imagePath}
            />
          ))}
        </section>
      </main>
    </>
  )
}
