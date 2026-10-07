import React, { useEffect, useState } from "react";
import {
  Menu, X, Sun, Moon, ArrowRight, Github, Linkedin,
  Mail, Code2, Smartphone, Sparkles
} from "lucide-react";

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Git & GitHub"];

const projects = [
  { title: "Modern Portfolio", text: "A responsive portfolio website with smooth animations and modern UI.", tags: ["React", "CSS", "JavaScript"] },
  { title: "Business Landing Page", text: "Clean and conversion-focused landing page for a modern business.", tags: ["HTML", "CSS", "Responsive"] },
  { title: "E-commerce UI", text: "Modern shopping interface with reusable components and responsive layouts.", tags: ["React", "UI/UX", "JavaScript"] }
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>R<span>abiul</span></a>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <div className="badge"><Sparkles size={16}/> Available for freelance work</div>
            <h1>Hi, I'm <span>Rabiul</span><br />Frontend Web Developer.</h1>
            <p>I build modern, responsive and interactive websites using React.js, JavaScript, HTML and CSS.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects <ArrowRight size={18}/></a>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/></a>
              <a href="mailto:hello@example.com"><Mail/></a>
            </div>
          </div>
          <div className="hero-card reveal">
            <div className="avatar">RI</div>
            <div className="floating-card card-one"><Code2 size={18}/> React Developer</div>
            <div className="floating-card card-two"><Smartphone size={18}/> Responsive UI</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-title"><span>01.</span><h2>About Me</h2></div>
          <div className="about-grid">
            <div>
              <h3>I create digital experiences that feel fast, clean and professional.</h3>
              <p>I'm a frontend web developer focused on creating responsive websites with beautiful interfaces, smooth interactions and maintainable code.</p>
              <p>My goal is to turn ideas and designs into high-quality websites that work perfectly across mobile, tablet and desktop devices.</p>
            </div>
            <div className="info-box"><strong>Frontend Developer</strong><span>React.js • JavaScript • HTML • CSS</span><strong>Focus</strong><span>Responsive & Modern Web UI</span><strong>Work Style</strong><span>Clean code • Smooth UX</span></div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title"><span>02.</span><h2>Skills</h2></div>
          <div className="skills-grid">
            {skills.map((skill, i) => <div className="skill-card" key={skill} style={{animationDelay: `${i * 80}ms`}}><Code2 size={22}/><h3>{skill}</h3></div>)}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title"><span>03.</span><h2>Projects</h2></div>
          <div className="projects-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <div className="project-icon"><Code2/></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-title"><span>04.</span><h2>Contact</h2></div>
          <div className="contact-box">
            <h2>Let's build something great.</h2>
            <p>Have a project in mind? I'd love to hear about it and help bring your idea to life.</p>
            <a className="btn primary" href="mailto:hello@example.com">Send Me an Email <Mail size={18}/></a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Rabiul. Built with React.js.</footer>
    </div>
  );
}