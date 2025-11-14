export default function CoverSlide() {
  return (
    <div className="slide-container">
      <div className="slide flex flex-col items-center justify-center relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-blue-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-12">
          {/* Main Title with gradient */}
          <div className="space-y-6">
            <h1 className="text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                부재의 증명사진
              </span>
            </h1>
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-3xl text-gray-400 font-light tracking-wide italic">
            Proof of Absence
          </p>

          {/* Project info */}
          <div className="space-y-4 pt-8">
            <div className="inline-block bg-gradient-to-r from-blue-950/50 to-purple-950/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-12 py-8">
              <div className="space-y-3 text-gray-300">
                <p className="text-xl">
                  <span className="text-blue-400 font-semibold">과목:</span> 재료와 제작방법 2
                </p>
                <p className="text-xl">
                  <span className="text-blue-400 font-semibold">교수:</span> 최민규 교수님
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-3" />
                <p className="text-2xl font-semibold text-white">
                  유재영
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Footer hint */}
        <div className="absolute bottom-12 text-gray-500 text-sm animate-bounce">
          Press Space or → to continue
        </div>
      </div>
    </div>
  )
}
