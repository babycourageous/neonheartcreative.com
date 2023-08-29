function Process() {
  return (
    <section
      className="mx-auto mt-6 max-w-3xl px-4 py-8"
      aria-labelledby="process-heading"
    >
      <h2 id="process-heading" className="text-3xl font-extralight">
        The Process
      </h2>
      <dl className="mt-2">
        <dt className="font-alt font-bold">Intake</dt>
        <dd>
          We begin with a 30-minute consultation. During this time, we will
          define your design goals and review the design process. This time may
          include site visits or a virtual meeting.
        </dd>
        <dt className="mt-5 font-alt font-bold">Design Development</dt>
        <dd>
          {`We will collaborate on a Pinterest board to define the style of
              your design. I'll present colors and pictures of a variety of
              designs. Your job is to identify the palettes and images that most
              identify with your vision.`}
        </dd>
        <dt className="mt-5 font-alt font-bold">Delivery</dt>
        <dd>
          This is the exciting phase as your design is curated. You will receive
          your design in : 1 PDF Mood Board (allowing 2 revisions/changes) per
          room, 1 spreadsheet with options shown in PDF + 1-2 variations in
          color/price per room.
        </dd>
        <dt className="mt-5 font-alt font-bold">Project Close</dt>
        <dd>
          We will end your design with a tour of your final project. The review
          will entail a 45-minute walk-through to ensure that all items on your
          final punch list are complete and your vision has come to fruition.
          Once you sign off, you are ready to live and entertain in the house of
          your dreams!
        </dd>
      </dl>
    </section>
  )
}

export { Process }
