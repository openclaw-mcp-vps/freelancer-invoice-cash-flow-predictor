import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceFlow — Predict Cash Flow from Pending Invoices',
  description: 'Analyzes invoice payment patterns to predict when you will actually get paid. Built for freelancers and consultants with recurring clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d999b254-7e21-449a-aaf9-233377cbf136"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
