/** @format */

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Max Buzin | Links',
	description: 'Next JS app (Typescript, TawilwindCSS), for my links',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
