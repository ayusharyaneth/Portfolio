import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-6 flex justify-between bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-accent">Genixify</h1>
      <div>
        <Link href="#about" className="px-4">About</Link>
        <Link href="#projects" className="px-4">Projects</Link>
        <Link href="#contact" className="px-4">Contact</Link>
      </div>
    </nav>
  )
}
