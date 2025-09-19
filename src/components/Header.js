import React from "react";

export default function Header() {
  return (
    <header className="items-center bg-[#333] text-white flex font-bold justify-between p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-6 justify-between w-full">
          <a href="/" className="text-white no-underline">Blog</a>
          <a href="/" className="text-white no-underline">お問い合わせ</a>
        </div>
      </div>
    </header>
  )
}