import Link from "@docusaurus/Link"
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"
import React from "react"

import pkgJson from "../../../../packages/gustxd/package.json"
import Logo from "../../static/img/logo.svg"

function HomepageHeader() {
  return (
    <div className="py-10">
      <div className="">
        <div
          className="
            before:content-['v0.2.0'] before:absolute before:top-0 before:left-0 before:text-right relative before:text-base"
        >
          <Link
            to="gustxd"
            className="text-indigo-500 hover:no-underline hover:hue-rotate-30 transition-all duration-300 ease-linear font-bold text-8xl "
          >
            gustXD
          </Link>
        </div>
        <p className="text-xl pt-10">
          React UI library developed on Tailwind&apos;s utility-first css
          framework
        </p>
      </div>
    </div>
  )
}
function LeftSlot() {
  return (
    <div className="py-10 justify-self-end">
      <div className="min-w-[10rem]">
        <Logo />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout
      wrapperClassName="bg-black text-white from-purple before:content-[''] before:bg-black before:fixed before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10"
      title="Tailwind Components by labXD"
      description="UI components build with Tailwind CSS in mind"
    >
      <div className="grid md:grid-cols-[1fr_2fr] sm:grid-cols-1 gap-10 container">
        <LeftSlot />
        <HomepageHeader />
      </div>
    </Layout>
  )
}
