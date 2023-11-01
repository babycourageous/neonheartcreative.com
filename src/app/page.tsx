import { About } from '@/components/about'
import { Newsletter } from '@/components/newsletter'
import { Packages } from '@/components/packages'
import { Pricing } from '@/components/pricing'
import { Process } from '@/components/process'

export default function HomePage() {
  return (
    <>
      <About />
      <Process />
      <Pricing />
      <Packages />
      <Newsletter />
    </>
  )
}
