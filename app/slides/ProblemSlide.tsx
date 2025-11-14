export default function ProblemSlide() {
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
              문제의식
            </h2>
            <div className="h-1 w-32 mx-auto bg-gray-500" />
          </div>

          {/* Main Question */}
          <div className="max-w-4xl space-y-12">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
              <p className="text-4xl text-gray-200 leading-relaxed font-light mb-8">
                당신은 마지막으로
              </p>
              <p className="text-5xl text-white font-bold mb-8">
                보정 없는 사진
              </p>
              <p className="text-4xl text-gray-200 leading-relaxed font-light">
                을 본 게 언제입니까?
              </p>
            </div>

            {/* Reality */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">인스타그램</p>
                <p className="text-base text-gray-400">자동 보정, 필터</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">스냅챗</p>
                <p className="text-base text-gray-400">얼굴 변형</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">뷰티 카메라</p>
                <p className="text-base text-gray-400">피부 보정</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">아이폰 HDR</p>
                <p className="text-base text-gray-400">다중 노출 합성</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">야간 모드</p>
                <p className="text-base text-gray-400">AI 노이즈 제거</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">인물 모드</p>
                <p className="text-base text-gray-400">AI 배경 흐림</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">삼성 리마스터</p>
                <p className="text-base text-gray-400">촬영 후 AI 편집</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">구글 매직</p>
                <p className="text-base text-gray-400">피사체 지우개</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <p className="text-xl text-gray-300 font-semibold mb-2">RAW 없는 촬영</p>
                <p className="text-base text-gray-400">센서 데이터 버림</p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center">
              <p className="text-3xl text-gray-400 italic">
                우리는 이미 10년째 원본 없는 사진을 찍고 있다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
