# 김윤서 - AI 연구원을 꿈꾸는 개발자 포트폴리오

## 📋 프로젝트 소개

한국외국어대학교 정보통신공학과 본전공, ELLT 이중전공 3학년 김윤서님의 개인 웹페이지입니다. AI 연구원을 목표로 하는 멘토링 플랫폼과 함께 깔끔하고 전문적인 디자인으로 구성되었습니다.

## 🎯 주요 기능

### 1. 개인 소개
- 학력 정보 (한국외국어대학교, 정보통신공학과 본전공, ELLT 이중전공)
- AI 연구원 목표 및 계획
- 한국외대 캐릭터 '부랑'을 활용한 친근한 디자인

### 2. 활동 내역
- **3학년 하계방학 대외활동**
  - SK AI Dream Camp
  - LG Aimers 7기
  - SK 써니C 4기
  - KISA 온라인 기초교육
- **Flex 영어 학습** (졸업요건 충족)

### 3. 자격증
- 정보처리기능사 (2023년 12월 취득)
- 사무자동화산업기사 (필기 합격, 실기 준비중)

### 4. 멘토링 서비스
- 수업조교 멘토링 (멘토-멘티 시스템)
- 학부생 연구 멘토링 (교수님과의 협업)
- AI 관련 진로 상담
- 학습 방법 및 전공 선택 상담
- 실시간 채팅 상담 기능

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **디자인**: 반응형 웹 디자인, CSS Grid, Flexbox
- **애니메이션**: CSS Animations, JavaScript Intersection Observer
- **폰트**: Noto Sans KR (Google Fonts)
- **아이콘**: Font Awesome

## 📁 파일 구조

```
yunseo-portfolio/
├── index.html          # 메인 HTML 파일
├── style.css           # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🚀 실행 방법

### 로컬 실행
1. 프로젝트 폴더로 이동:
   ```bash
   cd yunseo-portfolio
   ```

2. 웹 브라우저에서 `index.html` 파일을 열거나, 로컬 서버를 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```

3. 브라우저에서 `http://localhost:8000` 접속

### GitHub Pages 배포
1. GitHub에 저장소 생성
2. 파일들을 업로드
3. Settings > Pages에서 GitHub Pages 활성화
4. `https://사용자명.github.io/저장소명` 형태의 링크 생성

## 🎨 디자인 특징

### 색상 팔레트
- **주요 색상**: 파란색 계열 (#1e3c72, #2a5298, #667eea)
- **강조 색상**: 골드 (#ffd700)
- **배경 색상**: 밝은 회색 (#f8f9fa)

### 디자인 요소
- 한국외대 캐릭터 '부랑' 활용
- 그라데이션 배경과 카드형 레이아웃
- 부드러운 애니메이션과 호버 효과
- 모바일 반응형 디자인

## 📱 반응형 디자인

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🔧 주요 기능 설명

### 멘토링 신청 폼
- 이름, 이메일, 상담 주제, 상담 내용 입력
- 폼 제출 시 알림 메시지 표시
- 실제 구현 시 서버로 데이터 전송 가능

### 실시간 채팅
- 모달 형태의 채팅 인터페이스
- 자동 응답 시스템 (데모용)
- 엔터키로 메시지 전송

### 스크롤 애니메이션
- Intersection Observer API 활용
- 요소가 화면에 나타날 때 페이드인 효과
- 부드러운 스크롤 네비게이션

## 🎯 향후 개선 계획

1. **백엔드 연동**: 실제 멘토링 신청 데이터 처리
2. **실시간 채팅**: WebSocket을 활용한 실제 채팅 기능
3. **관리자 패널**: 멘토링 신청 관리 시스템
4. **포트폴리오 확장**: 프로젝트 갤러리, 블로그 기능
5. **SEO 최적화**: 검색 엔진 최적화

## 📞 연락처

- **이름**: 김윤서
- **학교**: 한국외국어대학교
- **전공**: 정보통신공학과 (본전공) / ELLT (이중전공)
- **학년**: 3학년

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**한국외국어대학교 캐릭터 '부랑'**을 활용하여 친근하고 전문적인 이미지를 전달하는 포트폴리오 웹사이트입니다. 🎓✨

## 🌐 GitHub Pages 배포 가이드

### 1. GitHub 계정 생성
- https://github.com 접속
- Sign up으로 계정 생성

### 2. 새 저장소 생성
- GitHub에서 "New repository" 클릭
- Repository name: `yunseo-portfolio`
- Public 선택
- "Create repository" 클릭

### 3. 파일 업로드
- 생성된 저장소에서 "uploading an existing file" 클릭
- 모든 파일 (index.html, style.css, script.js, README.md) 업로드
- "Commit changes" 클릭

### 4. GitHub Pages 활성화
- 저장소 Settings 탭 클릭
- 왼쪽 메뉴에서 "Pages" 클릭
- Source에서 "Deploy from a branch" 선택
- Branch에서 "main" 선택
- "Save" 클릭

### 5. 배포 완료
- 몇 분 후 `https://사용자명.github.io/yunseo-portfolio` 형태의 링크 생성
- 이 링크를 다른 사람과 공유 가능! 