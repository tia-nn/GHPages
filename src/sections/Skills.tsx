import SkillCard from "./Skills/SkillCard";
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

export default function Skills() {
    return (
        <div>
            <div className="flex flex-wrap justify-center">
                <div className="flex rounded-md m-2 p-1 inset-shadow-sm ring-4 ring-lavender">
                    <div className="flex flex-col m-2">
                        <p className="text-sm"> 業務 </p>
                    </div>
                </div>
                <div className="flex rounded-md m-2 p-1 inset-shadow-sm inset-ring-4 inset-ring-portage">
                    <div className="flex flex-col m-2">
                        <p className="text-sm"> 趣味 </p>
                    </div>
                </div>
            </div>

            <h1 className="text-xl text-center m-2">言語</h1>
            <div className="flex flex-wrap justify-center">
                <SkillCard mainIcon={haxeIcon} title="Haxe" years="3年" ring insetRing icons={[javaScriptIcon, reactIcon]}></SkillCard>
                <SkillCard mainIcon={tsIcon} title="TypeScript" years="3年" ring insetRing icons={[reactIcon, vueIcon, viteIcon, eslintIcon]}></SkillCard>
                <SkillCard mainIcon={pythonIcon} title="Python" insetRing years="ちまちまずっと"></SkillCard>
                <SkillCard mainIcon={goIcon} title="Go" years="2年" ring icons={[goaIcon]}></SkillCard>
                <SkillCard mainIcon={cIcon} title="C" years="ちょいちょい" insetRing icons={[linuxIcon]}></SkillCard>
            </div>

            <h1 className="text-xl text-center m-2">ツール</h1>
            <div className="flex flex-wrap justify-center">
                <SkillCard mainIcon={mysqlIcon} title="MySQL" years="2年" ring></SkillCard>
                <SkillCard mainIcon={fedoraIcon} title="Fedora Linux" years="ずっと" ring insetRing></SkillCard>
                <SkillCard mainIcon={awsIcon} title="AWS" years="2年" ring></SkillCard>
                <SkillCard mainIcon={gitIcon} title="Git" years="ずっと" ring insetRing icons={[githubIcon]}></SkillCard>
                <SkillCard mainIcon={nanoIcon} title="nano" years="nano派です" ring insetRing></SkillCard>
            </div>

        </div >
    )
}
