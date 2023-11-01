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
              <div className="font-alt text-sm font-bold text-gray-900">
                {item.label}
              </div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
            <div className="ml-6">{item.price}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { Pricing }
