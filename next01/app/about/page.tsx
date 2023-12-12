import Link from 'next/link'
import styles from './styles.module.css'

export default function About() {
    // throw new Error('Not today!')
    return (
        <main className={styles.main}>
            <h1>About</h1>
            <Link href={'/'}>Go to Home</Link>
        </main>
    )
}
