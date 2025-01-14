import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discover Your Style<br />
              <span className="text-gray-200">With Premium Fashion</span>
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              Explore our curated collection of premium clothing.
              Made for those who appreciate quality and style.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/us/store">
                <Button variant="secondary" className="w-full bg-white px-8 py-4 text-black hover:bg-gray-100 sm:w-auto">
                  Shop Now
                </Button>
              </Link>
              <Link href="/us/collections">
                <Button variant="secondary" className="w-full border-2 border-white bg-transparent px-8 py-4 text-white hover:bg-white hover:text-black sm:w-auto">
                  View Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-3xl font-bold sm:text-4xl">
              Latest Collections
            </Heading>
            <p className="text-lg text-gray-600">
              Explore our latest arrivals and trending styles
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Collection cards will be dynamically populated */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-h-9 aspect-w-16">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
                <div className="absolute inset-0 bg-gray-100 transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">New Arrivals</h3>
                <p className="mt-2 text-gray-200">Fresh styles for every season</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-h-9 aspect-w-16">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
                <div className="absolute inset-0 bg-gray-100 transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">Trending Now</h3>
                <p className="mt-2 text-gray-200">Current season's must-haves</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="aspect-h-9 aspect-w-16">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
                <div className="absolute inset-0 bg-gray-100 transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">Best Sellers</h3>
                <p className="mt-2 text-gray-200">Customer favorites</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-3xl font-bold sm:text-4xl">
              Why Choose Us
            </Heading>
            <p className="text-lg text-gray-600">
              Quality and comfort in every piece
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials for lasting comfort and durability.</p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-green-100 p-3">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep.</p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-8 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">Love your purchase or get your money back.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Stay Updated
            </Heading>
            <p className="mb-8 text-lg text-gray-300">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-96"
              />
              <Button variant="secondary" className="bg-white px-8 py-3 text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
