import { Inter } from 'next/font/google'
import { Providers } from '@/utils/providers';
import 'katex/dist/katex.min.css';
import '@/components/App.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Python and Family',
  description: 'Python and Family website',
  keywords: 'Math, statistics, nextjs, notebook'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Python and Family website" />
      <meta name="keywords" content="Math, statistics, nextjs, notebook" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <body className={inter.className} style={{ margin: 0 }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
