import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="py-10 items-center text-center">
      <div className="container">
        <h1 className="font-bold text-8xl">gustXD</h1>
        <p className="text-xl pt-10">{siteConfig.tagline}</p>
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
