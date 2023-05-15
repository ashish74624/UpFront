import { Cormorant_Garamond } from "next/font/google"

const cor = Cormorant_Garamond({
    subsets:['cyrillic'],
    weight:'400'
})

export default function Footer() {
  return (
    <>
     <footer className={`${cor.className} overflow-hidden lg:h-8 w-screen text-white bg-black flex justify-center items-center`}>
        Created By : Ashish Kumar
    </footer> 
    </>
  )
}
