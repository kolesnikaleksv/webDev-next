'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation"
import Heading from "@/components/Heading";
import Link from "next/link";

const NotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  })

  return (
    <main className="text-center flex-1">
      <Heading tag='h1' text="404" />
      <Heading tag='div' text="Something is going wrong..." />
      <h2 className="text-3xl">There was a problem</h2>
      <p>We could not find the page you were looking for</p>
      <p>Go back to the <Link href='/'>Dashboard</Link></p>
    </main>
  )
}

export default NotFound;