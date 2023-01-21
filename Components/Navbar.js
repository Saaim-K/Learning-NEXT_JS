import Link from "next/link"
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Link className={styles.link} href="/"> Home </Link>
                <Link className={styles.link} href="/about"> About </Link>
                <Link className={styles.link} href="/contact"> Contact </Link>
                <Link className={styles.link} href="/profile"> Profile </Link>
            </div >

        </>
    )
}

export default Navbar