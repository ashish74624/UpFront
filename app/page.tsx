import FrontPage from "./components/FrontPage";
import Poster from "./components/Poster";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="relative z-20">
        <Poster/>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <FrontPage/>
      </div>
    </main>
  )
}
