import Link from "next/link"
import styles from '../styles/Navbar.module.scss';

interface NavigationItem {
  id: number;
  title: string;
  path: string;
}

const navigation: NavigationItem[] = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'}
]

const Navbar = () => {
  return (
    <nav className="w-full h-full flex justify-between items-center">
      <div>
        webDev
      </div>
      <div className="h-full">
        {
          navigation.map(({id, title, path}) => (
            <Link key={id} className={styles.link} href={path}>{title}</Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar;