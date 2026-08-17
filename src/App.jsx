import './App.css'

const CONTACT_EMAIL = 'harmanpreet.builds@gmail.com'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h13M14 7l5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)

const External = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8 16 16 8M10 8h6v6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="nav">
        <a className="wordmark" href="#top">
          HARMANPREET
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="github-link"
          href="https://github.com/harmanpreetbuilds"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <External />
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-left">
            <p className="micro-label">
              SOFTWARE ENGINEER · BACKEND · B2B SAAS · AI SYSTEMS
            </p>

            <h1>
              I build products
              <br />
              that hold up in
              <br />
              <em>the real world.</em>
            </h1>

            <div className="hero-bottom">
              <p className="intro">
                Backend systems, B2B SaaS and
                cross-platform products built for real-world use.
                Open to software engineering roles, contract work
                and selected freelance builds.
              </p>

              <a className="text-link" href="#work">
                See selected work
                <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-collage">
            <div className="paper-note note-one">
              <span>currently obsessed with</span>
              <strong>
                reliability, SaaS systems & AI
              </strong>
            </div>

            <article className="marden-preview">
              <div className="project-index">
                01 / FLAGSHIP
              </div>

              <div className="marden-mark">M</div>

              <div className="marden-preview-bottom">
                <div>
                  <span>AGENCY OPERATING SYSTEM</span>
                  <h2>Marden Row</h2>
                </div>

                <a
                  className="arrow-circle"
                  href="#marden-row"
                  aria-label="Open Marden Row case study"
                >
                  <Arrow />
                </a>
              </div>
            </article>

            <div className="mini-card sync-mini">
              <span className="mini-number">02</span>

              <div className="sync-symbol">
                <span />
                <span />
              </div>

              <p>SyncBoard</p>
            </div>

            <div className="scribble">
              build things
              <br />
              worth opening →
            </div>
          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}
        <section className="marquee-line">
          <div>
            <span>JAVA</span>
            <i>✦</i>

            <span>SPRING BOOT</span>
            <i>✦</i>

            <span>KOTLIN</span>
            <i>✦</i>

            <span>AI SYSTEMS</span>
            <i>✦</i>

            <span>KMP</span>
            <i>✦</i>

            <span>POSTGRESQL</span>
            <i>✦</i>

            <span>REACT</span>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="micro-label">
              SELECTED WORK / 2026
            </p>

            <h2>
              Projects I’d rather
              <br />
              <em>show than explain.</em>
            </h2>

            <p className="section-side-copy">
              A small collection of systems built around
              infrastructure, synchronization and product
              engineering.
            </p>
          </div>

          <div className="project-grid">
            {/* MARDEN ROW */}
            <article className="project-card project-marden">
              <div className="project-meta-row">
                <span>01</span>
                <span>FLAGSHIP / B2B SAAS</span>
                <span>2026</span>
              </div>

              <div className="marden-visual">
                <div className="gateway-line line-a" />
                <div className="gateway-line line-b" />
                <div className="gateway-line line-c" />

                <div className="gateway-node node-one">
                  OPS
                </div>

                <div className="gateway-node node-two">
                  AI
                </div>

                <div className="gateway-node node-three">
                  RISK
                </div>

                <div className="gateway-core">
                  <span>M</span>
                </div>
              </div>

              <div className="project-copy">
                <div>
                  <h3>Marden Row</h3>

                  <p className="project-subtitle">
                    Agency Operating System
                  </p>
                </div>

                <p>
                  A multi-tenant SaaS platform that connects
                  client delivery, commitments, scope, change
                  orders, profitability and AI-assisted agency
                  operations in one workspace.
                </p>
              </div>

              <div className="project-footer">
                <div className="plain-stack">
                  Next.js / Hono / PostgreSQL / Prisma / AI
                </div>

                <a href="#marden-row">
                  Case study
                  <Arrow />
                </a>
              </div>
            </article>

            {/* SYNCBOARD */}
            <article className="project-card project-syncboard">
              <div className="project-meta-row light-meta">
                <span>02</span>
                <span>KOTLIN MULTIPLATFORM</span>
                <span>2026</span>
              </div>

              <div className="syncboard-art">
                <div className="phone phone-left">
                  <div className="phone-bar" />
                  <div className="task-row wide" />
                  <div className="task-row" />
                  <div className="task-row small" />

                  <div className="sync-state">
                    SYNCED
                  </div>
                </div>

                <div className="phone phone-right">
                  <div className="phone-bar" />
                  <div className="task-row wide" />

                  <div className="conflict-box">
                    <span>SYNC CONFLICT</span>
                    <small>Use server</small>
                    <small>Keep mine</small>
                  </div>
                </div>

                <div className="sync-orbit">↻</div>
              </div>

              <div className="project-copy light-copy">
                <div>
                  <h3>SyncBoard</h3>

                  <p className="project-subtitle">
                    Offline-first synchronization system
                  </p>
                </div>

                <p>
                  Native Android and iOS clients sharing a Kotlin
                  synchronization engine with durable mutations,
                  optimistic concurrency and explicit conflict
                  resolution.
                </p>
              </div>

              <div className="project-footer light-footer">
                <div className="plain-stack">
                  Kotlin / SwiftUI / Compose / Ktor / SQLDelight
                </div>

                <a
                  href="https://github.com/harmanpreetbuilds/syncboard-kmp"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <External />
                </a>
              </div>
            </article>

            {/* AI MOCK INTERVIEW */}
            <article className="project-card project-interview">
              <div className="project-meta-row">
                <span>03</span>
                <span>AI PRODUCT</span>
              </div>

              <div className="interview-art">
                <span className="quote-mark">“</span>

                <p>
                  Tell me about a difficult engineering
                  decision you made.
                </p>

                <div className="voice-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="project-copy compact">
                <div>
                  <h3>AI Mock Interview</h3>

                  <p className="project-subtitle">
                    Intelligent interview preparation
                  </p>
                </div>
              </div>
            </article>

            <aside className="studio-note">
              <p>
                Not interested in collecting projects.
              </p>

              <strong>
                Interested in building things with an engineering
                story.
              </strong>

              <span>— HK</span>
            </aside>
          </div>
        </section>

        {/* MARDEN ROW CASE STUDY */}
        <section
          className="marden-case-study"
          id="marden-row"
        >
          <div className="case-header">
            <p className="case-number">
              CASE FILE 01 / FLAGSHIP
            </p>

            <div className="case-heading">
              <h2>
                Run the agency.
                <br />
                <em>Protect the margin.</em>
              </h2>

              <div className="case-intro">
                <span>
                  MARDEN ROW / AGENCY OPERATING SYSTEM
                </span>

                <p>
                  Marden Row is a multi-tenant operating system
                  for agencies that connects client delivery,
                  scope, commitments, commercial risk and
                  profitability in one workspace. AGENCYYY is the
                  intelligence layer inside the product.
                </p>
              </div>
            </div>
          </div>

          <div className="case-layout">
            <article className="case-problem">
              <span className="case-label">
                THE PROBLEM
              </span>

              <h3>
                Agency margin disappears
                <br />
                <em>quietly.</em>
              </h3>

              <p>
                Client promises, revisions, scope changes,
                deadlines and project economics often live in
                different places. The work can look healthy while
                unpriced requests and delivery risk quietly erode
                the margin underneath it.
              </p>

              <p>
                Marden Row connects those operational decisions
                to their commercial consequences before the
                project reaches the end.
              </p>

              <div className="margin-note">
                <span>design principle</span>

                <strong>
                  make commercial risk visible while there is
                  still time to act.
                </strong>
              </div>
            </article>

            <div className="gateway-board">
              <div className="board-caption">
                <span>SYSTEM MAP</span>
                <span>MARDEN ROW / 01</span>
              </div>

              <div className="architecture-map">
                <div className="architecture-client">
                  <span>AGENCY</span>
                  <strong>Client delivery</strong>
                </div>

                <div className="architecture-line line-client" />

                <div className="architecture-core">
                  <small>OPERATING SYSTEM</small>
                  <strong>M</strong>
                  <span>Marden Row</span>
                </div>

                <div className="architecture-line line-provider-one" />
                <div className="architecture-line line-provider-two" />
                <div className="architecture-line line-provider-three" />

                <div className="provider provider-one">
                  <span>WORK</span>
                  <strong>Projects</strong>
                </div>

                <div className="provider provider-two">
                  <span>COMMERCIAL</span>
                  <strong>Margin</strong>
                </div>

                <div className="provider provider-three">
                  <span>CONTROL</span>
                  <strong>Scope</strong>
                </div>

                <div className="architecture-key">
                  <span>INTELLIGENCE</span>
                  <strong>AGENCYYY</strong>
                </div>

                <div className="architecture-credentials">
                  <span>OPERATIONS</span>
                  <strong>Risk + actions</strong>
                </div>
              </div>

              <p className="board-footnote">
                Client work runs through one operating model so
                scope, commitments, financial exposure and next
                actions stay connected.
              </p>
            </div>
          </div>

          <div className="case-features">
            <article>
              <span>01</span>

              <h3>AGENCYYY</h3>

              <p>
                Agency intelligence grounded in the organization,
                its clients, projects, commitments and commercial
                context.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Scope Guardian</h3>

              <p>
                Evaluates incoming work against existing
                commitments and identifies potential scope
                expansion before it becomes free work.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Profit Guard</h3>

              <p>
                Connects project economics, delivery cost and
                margin so commercial health remains visible while
                work is in progress.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Action Center</h3>

              <p>
                Converts operational signals into a focused view
                of what the agency owner or team needs to handle
                next.
              </p>
            </article>
          </div>

          <section className="inside-marden">
            <div className="inside-marden-heading">
              <p className="case-label">
                INSIDE MARDEN ROW
              </p>

              <h3>
                More than project management.
                <br />
                <em>An agency control layer.</em>
              </h3>

              <p>
                The product connects delivery information to the
                things that determine whether agency work is
                commercially healthy.
              </p>
            </div>

            <figure className="marden-shot marden-shot-hero">
              <div className="marden-shot-frame">
                <img
                  src="/marden-row/revenue-risk.png"
                  alt="Marden Row Revenue at Risk intelligence dashboard"
                />
              </div>

              <figcaption>
                <span>01 / COMMERCIAL INTELLIGENCE</span>

                <strong>
                  Portfolio-level revenue exposure, margin and
                  delivery risk in one operating view.
                </strong>
              </figcaption>
            </figure>

            <div className="marden-shot-pair">
              <figure className="marden-shot marden-shot-developers">
                <div className="marden-shot-frame">
                  <img
                    src="/marden-row/agencyyy.png"
                    alt="AGENCYYY agency intelligence workspace"
                  />
                </div>

                <figcaption>
                  <span>02 / AGENCYYY</span>

                  <strong>
                    Agency intelligence grounded in real clients,
                    projects and operating context.
                  </strong>
                </figcaption>
              </figure>

              <figure className="marden-shot marden-shot-providers">
                <div className="marden-shot-frame">
                  <img
                    src="/marden-row/action-center.png"
                    alt="Marden Row Action Center"
                  />
                </div>

                <figcaption>
                  <span>03 / ACTION CENTER</span>

                  <strong>
                    Operational signals converted into clear,
                    prioritized next actions.
                  </strong>
                </figcaption>
              </figure>
            </div>

            <div className="case-features">
              <article>
                <span>05</span>

                <h3>Promise Intelligence</h3>

                <p>
                  Extracts and reviews client commitments so
                  important promises do not disappear inside
                  documents, conversations or project history.
                </p>
              </article>

              <article>
                <span>06</span>

                <h3>Change Orders</h3>

                <p>
                  Turns approved scope expansion into structured
                  commercial work with pricing, margin and
                  approval context.
                </p>
              </article>

              <article>
                <span>07</span>

                <h3>Revenue at Risk</h3>

                <p>
                  Gives the agency a portfolio-level view of
                  projects where delivery pressure or margin
                  exposure needs attention.
                </p>
              </article>

              <article>
                <span>08</span>

                <h3>Team + access</h3>

                <p>
                  Multi-tenant organizations, role-based access,
                  invitations and secure account flows support
                  real teams instead of a single-user demo.
                </p>
              </article>
            </div>

            <div className="marden-product-note">
              <span>WHAT THE PRODUCT PROVES</span>

              <p>
                Marden Row is built as a real SaaS product:
                multi-tenant data, authorization, AI workflows,
                billing, auditability, production deployment and
                end-to-end operational logic all live behind the
                same product surface.
              </p>
            </div>
          </section>

          <div className="engineering-spread">
            <div className="engineering-title">
              <p className="case-label">
                ENGINEERING STORY
              </p>

              <h3>
                Not another
                <br />
                <em>project manager.</em>
              </h3>
            </div>

            <div className="engineering-copy">
              <p>
                The interesting part of Marden Row is the
                connection between product operations and
                commercial intelligence: tenant isolation,
                role-based access, project context, commitments,
                scope assessment, change orders, financial
                profiles, AI usage and billing.
              </p>

              <p>
                It is structured as a production SaaS platform,
                not a collection of disconnected AI features.
              </p>
            </div>

            <aside className="engineering-note">
              <span>
                WHAT I WANTED TO PROVE
              </span>

              <strong>
                I can take a B2B SaaS product from architecture
                and security through AI workflows, billing,
                testing and production deployment.
              </strong>
            </aside>
          </div>

          <div className="case-stack">
            <div>
              <span className="case-label">
                CORE STACK
              </span>

              <p>
                Next.js · React · TypeScript · Hono · PostgreSQL ·
                Prisma · Razorpay · AI APIs
              </p>
            </div>

            <a
              href="https://mardenrow.com"
              target="_blank"
              rel="noreferrer"
            >
              View live Marden Row
              <External />
            </a>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          className="capabilities"
          id="about"
        >
          <div className="capabilities-title">
            <span className="micro-label">
              WHAT I WORK ON
            </span>

            <h2>
              Somewhere between
              <br />
              product and systems.
            </h2>
          </div>

          <div className="capability-list">
            <article>
              <span>01</span>

              <h3>Backend systems</h3>

              <p>
                APIs, authentication, databases, service
                architecture and server-side product logic.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>AI infrastructure</h3>

              <p>
                Provider abstraction, LLM integration, gateways
                and AI-native backend products.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Cross-platform</h3>

              <p>
                Kotlin Multiplatform systems with native Android
                and iOS interfaces.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Reliability</h3>

              <p>
                Offline-first architecture, synchronization,
                concurrency and failure-aware product design.
              </p>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section">
          <div className="about-stamp">
            <span>ENGINEERING</span>
            <strong>+</strong>
            <span>CURIOSITY</span>
          </div>

          <div className="about-copy">
            <p className="micro-label">
              A LITTLE CONTEXT
            </p>

            <h2>
              I like the part where
              <br />
              <em>
                the simple app stops being simple.
              </em>
            </h2>

            <p>
              I’m Harmanpreet, a software engineer building
              backend-heavy, AI-enabled and cross-platform
              products. I care about the decisions behind a
              product just as much as the interface in front of
              it.
            </p>

            <p>
              My portfolio is intentionally centered around
              systems with interesting constraints — not another
              collection of tutorial clones.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact-section"
          id="contact"
        >
          <p className="micro-label">
            OPEN TO ROLES · CONTRACTS · SELECTED FREELANCE
          </p>

          <h2>
            Building a product — or a team that needs
            <br />
            <em>strong backend engineering?</em>
          </h2>

          <div className="contact-row">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Portfolio%20Enquiry%20-%20Harmanpreet%20Kaur`}
              className="contact-primary"
            >
              Email me
              <Arrow />
            </a>

            <a
              href="https://github.com/harmanpreetbuilds"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <External />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>HARMANPREET</span>
        <span>SOFTWARE ENGINEER</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default App
