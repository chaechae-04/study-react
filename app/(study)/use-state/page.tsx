"use client"

import { useState, useRef } from "react"
import Link from "next/link"

export default function UseStatePage() {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)
    renderCount.current += 1

    return (
        <section className="space-y-20">

            {/* Back Navigation */}
            <div className="pt-10 border-b border-neutral-800 pb-4">
                <Link
                    href="/"
                    className="inline-flex items-center"
                >
                    <span className="gap-2 text-sm text-neutral-400 hover:text-green-400 transition-colors">← All Topics</span>
                </Link>
            </div>

            {/* Header */}
            <header className="space-y-6 py-6">
                <h1 className="text-4xl font-semibold text-green-400">
                    useState
                </h1>

                <p className="text-neutral-400 max-w-2xl leading-relaxed">
                    useState는 함수형 컴포넌트에서 상태(State)를 관리하기 위한 기본 Hook입니다.
                    상태가 변경되면 컴포넌트는 다시 렌더링되며,
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

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-6">

                    <div className="text-3xl font-semibold">
                        {count}
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
                            onClick={() => {
                                setCount(count + 1)
                                setCount(count + 1)
                            }}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            Increment Twice
                        </button>

                        <button
                            onClick={() => setCount(0)}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Dev Meme Insight */}
                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “Why is it only increasing once?”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        React는 같은 이벤트 루프 안에서 상태 업데이트를 batching 합니다.
                        따라서 연속된 setState 호출은 병합될 수 있습니다.
                    </p>
                </div>
            </section>

            {/* Functional Update */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">Functional Update</h2>

                <div className="border border-neutral-800 rounded-md p-6 bg-neutral-900 text-sm">
                    <pre>{`setCount(prev => prev + 1)`}</pre>
                </div>

                <p className="text-neutral-400 max-w-2xl">
                    이전 상태를 기반으로 값을 업데이트할 때는 함수형 업데이트를 사용하는 것이 안전합니다.
                    특히 여러 번 호출되거나 비동기 상황에서 중요합니다.
                </p>

                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “Past me betrayed present me.”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        이전 값을 직접 참조하면 의도하지 않은 결과가 나올 수 있습니다.
                        prev를 신뢰하세요.
                    </p>
                </div>
            </section>

            {/* Async Nature */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">State is Asynchronous</h2>

                <div className="border border-neutral-800 rounded-md p-6 bg-neutral-900 text-sm">
                    <pre>{`setCount(1)
console.log(count) // still previous value`}</pre>
                </div>

                <p className="text-neutral-400 max-w-2xl">
                    상태 업데이트는 즉시 반영되지 않습니다.
                    React는 렌더 사이클 이후 값을 반영합니다.
                </p>

                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “React: Trust me bro.”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        우리는 모두 한 번쯤 console.log로 배웠습니다.
                    </p>
                </div>
            </section>

            {/* Key Points */}
            <section className="space-y-4 py-6">
                <h2 className="text-xl font-medium">Key Points</h2>

                <ul className="list-disc list-inside text-neutral-400 space-y-2">
                    <li>상태가 변경되면 컴포넌트는 다시 렌더링된다.</li>
                    <li>동일한 렌더 사이클 내의 업데이트는 batching 될 수 있다.</li>
                    <li>이전 값을 기반으로 할 때는 함수형 업데이트를 사용한다.</li>
                    <li>setState는 즉시 값을 변경하지 않는다.</li>
                </ul>
            </section>

        </section>
    )
}