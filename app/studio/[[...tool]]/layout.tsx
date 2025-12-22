import type { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio CMS Studio',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'noindex',
  referrer: 'origin',
}

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
