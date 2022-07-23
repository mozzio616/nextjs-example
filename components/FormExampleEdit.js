import React, { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function FormExample() {

  const router = useRouter()
  const { name } = router.query

  const [isLoading, setLoading] = useState(false)
  const [newName, setName] = useState(name)

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'newName':
        setName(e.target.value);
        break;
      default:
        console.log('key not found')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .get("/api/form")
      .then((res) => {
        setLoading(false)
        router.push("/forms?name=" + newName)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full lg:w-6/12 mx-auto border-0">
      <div className="w-full px-4 mb-6">
        <h2 className="text-xl font-bold mb-6">
          Form Example
        </h2>
        <div className="w-full text-center px-4">
          <form onSubmit={handleSubmit}>
            <input
              disabled={isLoading ? true : false}
              type="text"
              id="newName"
              name="newName"
              defaultValue={name}
              value={isLoading ? "saving..." : newName}
              placeholder="Name"
              className={
                "mb-3 px-3 py-3 placeholder-slate-300 text-slate-600 relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full "
                + (isLoading ? "bg-slate-200 border-slate-300" : "bg-wthie border-slate-700")
              }
              onChange={handleChange}
            />
            {isLoading
              ?
              <button
                className="bg-slate-400 text-white active:bg-slate-600 font-bold uppercase text-sm w-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                disabled
              >
                <i className="fas fa-circle-notch animate-spin text-slate-300 mx-auto"></i>
              </button>
              :
              <>
                <button
                  className="bg-slate-400 text-white active:bg-slate-600 font-bold uppercase text-sm w-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
                <button
                  className="bg-slate-700 text-white active:bg-slate-600 font-bold uppercase text-sm w-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Update
                </button>
              </>
            }
          </form>
        </div>
      </div>
    </div>
  )
}