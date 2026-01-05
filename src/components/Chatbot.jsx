import { useState, useRef, useEffect } from "react"
import dataImage from "../data"

const Chatbot = () => {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const [messages, setMessages] = useState([
        {
            from: "bot",
            type: "text",
            text: "Halo 👋 Ada yang bisa saya bantu?",
            buttons: [
                { label: "💻 Website", value: "website" },
                { label: "🤖 Chatbot", value: "chatbot" }
            ]
        }
    ])

    const chatEndRef = useRef(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const sendMessage = (text) => {
        if (loading) return

        setMessages((prev) => [...prev, { from: "user", type: "text", text }])
        setLoading(true)

        setTimeout(() => {
            botReply(text)
        }, 800)
    }

    const botReply = (text) => {
        let reply

        if (text.toLowerCase().includes("website")) {
            reply = {
                from: "bot",
                type: "image",
                url: dataImage.Proyek12,
                text: "Ini contoh website kami 👇",
                buttons: [{ label: "📩 Chat Admin", value: "admin" }]
            }
        } else if (text.toLowerCase().includes("chatbot")) {
            reply = {
                from: "bot",
                type: "text",
                text: "Kami juga menyediakan Chatbot otomatis 🤖"
            }
        } else if (text.toLowerCase() === "hai") {
            reply = {
                from: "bot",
                type: "text",
                text: "Hallo 👋"
            }
        } else {
            reply = {
                from: "bot",
                type: "text",
                text: "Baik, bisa jelaskan lebih detail?"
            }
        }

        setMessages((prev) => [...prev, reply])
        setLoading(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        sendMessage(input)
        setInput("")
    }

    const handleMedia = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const url = URL.createObjectURL(file)

        setMessages((prev) => [
            ...prev,
            { from: "user", type: "image", url }
        ])
    }

    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg text-3xl z-50"
            >
                <i className="ri-chat-1-line"></i>
            </button>
        )
    }

    return (
        <div
            className="
        fixed bottom-0 right-0
        w-full h-[90vh]
        sm:bottom-6 sm:right-6 sm:w-80 sm:h-[480px]
        bg-zinc-900 rounded-t-2xl sm:rounded-2xl
        shadow-xl z-50
        flex flex-col
      "
        >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                <div className="flex items-center gap-2">
                    <img src={dataImage.iconLogoColor} className="w-9 h-9 rounded-full" />
                    <h2 className="font-bold flex items-center gap-2">
                        <span>
                            <span className="text-orange-500">Craft</span>
                            <span className="text-blue-600">Chat</span>
                        </span>
                    </h2>

                </div>
                <button
                    onClick={() => setOpen(false)}
                    className="text-xl hover:text-orange-500"
                >
                    <i className="ri-close-line"></i>
                </button>
            </div>

            {/* BODY */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                    <div key={i} className="space-y-2">
                        <div
                            className={`flex gap-2 ${msg.from === "user" ? "justify-end" : ""
                                }`}
                        >
                            {msg.from === "bot" && (
                                <img
                                    src={dataImage.iconLogoWhite}
                                    className="w-8 h-8 rounded-full"
                                />
                            )}

                            <div className="space-y-2 max-w-[75%]">
                                {msg.type === "text" && (
                                    <p
                                        className={`p-3 rounded-xl text-sm ${msg.from === "user"
                                                ? "bg-orange-500 text-black"
                                                : "bg-zinc-800"
                                            }`}
                                    >
                                        {msg.text}
                                    </p>
                                )}

                                {msg.type === "image" && (
                                    <>
                                        <img
                                            src={msg.url}
                                            className="rounded-xl max-w-[200px]"
                                        />
                                        {msg.text && (
                                            <p className="text-sm bg-zinc-800 p-2 rounded-lg">
                                                {msg.text}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        {/* INLINE BUTTON BOT */}
                        {msg.from === "bot" && msg.buttons && (
                            <div className="ml-10 flex flex-wrap gap-2">
                                {msg.buttons.map((btn, idx) => (
                                    <button
                                        key={idx}
                                        disabled={loading}
                                        onClick={() => sendMessage(btn.label)}
                                        className="bg-zinc-700 px-3 py-1 rounded-full text-sm
                               hover:bg-orange-500 hover:text-black
                               disabled:opacity-50 transition"
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {loading && (
                    <p className="text-xs opacity-50 ml-10">Bot sedang mengetik...</p>
                )}

                <div ref={chatEndRef} />
            </div>

            {/* FOOTER */}
            <form
                onSubmit={handleSubmit}
                className="p-3 border-t border-zinc-700 flex items-center gap-2"
            >
                <label className="text-xl cursor-pointer">
                    <i className="ri-image-fill"></i>
                    <input type="file" hidden accept="image/*" onChange={handleMedia} />
                </label>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Ketik pesan..."
                    className="flex-1 bg-zinc-800 rounded-xl px-3 py-2 text-sm outline-none"
                />

                <button
                    disabled={loading}
                    className="text-2xl text-orange-500 disabled:opacity-50"
                >
                    <i className="ri-arrow-up-s-line"></i>
                </button>
            </form>
        </div>
    )
}

export default Chatbot
