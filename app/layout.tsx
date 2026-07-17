import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Script from 'next/script'
import { themeInitScript } from './lib/theme'
import './globals.css'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-fira-code',
})

const SITE_URL = 'https://kinalone.dev'
const SITE_NAME = 'kinalone.dev'
const AUTHOR = 'Marina Kinalone Simonnet'
const DESCRIPTION =
  'Marina Kinalone Simonnet is a software engineer and UX-informed frontend developer based in Lisbon.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${AUTHOR} — Software Engineer`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  publisher: AUTHOR,
  keywords: [
    AUTHOR,
    'Marina Kinalone',
    'software engineer',
    'frontend developer',
    'frontend architecture',
    'UX',
    'React',
    'TypeScript',
    'Lisbon',
    'portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${AUTHOR} — Software Engineer`,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${AUTHOR} — Software Engineer`,
    description: DESCRIPTION,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR,
  alternateName: 'Marina Kinalone',
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lisbon',
    addressCountry: 'PT',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Trustly',
  },
  sameAs: [
    'https://github.com/marinakinalone',
    'https://www.linkedin.com/in/marinakinalone-simonnet/',
    'https://astroniste.com/',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={firaCode.variable} suppressHydrationWarning>
      <body className={firaCode.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
