'use client'

import * as React from 'react'
import ky from 'ky-universal'
import { useForm } from 'react-hook-form'

type SubscribeState = {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'
  value: string
  error: string | null
}

async function subscribe({
  email,
  firstName,
  lastName,
}: {
  email: string
  firstName: string
  lastName: string
}) {
  const response: any = await ky
    .post('/api/subscribe', { json: { email, firstName, lastName } })
    .json()

  return response
}

type FormState = {
  email: string
  firstName: string
  lastName: string
}

function SubscribeForm() {
  const [subscribeState, setSubscribeState] = React.useState<SubscribeState>({
    status: 'IDLE',
    value: '',
    error: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>()

  async function onSubmit(data: FormState) {
    try {
      const result = await subscribe({ ...data })

      setSubscribeState({
        status: 'SUCCESS',
        value: 'Thnk you so much for signing up!',
        error: null,
      })
    } catch (error) {
      const e: any = error
      const m = await e.response.json()
      console.log({ e: m })
      switch (e.response.status) {
        case 400:
          setSubscribeState({
            status: 'SUCCESS',
            value: 'Oh - you must have forgot, you already subscribed! Thanks!',
            error: null,
          })
          break
        case 403:
        case 406:
        case 500:
          setSubscribeState({
            status: 'ERROR',
            value: '',
            error: 'STUFFFFF',
          })
          break
      }
    }
  }

  if (
    subscribeState.status === 'SUCCESS' &&
    subscribeState.value.includes('already')
  ) {
    return <div>{subscribeState.value}</div>
  }

  if (subscribeState.status === 'SUCCESS') {
    return <div>{subscribeState.value}</div>
  }

  if (subscribeState.status === 'ERROR') {
    return <div>{subscribeState.value}</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
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
                {...register('firstName')}
                id="firstName"
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
                {...register('lastName')}
                id="lastName"
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
                {...register('email')}
                id="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-yellow-400 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-dark shadow-sm hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
