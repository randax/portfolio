import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  token,
})

export const clientFetch = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  token,
})
