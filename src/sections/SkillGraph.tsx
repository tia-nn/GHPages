
export default function SkillGraph() {
    return (
        <div className="flex">
            <div className="relative size-80 overflow-hidden grow">
                <svg className="absolute w-full h-full delay-150 has-[:hover]:delay-0 z-0 has-[:hover]:z-1 pointer-events-none" viewBox="-110 -110 220 220">
                    <path className="transition-all stroke-0 hover:stroke-[10] stroke-french-lilac fill-french-lilac pointer-events-auto" d={`${annularSelectorPath(0, 0, 100, 30, -90, -60)}`} />
                </svg>
                <svg className="absolute w-full h-full delay-150 has-[:hover]:delay-0 z-0 has-[:hover]:z-1 pointer-events-none" viewBox="-110 -110 220 220">
                    <path className="transition-all stroke-0 hover:stroke-[10] stroke-lavender-rose fill-lavender-rose pointer-events-auto" d={`${annularSelectorPath(0, 0, 100, 30, -60, -10)}`} />
                </svg>
                <svg className="absolute w-full h-full delay-150 has-[:hover]:delay-0 z-0 has-[:hover]:z-1 pointer-events-none" viewBox="-110 -110 220 220">
                    <path className="transition-all stroke-0 hover:stroke-[10] stroke-lavender fill-lavender pointer-events-auto" d={`${annularSelectorPath(0, 0, 100, 30, -10, 70)}`} />
                </svg>
                <svg className="absolute w-full h-full delay-150 has-[:hover]:delay-0 z-0 has-[:hover]:z-1 pointer-events-none" viewBox="-110 -110 220 220">
                    <path className="transition-all stroke-0 hover:stroke-[10] stroke-portage fill-portage pointer-events-auto" d={`${annularSelectorPath(0, 0, 100, 30, 70, 150)}`} />
                </svg>
                <svg className="absolute w-full h-full delay-150 has-[:hover]:delay-0 z-0 has-[:hover]:z-1 pointer-events-none" viewBox="-110 -110 220 220">
                    <path className="transition-all stroke-0 hover:stroke-[10] stroke-sky-blue fill-sky-blue pointer-events-auto" d={`${annularSelectorPath(0, 0, 100, 30, 150, 270)}`} />
                </svg>
            </div>
            <div className="grow">
                <p>Python</p>
                <p>Go</p>
            </div>
        </div >
    )
}


function arcPos(cx: number, cy: number, r: number, sDeg: number, eDeg: number) {
    const x1 = cx + r * Math.cos(sDeg * Math.PI / 180)
    const y1 = cy + r * Math.sin(sDeg * Math.PI / 180)
    const x2 = cx + r * Math.cos(eDeg * Math.PI / 180)
    const y2 = cy + r * Math.sin(eDeg * Math.PI / 180)
    const largeArcFlag = eDeg - sDeg > 180 ? 1 : 0
    return { x1, y1, x2, y2, largeArcFlag }
}

function pos2APath(pos: { x1: number, y1: number, x2: number, y2: number, largeArcFlag: number }, r: number, sweepFlag: number) {
    return `A ${r} ${r} 0 ${pos.largeArcFlag} ${sweepFlag} ${pos.x2} ${pos.y2}`
}

function annularSelectorPath(cx: number, cy: number, r: number, width: number, sDeg: number, eDeg: number) {
    const innerR = r - width
    const outerArc = arcPos(cx, cy, r, sDeg, eDeg)
    const innerArc = arcPos(cx, cy, innerR, eDeg, sDeg)
    const outerArcPath = pos2APath(outerArc, r, 1)
    const innerArcPath = pos2APath(innerArc, innerR, 0)
    return `M ${outerArc.x1} ${outerArc.y1} ${outerArcPath} L ${innerArc.x1} ${innerArc.y1} ${innerArcPath} Z`
}
