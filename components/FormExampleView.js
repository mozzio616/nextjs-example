import React, { useState } from "react"
import Link from "next/link"
import { useRouter, userRouter } from "next/router"

export default function FormExampleView() {

  const router = useRouter()
  let { name } = router.query

  if ( typeof name === "undefined") {
    name = "Anya Forger"
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full lg:w-6/12 mx-auto border-0">
      <div className="w-full px-4 mb-6">
        <h2 className="text-xl font-bold mb-6">
          Form Example
        </h2>
        <div className="w-full text-center px-4">
          <input
            disabled={true}
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            value={name}
            placeholder="Name"
            className="mb-3 px-3 py-3 placeholder-slate-300 text-slate-600 relative rounded text-sm border outline-none focus:outline-none focus:shadow-outline w-full bg-slate-200 border-slate-300" />
          <Link href={"/forms/edit?name=" + name}>
            <button
              className="bg-slate-700 text-white active:bg-slate-600 font-bold uppercase text-sm w-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}