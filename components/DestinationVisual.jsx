'use client';

export default function DestinationVisual() {
  return (
    <div className="destination-visual relative w-full overflow-hidden">
      
      {/* SVG Container */}
      <main className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]">
        <img
          src="/realistic-animated-global-airplane.svg"
          alt="Global travel animation"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </main>

      {/* Caption */}
      <div className="visual-caption absolute bottom-5 left-1/2 -translate-x-1/2 text-center z-10">
        <span className="block text-sm sm:text-base md:text-lg">
          EXPLORE
        </span>

        <b className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          GLOBAL
        </b>

        <em className="block text-sm sm:text-base md:text-lg not-italic">
          OPPORTUNITIES
        </em>
      </div>

    </div>
  );
}
