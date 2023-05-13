import '@/styles/globals.scss'
import Navbar from '@/components/Navbar.js'
import NavbarHome from '@/components/NavbarHome.js'
import { useRouter } from 'next/router'
import { window, document, exists } from 'browser-monads';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <header>
        {(router.pathname.match("/articles") || router.pathname.match("/qualifications") || router.pathname.match("/products") || router.pathname.match("/testimonials")) ? <Navbar /> : <NavbarHome />}
      </header>
      <Component {...pageProps} />
      
    </>
  )
}
