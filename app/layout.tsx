import type { Metadata } from 'next'

import 'assets/styles/colors.css'
import 'assets/styles/html-core.css'
import { Analytics } from '@vercel/analytics/react'

import { montserrat } from 'assets/styles/fonts'
import { LoaderContextProvider } from 'context/LoaderContext'
import AuthSessionProvider from 'providers/SessionProvider'
import SnackBarProvider from 'providers/SnackBarProvider'
import TanstackProvider from 'providers/TanstackProvider'

export const metadata: Metadata = {
  title: 'Fonda 2024',
  description:
    '¡Únete a la celebración en nuestra Fonda 2024! Disfruta de música, comida típica y un ambiente lleno de tradición en el Colegio Chileno Árabe. ¡Te esperamos!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <AuthSessionProvider>
          <TanstackProvider>
            <LoaderContextProvider>
              <SnackBarProvider>
                {children}
                <Analytics />
              </SnackBarProvider>
            </LoaderContextProvider>
          </TanstackProvider>
        </AuthSessionProvider>
      </body>
    </html>
  )
}
