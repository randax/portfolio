import { groq } from 'next-sanity'

export const personalInfoQuery = groq`
  *[_type == "personalInfo"][0] {
    name,
    role,
    intro,
    "bio": coalesce(bio, []),
    "skills": coalesce(skills, []),
    profileImage,
    social
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    "tech": coalesce(tech, []),
    github,
    external,
    image,
    order
  }
`

export const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc) {
    _id,
    company,
    role,
    period,
    description,
    "skills": coalesce(skills, []),
    order
  }
`

export const certificationsQuery = groq`
  *[_type == "certification"] | order(order asc) {
    _id,
    name,
    issuer,
    date,
    badge,
    link,
    order
  }
`

export const speakingQuery = groq`
  *[_type == "speaking"] | order(order asc) {
    _id,
    title,
    event,
    location,
    date,
    description,
    videoLink,
    slidesLink,
    order
  }
`

export const blogPostsQuery = groq`
  *[
    _type == "blogPost" &&
    (!defined($tagFilter) || $tagFilter in coalesce(tags, []))
  ]
    | order(publishedAt desc)[$offset...($offset + $pageSize)] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readTime,
    "tags": coalesce(tags, []),
    excerpt,
    coverImage
  }
`

export const blogPostsCountQuery = groq`
  count(*[
    _type == "blogPost" &&
    (!defined($tagFilter) || $tagFilter in coalesce(tags, []))
  ])
`

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)].slug.current
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    readTime,
    "tags": coalesce(tags, []),
    excerpt,
    content,
    coverImage
  }
`
