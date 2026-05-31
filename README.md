# PDF 리더 (PWA)

광고 없는 가벼운 PDF 뷰어. 확대·축소, 페이지 넘기기, 핀치 줌, 이어보기 지원.
PDF.js 엔진을 내장하고 있어 한 번 설치하면 인터넷 없이도 열립니다.

## 폴더 구성
- `index.html` — 앱 본체
- `manifest.json` — 앱 정보(이름, 아이콘)
- `sw.js` — 오프라인 캐시
- `pdf.min.js`, `pdf.worker.min.js` — PDF 엔진
- `icon-192.png`, `icon-512.png` — 앱 아이콘

## GitHub Pages 배포
1. github.com → 우측 상단 **+** → **New repository**
2. 이름 예: `pdf-reader`, **Public** 선택 → **Create repository**
3. **uploading an existing file** 클릭 → 이 폴더의 **파일 7개 전부** 드래그앤드롭 (폴더 말고 파일만) → **Commit changes**
4. 상단 **Settings → Pages** → Branch **main** 선택 → **Save**
5. 1~2분 뒤 주소 생성: `https://아이디.github.io/pdf-reader/`

## 폰에 앱으로 설치
생성된 주소를 크롬으로 접속 → 주소창 옆 **⋮** → **앱 설치** / **홈 화면에 추가**
