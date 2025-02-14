export default function welcome() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Where the Sun Kisses the Fabric
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              A selection inspired by golden hours, ocean breezes, and the art of effortless elegance.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt="Camilla jewelry closeup"
                            src="https://i.shgcdn.com/b0476c34-df3a-498a-abf9-39e7632e3be0/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="La Doubble J"
                            src="https://aeworld.com/wp-content/uploads/2024/03/LDJ-Ramadan24-ByMarielaMedina0962.jpg"
        
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Pin Up"
                            src="https://www.pinup-stars.com/img/pinup-bikini-og-share.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Melissa"
                            src="https://us.odabash.com/cdn/shop/files/ashley-white-kaftan_lifestyle_2025_720x.progressive.jpg?v=1727790154"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Bond Eye"
                            src="https://www.bond-eye.com/cdn/shop/files/Collection-Tile_Tops_3.png?v=1738623185800"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Karatzou"
                            src="https://www.saltwatergreece.com/wp-content/uploads/2023/07/MARY_KATRANTZOU_SALTWATER-7.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Baobab"
                            src="https://www.saltwatergreece.com/wp-content/uploads/2024/04/BAOBAB_2024_SALTWATER-26.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="/products.jsx"
                  className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-800"
                  >
                  Explore the Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  