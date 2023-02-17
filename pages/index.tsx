import Head from 'next/head'
import Image from 'next/image'

import { pricing } from '../data/pricing'
import SubscribeForm from '../components/subscribe-form'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neon Heart Creative</title>
        <meta
          name="description"
          content="Neon Heart Creative is Jess Jones, an Atlanta based interior designer who specializes in design and decor for homes, office spaces, DIY projects, and events."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full py-4">
        <div className="relative h-20">
          <Image
            src="/assets/images/nh-logo.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>
      <main className="">
        <section
          className="max-w-3xl sm:flex sm:flex-row mt-6 mx-auto px-4 py-8"
          aria-label="About Neonheart Creative"
        >
          <div>
            <p className="text-3xl font-extralight">Hi! I'm Jess. </p>
            <p>
              I'm an interior designer based in Atlanta, GA. I tackle everything
              from office spaces to home decor to DIY house projects to special
              events.
            </p>
            <p className="mt-2">
              My approach to design is to pay respect to the original
              architecture and year your space was built with how we pick our
              design and decor - Pair that with things you truly love, and we've
              found the heart of your home
            </p>
          </div>
          <div className="flex items-center justify-center w-full mt-4 sm:mt-0">
            <img src="/assets/images/hello-there.png" alt="" />
          </div>
        </section>

        <section
          className="max-w-3xl mt-6 mx-auto px-4 py-8"
          aria-labelledby="process-heading"
        >
          <h2 id="process-heading" className="text-3xl font-extralight">
            The Process
          </h2>
          <dl className="mt-2">
            <dt className="font-alt font-bold">Intake</dt>
            <dd>
              We begin with a 30-minute consultation. During this time, we will
              define your design goals and review the design process. This time
              may include site visits or a virtual meeting.
            </dd>
            <dt className="font-alt font-bold mt-5">Design Development</dt>
            <dd>
              We will collaborate on a Pinterest board to define the style of
              your design. I'll present colors and pictures of a variety of
              designs. Your job is to identify the palettes and images that most
              identify with your vision.
            </dd>
            <dt className="font-alt font-bold mt-5">Delivery</dt>
            <dd>
              This is the exciting phase as your design is curated. You will
              receive your design in : 1 PDF Mood Board (allowing 2
              revisions/changes) per room, 1 spreadsheet with options shown in
              PDF + 1-2 variations in color/price per room.
            </dd>
            <dt className="font-alt font-bold mt-5">Project Close</dt>
            <dd>
              We will end your design with a tour of your final project. The
              review will entail a 45-minute walk-through to ensure that all
              items on your final punch list are complete and your vision has
              come to fruition. Once you sign off, you are ready to live and
              entertain in the house of your dreams!
            </dd>
          </dl>
        </section>

        <section
          className="max-w-3xl mt-6 mx-auto px-4 py-8"
          aria-labelledby="pricing-heading"
        >
          <h2 id="pricing-heading" className="text-3xl font-extralight">
            The Pricing
          </h2>

          <div className="min-w-full mt-2 space-y-2">
            {pricing.map((item) => (
              <div
                key={item.label}
                className="flex justify-between pl-1 py-1 pr-2 odd:bg-gray-100"
              >
                <div>
                  <div className="text-sm font-alt font-bold text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.description}
                  </div>
                </div>
                <div className="ml-6">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="max-w-3xl mt-6 mx-auto px-4 py-8"
          aria-labelledby="event-heading"
        >
          <h2 id="event-heading" className="text-3xl font-extralight">
            Event Planning Packages
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Includes a shared Pinterest board for overall feel/theme of your
            event, digital mood boards for final selection, spreadsheets of
            articles/food/entertainment recommended, budgeting, and help
            ordering. If needed on-site for the day of the event, an additional
            day rate will be applied.
          </p>

          <div className="min-w-full mt-2 space-y-2">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-alt font-bold text-gray-900">
                  1-50 people
                </div>
              </div>
              <div className="ml-6">$500</div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-alt font-bold text-gray-900">
                  50-100 people
                </div>
              </div>
              <div className="ml-6">$750</div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-alt font-bold text-gray-900">
                  100+ people
                </div>
              </div>
              <div className="ml-6">$1000</div>
            </div>
          </div>
        </section>

        <section
          className="max-w-3xl mt-6 mx-auto px-4 py-8"
          aria-label="Sign Up For The Newsletter"
        >
          <div className="relative h-20">
            <Image
              src="/assets/images/newsletter-heading.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mt-4">
            <SubscribeForm />
          </div>
        </section>
      </main>

      <footer className="max-w-3xl flex items-center justify-center mt-6 mx-auto px-4 py-4">
        <div className="p-1">
          <a
            href="https://www.instagram.com/neonheartcreative/"
            target="_blank"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"></path>
              <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
              <circle cx="18.5" cy="5.5" r="1.5"></circle>
            </svg>
          </a>
        </div>
        <div className="p-1">
          <a href="mailto:neonheartcreative@gmail.com" target="_blank">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
