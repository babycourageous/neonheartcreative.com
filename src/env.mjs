import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    MAILCHIMP_API_KEY: z.string(),
    MAILCHIMP_AUDIENCE_ID: z.string(),
  },
})
