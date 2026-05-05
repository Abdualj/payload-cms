import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Kirjoituskonekauppa Pärnänen & Pojat - Klassisia kirjoituskoneita vuodesta 1952',
  title: 'Kirjoituskonekauppa Pärnänen & Pojat',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
