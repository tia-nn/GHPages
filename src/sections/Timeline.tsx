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
                <div className="relative">
                    <div className="w-1/2 p-6 text-right bg-w">デンキヤギ株式会社でアルバイト</div>
                    <span className="absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto bg-white rounded-full border-4 border-lavender"></span>
                </div>

                <div className="relative">
                    <div className="w-1/2 p-6 ml-auto">豊田高専卒業</div>
                    <span className="absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto bg-white rounded-full border-4 border-lavender"></span>
                </div>

                <div className="relative">
                    <div className="w-1/2 p-6 text-right">フラー株式会社に入社</div>
                    <span className="absolute w-6 h-6 top-0 bottom-0 left-0 right-0 m-auto bg-white rounded-full border-4 border-lavender"></span>
                </div>
            </div>

            <div className="h-12"></div>
        </section>
    )
}
