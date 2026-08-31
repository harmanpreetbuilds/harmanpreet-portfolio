import './App.css'

const CONTACT_EMAIL = 'harmanpreet@harmanpreet.dev'

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
              BACKEND & AI PRODUCT ENGINEER · B2B SAAS · SYSTEMS
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
                I build backend-heavy SaaS, AI infrastructure
                and production software from architecture through
                deployment. Open to engineering roles, contract
                work and selected freelance builds.
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
              A small collection of systems built around AI
              infrastructure, commercial operations and product
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
                <svg
                  className="marden-preview-connectors"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line x1="50" y1="50" x2="14" y2="34" />
                  <line x1="50" y1="50" x2="89" y2="21" />
                  <line x1="50" y1="50" x2="84" y2="85" />
                </svg>

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

            <article className="project-card project-interview project-dervale">
              <div className="project-meta-row">
                <span>03</span>
                <span>AI INFRASTRUCTURE / SAAS</span>
                <span>2026</span>
              </div>

              <div className="dervale-art">
                <div className="dervale-request">
                  REQUEST
                </div>

                <div className="dervale-router">
                  <span>SMART ROUTE</span>
                  <strong>D</strong>
                </div>

                <div className="dervale-provider dervale-provider-one">
                  OPENAI
                </div>

                <div className="dervale-provider dervale-provider-two">
                  GEMINI
                </div>

                <div className="dervale-provider dervale-provider-three">
                  GROQ
                </div>

                <svg
                  className="dervale-preview-connectors"
                  viewBox="0 0 1000 240"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line x1="52" y1="112" x2="500" y2="119" />
                  <line x1="500" y1="119" x2="955" y2="31" />
                  <line x1="500" y1="119" x2="955" y2="115" />
                  <line x1="500" y1="119" x2="850" y2="214" />
                </svg>
              </div>

              <div className="project-copy compact">
                <div>
                  <h3>Dervale</h3>

                  <p className="project-subtitle">
                    Multi-provider AI gateway platform
                  </p>
                </div>

                <p className="dervale-description">
                  Production AI infrastructure for multi-tenant
                  routing, API keys, usage controls, provider
                  abstraction, observability and billing.
                </p>
              </div>

              <div className="project-footer dervale-footer">
                <div className="plain-stack">
                  Java / Spring Boot / PostgreSQL / Redis / React
                </div>

                <div className="dervale-card-links">
                  <a href="#dervale">
                    Case study
                    <Arrow />
                  </a>

                  <a
                    href="https://dervale.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <External />
                  </a>
                </div>
              </div>
            </article>


            <article className="project-card project-bidforge">
              <div className="project-meta-row bidforge-meta">
                <span>04</span>
                <span>BIDS / RFP INTELLIGENCE</span>
                <span>2026</span>
              </div>

              <div className="bidforge-art">
                <div className="bf-document">
                  <div className="bf-document-head">
                    <span>RFP / 024</span>
                    <strong>BID</strong>
                  </div>

                  <div className="bf-line bf-line-wide" />
                  <div className="bf-line" />
                  <div className="bf-line bf-line-short" />

                  <div className="bf-requirement">
                    REQUIREMENT / 17
                  </div>
                </div>

                <div className="bf-risk-rail">
                  <div>
                    <span>DELIVERY</span>
                    <strong>HIGH</strong>
                  </div>

                  <div>
                    <span>COMMERCIAL</span>
                    <strong>MED</strong>
                  </div>

                  <div>
                    <span>COMPLIANCE</span>
                    <strong>LOW</strong>
                  </div>
                </div>

                <div className="bf-decision">
                  <span>BID POSITION</span>
                  <strong>REVIEW</strong>
                </div>
              </div>

              <div className="project-copy compact bidforge-copy">
                <div>
                  <h3>BidForge</h3>

                  <p className="project-subtitle">
                    Bid & Proposal Risk Intelligence
                  </p>
                </div>

                <p>
                  Turns tender and RFP documents into structured
                  requirements, delivery risks, commercial concerns
                  and proposal-ready intelligence.
                </p>
              </div>

              <div className="project-footer bidforge-footer">
                <div className="plain-stack">
                  Next.js / TypeScript / Prisma / PostgreSQL / AI
                </div>

                <a
                  href="#bidforge"
                  className="project-build-link"
                >
                  Case study
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="project-card project-handover">
              <div className="project-meta-row handover-meta">
                <span>05</span>
                <span>LEGACY CODE / ENGINEERING INTELLIGENCE</span>
                <span>2026</span>
              </div>

              <div className="handover-art">
                <div className="hl-repository">
                  <span>REPOSITORY</span>

                  <strong>legacy-core</strong>

                  <div className="hl-tree">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="hl-connector">
                  →
                </div>

                <div className="hl-map">
                  <span>SYSTEM MAP</span>

                  <div className="hl-node hl-node-one">
                    API
                  </div>

                  <div className="hl-node hl-node-two">
                    DOMAIN
                  </div>

                  <div className="hl-node hl-node-three">
                    DATA
                  </div>

                  <div className="hl-node hl-node-four">
                    JOBS
                  </div>
                </div>

                <div className="hl-runner">
                  CONTROLLED RUNNER
                </div>
              </div>

              <div className="project-copy compact handover-copy">
                <div>
                  <h3>HandoverLab</h3>

                  <p className="project-subtitle">
                    Legacy Code Intelligence
                  </p>
                </div>

                <p>
                  Makes unfamiliar codebases easier to inherit
                  through architecture mapping, dependency
                  intelligence, code explanation and controlled
                  execution.
                </p>
              </div>

              <div className="project-footer handover-footer">
                <div className="plain-stack">
                  Java / Spring Boot / PostgreSQL / Docker / Next.js
                </div>

                <a
                  href="#handoverlab"
                  className="project-build-link"
                >
                  Case study
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="project-card project-ladewise selected-work-card-ladewise">
              <div className="project-meta-row ladewise-meta">
                <span>06</span>
                <span>EXPORT OPERATIONS / B2B SOFTWARE</span>
                <span>2026</span>
              </div>

              <div className="ladewise-art">
                <div className="lw-sheet lw-sheet-back" />
                <div className="lw-sheet lw-sheet-middle" />

                <div className="lw-sheet lw-sheet-front">
                  <div className="lw-sheet-head">
                    <span>EXPORT DOCUMENT</span>
                    <strong>LW</strong>
                  </div>

                  <i className="lw-rule lw-rule-wide" />
                  <i className="lw-rule" />
                  <i className="lw-rule lw-rule-short" />

                  <div className="lw-status-stamp">
                    REVIEWED
                  </div>
                </div>

                <div className="lw-card-flow">
                  PREPARE → REVIEW → APPROVE
                </div>
              </div>

              <div className="project-copy compact ladewise-copy">
                <div>
                  <h3>Ladewise</h3>

                  <p className="project-subtitle">
                    Export documentation workflow
                  </p>
                </div>

                <p>
                  A production-oriented system for preparing,
                  reviewing, approving and retaining export
                  documentation with organization-scoped access
                  and explicit document history.
                </p>
              </div>

              <div className="project-footer ladewise-footer">
                <div className="plain-stack">
                  Java / Spring Boot / Next.js / PostgreSQL / S3
                </div>

                <div className="ladewise-card-links">
                  <a href="#ladewise">
                    Case study
                    <Arrow />
                  </a>

                  <a
                    href="https://github.com/harmanpreetbuilds/ladewise-showcase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <External />
                  </a>
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
                  <svg
                    className="architecture-connectors"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line x1="50" y1="50" x2="10" y2="50" />
                    <line x1="50" y1="50" x2="36" y2="13" />
                    <line x1="50" y1="50" x2="12" y2="86" />
                    <line x1="50" y1="50" x2="90" y2="17" />
                    <line x1="50" y1="50" x2="92" y2="50" />
                    <line x1="50" y1="50" x2="88" y2="85" />
                  </svg>
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
                  <div className="architecture-line line-operations" />
                  <div className="architecture-line line-intelligence" />

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
                  src="/marden-row/marden-row-commercial-overview.png"
                  alt="Marden Row commercial overview showing delivery health and commercial risk"
                />
              </div>

              <figcaption>
                <span>01 / COMMERCIAL OVERVIEW</span>

                <strong>
                  Portfolio-level visibility into scope risk,
                  commitments, commercial exposure and the
                  actions that need attention.
                </strong>
              </figcaption>
            </figure>

            <div className="marden-shot-pair">
              <figure className="marden-shot marden-shot-developers">
                <div className="marden-shot-frame">
                  <img
                    src="/marden-row/marden-row-projects.png"
                    alt="Marden Row projects delivery register"
                  />
                </div>

                <figcaption>
                  <span>02 / PROJECTS</span>

                  <strong>
                    New client requests are compared against the
                    original commitment before extra work quietly
                    enters delivery.
                  </strong>
                </figcaption>
              </figure>

              <figure className="marden-shot marden-shot-providers">
                <div className="marden-shot-frame">
                  <img
                    src="/marden-row/marden-row-agencyyy-scope-verdict.png"
                    alt="AGENCYYY explaining why a client request falls outside the agreed project scope"
                  />
                </div>

                <figcaption>
                  <span>03 / AGENCYYY</span>

                  <strong>
                    AI reasoning grounded in project commitments,
                    scope evidence and real delivery context.
                  </strong>
                </figcaption>
              </figure>
            </div>

            <figure className="marden-shot marden-shot-hero">
              <div className="marden-shot-frame">
                <img
                  src="/marden-row/marden-row-action-center.png"
                  alt="Marden Row Action Center showing prioritized commercial and delivery actions"
                />
              </div>

              <figcaption>
                <span>04 / ACTION CENTER</span>

                <strong>
                  Commercial and delivery signals become a
                  prioritized queue of actions instead of
                  disappearing inside project activity.
                </strong>
              </figcaption>
            </figure>

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


        {/* DERVALE CASE STUDY */}
        <section
          className="dervale-case-study"
          id="dervale"
        >
          <div className="dervale-case-header">
            <p className="case-number">
              CASE FILE 02 / AI INFRASTRUCTURE
            </p>

            <div className="dervale-case-heading">
              <h2>
                One gateway.
                <br />
                <em>Many models.</em>
              </h2>

              <div className="dervale-case-intro">
                <span>
                  DERVALE / MULTI-PROVIDER AI GATEWAY
                </span>

                <p>
                  Dervale is a production AI gateway for teams
                  that need one controlled layer between their
                  applications and model providers. Routing,
                  credentials, usage, policy, observability and
                  billing live behind the same interface.
                </p>
              </div>
            </div>
          </div>

          <div className="dervale-case-layout">
            <article className="dervale-problem">
              <span className="case-label">
                THE PROBLEM
              </span>

              <h3>
                Provider integrations
                <br />
                <em>multiply fast.</em>
              </h3>

              <p>
                Adding one model API is easy. Running several
                providers across real applications is where the
                engineering problem begins: credentials,
                routing, failures, usage limits, cost visibility
                and tenant boundaries all start spreading through
                product code.
              </p>

              <p>
                Dervale moves those concerns into one gateway so
                applications integrate with a stable control
                plane instead of provider-specific infrastructure.
              </p>

              <div className="dervale-principle-note">
                <span>DESIGN PRINCIPLE</span>

                <strong>
                  provider complexity belongs in infrastructure,
                  not inside every application.
                </strong>
              </div>
            </article>

            <div className="dervale-system-board">
              <div className="board-caption">
                <span>REQUEST PATH</span>
                <span>DERVALE / 02</span>
              </div>

              <div className="dervale-system-map">
                  <svg
                    className="dv-connectors"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line x1="50" y1="50" x2="10" y2="50" />
                    <line x1="50" y1="50" x2="40" y2="13" />
                    <line x1="50" y1="50" x2="39" y2="87" />
                    <line x1="50" y1="50" x2="90" y2="18" />
                    <line x1="50" y1="50" x2="90" y2="50" />
                    <line x1="50" y1="50" x2="90" y2="83" />
                  </svg>
                <div className="dv-app-node">
                  <span>CLIENT</span>
                  <strong>Application</strong>
                </div>

                <div className="dv-line dv-line-in" />

                <div className="dv-core">
                  <small>CONTROL PLANE</small>
                  <strong>D</strong>
                  <span>Dervale</span>
                </div>

                <div className="dv-line dv-line-openai" />
                <div className="dv-line dv-line-gemini" />
                <div className="dv-line dv-line-groq" />
                  <div className="dv-line dv-line-auth" />
                  <div className="dv-line dv-line-observe" />

                <div className="dv-provider dv-openai">
                  <span>PROVIDER</span>
                  <strong>OpenAI</strong>
                </div>

                <div className="dv-provider dv-gemini">
                  <span>PROVIDER</span>
                  <strong>Gemini</strong>
                </div>

                <div className="dv-provider dv-groq">
                  <span>PROVIDER</span>
                  <strong>Groq</strong>
                </div>

                <div className="dv-control dv-auth">
                  <span>CONTROL</span>
                  <strong>API keys</strong>
                </div>

                <div className="dv-control dv-observe">
                  <span>OBSERVE</span>
                  <strong>Usage + logs</strong>
                </div>
              </div>

              <p className="board-footnote">
                Authentication, tenant context, policy and routing
                are resolved before the request reaches a model
                provider.
              </p>
            </div>
          </div>

          <div className="dervale-feature-grid">
            <article>
              <span>01</span>
              <h3>Provider abstraction</h3>
              <p>
                Applications call one gateway while provider
                credentials and implementation details stay
                behind the control plane.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Gateway keys</h3>
              <p>
                Scoped credentials support controlled application
                access without exposing upstream provider secrets.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Usage + cost</h3>
              <p>
                Requests, token consumption, provider distribution
                and estimated spend are tracked at workspace level.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Provider comparison</h3>
              <p>
                The same prompt can execute across providers for
                side-by-side latency, token and cost inspection.
              </p>
            </article>
          </div>

          <section className="inside-dervale">
            <div className="inside-dervale-heading">
              <p className="case-label">
                INSIDE DERVALE
              </p>

              <h3>
                Infrastructure should make
                <br />
                <em>the invisible visible.</em>
              </h3>

              <p>
                The product surface exposes the operational
                information an engineering team needs without
                turning the gateway into another generic SaaS
                dashboard.
              </p>
            </div>

            <div className="dervale-ui-proof">
              <article className="dv-proof dv-proof-analytics">
                <div className="dv-proof-top">
                  <span>OBSERVE / 30 DAYS</span>
                  <strong>AI usage & cost</strong>
                </div>

                <div className="dv-metrics">
                  <div>
                    <span>SUCCESSFUL REQUESTS</span>
                    <strong>25</strong>
                  </div>

                  <div>
                    <span>TOTAL TOKENS</span>
                    <strong>7.16K</strong>
                  </div>

                  <div>
                    <span>ESTIMATED COST</span>
                    <strong>$0.00661</strong>
                  </div>

                  <div>
                    <span>AVG / REQUEST</span>
                    <strong>286</strong>
                  </div>
                </div>

                <div className="dv-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i className="is-peak" />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="dv-proof-caption">
                  01 / USAGE TELEMETRY
                </div>
              </article>

              <div className="dv-proof-pair">
                <article className="dv-proof">
                  <div className="dv-proof-top">
                    <span>OPERATE</span>
                    <strong>Provider benchmark</strong>
                  </div>

                  <div className="dv-provider-results">
                    <div>
                      <span>Groq</span>
                      <small>FASTEST</small>
                    </div>
                    <div>
                      <span>OpenAI</span>
                      <small>CHEAPEST</small>
                    </div>
                    <div>
                      <span>Gemini</span>
                      <small>COMPARED</small>
                    </div>
                  </div>

                  <p>
                    Parallel execution compares provider response,
                    latency, token usage and estimated cost.
                  </p>

                  <div className="dv-proof-caption">
                    02 / COMPARE
                  </div>
                </article>

                <article className="dv-proof">
                  <div className="dv-proof-top">
                    <span>CONTROL</span>
                    <strong>Programmatic access</strong>
                  </div>

                  <div className="dv-key-row">
                    <div>
                      <strong>Observability Demo</strong>
                      <span>agw_test_••••••••</span>
                    </div>
                    <small>ACTIVE</small>
                  </div>

                  <div className="dv-key-row">
                    <div>
                      <strong>Buyer Demo API</strong>
                      <span>agw_test_••••••••</span>
                    </div>
                    <small>ACTIVE</small>
                  </div>

                  <p>
                    Secrets are shown once while Dervale retains
                    only cryptographic hashes.
                  </p>

                  <div className="dv-proof-caption">
                    03 / API KEYS
                  </div>
                </article>
              </div>
            </div>
          </section>

          <div className="dervale-engineering-spread">
            <div>
              <p className="case-label">
                ENGINEERING STORY
              </p>

              <h3>
                Not an
                <br />
                <em>AI wrapper.</em>
              </h3>
            </div>

            <div className="dervale-engineering-copy">
              <p>
                The interesting part of Dervale is the boundary
                between application traffic and model providers:
                tenant isolation, JWT authentication, gateway
                keys, provider credentials, routing, usage
                policies, request logging, billing and operational
                visibility.
              </p>

              <p>
                The gateway exposes an OpenAI-compatible access
                layer so applications can adopt centralized
                infrastructure without rewriting their entire AI
                integration.
              </p>
            </div>

            <aside className="dervale-proof-note">
              <span>WHAT I WANTED TO PROVE</span>

              <strong>
                I can build AI infrastructure as a production
                system — not just connect an interface to a model
                API.
              </strong>
            </aside>
          </div>

          <div className="dervale-case-stack">
            <div>
              <span className="case-label">
                CORE STACK
              </span>

              <p>
                Java · Spring Boot · PostgreSQL · Redis · React ·
                JWT · REST · OpenAI-compatible API
              </p>
            </div>

            <div className="dervale-case-actions">
              <a
                href="https://dervale.com"
                target="_blank"
                rel="noreferrer"
              >
                View live Dervale
                <External />
              </a>

              <a
                href="https://github.com/harmanpreetbuilds/dervale-showcase"
                target="_blank"
                rel="noreferrer"
              >
                Engineering showcase
                <External />
              </a>
            </div>
          </div>
        </section>


        <section className="ladewise-case-study" id="ladewise">
          <div className="ladewise-case-header">
            <p className="case-number">
              CASE FILE 03 / OPERATIONAL SOFTWARE
            </p>

            <div className="ladewise-case-heading">
              <h2>
                Export paperwork.
                <br />
                <em>Under control.</em>
              </h2>

              <div className="ladewise-case-intro">
                <span>
                  LADEWISE / EXPORT DOCUMENTATION SYSTEM
                </span>

                <p>
                  Ladewise gives export teams a structured way to
                  prepare, review, approve and retain commercial
                  documentation without losing ownership, version
                  history or operational context.
                </p>
              </div>
            </div>
          </div>

          <div className="ladewise-case-layout">
            <article className="ladewise-problem">
              <span className="case-label">
                THE PROBLEM
              </span>

              <h3>
                Documents move.
                <br />
                <em>Context disappears.</em>
              </h3>

              <p>
                Export documents often move through several
                people, corrections and approval steps. When
                versions live across inboxes, folders and chat,
                it becomes difficult to know which copy is
                authoritative and what has actually been approved.
              </p>

              <p>
                Ladewise turns that process into explicit software
                without pretending to replace customs, banks,
                DGFT, ICEGATE or other official infrastructure.
              </p>

              <div className="ladewise-note">
                <span>SYSTEM BOUNDARY</span>

                <strong>
                  Support the workflow around official systems,
                  not imitate them.
                </strong>
              </div>
            </article>

            <div className="ladewise-board">
              <div className="board-caption">
                <span>SYSTEM MAP</span>
                <span>LADEWISE / 03</span>
              </div>

              <div className="ladewise-map">
                  <svg
                    className="lw-connectors"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line x1="50" y1="50" x2="10" y2="50" />
                    <line x1="50" y1="50" x2="40" y2="13" />
                    <line x1="50" y1="50" x2="40" y2="87" />
                    <line x1="50" y1="50" x2="90" y2="18" />
                    <line x1="50" y1="50" x2="90" y2="50" />
                    <line x1="50" y1="50" x2="89" y2="83" />
                  </svg>
                <div className="lw-map-node lw-map-web">
                  <span>INTERFACE</span>
                  <strong>Next.js</strong>
                </div>

                <div className="lw-map-line lw-map-line-in" />

                <div className="lw-map-core">
                  <small>APPLICATION CORE</small>
                  <strong>LW</strong>
                  <span>Spring Boot</span>
                </div>

                <div className="lw-map-line lw-map-line-db" />
                <div className="lw-map-line lw-map-line-files" />
                <div className="lw-map-line lw-map-line-mail" />
                  <div className="lw-map-line lw-map-line-auth" />
                  <div className="lw-map-line lw-map-line-review" />

                <div className="lw-map-node lw-map-db">
                  <span>STATE</span>
                  <strong>PostgreSQL</strong>
                </div>

                <div className="lw-map-node lw-map-files">
                  <span>FILES</span>
                  <strong>Object storage</strong>
                </div>

                <div className="lw-map-node lw-map-mail">
                  <span>IDENTITY</span>
                  <strong>Email workflows</strong>
                </div>

                <div className="lw-map-control lw-map-auth">
                  <span>SECURITY</span>
                  <strong>Org access</strong>
                </div>

                <div className="lw-map-control lw-map-review">
                  <span>WORKFLOW</span>
                  <strong>Review + approval</strong>
                </div>
              </div>

              <p className="board-footnote">
                Identity, organization context, document state and
                file ownership stay connected through the entire
                workflow.
              </p>
            </div>
          </div>

          <div className="ladewise-feature-grid">
            <article>
              <span>01</span>
              <h3>Document lifecycle</h3>
              <p>
                Explicit document states replace informal
                filename-based hand-offs.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Human review</h3>
              <p>
                Commercially sensitive documents retain deliberate
                review and approval steps.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Version history</h3>
              <p>
                Changes remain traceable so teams can understand
                what changed and when.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Organization access</h3>
              <p>
                Authentication and organization boundaries keep
                data scoped to the correct team.
              </p>
            </article>
          </div>

          <section className="inside-ladewise">
            <div className="inside-ladewise-heading">
              <p className="case-label">
                INSIDE LADEWISE
              </p>

              <h3>
                Workflow software should
                <br />
                <em>reduce ambiguity.</em>
              </h3>

              <p>
                The product is organized around state, ownership
                and next action rather than treating export
                paperwork as a folder full of PDFs.
              </p>
            </div>

            <div className="ladewise-workflow">
              <div className="ladewise-workflow-head">
                <span>DOCUMENT WORKFLOW</span>
                <strong>Shipment documentation</strong>
              </div>

              <div className="ladewise-stages">
                <article className="is-done">
                  <span>01</span>
                  <strong>Prepare</strong>
                  <small>COMPLETE</small>
                </article>

                <b>→</b>

                <article className="is-current">
                  <span>02</span>
                  <strong>Review</strong>
                  <small>IN REVIEW</small>
                </article>

                <b>→</b>

                <article>
                  <span>03</span>
                  <strong>Approve</strong>
                  <small>PENDING</small>
                </article>

                <b>→</b>

                <article>
                  <span>04</span>
                  <strong>History</strong>
                  <small>RETAINED</small>
                </article>
              </div>

              <div className="ladewise-register">
                <article>
                  <span>Commercial Invoice</span>
                  <small>VERSION 04</small>
                  <strong>Reviewed</strong>
                </article>

                <article>
                  <span>Shipping Bill</span>
                  <small>VERSION 02</small>
                  <strong>Needs approval</strong>
                </article>

                <article>
                  <span>Packing List</span>
                  <small>VERSION 03</small>
                  <strong>Approved</strong>
                </article>
              </div>
            </div>

            <div className="ladewise-proof-pair">
              <article className="ladewise-proof">
                <span className="ladewise-proof-label">
                  DOCUMENT OUTPUT
                </span>

                <h4>Structured PDF generation</h4>

                <div className="ladewise-paper">
                  <div>
                    <strong>COMMERCIAL INVOICE</strong>
                    <span>EXPORT DOCUMENT</span>
                  </div>

                  <i />
                  <i className="short" />

                  <section>
                    <b />
                    <b />
                    <b />
                  </section>

                  <small>VERSIONED DOCUMENT</small>
                </div>

                <p>
                  Generated documents remain tied to application
                  state and version history rather than becoming
                  disconnected files.
                </p>
              </article>

              <article className="ladewise-proof">
                <span className="ladewise-proof-label">
                  SECURITY MODEL
                </span>

                <h4>Explicit backend boundaries</h4>

                <div className="ladewise-security">
                  <div>
                    <span>AUTHENTICATION</span>
                    <strong>Spring Security</strong>
                  </div>

                  <div>
                    <span>REQUEST SAFETY</span>
                    <strong>CSRF + CORS</strong>
                  </div>

                  <div>
                    <span>DATA SCOPE</span>
                    <strong>Organization context</strong>
                  </div>

                  <div>
                    <span>SCHEMA</span>
                    <strong>Flyway migrations</strong>
                  </div>
                </div>

                <p>
                  Security is enforced by the application boundary,
                  not by what the frontend happens to display.
                </p>
              </article>
            </div>
          </section>

          <div className="ladewise-engineering">
            <div>
              <p className="case-label">
                ENGINEERING STORY
              </p>

              <h3>
                Operational software,
                <br />
                <em>not a document mockup.</em>
              </h3>
            </div>

            <div className="ladewise-engineering-copy">
              <p>
                The Next.js interface sits in front of a Java 21
                and Spring Boot application responsible for
                identity, organization context, document state
                and workflow rules.
              </p>

              <p>
                PostgreSQL stores application state, Flyway keeps
                schema changes versioned, and S3-compatible object
                storage handles document files separately from the
                relational model.
              </p>
            </div>

            <aside className="ladewise-engineering-note">
              <span>WHAT I WANTED TO PROVE</span>

              <strong>
                I can model a real operational workflow with
                security, persistence, storage and human approval
                boundaries.
              </strong>
            </aside>
          </div>

          <div className="ladewise-case-stack">
            <div>
              <span className="case-label">
                CORE STACK
              </span>

              <p>
                Java 21 · Spring Boot · Next.js · TypeScript ·
                PostgreSQL · Flyway · S3-compatible storage
              </p>
            </div>

            <a
              href="https://github.com/harmanpreetbuilds/ladewise-showcase"
              target="_blank"
              rel="noreferrer"
            >
              Engineering showcase
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
          className="bidforge-case-study"
          id="bidforge"
        >
          <div className="bf-case-header">
            <span className="case-number">
              CASE FILE 04
            </span>

            <div className="bf-case-heading">
              <div>
                <p className="case-label">
                  BIDFORGE / BID & PROPOSAL INTELLIGENCE
                </p>

                <h2>
                  Read the bid.
                  <br />
                  <em>Find the risk.</em>
                </h2>
              </div>

              <div className="bf-case-intro">
                <span>
                  TENDER → REQUIREMENTS → RISK → RESPONSE
                </span>

                <p>
                  BidForge turns dense tender and RFP documents
                  into a structured working model: requirements,
                  delivery concerns, commercial exposure,
                  mitigations and proposal-ready intelligence.
                </p>
              </div>
            </div>
          </div>

          <div className="bf-case-layout">
            <article className="bf-problem">
              <p className="case-label">
                THE PROBLEM
              </p>

              <h3>
                A bid can look attractive
                <br />
                <em>before anyone reads the fine print.</em>
              </h3>

              <p>
                Tender documents mix requirements, deadlines,
                commercial conditions, compliance obligations and
                ambiguous language across dozens or hundreds of
                pages.
              </p>

              <p>
                BidForge creates an explicit review layer before
                those details disappear into a proposal document.
              </p>
            </article>

            <div className="bf-system-board">
              <div className="bf-board-top">
                <span>BIDFORGE / REVIEW DESK</span>
                <strong>RFP 024</strong>
              </div>

              <div className="bf-board-body">
                <div className="bf-board-document">
                  <div className="bf-board-document-head">
                    <span>SOURCE DOCUMENT</span>
                    <strong>42 pages</strong>
                  </div>

                  <i />
                  <i />
                  <i className="short" />

                  <div className="bf-highlight">
                    <span>REQ / 17</span>
                    <strong>
                      Integration must complete within 30 days
                    </strong>
                  </div>

                  <i />
                  <i className="medium" />
                </div>

                <div className="bf-board-arrow">
                  →
                </div>

                <div className="bf-board-register">
                  <span className="bf-register-label">
                    RISK REGISTER
                  </span>

                  <article>
                    <small>DELIVERY</small>
                    <strong>HIGH</strong>
                    <p>Compressed implementation window</p>
                  </article>

                  <article>
                    <small>COMMERCIAL</small>
                    <strong>MEDIUM</strong>
                    <p>Unclear acceptance language</p>
                  </article>

                  <article>
                    <small>COMPLIANCE</small>
                    <strong>LOW</strong>
                    <p>Evidence required before submission</p>
                  </article>
                </div>
              </div>

              <div className="bf-board-foot">
                <span>17 REQUIREMENTS</span>
                <span>6 RISKS</span>
                <span>4 MITIGATIONS</span>
                <strong>REVIEW BEFORE BID</strong>
              </div>
            </div>
          </div>

          <div className="bf-feature-grid">
            <article>
              <span>01 / INTAKE</span>

              <h3>Document ingestion</h3>

              <p>
                Tender and RFP material becomes a working source
                rather than a PDF someone has to repeatedly scan
                by hand.
              </p>
            </article>

            <article>
              <span>02 / REQUIREMENTS</span>

              <h3>Structured obligations</h3>

              <p>
                Requirements are separated, categorized and tied
                back to the source material so review remains
                traceable.
              </p>
            </article>

            <article>
              <span>03 / RISK</span>

              <h3>Bid risk analysis</h3>

              <p>
                Delivery, commercial, compliance and ambiguity
                risks become explicit before the response is
                committed.
              </p>
            </article>

            <article>
              <span>04 / RESPONSE</span>

              <h3>Proposal workspace</h3>

              <p>
                Requirements and mitigations become usable context
                for preparing a stronger, more defensible
                proposal.
              </p>
            </article>
          </div>

          <section className="inside-bidforge">
            <div className="inside-bidforge-heading">
              <p className="case-label">
                INSIDE BIDFORGE
              </p>

              <h3>
                The proposal is the output.
                <br />
                <em>The decision model comes first.</em>
              </h3>

              <p>
                The product is organized around what must be
                understood before a team decides what to promise.
              </p>
            </div>

            <div className="bf-review-flow">
              <div className="bf-review-flow-head">
                <span>BID REVIEW SEQUENCE</span>
                <strong>Government services tender</strong>
              </div>

              <div className="bf-review-stages">
                <article>
                  <span>01</span>
                  <strong>Ingest</strong>
                  <small>RFP SOURCE</small>
                </article>

                <b>→</b>

                <article>
                  <span>02</span>
                  <strong>Extract</strong>
                  <small>REQUIREMENTS</small>
                </article>

                <b>→</b>

                <article className="is-current">
                  <span>03</span>
                  <strong>Review</strong>
                  <small>RISKS</small>
                </article>

                <b>→</b>

                <article>
                  <span>04</span>
                  <strong>Respond</strong>
                  <small>PROPOSAL</small>
                </article>
              </div>
            </div>

            <div className="bf-proof-grid">
              <article>
                <span>REQUIREMENT REGISTER</span>
                <strong>17 extracted obligations</strong>

                <div className="bf-mini-table">
                  <div>
                    <small>REQ-014</small>
                    <p>Data migration plan</p>
                    <b>Clear</b>
                  </div>

                  <div>
                    <small>REQ-017</small>
                    <p>30-day delivery</p>
                    <b>Risk</b>
                  </div>

                  <div>
                    <small>REQ-021</small>
                    <p>Support SLA</p>
                    <b>Review</b>
                  </div>
                </div>
              </article>

              <article>
                <span>MITIGATION</span>
                <strong>Turn risk into a response decision</strong>

                <div className="bf-mitigation-card">
                  <small>DELIVERY / HIGH</small>

                  <h4>
                    Compressed implementation window
                  </h4>

                  <p>
                    Clarify migration scope and propose a phased
                    acceptance milestone before committing to the
                    requested date.
                  </p>

                  <div>
                    PROPOSAL NOTE READY
                  </div>
                </div>
              </article>
            </div>
          </section>

          <div className="bf-engineering">
            <div>
              <p className="case-label">
                ENGINEERING
              </p>

              <h3>
                Documents in.
                <br />
                <em>structured decisions out.</em>
              </h3>
            </div>

            <div className="bf-engineering-copy">
              <p>
                BidForge combines document parsing, structured
                domain models and AI-assisted analysis without
                treating the model output as the product itself.
              </p>

              <p>
                Requirements, risks and proposals remain explicit
                application entities that can be reviewed and
                evolved independently.
              </p>
            </div>

            <aside>
              <span>STACK</span>

              <strong>
                Next.js
                <br />
                TypeScript
                <br />
                Prisma
                <br />
                PostgreSQL
                <br />
                AI
              </strong>
            </aside>
          </div>

          <div className="bf-case-stack">
            <div>
              <strong>BidForge</strong>

              <p>
                Bid & Proposal Risk Intelligence / 2026
              </p>
            </div>

            <a href="#work">
              Back to selected work
              <Arrow />
            </a>
          </div>
        </section>

        <section
          className="handover-case-study"
          id="handoverlab"
        >
          <div className="hl-case-header">
            <span className="case-number">
              CASE FILE 05
            </span>

            <div className="hl-case-heading">
              <div>
                <p className="case-label">
                  HANDOVERLAB / LEGACY CODE INTELLIGENCE
                </p>

                <h2>
                  Inherit the system.
                  <br />
                  <em>Not the confusion.</em>
                </h2>
              </div>

              <div className="hl-case-intro">
                <span>
                  REPOSITORY → MAP → EXPLAIN → EXECUTE
                </span>

                <p>
                  HandoverLab helps engineers understand unfamiliar
                  and legacy systems through repository analysis,
                  architecture mapping, dependency intelligence and
                  controlled engineering execution.
                </p>
              </div>
            </div>
          </div>

          <div className="hl-case-layout">
            <article className="hl-problem">
              <p className="case-label">
                THE PROBLEM
              </p>

              <h3>
                The code runs.
                <br />
                <em>Nobody remembers why.</em>
              </h3>

              <p>
                Mature systems often outlive the people who built
                them. Documentation drifts, dependencies become
                implicit and seemingly small changes can cross
                boundaries nobody knew existed.
              </p>

              <p>
                HandoverLab treats repository understanding as an
                engineering problem, not simply a chat interface.
              </p>
            </article>

            <div className="hl-system-board">
              <div className="hl-system-caption">
                <span>HANDOVERLAB / SYSTEM MAP</span>
                <strong>legacy-core</strong>
              </div>

              <div className="hl-system-body">
                <div className="hl-source-tree">
                  <span>REPOSITORY</span>
                  <strong>legacy-core</strong>

                  <div>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <b className="hl-system-arrow">
                  →
                </b>

                <div className="hl-architecture">
                  <span>DISCOVERED BOUNDARIES</span>

                  <div className="hl-arch-node one">
                    API
                  </div>

                  <div className="hl-arch-node two">
                    DOMAIN
                  </div>

                  <div className="hl-arch-node three">
                    DATA
                  </div>

                  <div className="hl-arch-node four">
                    JOBS
                  </div>

                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line x1="23" y1="31" x2="73" y2="31" />
                    <line x1="23" y1="31" x2="37" y2="74" />
                    <line x1="73" y1="31" x2="67" y2="74" />
                    <line x1="37" y1="74" x2="67" y2="74" />
                  </svg>
                </div>
              </div>

              <div className="hl-system-foot">
                <span>184 FILES</span>
                <span>12 MODULES</span>
                <span>31 DEPENDENCIES</span>
                <strong>MAP READY</strong>
              </div>
            </div>
          </div>

          <div className="hl-feature-grid">
            <article>
              <span>01 / REPOSITORY</span>

              <h3>Codebase understanding</h3>

              <p>
                Files, modules, entry points and dependencies become
                explicit before an engineer starts changing code.
              </p>
            </article>

            <article>
              <span>02 / ARCHITECTURE</span>

              <h3>System mapping</h3>

              <p>
                Services, data boundaries and execution paths are
                organized into a navigable model of the system.
              </p>
            </article>

            <article>
              <span>03 / INTELLIGENCE</span>

              <h3>Engineering explanation</h3>

              <p>
                Engineers can investigate behaviour and unfamiliar
                implementation decisions with repository context.
              </p>
            </article>

            <article>
              <span>04 / RUNNER</span>

              <h3>Controlled execution</h3>

              <p>
                A separate runner handles controlled inspection and
                engineering tasks without giving an AI unrestricted
                access to the environment.
              </p>
            </article>
          </div>

          <section className="inside-handover">
            <div className="inside-handover-heading">
              <p className="case-label">
                INSIDE HANDOVERLAB
              </p>

              <h3>
                Understanding code is useful.
                <br />
                <em>Understanding consequences is better.</em>
              </h3>

              <p>
                HandoverLab is designed around the path from
                unfamiliar source code to a reasoned engineering
                change.
              </p>
            </div>

            <div className="hl-investigation">
              <div className="hl-investigation-head">
                <span>ENGINEERING INVESTIGATION</span>
                <strong>
                  Why does changing customer status affect billing?
                </strong>
              </div>

              <div className="hl-investigation-grid">
                <article>
                  <small>01 / ENTRY</small>
                  <strong>CustomerController</strong>
                  <p>Receives status transition.</p>
                </article>

                <b>→</b>

                <article>
                  <small>02 / DOMAIN</small>
                  <strong>CustomerService</strong>
                  <p>Updates customer state.</p>
                </article>

                <b>→</b>

                <article>
                  <small>03 / EVENT</small>
                  <strong>BillingListener</strong>
                  <p>Consumes transition event.</p>
                </article>

                <b>→</b>

                <article>
                  <small>04 / EFFECT</small>
                  <strong>InvoicePolicy</strong>
                  <p>Changes invoice eligibility.</p>
                </article>
              </div>
            </div>

            <div className="hl-proof-grid">
              <article className="hl-code-proof">
                <span>DEPENDENCY INTELLIGENCE</span>
                <strong>Impact before edit</strong>

                <div>
                  <small>CustomerService</small>
                  <i />
                  <small>BillingListener</small>
                  <i />
                  <small>InvoicePolicy</small>
                </div>

                <p>
                  The useful answer is not only where code lives,
                  but what else depends on the behaviour being
                  changed.
                </p>
              </article>

              <article className="hl-runner-proof">
                <span>CONTROLLED RUNNER</span>
                <strong>Execution stays separated</strong>

                <div className="hl-terminal">
                  <small>$ inspect change</small>
                  <p>✓ repository mounted</p>
                  <p>✓ tests selected</p>
                  <p>✓ isolated runner</p>
                  <b>READY</b>
                </div>

                <p>
                  Analysis and execution remain separate concerns so
                  engineering actions can be constrained and
                  inspected.
                </p>
              </article>
            </div>
          </section>

          <div className="hl-engineering">
            <div>
              <p className="case-label">
                ENGINEERING
              </p>

              <h3>
                Context first.
                <br />
                <em>Changes second.</em>
              </h3>
            </div>

            <div className="hl-engineering-copy">
              <p>
                The backend and runner are separate Spring Boot
                services with PostgreSQL-backed state and
                containerized execution boundaries.
              </p>

              <p>
                That architecture lets repository intelligence stay
                useful without collapsing analysis and arbitrary
                execution into the same trust boundary.
              </p>
            </div>

            <aside>
              <span>STACK</span>

              <strong>
                Java
                <br />
                Spring Boot
                <br />
                PostgreSQL
                <br />
                Docker
                <br />
                Next.js
              </strong>
            </aside>
          </div>

          <div className="hl-case-stack">
            <div>
              <strong>HandoverLab</strong>

              <p>
                Legacy Code Intelligence / 2026
              </p>
            </div>

            <a href="#work">
              Back to selected work
              <Arrow />
            </a>
          </div>
        </section>

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
        <span>BACKEND & AI PRODUCT ENGINEER</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default App
