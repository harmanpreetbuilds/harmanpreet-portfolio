import './App.css'

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
        <section className="hero" id="top">
          <div className="hero-left">
            <p className="micro-label">
              SOFTWARE ENGINEER · INDIA · 2026
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
                Backend systems, AI infrastructure and cross-platform products
                designed around the problems that usually get ignored until
                production.
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
                reliability, sync & AI infrastructure
              </strong>
            </div>

            <article className="dervale-preview">
              <div className="project-index">
                01 / FLAGSHIP
              </div>

              <div className="dervale-mark">
                D
              </div>

              <div className="dervale-preview-bottom">
                <div>
                  <span>ENTERPRISE AI GATEWAY</span>
                  <h2>Dervale</h2>
                </div>

                <a
                  className="arrow-circle"
                  href="#dervale"
                  aria-label="Open Dervale case study"
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
            <article className="project-card project-dervale">
              <div className="project-meta-row">
                <span>01</span>
                <span>FLAGSHIP / AI INFRASTRUCTURE</span>
                <span>2026</span>
              </div>

              <div className="dervale-visual">
                <div className="gateway-line line-a" />
                <div className="gateway-line line-b" />
                <div className="gateway-line line-c" />

                <div className="gateway-node node-one">
                  AI
                </div>

                <div className="gateway-node node-two">
                  API
                </div>

                <div className="gateway-node node-three">
                  LLM
                </div>

                <div className="gateway-core">
                  <span>D</span>
                </div>
              </div>

              <div className="project-copy">
                <div>
                  <h3>Dervale</h3>

                  <p className="project-subtitle">
                    Enterprise AI Gateway Platform
                  </p>
                </div>

                <p>
                  A unified infrastructure layer for routing,
                  securing and operating AI workloads — built
                  around provider abstraction, credentials,
                  developer API keys, authentication and reliable
                  backend architecture.
                </p>
              </div>

              <div className="project-footer">
                <div className="plain-stack">
                  Spring Boot / React / PostgreSQL / AI APIs
                </div>

                <a href="#dervale">
                  Case study
                  <Arrow />
                </a>
              </div>
            </article>

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

                <div className="sync-orbit">
                  ↻
                </div>
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

            <article className="project-card project-interview">
              <div className="project-meta-row">
                <span>03</span>
                <span>AI PRODUCT</span>
              </div>

              <div className="interview-art">
                <span className="quote-mark">
                  “
                </span>

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
                Interested in building things with an engineering story.
              </strong>

              <span>— HK</span>
            </aside>
          </div>
        </section>

        {/* DERVALE CASE STUDY */}

        <section
          className="dervale-case-study"
          id="dervale"
        >
          <div className="case-header">
            <p className="case-number">
              CASE FILE 01 / FLAGSHIP
            </p>

            <div className="case-heading">
              <h2>
                One gateway.
                <br />
                <em>Many AI providers.</em>
              </h2>

              <div className="case-intro">
                <span>
                  DERVALE / ENTERPRISE AI INFRASTRUCTURE
                </span>

                <p>
                  Dervale is an AI gateway platform designed to
                  give applications one controlled layer for
                  accessing AI providers instead of scattering
                  credentials, provider-specific logic and API
                  integrations throughout a product.
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
                AI integrations get messy
                <br />
                <em>very quickly.</em>
              </h3>

              <p>
                Applications often begin by calling one AI provider
                directly. As the product grows, provider
                credentials, API keys, authentication and
                provider-specific behavior start leaking into
                different parts of the system.
              </p>

              <p>
                Dervale moves that complexity behind a dedicated
                gateway and developer console.
              </p>

              <div className="margin-note">
                <span>design principle</span>

                <strong>
                  centralize complexity before it spreads.
                </strong>
              </div>
            </article>

            <div className="gateway-board">
              <div className="board-caption">
                <span>SYSTEM MAP</span>
                <span>DERVALE / 01</span>
              </div>

              <div className="architecture-map">
                <div className="architecture-client">
                  <span>CLIENT</span>
                  <strong>Application</strong>
                </div>

                <div className="architecture-line line-client" />

                <div className="architecture-core">
                  <small>AI GATEWAY</small>
                  <strong>D</strong>
                  <span>Dervale</span>
                </div>

                <div className="architecture-line line-provider-one" />
                <div className="architecture-line line-provider-two" />
                <div className="architecture-line line-provider-three" />

                <div className="provider provider-one">
                  <span>PROVIDER</span>
                  <strong>AI 01</strong>
                </div>

                <div className="provider provider-two">
                  <span>PROVIDER</span>
                  <strong>AI 02</strong>
                </div>

                <div className="provider provider-three">
                  <span>PROVIDER</span>
                  <strong>AI 03</strong>
                </div>

                <div className="architecture-key">
                  <span>DEV KEY</span>
                  <strong>••••••••</strong>
                </div>

                <div className="architecture-credentials">
                  <span>SECURE</span>
                  <strong>
                    Provider credentials
                  </strong>
                </div>
              </div>

              <p className="board-footnote">
                Applications integrate with Dervale instead of
                coupling product code directly to individual AI
                providers.
              </p>
            </div>
          </div>

          <div className="case-features">
            <article>
              <span>01</span>

              <h3>
                Provider abstraction
              </h3>

              <p>
                A gateway layer separates application code from
                provider-specific AI integrations.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                Provider credentials
              </h3>

              <p>
                Provider credentials are managed through the
                platform instead of being distributed throughout
                client applications.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                Developer API keys
              </h3>

              <p>
                Applications can authenticate against the gateway
                using developer API keys managed from the Dervale
                console.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>
                Account security
              </h3>

              <p>
                Authentication and account-recovery flows support
                the developer-facing platform experience.
              </p>
            </article>
          </div>

          <section className="inside-dervale">
            <div className="inside-dervale-heading">
              <p className="case-label">
                INSIDE DERVALE
              </p>

              <h3>
                Built like a control plane,
                <br />
                <em>not a chat demo.</em>
              </h3>

              <p>
                The product surface covers provider access, developer keys,
                multi-model execution, usage analytics and the gateway itself —
                all behind one workspace.
              </p>
            </div>

            <figure className="dervale-shot dervale-shot-hero">
              <div className="dervale-shot-frame">
                <img
                  src="/dervale/analytics.png"
                  alt="Dervale AI usage and cost analytics dashboard"
                />
              </div>

              <figcaption>
                <span>01 / OPERATIONS</span>

                <strong>
                  Usage, tokens, estimated cost and spend controls.
                </strong>
              </figcaption>
            </figure>

            <figure className="dervale-shot dervale-shot-compare">
              <div className="dervale-shot-frame">
                <img
                  src="/dervale/compare.png"
                  alt="Dervale multi-model AI comparison results"
                />
              </div>

              <figcaption>
                <span>02 / MULTI-MODEL EXECUTION</span>

                <strong>
                  One prompt. Three providers. Latency, tokens and cost measured side by side.
                </strong>
              </figcaption>
            </figure>

            <div className="dervale-shot-pair">
              <figure className="dervale-shot dervale-shot-developers">
                <div className="dervale-shot-frame">
                  <img
                    src="/dervale/developers.png"
                    alt="Dervale developer gateway key management"
                  />
                </div>

                <figcaption>
                  <span>03 / DEVELOPER API</span>

                  <strong>
                    Scoped gateway keys behind one stable AI interface.
                  </strong>
                </figcaption>
              </figure>

              <figure className="dervale-shot dervale-shot-providers">
                <div className="dervale-shot-frame">
                  <img
                    src="/dervale/providers.png"
                    alt="Dervale AI provider credential management"
                  />
                </div>

                <figcaption>
                  <span>04 / PROVIDER ACCESS</span>

                  <strong>
                    Encrypted provider credentials with verification and lifecycle controls.
                  </strong>
                </figcaption>
              </figure>
            </div>

            <div className="dervale-product-note">
              <span>WHAT THE UI PROVES</span>

              <p>
                Dervale is not a thin interface around a model call.
                The product manages the operational layer around AI workloads.
              </p>
            </div>

            <div className="dervale-shot-pair dervale-shot-pair-bottom">
              <figure className="dervale-shot dervale-shot-chat">
                <div className="dervale-shot-frame">
                  <img
                    src="/dervale/chat.png"
                    alt="Dervale gateway conversation using OpenAI"
                  />
                </div>

                <figcaption>
                  <span>05 / GATEWAY WORKSPACE</span>

                  <strong>
                    Stateful conversations with provider-aware execution and persisted history.
                  </strong>
                </figcaption>
              </figure>

              <figure className="dervale-shot dervale-shot-login">
                <div className="dervale-shot-frame">
                  <img
                    src="/dervale/login.png"
                    alt="Dervale secure workspace authentication"
                  />
                </div>

                <figcaption>
                  <span>06 / ACCESS</span>

                  <strong>
                    Authentication and account recovery around a private infrastructure workspace.
                  </strong>
                </figcaption>
              </figure>
            </div>
          </section>

          <div className="engineering-spread">
            <div className="engineering-title">
              <p className="case-label">
                ENGINEERING STORY
              </p>

              <h3>
                Not just another
                <br />
                <em>AI wrapper.</em>
              </h3>
            </div>

            <div className="engineering-copy">
              <p>
                The interesting part of Dervale is the
                infrastructure around the AI call: authentication,
                provider configuration, credentials, developer
                access and creating one boundary between
                applications and external AI services.
              </p>

              <p>
                The project is structured as a product platform
                rather than a single prompt interface.
              </p>
            </div>

            <aside className="engineering-note">
              <span>
                WHAT I WANTED TO PROVE
              </span>

              <strong>
                I can build the infrastructure around an AI
                product, not only the AI feature itself.
              </strong>
            </aside>
          </div>

          <div className="case-stack">
            <div>
              <span className="case-label">
                CORE STACK
              </span>

              <p>
                Java · Spring Boot · React · PostgreSQL · REST APIs · Gradle
              </p>
            </div>

            <a
              href="https://github.com/harmanpreetbuilds/ai-gateway-platform"
              target="_blank"
              rel="noreferrer"
            >
              Explore Dervale on GitHub
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

              <h3>
                Backend systems
              </h3>

              <p>
                APIs, authentication, databases, service
                architecture and server-side product logic.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                AI infrastructure
              </h3>

              <p>
                Provider abstraction, LLM integration, gateways
                and AI-native backend products.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                Cross-platform
              </h3>

              <p>
                Kotlin Multiplatform systems with native Android
                and iOS interfaces.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>
                Reliability
              </h3>

              <p>
                Offline-first architecture, synchronization,
                concurrency and failure-aware product design.
              </p>
            </article>
          </div>
        </section>

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

        <section
          className="contact-section"
          id="contact"
        >
          <p className="micro-label">
            LET’S BUILD SOMETHING GOOD
          </p>

          <h2>
            Have a product that needs
            <br />
            <em>more than pretty screens?</em>
          </h2>

          <div className="contact-row">
            <a
              href="#top"
              className="contact-primary"
            >
              Work with me
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

      <footer>
        <span>HARMANPREET</span>
        <span>SOFTWARE ENGINEER</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default App
