import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const ApparelHero = () => {
  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <Heading level="h1" className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Premium Hoodies & T-Shirts
        </Heading>
        <p className="mb-8 max-w-2xl text-lg text-gray-200">
          Discover our collection of high-quality, comfortable apparel. 
          Made with sustainable materials and designed for everyday wear.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/us/store/hoodies">
            <Button variant="secondary" className="min-w-[150px] bg-white text-black hover:bg-gray-100">
              Shop Hoodies
            </Button>
          </Link>
          <Link href="/us/store/t-shirts">
            <Button variant="secondary" className="min-w-[150px] border-2 border-white bg-transparent text-white hover:bg-white hover:text-black">
              Shop T-Shirts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApparelHero 