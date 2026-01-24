import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page-stack">
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">AI Ethics in Schools</p>
          <h1 className="hero-title">
            AI in Education: Tool, Threat, or Teachable Skill?
          </h1>
          <div className="lede-group">
            <p className="lede">
              Currently, the education system fails to both effectively
              regulate and integrate AI. Schools ban AI in their systems even
              in perfectly acceptable scenarios. Students abuse AI at home when
              doing homework and end up not learning any content.
            </p>
            <p className="lede">
              In order for this to be addressed, both students, parents, and
              teachers need to work together. Schools need to educate students
              on how to efficiently use artificial intelligence within certain
              boundaries, parents need to help enforce this education and
              regulate AI usage at home, and students need to do their part and
              learn to use AI effectively without abusing this technology.
            </p>
          </div>
          <div className="hero-actions">
            <Link to="/students" className="button">
              Start with students
            </Link>
            <Link to="/teachers" className="button button-outline">
              Explore teacher toolkit
            </Link>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-value">3</span>
              <span className="metric-label">Learning pathways</span>
            </div>
            <div className="metric">
              <span className="metric-value">12</span>
              <span className="metric-label">Guided activities</span>
            </div>
            <div className="metric">
              <span className="metric-value">1</span>
              <span className="metric-label">Shared pledge</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="info-card">
            <h3>Ethical habits we teach</h3>
            <ul className="info-list">
              <li>Verify sources before sharing or submitting.</li>
              <li>Label AI assistance with clarity and honesty.</li>
              <li>Use AI to learn, not to replace thinking.</li>
            </ul>
          </div>
          <div className="info-card info-card-accent">
            <h3>Classroom-ready outcomes</h3>
            <p>
              Students leave with a personal AI-use plan, while teachers gain
              policy language and assessment cues.
            </p>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Learning pillars</h2>
          <p className="section-lede">
            Three focus areas that keep AI in education transparent, equitable,
            and human-centered.
          </p>
        </div>
        <div className="pillars">
          <article className="pillar-card">
            <h3>Transparency</h3>
            <p>Students learn when and how to disclose AI support.</p>
          </article>
          <article className="pillar-card">
            <h3>Critical thinking</h3>
            <p>Teach students to question outputs and check evidence.</p>
          </article>
          <article className="pillar-card">
            <h3>Agency</h3>
            <p>Ensure learners own their voice, style, and decisions.</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Visual primer</h2>
          <p className="section-lede">
            A quick gallery for sparking discussion about AI in everyday
            learning.
          </p>
        </div>
        <div className="image-grid">
          <figure className="image-card">
            <img src="/pictures/ai_future.png" alt="Abstract view of AI future" />
            <figcaption>Future-facing questions about AI and society.</figcaption>
          </figure>
          <figure className="image-card">
            <img src="/pictures/code_images.png" alt="Code and AI visuals" />
            <figcaption>Code literacy helps students read AI outputs.</figcaption>
          </figure>
          <figure className="image-card">
            <img src="/pictures/matrix_code.png" alt="Matrix-style code graphic" />
            <figcaption>Patterns and signals hidden inside model training.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Guides for every audience</h2>
          <p className="section-lede">
            Choose a pathway built for students, teachers, or families.
          </p>
        </div>
        <div className="card-grid">
          <Link to="/students" className="card card-link">
            <h2>Students</h2>
            <p>Build smart habits, question outputs, and keep your work honest.</p>
          </Link>
          <Link to="/teachers" className="card card-link">
            <h2>Teachers</h2>
            <p>Guide instruction with policy-ready, classroom-friendly norms.</p>
          </Link>
          <Link to="/parents" className="card card-link">
            <h2>Parents</h2>
            <p>Support your child with boundaries that respect curiosity.</p>
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">A simple learning path</h2>
          <p className="section-lede">
            A repeatable sequence you can use in classrooms or at home.
          </p>
        </div>
        <ol className="timeline">
          <li>
            <span className="timeline-title">Discover</span>
            <span className="timeline-body">
              Map where AI shows up, from brainstorming to grading.
            </span>
          </li>
          <li>
            <span className="timeline-title">Practice</span>
            <span className="timeline-body">
              Use guided prompts to spot errors and bias.
            </span>
          </li>
          <li>
            <span className="timeline-title">Reflect</span>
            <span className="timeline-body">
              Set boundaries and document what ethical use looks like.
            </span>
          </li>
        </ol>
      </section>

      <footer className="footer-note">
        AI should be integrated into education through ethical boundaries, not
        banned and not abused.
      </footer>
    </section>
  )
}

export default Home
