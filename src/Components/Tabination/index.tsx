"use client"

import { Content } from "@/app/Content"
import { icons } from "feather-icons"
import Link from "next/link"
import { useState } from "react"

const TABS = [
  {
    link: "/",
    icon: icons.home.toSvg({ stroke: "white", width: 28, height: 28 }),
    key: "home",
    Component: Content
  },
  {
    link: "clips",
    icon: icons.tv.toSvg({ stroke: "white", width: 28, height: 28 }),
    key: "clips",
    Component: Content
  },
  {
    link: "users",
    icon: icons.users.toSvg({ stroke: "white", width: 28, height: 28 }),
    key: "users",
    Component: Content
  }
]

export function Tabination() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const CurrentContent = TABS[currentTabIndex].Component;
  return (
    <div className="flex flex-col gap-2 pt-20 items-center px-4">
      <div className="flex flex-row gap-4 justify-between md:max-w-2xl max-w-full w-full flex-wrap">
        <div className="flex flex-row gap-2 justify-start items-center border rounded-full h-12 md:w-auto w-full px-2">
          <div dangerouslySetInnerHTML={{ __html: icons.search.toSvg({ stroke: "white", width: 20, height: 20 }) }} />
          <input placeholder="Search User ID" className="flex flex-none bg-inherit text-white focus:border-none focus:outline-none" />
        </div>
        <div className="flex flex-row gap-4">
          {
            TABS.map(({ icon, link, key }, index) => (
              <Link
                key={`tabination_${key}`}
                href={`#${link}`}
                onClick={() => setCurrentTabIndex(index)}
                className={`p-2.5 rounded-full ${currentTabIndex === index ? "bg-slate-500" : "bg-slate-800 hover:bg-slate-700"} w-auto no-underline`}
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            ))
          }
          <button
            onClick={() => { }}
            className={`p-2.5 rounded-full  hover:bg-slate-700 w-auto no-underline`}
            dangerouslySetInnerHTML={{ __html: icons["more-vertical"].toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
        </div>
      </div>
      <CurrentContent />
    </div>
  )
}