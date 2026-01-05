import { useState, useEffect } from "react"

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1200)
    const end = setTimeout(() => setLoading(false), 1600)

    return () => {
      clearTimeout(timer)
      clearTimeout(end)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-500 ease-in-out ${
        hide ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <span className="absolute inset-0 rounded-full bg-purple-500/40 animate-ping" />
          <svg
            aria-hidden="true"
            className="relative h-12 w-12 animate-spin text-white/30 fill-purple-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289"
              fill="currentFill"
            />
          </svg>
        </div>

        <span className="text-sm tracking-widest text-white/70 animate-pulse">
          LOADING
        </span>
      </div>
    </div>
  )
}

export default Preloader
