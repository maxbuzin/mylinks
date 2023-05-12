/** @format */

import Image from 'next/image'
import { FaLink, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdPassword } from 'react-icons/md'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center w-full min-h-screen px-12 text-lg margin-0 bg-slate-800 text-slate-400'>
			<Image
				src='/max-logo.png'
				width={250}
				height={0}
				alt='Max Logo'
			/>
			<ul className='flex flex-col gap-4 py-8'>
				<li className='flex items-center gap-2 duration-500 cursor-not-allowed'>
					<FaLink size={20} />
					<p className='cursor-not-allowed'>maxbuzin.com</p>
				</li>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<FaInstagram size={20} />
					<a
						href='https://www.instagram.com/znk.dev/'
						target='_blank'>
						Instagram
					</a>
				</li>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<FaLinkedinIn size={20} />
					<a
						href='https://www.linkedin.com/in/maxbuzinpro/'
						target='_blank'>
						LinkedIn
					</a>
				</li>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<FaGithub size={20} />
					<a
						href='https://github.com/maxbuzin'
						target='_blank'>
						Github
					</a>
				</li>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<FaWhatsapp size={20} />
					<a
						href='https://wa.me/+971569023135'
						target='_blank'>
						WhatsApp Me
					</a>
				</li>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<MdEmail size={20} />
					<a
						href='mailto:maxbuzin@proton.me'
						target='_blank'>
						Still want email?
					</a>
				</li>
			</ul>
			<hr className='w-3/12 border-slate-900' />
			<h1 className='pt-8 text-2xl font-semibold'>Some of my projects...</h1>
			<ul className='flex flex-col gap-4 py-8'>
				<li className='flex items-center gap-2 duration-500 hover:text-slate-100'>
					<MdPassword size={20} />
					<a
						href='https://mypassgen.vercel.app/'
						target='_blank'>
						Password Generator
					</a>
				</li>
			</ul>
		</main>
	)
}
