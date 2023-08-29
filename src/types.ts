import type { ReactNode } from 'react'

type PropsWithChildren<P = unknown> = P & { children: ReactNode }

export type { PropsWithChildren }
