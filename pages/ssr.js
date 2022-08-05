import React from "react";
import Link from "next/link";
import Navbar from "components/Navbar";

function Ssr({ data }) {
  return (
    <>
      <Navbar fixed />
      <section className="header relative pt-24 items-center flex ">
        <div className="container mx-auto flex flex-wrap">
          <div className="relative flex flex-col min-w-0 break-words w-full lg:w-6/12 mx-auto border-0">
            <div className="w-full px-4 mb-6">
              <h2 className="text-xl font-bold mb-6">
                SSR Example
              </h2>
              <div className="w-full text-center px-4">
                <h2 className="text-sm text-left font-bold mb-3">
                  Date and Time
                </h2>
                <input
                  disabled={true}
                  type="text"
                  id="datetime"
                  name="datetime"
                  defaultValue={data.datetime}
                  placeholder="date and time"
                  className="mb-3 px-3 py-3 placeholder-slate-300 text-slate-600 relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full bg-slate-200 border-slate-300"
                />
                <Link href="/ssr">
                  <button
                    className="bg-slate-700 text-white active:bg-slate-600 font-bold uppercase text-sm w-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const now = new Date();
  const data = {
    datetime: now.getFullYear()
      + '/' + ('0' + (now.getMonth() + 1)).slice(-2)
      + '/' + ('0' + now.getDate()).slice(-2)
      + ' ' + ('0' + now.getHours()).slice(-2)
      + ':' + ('0' + now.getMinutes()).slice(-2)
      + ':' + ('0' + now.getSeconds()).slice(-2)
  };
  return { props: { data } }
}

export default Ssr;
