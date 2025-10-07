import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Gradient Overlay Blur for Futuristic Feel */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-purple-600/20 to-pink-400/10"></div>

      <div className="relative grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Design <br />
            <span className="text-yellow-300">is a formal response</span>
          </h1>
          <p className="text-lg max-w-md text-white/90">
            A forward-thinking approach to visual communication and creative
            problem-solving for modern businesses.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 shadow-md"
          >
            Let’s Begin
          </Link>
        </div>

        {/* RIGHT IMAGE SHAPE */}
        <div className="relative w-full aspect-square max-w-[420px] mx-auto">
          {/* Blob Shape Mask */}
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                'path("M315.8,46.7c30.5-2.4,63.8,1.2,79,13.8s3.5,50.3-11.3,75.5s-40.6,48-70.1,54s-64.4-7.4-84.1-28.4 s-26.4-52.8-18.6-80.6s33.8-56,71-62S287.2,49,315.8,46.7z")',
              overflow: "hidden",
              transform: "scale(1.2)",
              transformOrigin: "center",
            }}
          >
            <Image
              src="/landingpage-image.png"
              alt="Creative professional"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-6 left-10 w-8 h-8 bg-yellow-300 rounded-full blur-sm opacity-80 animate-pulse"></div>
          <div className="absolute bottom-10 right-6 w-10 h-10 bg-pink-400 rounded-full blur-md opacity-60 animate-bounce"></div>
          <div className="absolute -top-4 right-1/2 w-16 h-16 bg-purple-500/50 rounded-full blur-2xl opacity-40 animate-ping"></div>
        </div>
      </div>
    </section>
  );
}