import Head from 'next/head'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

     <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, at, mollitia explicabo impedit aut ullam eaque quidem in consectetur sint est. Officiis odio nemo repellendus optio reprehenderit labore nisi delectus!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, at, mollitia explicabo impedit aut ullam eaque quidem in consectetur sint est. Officiis odio nemo repellendus optio reprehenderit labore nisi delectus!</p>

      <Link href="/users" className={styles.btn}>See users</Link>
     </div>
  )
}
