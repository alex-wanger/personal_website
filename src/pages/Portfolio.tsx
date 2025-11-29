import { useState, useEffect } from "react";
import {
  Menu,
  X,
 
  
  ArrowRight,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     desc: "Full-stack marketplace with payment integration",
  //     tags: ["React", "Node.js", "MongoDB"],
  //     link: "#",
  //   },
  //   {
  //     title: "Task Management App",
  //     desc: "Collaborative workspace for teams",
  //     tags: ["React", "Firebase", "Tailwind"],
  //     link: "#",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     desc: "Real-time weather with location services",
  //     tags: ["API", "React", "D3.js"],
  //     link: "#",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "opacity-0 pointer-events-none"
            : "bg-black/95 backdrop-blur shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Alex Wang
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur p-6 space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-50"></div>

        <div className="max-w-4xl text-center z-10 space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Alex Wang
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Junior @ Stuyvesant High School
              <br></br>
              Aspiring SWE
            </p>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowRight className="mx-auto rotate-90" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>

          <div className="text-2xl space-y-6 text-gray-300 text-center leading-relaxed">
            <p>
              I'm a Junior at Stuyvesant High School, interested in CS and
              Electrical Engineering. I love tinkering, experimenting with new
              technologies, and coding!
            </p>
            <p>
              I serve as the Vice President of my{" "}
              <a
                href="https://www.youtube.com/@StuyPulse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                school's award winning FIRST Robotics Team
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
    </div>
  );
}

