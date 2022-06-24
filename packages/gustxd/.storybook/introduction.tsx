import React from "react";
import "../src/styles/globals.css";
import "./intro.css";
import pkgJson from "../package.json";

export const Introduction = () => {
  return (
    <>
      <div className="fixed flex items-center justify-center inset-0 bg-gradient-to-b from-[#0E1854] via-[#0E1854] to-fuchsia-400">
        <img className="fixed bottom-0 -z-10 w-full" src="bg1.png" />
        <img className="fixed bottom-0 -z-20 w-full" src="bg2.png" />
        <div className="z-0 xd--bg-1 absolute top-2/4 flex animate-zip">
          <img
            className="animate-slow max-w-[100px] object-contain"
            src="labxd--fly.png"
          />
          <div className="flex items-baseline justify-center xd--name-container">
            <h3 className="text-xl animate-bounce text-gray-200">@labXD/</h3>
            <h2 className="text-white font-light text-3xl py-10">gustXD</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export const GettingStarted = () => {
  return (
    <>
      <div className="flex justify-center intro-container">
        <div className="flex w-fit flex-col outline outline-2 outline-slate-500 rounded-2xl items-center p-5">
          <div className="w-32">
            <img className="w-full" src="labxd-light-intro.png" />
          </div>
          <div className="flex items-end pt-5">
            <span className="text-2xl font-normal text-gray-600">@labxd/</span>
            <h1 className="text-4xl font-light">gustXD</h1>
            <span className="pl-2 text-gray-500">v{pkgJson.version}</span>
          </div>
        </div>
      </div>
    </>
  );
};
