import Content from "./components/Content";
import Poster from "./components/Poster";


export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-20">
        <Poster/>
      </div>
      <div>
        <Content/>
      </div>
    </main>
  )
}
