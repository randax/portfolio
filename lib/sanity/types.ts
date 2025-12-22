import type { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'

export interface PersonalInfo {
  name: string
  role: string
  intro: string
  bio: string[]
  skills: string[]
  profileImage?: SanityImageSource
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface Project {
  _id: string
  title: string
  description: string
  tech: string[]
  github?: string
  external?: string
  image?: SanityImageSource
  order: number
}

export interface Experience {
  _id: string
  company: string
  role: string
  period: string
  description: string
  skills: string[]
  order: number
}

export interface Certification {
  _id: string
  name: string
  issuer: string
  date: string
  badge?: SanityImageSource
  link?: string
  order: number
}

export interface Speaking {
  _id: string
  title: string
  event: string
  location: string
  date: string
  description: string
  videoLink?: string
  slidesLink?: string
  order: number
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  readTime?: string
  tags: string[]
  excerpt: string
  coverImage?: SanityImageSource
}

export type PortableTextCodeBlock = {
  _type: 'code'
  language?: string
  code: string
  filename?: string
}

export interface BlogPostDetail extends BlogPost {
  content: Array<PortableTextBlock | PortableTextCodeBlock | ArbitraryTypedObject>
}
