import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Welcome to my website
        </h1>
        <p>
          This is a sample website built with Next.js. <br />
          You can use this as a starting point for your own website.
        </p>

        <button className='p-2 rounded-lg text-2xl border-2 border-gray-300 text-black bg-white'>
          <Link href="/hello">hello</Link>
        </button>
      </div>
    </>
  );
}
