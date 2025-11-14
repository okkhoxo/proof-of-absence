export default function HardwareSlide() {
  return (
    <div className="slide-container">
      <div className="slide relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/20 via-gray-900/20 to-gray-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-gray-300">
              기술 구현
            </h2>
            <div className="h-1 w-32 mx-auto bg-gray-500" />
          </div>

          {/* Main Content */}
          <div className="max-w-5xl w-full space-y-10">
            {/* Hardware */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-300 mb-8">하드웨어</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                  <p className="text-2xl text-gray-300 font-semibold mb-2">아이패드</p>
                  <p className="text-lg text-gray-400">화면 + 카메라 + 앱 실행</p>
                </div>
                <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                  <p className="text-2xl text-gray-300 font-semibold mb-2">3D 프린팅</p>
                  <p className="text-lg text-gray-400">추상적 프레임 구조물</p>
                </div>
              </div>
            </div>

            {/* Software */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-300 mb-8">소프트웨어</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <p className="text-xl text-gray-300"><span className="font-semibold text-white">웹 앱</span> - React/Next.js 기반</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <p className="text-xl text-gray-300"><span className="font-semibold text-white">AI API</span> - 이미지 스타일 변환</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <p className="text-xl text-gray-300"><span className="font-semibold text-white">QR 코드</span> - 다운로드 링크 생성</p>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-300 mb-8">크기</h3>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-lg text-gray-400 mb-2">높이</p>
                  <p className="text-3xl text-white font-bold">60cm</p>
                </div>
                <div>
                  <p className="text-lg text-gray-400 mb-2">폭</p>
                  <p className="text-3xl text-white font-bold">30cm</p>
                </div>
                <div>
                  <p className="text-lg text-gray-400 mb-2">깊이</p>
                  <p className="text-3xl text-white font-bold">20cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
