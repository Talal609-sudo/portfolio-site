export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Talal Shabib | Frontend Engineer</h1>

      <section>
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="mt-2">
          Results-driven Frontend Engineer with expertise in building responsive and dynamic web applications. Proficient in HTML, CSS, and JavaScript, with a strong command of modern frameworks like React.js and Next.js. Skilled in using Tailwind CSS for rapid and efficient styling.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 space-y-2">
          <p><span className="font-medium">Languages:</span> JavaScript (ES6+), HTML5, CSS3</p>
          <p><span className="font-medium">Frameworks/Libraries:</span> React.js, Next.js, Redux, Tailwind CSS, Material-UI, Bootstrap</p>
          <p><span className="font-medium">Tools:</span> Git, npm, webpack, VS Code</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-2">Bachelor of Science in Computer Science | University of Management & Technology | 2022 - 2026</p>
      </section>
    </div>
  );
}
