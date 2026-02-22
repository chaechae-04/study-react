"use client"

import { useState, useRef } from "react"
import Link from "next/link"

export default function UseRefPage() {
    const [count, setCount] = useState(0)
    const [forceRender, setForceRender] = useState(0) // 화면 강제 갱신
    const renderCount = useRef(0)
    const refCount = useRef(0)

    renderCount.current += 1

    return (
        <section className="space-y-20">

            {/* Header */}
            <header className="space-y-6 py-6">
                <h1 className="text-4xl font-semibold text-green-400">useRef</h1>
                <p className="text-neutral-400 max-w-2xl leading-relaxed">
                    useRef는 값이 바뀌어도 컴포넌트를 다시 렌더링하지 않는 Hook입니다.  <br />
                    Update 버튼으로 강제로 화면을 갱신할 수도 있습니다.
                </p>
            </header>

            {/* Interactive Example */}
            <section className="space-y-6 py-6">
                <h2 className="text-xl font-medium">State vs Ref</h2>

                <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900 space-y-6">

                    {/* 1️⃣ State Counter */}
                    <div className="space-y-2">
                        <div className="text-xl font-semibold">State Count: {count}</div>
                        <div className="text-xs text-neutral-500">Render Count: {renderCount.current}</div>
                        <div className="flex gap-4 flex-wrap">
                            <button
                                onClick={() => setCount(count + 1)}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Increment State
                            </button>
                            <button
                                onClick={() => setCount(0)}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Reset State
                            </button>
                        </div>
                    </div>

                    <hr className="border-neutral-700 my-4" />

                    {/* 2️⃣ Ref Counter */}
                    <div className="space-y-2">
                        <div className="text-xl font-semibold">Ref Count (no render): {refCount.current}</div>
                        <div className="flex gap-4 flex-wrap">
                            <button
                                onClick={() => { refCount.current += 1; console.log("Ref incremented:", refCount.current) }}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Increment Ref
                            </button>
                            <button
                                onClick={() => { refCount.current = 0; console.log("Ref reset:", refCount.current) }}
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Reset Ref
                            </button>
                            <button
                                onClick={() => setForceRender(prev => prev + 1)} // 화면 강제 갱신
                                className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
                            >
                                Update Ref
                            </button>
                        </div>

                        <p className="text-xs text-neutral-500">
                            👉 Increment / Reset은 화면을 바꾸지 않지만, Update 버튼으로 화면을 갱신할 수 있습니다.
                        </p>

                        <div className="border-l-2 border-green-400 pl-4 space-y-1">
                            <p className="text-sm italic text-neutral-300">“Ref changed but UI stayed calm 😎”</p>
                            <p className="text-sm text-neutral-500">“Update”를 누르면 화면이 눈치채고 갱신됩니다.</p>
                        </div>

                    </div>

                </div>
            </section>

            <div className="py-6"></div>

            <RefLikesExample />

            {/* Key Points */}
            <section className="space-y-4 py-6">
                <h2 className="text-xl font-medium">Key Points</h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-2">
                    <li>useRef는 값 변경 시 컴포넌트를 재렌더링하지 않는다.</li>
                    <li>State는 변경 시 즉시 UI와 동기화된다.</li>
                    <li>Update 버튼으로 강제로 렌더링하여 Ref 값을 화면에 반영할 수 있다.</li>
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

/* Ref 실습 예제 */
function RefLikesExample() {
  // Likes용 Ref와 화면 갱신용 state
  const likesRef = useRef(0)
  const [forceRender, setForceRender] = useState(0)

  return (
    <section className="space-y-6 py-6">
      <h2 className="text-xl font-medium">💡 useRef Like button Example</h2>

      <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900 space-y-4">
        <p className="text-sm text-neutral-300">Likes Tracker (Ref)</p>

        <div className="text-xl font-semibold">
          Likes (Ref): {likesRef.current}
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => { likesRef.current += 1 }}
            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
          >
            👍 Like
          </button>
          <button
            onClick={() => { likesRef.current = 0 }}
            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
          >
            Reset Likes
          </button>
          <button
            onClick={() => setForceRender(prev => prev + 1)}
            className="px-4 py-2 border border-neutral-700 hover:border-green-400 transition-colors"
          >
            Update Display
          </button>
        </div>

        <p className="text-xs text-neutral-500">
          👉 Like 버튼을 눌러도 화면은 바로 안 바뀌지만,
          Update 버튼으로 즉시 반영할 수 있습니다.
          <br />
          댓글, 조회수, 입력값 등 렌더링과 무관하게 값을 유지할 때 유용합니다.
        </p>
      </div>
    </section>
  )
}