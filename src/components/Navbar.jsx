import { useState, useEffect } from "react"

const Navbar = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 150) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1
          className="
    text-3xl font-bold
   text-black px-3 py-1 rounded-md
    bg-gradient-to-r from-orange-400 to-blue-500
    bg-clip-text text-transparent px-0 md:py-0
  "
        >
          Welcome
        </h1>

      </div>
      <ul
        className={`menu flex items-center gap-4 sm:gap-10
  fixed md:static
  left-1/2 md:left-auto
  -translate-x-1/2 md:translate-x-0
  top-4 md:top-auto
  rounded-full md:rounded-none
  bg-white/30 md:bg-transparent
  backdrop-blur-md md:backdrop-blur-0
  px-6 py-3
  transition-all duration-300
  z-50
  ${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 md:opacity-100 md:translate-y-0"}`}
      >
        <li>
          <a href="#beranda" className="text-base sm:text-lg font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="text-base sm:text-lg font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" className="text-base sm:text-lg font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#" className="text-base sm:text-lg font-medium">
            Kontak
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Navbar