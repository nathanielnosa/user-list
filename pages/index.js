import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div>
      <Navbar/>
      <h1>Home page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab accusamus animi, iure illo incidunt magnam sit esse fugit veniam?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab accusamus animi, iure illo incidunt magnam sit esse fugit veniam?</p>
      <Footer/>
     </div>
  )
}
