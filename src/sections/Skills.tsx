import SkillCard, { Props as SkillCardProps } from "./Skills/SkillCard";

import haxeIcon from 'devicon/icons/haxe/haxe-original.svg'
import javaScriptIcon from 'devicon/icons/javascript/javascript-original.svg'
import reactIcon from 'devicon/icons/react/react-original.svg'
import pythonIcon from 'devicon/icons/python/python-original.svg'
import goIcon from 'devicon/icons/go/go-original.svg'
import cIcon from 'devicon/icons/c/c-original.svg'
import linuxIcon from 'devicon/icons/linux/linux-original.svg'
import tsIcon from 'devicon/icons/typescript/typescript-original.svg'
import viteIcon from 'devicon/icons/vitejs/vitejs-original.svg'
import eslintIcon from 'devicon/icons/eslint/eslint-original.svg'
import vueIcon from 'devicon/icons/vuejs/vuejs-original.svg'
import mysqlIcon from 'devicon/icons/mysql/mysql-original.svg'
import fedoraIcon from 'devicon/icons/fedora/fedora-original.svg'
import awsIcon from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
import gitIcon from 'devicon/icons/git/git-original.svg'
import githubIcon from 'devicon/icons/github/github-original.svg'
import nanoIcon from 'devicon/icons/nano/nano-original.svg'

import goaIcon from './Skills/goaIcon.png'
import { useCallback, useState } from "react";

const skillSet = {
    lang: [
        { title: "Go", years: "2年", mainIcon: goIcon, icons: [goaIcon], isBusiness: true },
        { title: "TypeScript", years: "3年", mainIcon: tsIcon, icons: [reactIcon, vueIcon, viteIcon, eslintIcon], isBusiness: true, isHobby: true },
        { title: "Haxe", years: "3年", mainIcon: haxeIcon, icons: [javaScriptIcon, reactIcon], isBusiness: true, isHobby: true },
        { title: "Python", years: "ちまちまずっと", mainIcon: pythonIcon, isHobby: true },
        { title: "C", years: "ちょいちょい", mainIcon: cIcon, icons: [linuxIcon], isHobby: true },
    ] as SkillCardProps[],
    tools: [
        { title: "Fedora Linux", years: "ずっと", mainIcon: fedoraIcon, isBusiness: true, isHobby: true },
        { title: "Git", years: "ずっと", mainIcon: gitIcon, icons: [githubIcon], isBusiness: true, isHobby: true },
        { title: "MySQL", years: "2年", mainIcon: mysqlIcon, isBusiness: true },
        { title: "AWS", years: "2年", mainIcon: awsIcon, isBusiness: true },
        { title: "nano", years: "nano派です", mainIcon: nanoIcon, isBusiness: true, isHobby: true },
    ] as SkillCardProps[]
}

export default function Skills() {
    const [selecting, setSelecting] = useState("all" as "all" | "business" | "hobby")

    const handleSelectClick = useCallback((v: "business" | "hobby") => () => {
        setSelecting((p) => p === v ? "all" : v)
    }, [])

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <div
                    className={`
                        flex rounded-md m-2 p-3 ring-4 ring-lavender
                        ${selecting === "business" ? "bg-lavender-100" : ""}
                        ${selecting !== "all" && selecting !== "business" ? "" : ""}
                    `}
                    onClick={handleSelectClick("business")}
                >
                    <p className="text-sm"> 業務 </p>
                </div>
                <div
                    className={`
                        flex rounded-md m-2 p-3 ring-4 ring-portage
                        ${selecting === "hobby" ? "bg-portage-100" : ""}
                        ${selecting !== "all" && selecting !== "hobby" ? "" : ""}
                    `}
                    onClick={handleSelectClick("hobby")}
                >   <p className="text-sm"> 趣味 </p>
                </div>
            </div>

            <h1 className="text-xl text-center my-4">言語</h1>
            <div className="flex flex-wrap justify-center space-x-1 space-y-1">
                {skillSet.lang.map((skill) => {
                    const isNotSelecting =
                        selecting === "business" && !skill.isBusiness
                        || selecting === "hobby" && !skill.isHobby
                    return <div key={skill.title} className={`transition-all ${isNotSelecting ? "opacity-40" : ""}`}>
                        <SkillCard {...skill}></SkillCard>
                    </div>
                })}
            </div>

            <h1 className="text-xl text-center my-4">ツール</h1>
            <div className="flex flex-wrap justify-center space-x-1 space-y-1">
                {skillSet.tools.map((skill) => {
                    const isNotSelecting =
                        selecting === "business" && !skill.isBusiness
                        || selecting === "hobby" && !skill.isHobby
                    return <div key={skill.title} className={`transition-all ${isNotSelecting ? "opacity-40" : ""}`}>
                        <SkillCard {...skill}></SkillCard>
                    </div>
                })}
            </div>

        </section >
    )
}
