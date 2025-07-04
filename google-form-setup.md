# 구글폼 설정 가이드

## 🎯 구글폼 생성 및 설정

### 1단계: 구글폼 생성
1. https://forms.google.com 접속
2. Google 계정으로 로그인
3. "빈 양식" 클릭

### 2단계: 폼 제목 설정
- 제목: "김윤서 멘토링 상담 신청"
- 설명: "AI 연구원을 꿈꾸는 김윤서와 함께 멘토링을 시작해보세요!"

### 3단계: 질문 추가

#### 질문 1: 이름
- 질문 유형: "단답형"
- 질문: "이름을 입력해주세요"
- 필수 응답: ✅

#### 질문 2: 이메일
- 질문 유형: "단답형"
- 질문: "이메일 주소를 입력해주세요"
- 유효성 검사: 이메일 형식
- 필수 응답: ✅

#### 질문 3: 연락처
- 질문 유형: "단답형"
- 질문: "연락처(전화번호)를 입력해주세요"
- 필수 응답: ✅

#### 질문 4: 상담 주제
- 질문 유형: "객관식"
- 질문: "상담하고 싶은 주제를 선택해주세요"
- 옵션:
  - 수업조교 멘토링
  - 학부생 연구 멘토링
  - AI 관련 진로 상담
  - 학습 방법 상담
  - 기타
- 필수 응답: ✅

#### 질문 5: 상담 내용
- 질문 유형: "단락"
- 질문: "상담하고 싶은 내용을 자세히 작성해주세요"
- 필수 응답: ✅

#### 질문 6: 희망 상담 방식
- 질문 유형: "객관식"
- 질문: "희망하는 상담 방식을 선택해주세요"
- 옵션:
  - 온라인 화상회의 (Zoom, Google Meet)
  - 이메일 상담
  - 전화 상담
  - 대면 상담
- 필수 응답: ✅

### 4단계: 응답 설정
1. "응답" 탭 클릭
2. "이메일 알림 받기" 활성화
3. 이메일 주소: `luneotv@gmail.com` 입력
4. "새 응답이 제출될 때마다 이메일 알림 받기" 체크

### 5단계: 폼 공유 설정
1. "보내기" 버튼 클릭
2. "링크" 탭 선택
3. "링크 복사" 클릭
4. 복사된 링크를 `index.html`의 `YOUR_GOOGLE_FORM_ID` 부분에 붙여넣기

## 🔗 실제 구글폼 링크 예시

구글폼을 생성한 후 다음과 같은 형태의 링크가 생성됩니다:
```
https://forms.gle/ABC123DEF456GHI789
```

이 링크를 `index.html` 파일의 다음 부분에 교체하세요:

```html
<a href="https://forms.gle/YOUR_GOOGLE_FORM_ID" target="_blank" class="btn-primary">
```

## 📧 이메일 알림 설정

구글폼에서 응답이 제출되면 `luneotv@gmail.com`으로 자동으로 이메일이 전송됩니다.

이메일에는 다음 정보가 포함됩니다:
- 응답자 이름
- 이메일 주소
- 연락처
- 상담 주제
- 상담 내용
- 희망 상담 방식
- 제출 시간

## 🎯 완료 후 확인사항

1. ✅ 구글폼 생성 완료
2. ✅ 모든 질문 추가 완료
3. ✅ 이메일 알림 설정 완료
4. ✅ 링크를 웹사이트에 연결 완료
5. ✅ 테스트 응답 제출 후 이메일 수신 확인

## 💡 추가 팁

- 구글폼의 테마를 한국외대 색상에 맞게 설정할 수 있습니다
- 응답 제한을 설정하여 스팸을 방지할 수 있습니다
- 응답 데이터를 스프레드시트로 자동 저장할 수 있습니다

---

**구글폼 생성이 완료되면 실제 링크를 알려주시면 웹사이트에 바로 연결해드리겠습니다!** 🚀 