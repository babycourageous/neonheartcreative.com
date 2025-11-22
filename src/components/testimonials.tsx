'use client'

import * as React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

import type {
  KeenSliderHooks,
  KeenSliderInstance,
  KeenSliderOptions,
  SliderInstance,
} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { testimonials } from '../data/testimonials'

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
    <section className="bg-white px-4 py-12">
      {/* <section className="bg-neonheart-400 py-12 px-4"> */}
      <div
        ref={sliderRef}
        className="keen-slider mx-auto max-w-2xl rounded-lg bg-neonheart-400 shadow-sm"
        // className="flex flex-col max-w-2xl mx-auto text-center bg-neonheart-400 rounded-lg shadow-sm divide-y divide-gray-200"
      >
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="keen-slider__slide flex flex-1 flex-col p-8"
            >
              <Image
                className="mx-auto h-32 w-32 shrink-0 rounded-full object-cover"
                src={`/assets/images/testimonials/${testimonial.image}`}
                alt=""
              />
              <p className="mt-4">{testimonial.quote}</p>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {testimonial.author}
              </h3>
              {testimonial.role ? (
                <dl className="mt-1 flex grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{testimonial.role}</dd>
                </dl>
              ) : null}
            </div>
          )
        })}
      </div>

      {isLoaded && instanceRef.current ? (
        <div className="flex justify-center py-3">
          {Array.from(
            Array(instanceRef.current.track.details.slides.length).keys()
          ).map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={clsx(
                  'mx-1 my-0 h-3 w-3 cursor-pointer rounded-full border-none bg-gray-300 p-1',
                  currentSlide === idx && 'bg-neonheart-900'
                )}
              ></button>
            )
          })}
        </div>
      ) : null}
    </section>
  )
}

export default Testimonials
