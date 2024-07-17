import '@/app/globals.css'
import {
  proximanovaLight,
  proximanovaRegular,
  proximanovaSemibold,
} from '@/app/ui/fonts'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Medellin Booking React',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${proximanovaLight.variable} ${proximanovaRegular.variable} ${proximanovaSemibold.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
