'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import ky from 'ky-universal'

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
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
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
                className="mt-1 focus:ring-yellow-400 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                className="mt-1 focus:ring-yellow-400 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                className="mt-1 focus:ring-yellow-400 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-dark bg-primary hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
