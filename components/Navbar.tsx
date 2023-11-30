'use client'
import { usePathname } from "next/navigation"; 
import Image from "next/image";
import Link from "next/link"
import styles from '../styles/Navbar.module.scss';
import {FC} from 'react'

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

const Navbar:FC = () => {
  const pathName = usePathname();
  return (
    <nav className="w-full h-full flex justify-between items-center">
      <div>
        <Image
          src="/logo.png"
          alt="webDev"
          width={60}
          height={60}
        />
      </div>
      <div className="h-full">
        {
          navigation.map(({id, title, path}) => (
            <Link key={id} className={`${styles.link} ${pathName === path ? styles.active: ''}`} href={path}>{title}</Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar;