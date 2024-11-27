import React from 'react'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Immersive Sound Quality.',
    description:
      'Enjoy rich bass and crisp audio for music, calls, and podcasts.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Active Noise Cancellation.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Compact Design & Comfort.',
    description: 'Ergonomically designed for a snug fit, ideal for extended wear.',
    icon: ServerIcon,
  },
]


function Carousel() {
  return (
    <div>

<div className="overflow-hidden bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Best-selling product</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Airpod Pro Clone
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Elevate your listening experience with the AirPods Pro Clone, offering premium features at a fraction of the cost. Perfect for daily use, these earbuds combine style, performance, and comfort for a seamless audio experience.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://static.vecteezy.com/system/resources/previews/046/787/059/non_2x/white-earbuds-in-transparent-background-free-png.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Carousel