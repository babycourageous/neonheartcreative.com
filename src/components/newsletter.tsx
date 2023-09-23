import * as React from 'react'
import Image from 'next/image'

import { subscribe } from '@/app/actions/subscribe'
import SubscribeForm from './subscribe-form'
import { Card, CardContent, CardHeader } from './ui/card'
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
        <Card>
          <CardHeader />
          <CardContent>
            <SubscribeForm onSubmit={subscribe} />
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export { Newsletter }
