import { Notepad } from "@/site/sections/notepad"
import Head from "next/head"
import React from "react"

export default function Home() {
  return (
    <main className={``}>
      <Head>
        <title>React Nexjs Simple Notepad</title>
      </Head>
      <div>
        <Notepad />
      </div>
    </main>
  )
}
