import Link from "next/link";
import Image from "next/image"

export default function Header(){

  return (
    <div className="flex justify-between items-center p-6">

      <Link href="/">
        <Image src="/movie.png" alt="Movie logo" height={50} width={50} className="border-2 rounded-lg"/>
      </Link>

      <ul className="flex gap-10">

        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/contact">
          <h1>Contact Us</h1>
        </Link>
        <Link href="/movie">
          <h1>Movies</h1>
        </Link>
      </ul>

    </div>
  )
}
