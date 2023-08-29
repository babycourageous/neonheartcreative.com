import * as React from 'react'

function Packages() {
  return (
    <section
      className="mx-auto mt-6 max-w-3xl px-4 py-8"
      aria-labelledby="event-heading"
    >
      <h2 id="event-heading" className="text-3xl font-extralight">
        Event Planning Packages
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Includes a shared Pinterest board for overall feel/theme of your event,
        digital mood boards for final selection, spreadsheets of
        articles/food/entertainment recommended, budgeting, and help ordering.
        If needed on-site for the day of the event, an additional day rate will
        be applied.
      </p>

      <div className="mt-2 min-w-full space-y-2">
        <div className="flex justify-between">
          <div>
            <div className="font-alt text-sm font-bold text-gray-900">
              1-50 people
            </div>
          </div>
          <div className="ml-6">$500</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-alt text-sm font-bold text-gray-900">
              50-100 people
            </div>
          </div>
          <div className="ml-6">$750</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-alt text-sm font-bold text-gray-900">
              100+ people
            </div>
          </div>
          <div className="ml-6">$1000</div>
        </div>
      </div>
    </section>
  )
}

export { Packages }
