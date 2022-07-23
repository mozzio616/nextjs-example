import Navbar from "components/Navbar";
import FormExample from "components/FormExample";

export default function Home() {
  return (
    <>
      <Navbar fixed />
      <section className="header relative pt-24 items-center flex ">
        <div className="container mx-auto flex flex-wrap">
          <FormExample />
        </div>
      </section>
    </>
  )
}
