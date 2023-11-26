import { Cormorant_Garamond } from "next/font/google"

const cor = Cormorant_Garamond({
    subsets:['cyrillic'],
    weight:'400'
})

export default function Footer() {
  return (
    <>
     <footer className={`${cor.className} overflow-hidden lg:h-8 w-screen text-white bg-black flex justify-center items-center`}>
        Created By :<a className="hover:underline-offset-1 hover:underline pl-1" target="_main" href="https://ashish74624.vercel.app">Ashish Kumar</a>
    </footer> 
    </>
  )
}
