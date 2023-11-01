import Image from 'next/image'

import profilePic from '@/resources/hello-there.png'
import { Section } from './ui/section'

function About() {
  return (
    <Section aria-label="About Neonheart Creative">
      <div className="sm:flex sm:flex-row">
        <div>
          <p className="text-3xl font-extralight">{`Hi! I'm Jess.`}</p>
          <p>
            {`I'm an interior designer based in Atlanta, GA. I tackle everything
                from office spaces to home decor to DIY house projects to special
                events.`}
          </p>
          <p className="mt-2">
            {`My approach to design is to pay respect to the original
                architecture and year your space was built with how we pick our
                design and decor - Pair that with things you truly love, and we've
                found the heart of your home.`}
          </p>
        </div>
        <div className="relative mt-4 flex w-full items-center justify-center sm:mt-0">
          <Image src={profilePic} className="object-cover" alt="Profile Pic" />
        </div>
      </div>
    </Section>
  )
}

export { About }
