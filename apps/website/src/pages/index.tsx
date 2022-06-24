import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

function HomepageHeader() {
  return (
    <div className="py-10 items-center text-center">
      <div className="container">
        <div className="text-4xl font-semi">Coming Soon</div>
        <Link
          to="gustxd"
          className="text-indigo-500 hover:no-underline hover:hue-rotate-30 transition-all duration-300 ease-linear"
        >
          <h1 className="font-bold text-8xl pt-3">gustXD</h1>
        </Link>
        <p className="text-xl pt-10">
          React UI library developed on Tailwind&apos;s utility-first css
          framework
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      wrapperClassName="bg-black text-white from-purple before:content-[''] before:bg-black before:fixed before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10"
      title="Tailwind Components by labXD"
      description="UI components build with Tailwind CSS in mind"
    >
      <HomepageHeader />
    </Layout>
  );
}
