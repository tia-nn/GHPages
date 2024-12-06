export default function BusinessCard() {
    return (
        <section className="h-screen p-4">
            <div className="flex flex-col md:flex-row h-full w-full bg-white rounded-md shadow-2xl">
                <div className="h-1/2 md:w-1/2 md:h-full grow shrink flex-col justify-items-center content-center">
                    <img src="/icon.jpeg" className=""></img>
                </div>

                <div className="h-1/2 md:w-1/2 md:h-full grow shrink flex-col justify-items-center content-center">
                    <div>
                        <h2 className="text-lg">Server/Front Engineer</h2>
                        <h1 className="text-5xl mb-2">@tia__nn</h1>
                        <p className="text-right">hogehoge</p>
                        <p className="text-right">fugafuga</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
