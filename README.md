# 🧠 React Study Playground

> A minimal, documentation-style interactive React study website.

---

## 📌 Project Summary

**React Study Playground**는  
React의 주요 개념과 기능을 간결한 설명과 코드 예제를 통해 학습할 수 있도록 설계된 웹 애플리케이션입니다.

이 프로젝트의 목적은:

- React 핵심 개념을 구조적으로 정리
- 공식 문서 스타일의 UI로 가독성 강화
- 기능별 독립적 학습 구조 구성
- 포트폴리오용으로 활용 가능한 완성도 높은 설계

---

# 🏗 Project Architecture

## 📂 Directory Structure

현재 프로젝트는 App Router 기반 구조를 사용하며,  
기능 확장성을 고려해 명확히 분리된 구조로 설계되었습니다.

```
app/
 ├─ (study)/          # 메인 학습 페이지 그룹 (Route Group)
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   └─ ...
 │
 ├─ components/       # 재사용 UI 컴포넌트
 │   ├─ ui/
 │   ├─ layout/
 │   └─ ...
 │
 ├─ hooks/            # 커스텀 React Hooks
 │
 ├─ lib/              # 유틸 함수 / 공통 로직
 │
 ├─ types/            # TypeScript 타입 정의
 │
 └─ globals.css
```

### ✅ 특징

- Route Group `(study)` 사용 → URL 구조는 깔끔하게 유지
- UI / 로직 / 타입 분리 설계
- 확장성 고려한 구조

---

# 🎨 Design System

## 🧩 Core Concept

> Minimal + Official Documentation Style

디자인 방향은 다음과 같습니다:

- 과한 애니메이션 제거
- 구조 중심의 레이아웃
- 정보 전달 중심 UI
- 공식 문서와 유사한 안정적인 느낌

---

## 🌑 Color System

### Background

- `bg-neutral-950`
- 다크 기반, 눈에 피로감 적은 톤

### Text

- `text-neutral-200`
- 기본 텍스트
- 부가 텍스트는 `text-neutral-400`

### Border

- `border-neutral-800`
- 얇고 절제된 구분선

### Accent (Primary Point Color)

- `green-400` 계열
- 네온 느낌이지만 glow 효과 없음
- 그림자 / 번짐 효과 사용하지 않음

---

## 🧱 Layout Philosophy

- max-width 기반 중앙 정렬
- 충분한 padding과 whitespace 유지
- 명확한 section 구분
- 왼쪽 정렬 기반 정보 배치

예시:

```
<body className="bg-neutral-950 text-neutral-200">
  <main className="max-w-5xl mx-auto px-6 py-12">
    {children}
  </main>
</body>
```

---

# 🛠 Tech Stack

## Core

- Next.js (App Router)
- React
- TypeScript

## Styling

- Tailwind CSS v3
- PostCSS
- Autoprefixer

## State / Logic

- React 기본 Hooks
- Custom Hooks (app/hooks)

## Architecture

- Feature-based structure
- Route Group 사용
- UI / Logic / Types 분리 설계

---

# ✅ Current Implementation Status

## 1️⃣ 프로젝트 생성 완료

- Next.js 초기화 완료
- Tailwind v3 세팅 완료
- GitHub Repository 연결 완료

---

## 2️⃣ 글로벌 레이아웃 설정 완료

- 다크 테마 적용
- 중앙 정렬 구조 확정
- 기본 타이포 시스템 설정
- 공통 컨텐츠 영역 구성 완료

---

## 3️⃣ 기본 폴더 구조 설계 완료

- components/
- hooks/
- lib/
- types/
- (study)/ route group

확장 가능 구조 설계 완료.

---

# 🚧 Next Implementation Steps

## 1️⃣ Hero Section

구성 예정:

- 프로젝트 목적 설명
- 한 줄 슬로건
- 공식 문서 느낌 타이포 구조

---

## 2️⃣ Section Divider Component

목표:

- 왼쪽 짧은 가로 라인
- 오른쪽 섹션 텍스트
- 미니멀한 문서 구분 느낌

예상 형태:

```
────────  Core Concepts
```

---

## 3️⃣ Topic Card Grid

각 React 기능을 카드로 구성:

- 제목
- 짧은 설명
- hover 시 border 색상 변경
- 상세 페이지 이동

예시 구조:

```
<div className="border border-neutral-800 hover:border-green-400 transition-colors">
  <h3>useState</h3>
  <p>State를 관리하는 기본 Hook</p>
</div>
```

---

## 4️⃣ Feature Detail Pages

각 React 기능에 대해:

- 개념 요약
- 코드 예제
- 필요 시 간단한 시각적 데모

예상 구조:

```
app/(study)/use-state/page.tsx
app/(study)/use-effect/page.tsx
```

---

# 🧠 Planned Topics

- useState
- useEffect
- useRef
- useContext
- useMemo
- useCallback
- Custom Hooks
- Props vs State
- Re-rendering
- Component Lifecycle

---

# 📈 Future Enhancements

- 코드 하이라이팅 추가
- 검색 기능
- 카테고리 분류
- 다크 문서 UI 고도화
- 성능 최적화

---

# 🎯 Project Goal

이 프로젝트는 단순한 예제 모음이 아니라  
"React를 구조적으로 이해할 수 있는 학습 공간"을 만드는 것을 목표로 합니다.

포트폴리오에서:

- 설계 능력
- 구조화 능력
- UI 감각
- 기술 이해도

를 보여주는 프로젝트로 발전시키는 것이 최종 목표입니다.

---

# 📦 Project Name

**react-study**