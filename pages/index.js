import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Biography</h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Results-driven Frontend Engineer with expertise in building responsive and dynamic web applications. Proficient in HTML, CSS, and JavaScript, with a strong command of modern frameworks like React.js and Next.js. Skilled in using Tailwind CSS for rapid and efficient styling
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-80 aspect-[3/4] border-2 border-dashed rounded-2xl overflow-hidden relative" aria-label="My picture">
            <Image
              src="/images/Talal.jpeg"  
              alt="Talal portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
