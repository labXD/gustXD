import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="pt-5 flex align-middle justify-centerv h-full">
      <div className="container">
        <h1 className="hero__title">&#64;{siteConfig.title}/gustXD</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      wrapperClassName="bg-indigo-500 text-white"
      title="Tailwind Components by labXD"
      description="UI components build with Tailwind CSS in mind"
    >
      <HomepageHeader />
    </Layout>
  );
}
