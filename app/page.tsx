import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import { CtgProvider } from "./Context/CtgContext";


export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F5C347] dark:bg-yellow-600">
      <CtgProvider>
      <Navbar btnmsg="Get Started" back={true}/>
      <div className="relative z-20">
        <Poster/>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <FrontPage/>
      </div>
      </CtgProvider>
    </main>
  )
}
