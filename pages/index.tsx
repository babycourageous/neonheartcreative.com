import 'twin.macro'
import Head from 'next/head'
import Image from 'next/image'

import { pricing } from '../data/pricing'

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

      <header tw="w-full">
        <div tw="relative h-20">
          <Image
            src="/assets/images/nh-logo.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>
      <main tw="">
        <section tw="container mt-6 mx-auto px-4">
          <p tw="text-3xl font-extralight">Hi! I'm Jess. </p>
          <p>
            I am a self taught interior designer based in Atlanta, GA that most
            would say has been designing in some shape or form my whole life. I
            tackle everything from office spaces to home Decor to DIY house
            projects to special events.
          </p>
          <p tw="mt-2">
            I know how to take your budget and bring your vision to life.
          </p>
          <div tw="flex items-center justify-center w-full mt-4">
            <Image
              src="/assets/images/hello-there.png"
              alt=""
              width={250}
              height={250}
            />
          </div>
        </section>

        <section tw="container mt-6 mx-auto px-4">
          <h2 tw="text-3xl font-extralight">My Process</h2>
          <dd>
            <dt tw="font-bold mt-2">Intake</dt>
            <dd>
              We begin with a 45-minute consultation. During this time, we will
              define your design goals and review the design process. This time
              may include site visits or a virtual meeting.
            </dd>
            <dt tw="font-bold mt-2">Design Development</dt>
            <dd>
              We will collaborate on a Pinterest board to define the style of
              your design. I'll present colors and pictures of a variety of
              designs. Your job is to identify the palettes and images that most
              identify with your vision.
            </dd>
            <dt tw="font-bold mt-2">Delivery</dt>
            <dd>
              This is the exciting phase as your design is curated. You will
              receive your design in : 1 PDF Mood Board (allowing 2
              revisions/changes) per room, 1 spreadsheet with options shown in
              PDF + 1-2 variations in color/price per room.
            </dd>
            <dt tw="font-bold mt-2">Project Close</dt>
            <dd>
              We will end your design with a tour of your final project. The
              review will entail a 45 minutes walk-through to ensure that all
              items on your final punch list are complete and your vision has
              come to fruition. Once you sign off, you are ready to live and
              entertain in the house of your dreams!
            </dd>
          </dd>
        </section>

        <section tw="container mt-6 mx-auto px-4">
          <h2 tw="text-3xl font-extralight">Pricing</h2>

          <div tw="min-w-full space-y-2">
            {pricing.map((item) => (
              <div tw="flex justify-between">
                <div>
                  <div tw="text-sm font-medium text-gray-900">{item.label}</div>
                  <div tw="text-sm text-gray-500">{item.description}</div>
                </div>
                <div tw="ml-6">{item.price}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer tw="container flex items-center justify-center mt-6 mx-auto px-4 py-4">
        <div tw="p-1">
          <svg
            tw="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"></path>
            <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
            <circle cx="18.5" cy="5.5" r="1.5"></circle>
          </svg>
        </div>
        <div tw="p-1">
          <svg
            tw="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path
                  d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z"
                />
              </g>
            </g>
          </svg>
        </div>
      </footer>
    </>
  )
}
