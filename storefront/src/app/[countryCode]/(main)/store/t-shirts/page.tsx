import { Heading } from "@medusajs/ui"

export default function TShirtsPage() {
  return (
    <div className="content-container py-6">
      <div className="mb-8 text-center">
        <Heading level="h1" className="mb-2 text-3xl font-bold">
          Premium T-Shirts Collection
        </Heading>
        <p className="text-base-regular text-gray-600">
          Express your style with our collection of premium t-shirts
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Product grid will be populated from Medusa */}
          <div className="animate-pulse bg-gray-100 p-4">
            <div className="mb-4 h-48 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>
          </div>
          {/* Repeat placeholder for visual layout */}
          <div className="animate-pulse bg-gray-100 p-4">
            <div className="mb-4 h-48 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>
          </div>
          <div className="animate-pulse bg-gray-100 p-4">
            <div className="mb-4 h-48 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>
          </div>
          <div className="animate-pulse bg-gray-100 p-4">
            <div className="mb-4 h-48 w-full rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 