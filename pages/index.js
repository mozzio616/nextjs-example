import Navbar from "components/Navbar";
import Examples from "components/Examples";

export default function Home() {
  return (
    <>
      <Navbar fixed />
      <section className="header relative pt-24 items-center flex ">
        <div className="container mx-auto items-center flex flex-wrap">
          <Examples />
        </div>
      </section>
    </>
  )
}
