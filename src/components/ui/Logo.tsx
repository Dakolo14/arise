import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 group" aria-label="Arise CSF — Home">
      <Image
        src="/arise-logo.jpg"
        alt="Arise Community Support Foundation"
        width={70}
        height={70}
        className="group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
        priority
      />
    </Link>
  )
}
