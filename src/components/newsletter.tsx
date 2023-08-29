import * as React from 'react'
import Image from 'next/image'

import SubscribeForm from './subscribe-form'

function Newsletter() {
  return (
    <section
      className="mx-auto mt-6 max-w-3xl px-4 py-8"
      aria-label="Sign Up For The Newsletter"
    >
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
    </section>
  )
}

export { Newsletter }
