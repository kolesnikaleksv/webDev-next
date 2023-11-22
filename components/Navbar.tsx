import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div>
        webDev
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar;