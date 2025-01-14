import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const ApparelFeatured = () => {
  const collections = [
    {
      id: "hoodies",
      handle: "hoodies",
      title: "Hoodies Collection",
      thumbnail: "/hoodies-collection.jpg"
    },
    {
      id: "tshirts",
      handle: "t-shirts",
      title: "T-Shirts Collection",
      thumbnail: "/tshirts-collection.jpg"
    }
  ]

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="mb-8 flex flex-col items-center text-center">
          <Heading level="h2" className="mb-4 text-3xl font-bold">
            Featured Collection
          </Heading>
          <p className="text-base-regular max-w-2xl text-gray-600">
            Browse our carefully curated collection of premium hoodies and t-shirts.
            Each piece is crafted with attention to detail and comfort in mind.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {collections.map((collection) => (
            <li key={collection.id}>
              <InteractiveLink href={`/us/collections/${collection.handle}`}>
                <div className="group relative overflow-hidden rounded-lg bg-gray-100">
                  <div className="aspect-h-4 aspect-w-3">
                    <div className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 p-6">
                    <div>
                      <p className="text-sm text-white">{collection.title}</p>
                      <h3 className="mt-2 font-medium text-white">
                        <span className="absolute inset-0" />
                        View Collection
                      </h3>
                    </div>
                  </div>
                </div>
              </InteractiveLink>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <InteractiveLink href="/us/store">
            <Button variant="secondary">
              View All Products
            </Button>
          </InteractiveLink>
        </div>
      </div>
    </div>
  )
}

export default ApparelFeatured 