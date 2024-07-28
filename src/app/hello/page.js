import React from "react";
import Link from "next/link";
import Form from "./components/Form";

const page = () => {
  return (
    <>
      <div>page</div>
      <p>
        <Link href="https://www.google.com">google</Link>
      </p>
      <button className="p-2 rounded-lg text-2xl border-2 border-gray-300 text-black bg-white">
        <Link href="/">home</Link>
      </button>

      <Form />
    </>
  );
}

export default page;
