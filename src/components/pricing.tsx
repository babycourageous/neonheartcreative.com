import * as React from 'react'
import { pricing } from '@/data/pricing'

import { Section } from './ui/section'

function Pricing() {
  return (
    <Section aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="text-3xl font-extralight">
        The Pricing
      </h2>

      <div className="mt-2 min-w-full space-y-2">
        {pricing.map((item) => (
          <div
            key={item.label}
            className="flex justify-between py-1 pl-1 pr-2 odd:bg-gray-100"
          >
            <div>
              <div className="font-alt text-lg font-bold text-gray-900">
                {item.label}
              </div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
            <div className="ml-6">{item.price}</div>
          </div>
        ))}
        <div className="flex justify-between py-1 pl-1 pr-2 odd:bg-gray-100">
          <div>
            <div className="font-alt text-lg font-bold text-gray-900">
              Neon Heart Creative Retainer
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>
                Seamlessly servicing event & project needs that have a longer
                lifespan. Each month, clients will be able pay a flat fee to
                retain access to my creative services for the remainder of the
                year.
              </p>
              <p>This includes (but is not limited to):</p>

              <ul className="list-disc pl-4">
                <li>Styling & decor advisory</li>
                <li>Home decor shopping</li>
                <li>Holiday decorating</li>
                <li>Party planning</li>
              </ul>
              <p className="">
                Prices Starting at{' '}
                <span className="font-semibold text-gray-900">$300</span> a
                month
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Pricing }
