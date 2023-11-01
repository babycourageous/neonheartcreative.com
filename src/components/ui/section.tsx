import { PropsWithChildren } from '@/types'

type Props = PropsWithChildren<
  Omit<React.ComponentPropsWithoutRef<'section'>, 'className'>
>
function Section(props: Props) {
  return <section className="mx-auto mt-6 max-w-3xl px-4 py-8" {...props} />
}

export { Section }
