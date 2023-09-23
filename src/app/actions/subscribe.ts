'use server'

import { env } from '@/env.mjs'
import mailchimp from '@mailchimp/mailchimp_marketing'
import md5 from 'blueimp-md5'
import { z, ZodError } from 'zod'

import { action } from '@/lib/safe-action'

// import { fromZodError, isValidationError } from 'zod-validation-error'

import type { ErrorResponse } from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_API_KEY,
  server: 'us1',
})

const audienceId = env.MAILCHIMP_AUDIENCE_ID

const signUpSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  lastName: z.string(),
  email: z.string({ required_error: 'Email is required' }).email(),
})

function isMailchimpError(e: unknown): e is ErrorResponse {
  if (e && typeof e === 'object' && 'code' in e) {
    return true
  }
  return false
}

async function checkContactStatus(email: string) {
  try {
    const r = await mailchimp.lists.getListMember(
      audienceId,
      md5(email.toLowerCase())
    )
    console.log(r)
    return r.status
  } catch (e) {
    isMailchimpError(e) && console.log(e.status)
  }
}

async function addNewMember({
  email,
  firstName,
  lastName,
}: {
  email: string
  firstName: string
  lastName: string
}) {
  try {
    const response = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    })
  } catch (e) {
    if (isMailchimpError(e)) console.error(e.detail)
  }
}

function resubscribeContact(email: string) {
  return mailchimp.lists.updateListMember(
    audienceId,
    md5(email.toLowerCase()),
    {
      status: 'subscribed',
    }
  )
}

const subscribe = action(signUpSchema, async (value) => {
  const { email, firstName, lastName } = value

  const contactStatus = await checkContactStatus(email).catch((e) => e)

  if (!contactStatus) {
    // add new subscribed member
    await addNewMember({ email, firstName, lastName })
  } else if (contactStatus === 'subscribed') {
    // already subscribed
    return { message: 'You are already subscribed' }
  } else {
    // resub
    await resubscribeContact(email)
  }
})

export { subscribe }
