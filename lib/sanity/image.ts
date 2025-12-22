import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import type { SanityImageSource } from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getImageUrl(source: SanityImageSource, width?: number, height?: number) {
  let url = urlFor(source).auto('format').fit('max')

  if (width) url = url.width(width)
  if (height) url = url.height(height)

  return url.url()
}
