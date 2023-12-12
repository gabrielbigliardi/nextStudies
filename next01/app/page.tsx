'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const r = await res.json()
    setData(r)
    }
  }, [])

  console.log(data)

  return (
    <main className={styles.main}>
     <h1>Hello World!</h1>
     <Link href={'/about'}>Go to About</Link>
    </main>
  )
}
