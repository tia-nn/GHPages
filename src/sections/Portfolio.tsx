import cpuShowcaseImg from "./Portfolio/cpuShowcaseCapture.png"
import showcaseURL from '/cpu-showcase/index.html?url'
import pdfWriterImg from "./Portfolio/pdfWriterCapture.png"
import pdfWriterURL from '/pdf-writer/index.html?url'
import portfolioImg from "./Portfolio/portfolioCapture.png"

export default function Portfolio() {
    return (<section className="space-y-10">
        <h1 className="text-xl text-center my-4">作ってるおもちゃ[WIP]</h1>

        <div className="">
            <a href={showcaseURL} target="_blank">
                <img src={cpuShowcaseImg} className="transition hover:scale-110 active:scale-110 rounded-lg border shadow-md" />
            </a>
            <p className="m-4">
                CPU 回路シミュレーター。まだ 1 ビット CPU しか置いてません。
                <br />
                <span className="text-sm">
                    made with: TypeScript, React.js, Gatsby, TailwindCSS, Vite, System Verilog, Verilator, emscripten, diagrams.net(draw.io)
                </span>
            </p>
        </div>

        <div className="">
            <a href={pdfWriterURL} target="_blank">
                <img src={pdfWriterImg} className="transition hover:scale-110 active:scale-110 rounded-lg border shadow-md" />
            </a>
            <p className="m-4">
                テキストで編集する PDF ライブエディタ。まだ機能は限定的ですが補完も使えます。
                スマホは未対応です。
                <br />
                <span className="text-sm">
                    made with: TypeScript, React.js, TailwindCSS, Vite, Antlr4, Monaco Editor
                </span>
            </p>
        </div>

        <div className="">
            <img src={portfolioImg} className="transition hover:scale-110 active:scale-110 rounded-lg border shadow-md" />
            <p className="m-4">
                このページです。
                <br />
                <span className="text-sm">
                    made with: TypeScript, React.js, TailwindCSS, Vite
                </span>
            </p>
        </div>



    </section>)
}
