export default function Portfolio() {
  const projects = [
    {
      title: "AI Mood App",
      desc: "An intelligent mood-based application using creative UI interactions and smart recommendations.",
      link: "https://ai-mood-app-gold.vercel.app/",
    },
    {
      title: "Colour Analysis App",
      desc: "A stylish personal colour analysis web app for discovering ideal palettes and aesthetics.",
      link: "https://colour-analysis-app-alpha.vercel.app/",
    },
    {
      title: "Fashion Website",
      desc: "A modern fashion-themed responsive website with elegant layouts and trendy UI design.",
      link: "https://github.com/gitikaap/Fashion_website",
    },
    {
      title: "School Website",
      desc: "A clean and informative school website featuring structured pages and responsive design.",
      link: "https://github.com/gitikaap/school_website",
    },
    {
      title: "Guess The Random Number",
      desc: "A Python-based guessing game focused on logic building and interactive gameplay.",
      link: "https://github.com/gitikaap/Guess_the_random_number_python",
    },
    {
      title: "Calculator Python",
      desc: "A simple calculator application built in Python supporting essential arithmetic operations.",
      link: "https://github.com/gitikaap/Calculator_python",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-600 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[180px] opacity-20" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Gitika P.</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] px-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

        <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center max-w-6xl w-full">
          <div>
            <p className="uppercase tracking-[0.4em] text-fuchsia-400 text-sm mb-5">
              Aspiring BTech AI & ML Student
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Gitika <span className="text-fuchsia-400">Paul</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-10">
              Aspiring AI & ML Engineer passionate about building innovative
              digital experiences. Exploring DSA, web development, machine
              learning and problem-solving through creative tech projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/gitikaap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/gitika-paul-853089393/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
  href="https://leetcode.com/u/gitikaap/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 transition"
>
  LeetCode
</a>

<a
  href="https://www.hackerrank.com/profile/gitikaap07fly"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-2xl border border-green-400/30 bg-green-400/10 hover:bg-green-400/20 transition"
>
  HackerRank
</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-[2rem] blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <img
                src="/gitika.jpg"
                alt="Gitika"
                className="relative w-[320px] md:w-[420px] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a certified Artificial Intelligence and Machine Learning
              student currently pursuing B.Tech CSE with specialization in AI &
              ML. I enjoy building stylish web applications, solving logical
              problems, and continuously learning modern technologies.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-fuchsia-400">6+</h3>

                <p className="text-gray-400 mt-2">
                  Real Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  AI/ML
                </h3>

                <p className="text-gray-400 mt-2">
                  Specialization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:scale-[1.02] transition">
            <p className="text-fuchsia-400 font-bold text-xl mb-2">
              2021–24
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Stepping Stone Model School
            </h3>

            <div className="space-y-3 text-gray-300 text-lg">
              <p>Class X ICSE: 92.25%</p>
              <p>Class XII ISC: 92.5%</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:scale-[1.02] transition">
            <p className="text-cyan-400 font-bold text-xl mb-2">
              2025–29
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Lovely Professional University
            </h3>

            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>
                Currently pursuing B.Tech in Computer Science Engineering
                with specialization in Artificial Intelligence and Machine
                Learning.
              </p>

              <p className="text-white font-semibold">
                TGPA (1st Semester): 9.32
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "Java",
            "C",
            "HTML",
            "CSS",
            "JavaScript",
            "Machine Learning",
            "Artificial Intelligence",
            "DSA",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-fuchsia-500/20 hover:border-fuchsia-400 transition cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Power Skills */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Power Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Leadership",
            "Communication",
            "Critical Thinking",
            "Adaptability",
            "Teamwork",
            "Multi-tasking",
            "Resilient",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg font-medium backdrop-blur-xl hover:scale-105 hover:bg-fuchsia-500/10 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-24">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400">
            Interactive cards with popups
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 overflow-hidden hover:scale-[1.03] transition duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {project.desc}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                  >
                    View Project
                  </a>

                  <button
                    onClick={() =>
                      alert(
                        `${project.title}\n\n${project.desc}`
                      )
                    }
                    className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  >
                    Popup
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 md:px-20 py-24 flex justify-center"
      >
        <div className="max-w-3xl w-full rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Open to internships, AI/ML collaborations,
            hackathons and exciting tech opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:gitikaap07fly@gmail.com"
              className="inline-block px-6 py-3 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-600 transition font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/gitika-paul-853089393/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Gitika Paul • AI & ML Student • Built with passion and creativity.
      </footer>
    </div>
  );
}