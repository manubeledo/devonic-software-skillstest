import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Main: NextPage = () => {

    return(
        <>
        <main className={styles.main}>
            <div className={styles.cards}>
            <div className={styles.fullCard}>
                <Link href="/series">
                <div className={styles.card}>
                <h1>SERIES</h1>
                </div>
                </Link>
                <h6 className={styles.title}>Popular Series</h6>
            </div>
            <div className={styles.fullCard}>
                <Link href="/movies">
                <div className={styles.card}>
                <h1>MOVIES</h1>
                </div>
                </Link>
                <h6 className={styles.title}>Popular Movies</h6>
            </div>
            </div>
        </main>
        </>
    )
}

export default Main