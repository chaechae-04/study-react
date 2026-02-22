"use client"

import { useState, useRef } from "react"
import Link from "next/link"

export default function UseStatePage() {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)
    renderCount.current += 1

    return (
        <section className="space-y-20">

            {/* Header */}
            <header className="space-y-6 py-6">
                <h1 className="text-4xl font-semibold text-green-400">
                    useState
                </h1>

                <p className="text-neutral-400 max-w-2xl leading-relaxed">
                    useState는 함수형 컴포넌트에서 상태(State)를 관리하기 위한 기본 Hook입니다. <br />
                    상태가 변경되면 컴포넌트는 다시 렌더링되며, <br />
                    React는 이를 통해 UI를 동기화합니다.
                </p>
            </header>

            {/* Basic Concept */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">Basic Syntax</h2>

                <div className="border border-neutral-800 rounded-md p-6 bg-neutral-900 text-sm">
                    <pre>{`const [state, setState] = useState(initialValue)`}</pre>
                </div>

                <p className="text-neutral-400 max-w-2xl">
                    state는 현재 값,
                    setState는 값을 업데이트하는 함수입니다.
                </p>
            </section>

            {/* Interactive Example */}
            <section className="space-y-8 py-6">
                <h2 className="text-xl font-medium">Interactive Example</h2>

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-10">

                    {/* 1. Basic Counter */}
                    <div className="space-y-4">
                        <div className="text-2xl font-semibold">
                            Count: {count}
                        </div>

                        <div className="text-xs text-neutral-500">
                            Render Count: {renderCount.current}
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            <button
                                onClick={() => setCount(count + 1)}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Increment
                            </button>

                            <button
                                onClick={() => setCount(0)}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-neutral-800 pt-8 space-y-4">

                        {/* 2. Batching Comparison */}
                        <div className="space-y-3 py-4">
                            <h3 className="text-sm text-neutral-300">
                                Batching Comparison
                            </h3>

                            <div className="flex gap-4 flex-wrap py-4">
                                <button
                                    onClick={() => {
                                        setCount(count + 1)
                                        setCount(count + 1)
                                    }}
                                    className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                                >
                                    Wrong Increment Twice
                                </button>

                                <button
                                    onClick={() => {
                                        setCount(prev => prev + 1)
                                        setCount(prev => prev + 1)
                                    }}
                                    className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                                >
                                    Functional Increment Twice
                                </button>
                            </div>

                            <p className="text-xs text-neutral-500">
                                👉 왜 하나는 1 증가하고, 하나는 2 증가할까요?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-6"></div>

                {/* Object State Example */}
                <ObjectStateExample />

                <div className="py-6"></div>

                {/* Guestbook Example */}
                <GuestbookExample />
            </section>

            {/* Key Points */}
            <section className="space-y-4 py-6">
                <h2 className="text-xl font-medium">Key Points</h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-2">
                    <li>상태가 변경되면 컴포넌트는 다시 렌더링된다.</li>
                    <li>동일한 이벤트 루프 내에서는 상태 업데이트가 batching 된다.</li>
                    <li>이전 값을 기반으로 할 때는 함수형 업데이트를 사용한다.</li>
                    <li>객체 state는 자동 병합되지 않는다. (spread 필요)</li>
                </ul>
            </section>

            {/* Back Navigation */}
            <div className="py-10 border-t border-neutral-800">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-green-400 transition-colors"
                >
                    ← All Topics
                </Link>
            </div>

        </section>
    )
}

/* Object State Example */
function ObjectStateExample() {
    const initialUser = { name: "React", level: 1 }
    const [user, setUser] = useState<{ name?: string, level: number }>(initialUser)

    return (
        <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-6">

            <h3 className="text-sm text-neutral-300">
                Object State
            </h3>

            <div className="text-sm text-neutral-400">
                Name: {user.name ?? "undefined"} <br />
                Level: {user.level}
            </div>

            <div className="flex gap-4 flex-wrap">
                <button
                    onClick={() =>
                        setUser(prev => ({
                            ...prev,
                            level: prev.level + 1
                        }))
                    }
                    className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                >
                    Level Up (Correct)
                </button>

                <button
                    onClick={() =>
                        setUser({
                            level: user.level + 1
                        })
                    }
                    className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                >
                    Without Spread
                </button>

                <button
                    onClick={() => setUser(initialUser)}
                    className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                >
                    Reset
                </button>
            </div>

            <p className="text-xs text-neutral-500">
                👉 객체 state는 자동 병합되지 않습니다. spread가 필요합니다. <br />
                Reset 버튼으로 초기값으로 되돌릴 수도 있어요.
            </p>
        </div>
    )
}

/* Guestbook Example */
function GuestbookExample() {
    const [comments, setComments] = useState<string[]>([])
    const [input, setInput] = useState("")

    return (
        <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900 space-y-4">
            <h3 className="text-sm text-neutral-300">💬 Guestbook Example (실제 활용 체험)</h3>

            <div className="flex gap-2 flex-col">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="flex-1 px-4 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-sm text-white"
                    placeholder="댓글을 작성해보세요"
                />
                <button
                    onClick={() => {
                        if (!input.trim()) return
                        setComments(prev => [...prev, input.trim()])
                        setInput("")
                    }}
                    className="px-3 py-1 border border-neutral-700 hover:border-green-400 transition-colors text-sm"
                >
                    Add
                </button>
            </div>

            <ul className="text-neutral-400 text-sm list-disc list-inside space-y-1">
                {comments.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ul>

            <p className="text-xs text-neutral-500">
                👉 state가 바뀌면 화면이 즉시 업데이트됩니다. <br />
                댓글 추가를 통해 state 활용을 직접 체험해보세요.
            </p>
        </div>
    )
}