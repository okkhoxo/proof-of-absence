export default function IntentionSlide() {
  return (
    <div className="slide-container">
      <div className="slide relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/20 via-gray-900/20 to-gray-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 text-gray-300">
              작업 의도
            </h2>
            <div className="h-1 w-32 bg-gray-500" />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* History of Photography */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">사진의 역사와 상실</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-lg font-semibold text-gray-300 mb-2">필름</p>
                  <p className="text-sm text-gray-400">현장의 기록</p>
                  <p className="text-xs text-gray-500 mt-2">→ 물리적 실체</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-300 mb-2">디지털</p>
                  <p className="text-sm text-gray-400">현장의 선택</p>
                  <p className="text-xs text-gray-500 mt-2">→ 의도성 상실</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-300 mb-2">스마트폰</p>
                  <p className="text-sm text-gray-400">현장의 조작</p>
                  <p className="text-xs text-gray-500 mt-2">→ 진실성 상실</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white mb-2">AI</p>
                  <p className="text-sm text-gray-300">현장의 소멸</p>
                  <p className="text-xs text-gray-400 mt-2">→ 원본 부재</p>
                </div>
              </div>
            </div>

            {/* Reality Check */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">보정의 일상화</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-sm">• 인스타그램에 사진 올리기 전 10번 찍어서 1장 선택</p>
                  <p className="text-sm">• 스냅챗의 얼굴 변형은 이제 "기본"</p>
                  <p className="text-sm">• 아이폰 카메라 자체가 이미 AI 알고리즘</p>
                  <p className="text-sm">• 보정 안 한 사진을 올리면 "이상하다"고 느낌</p>
                </div>
                <p className="text-sm text-gray-400 italic mt-4">
                  → 우리는 이미 10년째 원본 없는 사진을 찍고 있다
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">진짜 질문</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-300">당신의 핸드폰 갤러리를 열어보세요.</p>
                  <p className="text-sm text-gray-300">마음에 들지 않아 버린 그 9장의 사진은 어디로 갔습니까?</p>
                  <p className="text-sm text-gray-300">10장 중 1장을 선택했다면, 나머지 9장이 "진짜" 당신이 아닙니까?</p>
                  <p className="text-sm text-white font-semibold mt-4">
                    원본은 당신이 삭제했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* The Work's Role */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-300 mb-4">일반적인 포토부스</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• 화면에 내 얼굴이 보입니다</p>
                  <p>• 포즈를 고치고, 각도를 조정합니다</p>
                  <p>• 마음에 들 때까지 다시 찍습니다</p>
                  <p>• 그리고 "이것이 원본"이라고 말합니다</p>
                </div>
                <p className="text-sm text-gray-500 italic mt-4">
                  = 위선적 진실 (원본인 척하는 선택된 이미지)
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">이 작품</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• 화면에 당신의 얼굴이 보이지 않습니다</p>
                  <p>• 숫자만 카운트됩니다</p>
                  <p>• 원본은 촬영 즉시 영구 삭제됩니다</p>
                  <p>• 그리고 "원본은 없습니다"라고 말합니다</p>
                </div>
                <p className="text-sm text-white font-semibold mt-4">
                  = 정직한 거짓 (거짓임을 명시하는 이미지)
                </p>
              </div>
            </div>

            {/* Core Statement */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 text-center">
              <p className="text-2xl text-gray-200 leading-relaxed">
                원본은 <span className="text-white font-bold">이미 죽었다.</span><br />
                <span className="text-gray-400 text-lg mt-2 block">
                  당신이 죽였고, 우리 모두가 공범이다.
                </span>
              </p>
              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4" />
              <p className="text-lg text-gray-400 italic">
                이 작품은 그 사실을 정직하게 드러낼 뿐이다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
