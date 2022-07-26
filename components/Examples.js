import React from "react"
import Link from "next/link"

export default function Examples() {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full lg:w-6/12 mx-auto border-0">
      <div className="w-full px-4 mb-6">
        <h2 className="text-xl font-bold mb-6">
          Examples
        </h2>
        <div>
          <div>
            <i className="fas fa-link text-xs"></i> <Link href="/form">Form Example 1</Link>
          </div>
          <div>
            <i className="fas fa-link text-xs"></i> <Link href="/forms">Form Example 2</Link>
          </div>
          <div>
            <i className="fas fa-link text-xs"></i> <Link href="/ssg">SSG Example</Link>
          </div>
          <div>
            <i className="fas fa-link text-xs"></i> <Link href="/ssr">SSR Example</Link>
          </div>
          <div>
            <i className="fas fa-link text-xs"></i> <Link href="/csr">CSR Example</Link>
          </div>
        </div>
      </div>
    </div>
  )
}