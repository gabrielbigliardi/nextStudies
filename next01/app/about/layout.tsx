import styles from './styles.module.css'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
        <nav>About NavBar</nav>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
