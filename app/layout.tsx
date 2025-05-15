import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "./theme-provider"
import Navbar from '@/components/Navbar'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // customize as needed
  variable: '--font-poppins',
})

export const metadata = {
  title: 'TaskNinja',
  description: 'slay your task like a boss!.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body> 
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
            {children}
          </ThemeProvider>  
      </body>
    </html>
  )
}



