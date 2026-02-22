"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function UseEffectPage() {
    const [count, setCount] = useState(0)
    const [effectRuns, setEffectRuns] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const renderCount = useRef(0)
    renderCount.current += 1

    useEffect(() => {
        setEffectRuns(prev => prev + 1)
    }, [count])

    useEffect(() => {
        if (!isRunning) return

        const id = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [isRunning])

    return (
        <section className="space-y-20">

            {/* Header */}
            <header className="space-y-6 py-6">
                <h1 className="text-4xl font-semibold text-green-400">useEffect</h1>
                <p className="text-neutral-400 max-w-2xl leading-relaxed">
                    React 외부 세계와 상호작용할 때 사용하는 Hook입니다.
                    화면에서 effect 실행과 cleanup을 직관적으로 확인해보세요.
                </p>
            </header>

            {/* Interactive Count Effect */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">Count Effect</h2>

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-6">

                    <div className="text-3xl font-semibold">Count: {count}</div>
                    <div className="text-sm text-neutral-500">Effect ran: {effectRuns} times</div>

                    <div className="flex gap-4 flex-wrap">
                        <button
                            onClick={() => setCount(count + 1)}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            Increment Count
                        </button>

                        <button
                            onClick={() => setCount(0)}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            Reset Count
                        </button>
                    </div>

                    <p className="text-xs text-neutral-500">
                        👉 Count를 바꾸면 effect가 실행되면서 화면에 횟수가 올라갑니다.
                    </p>
                </div>

                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “Why did my effect run again?”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        dependency 배열에 있는 값이 변경될 때마다 effect가 실행됩니다.
                    </p>
                </div>
            </section>

            {/* Timer Effect */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">Timer & Cleanup</h2>

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-6">

                    <div className="text-3xl font-semibold">{seconds}s</div>

                    <div className="flex gap-4 flex-wrap">
                        <button
                            onClick={() => setIsRunning(!isRunning)}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            {isRunning ? "Stop Timer" : "Start Timer"}
                        </button>

                        <button
                            onClick={() => setSeconds(0)}
                            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                        >
                            Reset Timer
                        </button>
                    </div>

                    <p className="text-xs text-neutral-500">
                        👉 Stop을 누르면 cleanup이 실행되어 interval이 종료됩니다.
                    </p>
                </div>

                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “Always clean up your mess.”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        타이머, 구독, 이벤트 리스너는 반드시 정리하세요.
                    </p>
                </div>
            </section>

            {/* Strict Mode Demo */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">Strict Mode Surprise</h2>

                <p className="text-neutral-400 max-w-2xl">
                    개발 모드에서는 effect가 두 번 실행될 수 있습니다.
                </p>

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-4">
                    <p className="text-sm text-neutral-500">
                        effectRunCount를 보고, effect가 몇 번 실행됐는지 바로 확인하세요.
                    </p>
                    <div className="text-2xl font-semibold">Effect ran: {effectRuns} times</div>
                </div>

                <div className="border-l-2 border-green-400 pl-4 space-y-2">
                    <p className="text-sm italic text-neutral-300">
                        “Why is my effect running twice?”
                    </p>
                    <p className="text-neutral-500 text-sm">
                        React: “Relax. I’m just double-checking you in dev mode.”
                    </p>
                </div>
            </section>

            <div className="py-6"></div>

            <EffectLikesExample />

            {/* Key Points */}
            <section className="space-y-4 py-6">
                <h2 className="text-xl font-medium">Key Points</h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-2">
                    <li>useEffect는 렌더 이후 실행됩니다.</li>
                    <li>dependency 배열이 실행 시점을 결정합니다.</li>
                    <li>cleanup 함수는 다음 effect 실행 전 또는 unmount 시 호출됩니다.</li>
                    <li>Strict Mode에서는 effect가 두 번 실행될 수 있습니다.</li>
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
/* Effect Real World Example */
function EffectLikesExample() {
    const [likes, setLikes] = useState(0)
    const [message, setMessage] = useState("좋아요가 없습니다.")

    // likes가 바뀔 때마다 메시지 업데이트
    useEffect(() => {
        if (likes === 0) {
            setMessage("좋아요가 없습니다.")
        } else {
            setMessage(`🎉 현재 좋아요 수: ${likes}`)
        }
    }, [likes])

    return (
        <section className="space-y-6 py-6">
            <h2 className="text-xl font-medium">💡 Real World Example (useEffect)</h2>

            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900 space-y-4">
                <p className="text-sm text-neutral-300">Likes Tracker (Effect)</p>

                <div className="text-xl font-semibold text-neutral-200">
                    Likes (Effect): {likes}
                </div>

                <div className="flex gap-4 flex-wrap">
                    <button
                        onClick={() => setLikes(prev => prev + 1)}
                        className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                    >
                        👍 Like
                    </button>
                    <button
                        onClick={() => setLikes(0)}
                        className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                    >
                        Reset Likes
                    </button>
                </div>

                <div className="text-neutral-400 text-sm">
                    {message}
                </div>

                <p className="text-xs text-neutral-500">
                    👉 좋아요 수가 바뀔 때마다 effect가 실행되어 메시지가 갱신됩니다.
                    <br />
                    댓글, 조회수, 상태 기반 알림 등 실제 UI에서 바로 활용 가능합니다.
                </p>

            </div>
        </section>
    )
}