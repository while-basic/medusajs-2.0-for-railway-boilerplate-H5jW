import { Suspense } from "react"
import { Button, Heading } from "@medusajs/ui"
import { LayoutGrid, List, Search, ArrowUpDown } from "lucide-react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="flex flex-col bg-dark-bg">
      {/* Store Header */}
      <div className="relative bg-black py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Heading level="h1" className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Collection
            </Heading>
            <p className="text-lg text-gray-300">
              Discover our carefully curated selection of premium products.
              Each piece is chosen for its quality, style, and timeless appeal.
            </p>
          </div>
          {/* Search Bar */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 pl-10 text-white placeholder-gray-400 backdrop-blur-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="border-t border-dark-accent bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Category 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-dark-accent">
              <div className="aspect-h-1 aspect-w-1">
                <div className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-lg font-medium text-white">New Arrivals</span>
              </div>
            </div>
            {/* Category 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-dark-accent">
              <div className="aspect-h-1 aspect-w-1">
                <div className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-lg font-medium text-white">Best Sellers</span>
              </div>
            </div>
            {/* Category 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-dark-accent">
              <div className="aspect-h-1 aspect-w-1">
                <div className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-lg font-medium text-white">Sale</span>
              </div>
            </div>
            {/* Category 4 */}
            <div className="group relative overflow-hidden rounded-lg bg-dark-accent">
              <div className="aspect-h-1 aspect-w-1">
                <div className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-lg font-medium text-white">Collections</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 small:flex-row small:items-start">
          {/* Filters Sidebar */}
          <div className="flex-shrink-0 small:sticky small:top-20 small:w-64">
            <div className="rounded-lg border border-dark-accent bg-black/40 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-medium text-white">Refine Selection</h2>
              <RefinementList sortBy={sort} />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-medium text-white" data-testid="store-page-title">
                All Products
              </h2>
              
              {/* View Options */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-dark-accent bg-black/40 p-2 backdrop-blur-sm">
                  <button className="rounded p-1 hover:bg-white/10" title="Grid view">
                    <LayoutGrid className="h-5 w-5 text-gray-300" />
                  </button>
                  <button className="rounded p-1 hover:bg-white/10" title="List view">
                    <List className="h-5 w-5 text-gray-300" />
                  </button>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-dark-accent bg-black/40 p-2 backdrop-blur-sm">
                  <button className="flex items-center gap-1 rounded px-2 py-1 hover:bg-white/10">
                    <ArrowUpDown className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">Sort</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-dark-accent bg-black/40 p-6 backdrop-blur-sm">
              <Suspense fallback={<SkeletonProductGrid />}>
                {/* @ts-expect-error Server Component */}
                <PaginatedProducts
                  sortBy={sort}
                  page={pageNumber}
                  countryCode={countryCode}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
