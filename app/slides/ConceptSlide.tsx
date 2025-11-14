export default function ConceptSlide() {
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
              핵심 컨셉
            </h2>
            <div className="h-1 w-32 mx-auto bg-gray-500" />
          </div>

          {/* Main Concept */}
          <div className="max-w-5xl space-y-12">
            {/* The Work */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
              <div className="text-center space-y-8">
                <p className="text-4xl text-gray-300 font-light">
                  이 포토부스는
                </p>
                <p className="text-5xl text-white font-bold">
                  원본을 보여주지 않습니다
                </p>
                <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8" />
                <p className="text-3xl text-gray-400 leading-relaxed">
                  화면에는 숫자만 카운트됩니다<br />
                  원본은 즉시 삭제됩니다<br />
                  AI 변환 이미지만 제공됩니다
                </p>
              </div>
            </div>

            {/* The Meaning */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center">
                <p className="text-2xl text-gray-300 font-semibold mb-3">통제 불가</p>
                <p className="text-lg text-gray-400">당신은 당신을 볼 수 없습니다</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center">
                <p className="text-2xl text-gray-300 font-semibold mb-3">원본 삭제</p>
                <p className="text-lg text-gray-400">진실은 즉시 사라집니다</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center">
                <p className="text-2xl text-gray-300 font-semibold mb-3">AI만 제공</p>
                <p className="text-lg text-gray-400">기계가 당신을 정의합니다</p>
              </div>
            </div>

            {/* The Truth */}
            <div className="text-center">
              <p className="text-3xl text-gray-400 italic">
                "당신은 이미 10년째 이렇게 살아왔습니다.<br />
                이것은 단지 정직할 뿐입니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
