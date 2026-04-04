export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Hero */}
      <section className="section section--hero">
        <div className="container container--narrow">
          <p className="hero__eyebrow">Designer · Developer · Problem Solver</p>
          <h1 className="hero__title">I help build ideas</h1>
          <p className="hero__subtitle">
            I work at the intersection of creativity and technology <br />
            Designing, building, and iterating until the idea becomes something
            real <br />
            Less is more | Yes is core
          </p>
          <div className="hero__cta">
            {/* <a href="#work" className="btn btn--primary">See my work</a> */}
            <a
              href="https://linkedin.com/in/ericmeinzer"
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's connect
            </a>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What I do</h2>
          <div className="services">
            <div className="service__card">
              <h3 className="service__title">Full Stack Development</h3>
              <p className="service__desc">
                React, TypeScript, C#, ASP.NET, SQL. I can build across the
                stack. Currently designing new experiences and shipping
                production features on enterprise-scale applications at
                Dayforce, where I'm given the freedom to explore ai tooling
                unrestricted. GitHub Copilot and ChatGPT Enterprise are part of
                my everyday workflow.
              </p>
            </div>
            <div className="service__card">
              <h3 className="service__title">Think. Design. Build.</h3>
              <p className="service__desc">
                From branding and packaging to web and graphic design. I bring a
                design eye to everything I build. I approach problems through
                design thinking: starting with empathy, defining the real
                problem, ideating freely, prototyping fast, and testing with
                real users. Clean, intentional, and built to communicate.
              </p>
            </div>
            <div className="service__card">
              <h3 className="service__title">AI-Assisted Workflows</h3>
              <p className="service__desc">
                I work with ai tools such as Claude, ChatGPT, and GitHub Copilot
                on the daily. I'm actively building with agent frameworks and
                defining custom skills, finding practical ways ai accelerates
                real work.
              </p>
            </div>
            <div className="service__card">
              <h3 className="service__title">
                Collaboration & Problem Solving
              </h3>
              <p className="service__desc">
                Architects, interior designers, building engineers, brand
                designers, product owners, UI/UX, software developers. I've
                worked across disciplines my entire career. I adapt fast,
                communicate clearly, and build solutions that work within real
                constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section">
        <div className="container">
          <h2 className="section-title">What I've been building</h2>
          <div className="projects">
            <div className="project">
              <h3 className="project__title">
                Dayforce — Full Stack Developer
              </h3>
              <p className="project__desc">
                Building new experiences for enterprise-grade applications
                across payroll, time management, and budgeting modules. Working
                in an agile team environment, collaborating with product owners
                and fellow developers to ship client-facing features and
                internal developer tooling.
              </p>
              <div className="project__tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">C#</span>
                <span className="tag">ASP.NET</span>
                <span className="tag">APIs</span>
                <span className="tag">SQL</span>
                <span className="tag">VSCode</span>
                <span className="tag">GitHub Copilot</span>
              </div>
            </div>

            <div className="project">
              <h3 className="project__title">Personal Agent Infrastructure</h3>
              <p className="project__desc">
                Set up and configured my own OpenClaw gateway - managing
                channels, skills, security, and model routing. Actively defining
                custom agent skills and learning how to build practical
                automation that connects to real tools and workflows.
              </p>
              <div className="project__tags">
                <span className="tag">Agent Architecture</span>
                <span className="tag">OpenClaw</span>
                <span className="tag">Claude API</span>
                <span className="tag">Automation</span>
              </div>
            </div>

            <div className="project">
              <h3 className="project__title">Architectural Lighting Design</h3>
              <p className="project__desc">
                5+ years specifying light fixtures and designing lighting
                systems for hotels, casinos, theatres, and public facilities.
                Collaborated across architecture, engineering, and construction
                teams - producing construction documents, renderings, and
                fixture specs from concept through installation.
              </p>
              <div className="project__tags">
                <span className="tag">Lighting Design</span>
                <span className="tag">Revit / BIM</span>
                <span className="tag">Construction Docs</span>
                <span className="tag">Cross-discipline Collaboration</span>
              </div>
            </div>

            <div className="project">
              <h3 className="project__title">Freelance Creator</h3>
              <p className="project__desc">
                It's all about the vibe. Over a decade of independent work
                spanning branding, graphic design, packaging, calligraphy,
                architectural modeling, and concept renderings. Each project,
                each idea, is an opportunity to convey or build something both
                useful and beautiful.
              </p>
              <div className="project__tags">
                <span className="tag">Architectural Modeling</span>
                <span className="tag">Concept Renderings</span>
                <span className="tag">Branding</span>
                <span className="tag">Graphic Design</span>
                <span className="tag">Packaging Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire me */}
      <section className="section">
        <div className="container container--narrow">
          <h2 className="section-title">Let's work together</h2>
          <p className="hire__body">
            I'm open to help you build. If you have an idea and need someone who
            can think through it, design it, and or build it, reach out on
            LinkedIn.
          </p>
          <a
            href="https://linkedin.com/in/ericmeinzer"
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="section--footer">
        <div className="container">
          <div className="footer__links">
            <a
              href="https://linkedin.com/in/ericmeinzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Landmeinz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="footer__copy">
            © Create and Build in {currentYear} | Eric Meinzer
          </p>
        </div>
      </section>
    </div>
  );
}
