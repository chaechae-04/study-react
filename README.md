# 🧠 React Study Playground - Progress Update

> A minimal, documentation-style interactive React study website.

---

## 📌 Project Summary (Updated)

**React Study Playground**는  
React의 주요 개념과 기능을 간결한 설명과 코드 예제를 통해 학습할 수 있도록 설계된 웹 애플리케이션입니다.

### 이번 업데이트 기준 목적:

- React 핵심 개념을 구조적으로 정리
- 공식 문서 스타일의 UI로 가독성 강화
- 기능별 독립적 학습 구조 구성
- 실습 가능한 Interactive Example 추가
- 포트폴리오용으로 활용 가능한 완성도 높은 설계

---

# 🏗 Project Architecture (Updated)

## 📂 Directory Structure

```
app/
 ├─ (study)/          
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   ├─ use-state/
 │   │   └─ page.tsx
 │   ├─ use-effect/
 │   │   └─ page.tsx
 │   └─ ...
 │
 ├─ components/       
 │   ├─ ui/
 │   ├─ layout/
 │   └─ ...
 │
 ├─ hooks/            
 │
 ├─ lib/              
 │
 ├─ types/            
 │
 └─ globals.css
```

### ✅ 추가/변경 사항

- 각 React 기능별 route group 생성 (use-state, use-effect, use-ref 등)
- Interactive Example 컴포넌트 함수화 및 재사용 가능하게 설계
- 기존 UI/Logic/Types 분리 구조 유지

---

# 🎨 Design System (Updated)

- **Color / Layout / Typography** 모두 기존 설정 유지
- **Interactive Example 카드** 디자인을 모든 예제 통일
- State, Ref, Effect 등 예제 모두 동일 스타일로 배치

> 코드 블럭 내부에 React 예제 코드를 쓸 때는, 내부 코드용 \`\\\`\`tsx\` 이스케이프 필요

예시:

```tsx
function StateCounter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

---

# 🛠 Tech Stack

- Next.js (App Router)
- React / TypeScript
- Tailwind CSS v3 / PostCSS / Autoprefixer
- React 기본 Hooks + Custom Hooks
- Feature-based structure / Route Group 사용

---

# ✅ Current Implementation Status

## 1️⃣ 프로젝트 초기화

- Next.js + Tailwind 세팅 완료
- GitHub Repository 연결 완료

## 2️⃣ 글로벌 레이아웃

- 다크 테마 적용
- 중앙 정렬 구조 확정
- 공통 컨텐츠 영역 구성 완료

## 3️⃣ 폴더 구조

- components/, hooks/, lib/, types/, (study)/ route group 분리

## 4️⃣ React 기능 페이지 구현

### useState

- 기본 카운터 예제
- 객체 State 예제
- Functional Update vs Direct Update 비교
- Reset 기능 포함

### useEffect

- Count 변화에 따른 Effect Demo
- Timer & Cleanup 예제
- Strict Mode effect 2회 실행 시연
- Real World Example: Likes 버튼 (effect로 메시지 자동 갱신)

### useRef

- State vs Ref 예제
- Increment / Reset Ref 값
- Update 버튼으로 강제 렌더링
- 화면 갱신 없이 Ref 값 관리

> Interactive Example 모두 카드 형태로 통일, 버튼 스타일 통일, 설명과 메시지 자연스럽게 배치

---

# 🚧 Next Implementation Steps

1. Hero Section
   - 프로젝트 목적, 슬로건, 공식 문서 느낌 UI
2. Section Divider Component
   - 왼쪽 짧은 가로 라인 + 오른쪽 섹션 텍스트
3. Topic Card Grid
   - 제목, 짧은 설명, hover 효과, 상세 페이지 이동
4. Feature Detail Pages
   - 개념 요약, 코드 예제, 시각적 데모
5. 추가 React 기능 구현
   - useContext, useMemo, useCallback, Custom Hooks 등

---

# 📈 Future Enhancements

- 코드 하이라이팅
- 검색 기능
- 카테고리 분류
- 다크 문서 UI 고도화
- 성능 최적화

---

# 🎯 Project Goal

> "React를 구조적으로 이해할 수 있는 학습 공간" 제공

- 포트폴리오에서 설계, 구조화, UI 감각, 기술 이해도 강조 가능
- Interactive Example로 직관적 학습 가능