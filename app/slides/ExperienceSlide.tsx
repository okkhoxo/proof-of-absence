export default function ExperienceSlide() {
  return (
    <div className="slide-container">
      <div className="slide relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/20 via-gray-900/20 to-gray-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Title */}
          <div className="mb-10">
            <h2 className="text-6xl font-bold mb-4 text-gray-300">
              경험의 흐름
            </h2>
            <div className="h-1 w-32 bg-gray-500" />
          </div>

          {/* Experience Flow */}
          <div className="flex-1 flex items-center">
            <div className="w-full space-y-6">
              {/* Step 1 */}
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-300 mb-2">대기 화면</h3>
                      <p className="text-xl text-gray-400">"촬영하기" 버튼만 표시</p>
                    </div>
                    <div className="bg-black/80 border border-gray-600 rounded-lg px-8 py-4">
                      <p className="text-white text-center">[촬영하기]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-300 mb-2">카운트다운</h3>
                      <p className="text-xl text-gray-400">화면에 숫자만 표시 (미러링 없음)</p>
                    </div>
                    <div className="bg-black/80 border border-gray-600 rounded-lg px-12 py-8">
                      <p className="text-6xl text-white font-bold text-center">3</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-300 mb-2">촬영 & 즉시 삭제</h3>
                      <p className="text-xl text-gray-400">원본은 메모리에서 영구 삭제</p>
                    </div>
                    <div className="bg-black/80 border border-gray-600 rounded-lg px-8 py-4">
                      <p className="text-white text-center">원본 삭제 중...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  4
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-300 mb-2">AI 변환</h3>
                      <p className="text-xl text-gray-400">랜덤 스타일로 이미지 변환</p>
                    </div>
                    <div className="bg-black/80 border border-gray-600 rounded-lg px-8 py-4">
                      <p className="text-white text-center">AI 변환 중...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  5
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-300 mb-2">결과 제공</h3>
                      <p className="text-xl text-gray-400">QR 코드로 다운로드</p>
                    </div>
                    <div className="bg-black/80 border border-gray-600 rounded-lg px-8 py-4">
                      <p className="text-white text-center">[AI 이미지]<br/>[QR 코드]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
