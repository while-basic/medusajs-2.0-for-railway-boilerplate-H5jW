import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"
import { getProductsList } from "@lib/data/products"
import { StoreProduct } from "@medusajs/types"
import { getRegion } from "@lib/data/regions"

export default async function HomePage({ params: { countryCode } }: { params: { countryCode: string } }) {
  // Fetch featured products and region
  const region = await getRegion(countryCode)
  const { response: { products } } = await getProductsList({
    pageParam: 1,
    queryParams: { 
      limit: 6,
      region_id: region?.id 
    },
    countryCode
  })

  return (
    <div className="flex flex-col bg-dark-bg text-dark-text">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/hero-fashion.jpg')] bg-cover bg-center opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl">
              Elevate Your<br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Style Game</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Discover premium fashion that defines your unique identity.
              Curated collections for the bold and sophisticated.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link href={`/${countryCode}/store`}>
                <Button className="w-full bg-white px-8 py-4 text-black hover:bg-gray-100 sm:w-auto">
                  Explore Collection
                </Button>
              </Link>
              <Link href={`/${countryCode}/collections`}>
                <Button variant="secondary" className="w-full border-2 border-white bg-transparent px-8 py-4 text-white hover:bg-white hover:text-black sm:w-auto">
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              New Arrivals
            </Heading>
            <p className="text-xl text-gray-400">
              Latest additions to our collection
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: StoreProduct) => (
              <Link 
                key={product.id} 
                href={`/${countryCode}/products/${product.handle}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                  {product.thumbnail && (
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    <p className="mt-2 text-gray-300">{product.subtitle || 'Shop now'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${countryCode}/store`}>
              <Button variant="secondary" className="border-2 border-white bg-transparent px-8 py-4 text-white hover:bg-white hover:text-black">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="border-t border-dark-accent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Trending Now
            </Heading>
            <p className="text-xl text-gray-400">
              Most loved pieces this season
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-h-1 aspect-w-1">
                <Image
                  src="/trending-1.jpg"
                  alt="Trending Collection 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white">Summer Essentials</h3>
                  <p className="mt-2 text-gray-300">Light, breathable pieces for the warmer days</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-h-1 aspect-w-1">
                <Image
                  src="/trending-2.jpg"
                  alt="Trending Collection 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white">Urban Collection</h3>
                  <p className="mt-2 text-gray-300">Street style with an edge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="border-t border-dark-accent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              What Our Customers Say
            </Heading>
            <p className="text-xl text-gray-400">
              Real experiences from our community
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/testimonial-1.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Sarah M.</h4>
                  <p className="text-gray-400">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;The quality of their products is outstanding. Every piece I&apos;ve purchased has become a staple in my wardrobe.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/testimonial-2.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">James R.</h4>
                  <p className="text-gray-400">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;Exceptional customer service and fast shipping. The attention to detail in packaging is impressive.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/testimonial-3.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Emma L.</h4>
                  <p className="text-gray-400">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-300">
                &ldquo;Love the sustainable approach and timeless designs. These pieces are worth every penny.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-dark-accent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading level="h2" className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              The Dead Rose Experience
            </Heading>
            <p className="text-xl text-gray-400">
              What sets us apart
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature cards with hover effect */}
            <div className="group rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Curated Quality</h3>
              <p className="text-gray-400">Each piece is carefully selected for exceptional quality and style.</p>
            </div>

            <div className="group rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Express Delivery</h3>
              <p className="text-gray-400">Global shipping with real-time tracking and updates.</p>
            </div>

            <div className="group rounded-xl border border-dark-accent bg-black/40 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Satisfaction Promise</h3>
              <p className="text-gray-400">30-day returns with our no-questions-asked guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
