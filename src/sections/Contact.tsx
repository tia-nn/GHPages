
const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZ3HCXph5EeWk1wl-mR1fdBsFNgrHernWANAT3y8KJwXN7mQ/formResponse";
const formName = {
    name: "entry.1903005172",
    email: "entry.1974720603",
    detail: "entry.444706193",
}


export default function Contact() {
    return (
        <div className="">
            <h1 className="text-xl text-center my-4">お問い合わせ</h1>
            <form className="flex flex-col space-y-4"
                action={formURL} target="_blank"
                method="POST"
            >
                <label className="block">
                    お名前
                    <input type="text" required placeholder="山田 太郎" name={formName.name}
                        className="block w-full p-2 rounded-md outline-2 outline-portage-200 focus-visible:outline-portage-500" />
                </label>
                <label className="block">
                    メールアドレス
                    <input type="email" required placeholder="example@example.com" name={formName.email}
                        className="block w-full p-2 rounded-md outline-2 outline-portage-200 focus-visible:outline-portage-500" />
                </label>
                <label className="block">
                    お問い合わせ内容
                    <textarea name={formName.detail} required
                        className="block w-full p-2 rounded-md field-sizing-content min-h-40 outline-2 outline-portage-200 focus-visible:outline-portage-500"></textarea>
                </label>
                <button type="submit" className="bg-lavender text-white p-2 rounded-md outline-portage-500">送信</button>
            </form>
        </div>
    )
}
