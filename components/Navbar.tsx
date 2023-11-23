import Link from "next/link"
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className="w-full h-full flex justify-between items-center">
      <div>
        webDev
      </div>
      <div className="h-full">
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/posts">Posts</Link>
        <Link className={styles.link} href="/contacts">Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar;