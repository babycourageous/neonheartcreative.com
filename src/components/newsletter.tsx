import * as React from 'react'
import Image from 'next/image'

import SubscribeForm from './subscribe-form'
import { Section } from './ui/section'

function Newsletter() {
  return (
    <Section aria-label="Sign Up For The Newsletter">
      <div className="relative h-20">
        <Image
          src="/assets/images/newsletter-heading.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="mt-4">
        <SubscribeForm />
      </div>
    </Section>
  )
}

export { Newsletter }
