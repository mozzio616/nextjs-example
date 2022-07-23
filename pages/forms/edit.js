import Navbar from "components/Navbar";
import FormExampleEdit from "components/FormExampleEdit";

export default function Home() {
  return (
    <>
      <Navbar fixed />
      <section className="header relative pt-24 items-center flex ">
        <div className="container mx-auto flex flex-wrap">
          <FormExampleEdit />
        </div>
      </section>
    </>
  )
}
