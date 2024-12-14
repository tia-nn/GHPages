
type Props = {
    mainIcon: string,
    title: string,
    years: string,
    icons?: string[],
    ring?: boolean,
    insetRing?: boolean,
}

export default function SkillCard({ mainIcon, title, years, icons, ring, insetRing }: Props) {
    return (
        <div className={`flex rounded-md m-2 p-2 inset-shadow-sm ${ring ? "ring-4 ring-lavender" : ""} ${insetRing ? "inset-ring-4 inset-ring-portage" : ""}`}>
            <img src={mainIcon} className="size-16 sm:size-20 m-2" />
            <div className="flex flex-col m-2">
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm">年数: {years}</p>
                <div className="grow"></div>
                {icons ? (
                    <p className="text-sm">
                        with
                        {icons.map((icon) => (
                            <img key={icon} src={icon} className="inline w-8 h-8 m-1" />
                        ))}
                    </p>
                ) : null}
            </div>
        </div>
    )
}
