import Footer from "./components/layout/Footer";
import SectionDivider from "./components/ui/SectionDivider";
import TopicCard from "./components/ui/TopicCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">

      <main className="px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="py-20 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            React Study Playground
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl">
            React의 핵심 개념을 요약과 코드, 인터랙션으로 정리한 학습용 프로젝트입니다.
          </p>
        </section>

        {/* Divider */}
        <SectionDivider label="Core Hooks" />

        {/* Cards */}
        <section className="grid md:grid-cols-3 gap-6">
          <TopicCard
            title="useState"
            description="컴포넌트 내부 상태를 관리하는 기본 Hook"
          />
          <TopicCard
            title="useEffect"
            description="사이드 이펙트를 처리하는 Hook"
          />
          <TopicCard
            title="useRef"
            description="DOM 참조 및 값 유지"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}