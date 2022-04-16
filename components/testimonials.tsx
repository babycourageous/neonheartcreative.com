import * as React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import type {
  KeenSliderHooks,
  KeenSliderInstance,
  KeenSliderOptions,
  SliderInstance,
} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { testimonials } from '../data/testimonials'
import tw from 'twin.macro'

function loopPlugin(
  slider: SliderInstance<
    KeenSliderOptions<{}, {}, KeenSliderHooks>,
    KeenSliderInstance<{}, {}, KeenSliderHooks>,
    KeenSliderHooks
  >
) {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 2000)
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}

function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setIsLoaded(true)
      },
    },
    [loopPlugin]
  )

  return (
    <section tw="bg-white py-12 px-4">
      {/* <section tw="bg-neonheart-400 py-12 px-4"> */}
      <div
        ref={sliderRef}
        className="keen-slider"
        tw="max-w-2xl mx-auto bg-neonheart-400 rounded-lg shadow"
        // tw="flex flex-col max-w-2xl mx-auto text-center bg-neonheart-400 rounded-lg shadow divide-y divide-gray-200"
      >
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="keen-slider__slide"
              tw="flex-1 flex flex-col p-8"
            >
              <img
                tw="w-32 h-32 flex-shrink-0 mx-auto rounded-full object-cover"
                src={`/assets/images/testimonials/${testimonial.image}`}
                alt=""
              />
              <p tw="mt-4">{testimonial.quote}</p>
              <h3 tw="mt-6 text-gray-900 text-sm font-medium">
                {testimonial.author}
              </h3>
              {testimonial.role ? (
                <dl tw="mt-1 flex-grow flex flex-col justify-between">
                  <dt tw="sr-only">Title</dt>
                  <dd tw="text-gray-500 text-sm">{testimonial.role}</dd>
                </dl>
              ) : null}
            </div>
          )
        })}
      </div>

      {isLoaded && instanceRef.current ? (
        <div tw="flex justify-center py-3">
          {Array.from(
            Array(instanceRef.current.track.details.slides.length).keys()
          ).map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                css={[
                  tw`w-3 h-3 my-0 mx-1 p-1 border-none rounded-full bg-gray-300 cursor-pointer`,
                  currentSlide === idx && tw`bg-neonheart-900`,
                ]}
              ></button>
            )
          })}
        </div>
      ) : null}
    </section>
  )
}

export default Testimonials
