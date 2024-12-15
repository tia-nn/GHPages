export default function Timeline() {
    return (
        <section className="relative">
            <span className="
                absolute
                w-2 h-1/2 left-0 right-0 mx-auto
                bg-linear-to-b
                    from-transparent via-sky-blue-100 via-15% to-portage
            "></span>
            <span className="
                absolute
                w-2 h-1/2 top-1/2 left-0 right-0 mx-auto
                bg-linear-to-b from-portage from-85%
            "></span>

            <div className="h-12"></div>

            <div className="space-y-5">

                <div className="relative flex group">
                    <div className="w-1/2 p-6 text-right text-xl content-center">2017/4</div>
                    <div className="w-1/2 p-6 ml-auto break-keep [overflow-wrap:anywhere]">豊田高専<wbr /> 入学</div>
                    <span className="
                        absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto
                        bg-white rounded-full border-4 border-lavender
                        transition-all group-hover:border-8 group-active:border-8
                    "></span>
                </div>

                <div className="relative flex group">
                    <div className="w-1/2 p-6 text-right break-keep [overflow-wrap:anywhere]">デンキヤギ<wbr />で<wbr />アルバイト</div>
                    <div className="w-1/2 p-6 ml-auto text-xl content-center">2019/4</div>
                    <span className="
                        absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto
                        bg-white rounded-full border-4 border-lavender
                        transition-all group-hover:border-8 group-active:border-8
                    "></span>
                </div>

                <div className="relative flex group">
                    <div className="w-1/2 p-6 text-right text-xl content-center">2023/3</div>
                    <div className="w-1/2 p-6 ml-auto break-keep [overflow-wrap:anywhere]">豊田高専<wbr /> 卒業</div>
                    <span className="
                        absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto
                        bg-white rounded-full border-4 border-lavender
                        transition-all group-hover:border-8 group-active:border-8
                    "></span>
                </div>

                <div className="relative flex group">
                    <div className="w-1/2 p-6 text-right break-keep [overflow-wrap:anywhere]">フラー<wbr />に<wbr />入社</div>
                    <div className="w-1/2 p-6 ml-auto text-xl content-center">2023/4</div>
                    <span className="
                        absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto
                        bg-white rounded-full border-4 border-lavender
                        transition-all group-hover:border-8 group-active:border-8
                    "></span>
                </div>
            </div>

            <div className="h-12"></div>
        </section>
    )
}
