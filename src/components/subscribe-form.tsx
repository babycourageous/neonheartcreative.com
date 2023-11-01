'use client'

import * as React from 'react'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { subscribe } from '@/app/actions/subscribe'

type SubscribeState = {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'
  value: string
  error: string | null
}

type FormState = z.infer<typeof formSchema>
type Props = {
  onSubmit: typeof subscribe
}
const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
})

const defaultValues: FormState = {
  firstName: '',
  lastName: '',
  email: '',
}

function SubscribeForm({ onSubmit }: Props) {
  const [subscribeState, setSubscribeState] = React.useState<SubscribeState>({
    status: 'IDLE',
    value: '',
    error: null,
  })

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const input = Object.fromEntries(formData)
    const parsedInput = formSchema.safeParse(input)
    if (!parsedInput.success) return
    const response = await onSubmit(parsedInput.data)
    console.log(response)
    toast(response.data?.message ?? '', { position: 'bottom-center' })
    // try {
    //   const result = await subscribe({ ...data })

    //   setSubscribeState({
    //     status: 'SUCCESS',
    //     value: 'Thnk you so much for signing up!',
    //     error: null,
    //   })
    // } catch (error) {
    //   const e: any = error
    //   const m = await e.response.json()
    //   console.log({ e: m })
    //   switch (e.response.status) {
    //     case 400:
    //       setSubscribeState({
    //         status: 'SUCCESS',
    //         value: 'Oh - you must have forgot, you already subscribed! Thanks!',
    //         error: null,
    //       })
    //       break
    //     case 403:
    //     case 406:
    //     case 500:
    //       setSubscribeState({
    //         status: 'ERROR',
    //         value: '',
    //         error: 'STUFFFFF',
    //       })
    //       break
    //   }
    // }
  }

  // if (
  //   subscribeState.status === 'SUCCESS' &&
  //   subscribeState.value.includes('already')
  // ) {
  //   return <div>{subscribeState.value}</div>
  // }

  // if (subscribeState.status === 'SUCCESS') {
  //   return <div>{subscribeState.value}</div>
  // }

  // if (subscribeState.status === 'ERROR') {
  //   return <div>{subscribeState.value}</div>
  // }

  return (
    <form onSubmit={handleSignUp} className="space-y-5">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <input
            type="text"
            defaultValue=""
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-yellow-400 sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <input
            type="text"
            defaultValue=""
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-yellow-400 sm:text-sm"
          />
        </div>
        <div className="col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="text"
            defaultValue=""
            id="email"
            name="email"
            autoComplete="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-yellow-400 sm:text-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-dark shadow-sm hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  )
}

export default SubscribeForm
