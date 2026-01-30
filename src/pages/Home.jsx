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
              regulate and integrate AI. Some schools ban AI, resulting in
              students not being able to use this technology even in perfectly
              acceptable scenarios. Some parents also set controls on home
              devices that prevent their kids from accessing AI tools. And
              without these bans, students begin to abuse AI using it to cheat
              on tests and homework.
            </p>
            <p className="lede">
              In order for this to be addressed, both students, parents, and
              teachers need to work together. Schools need to educate students
              on how to efficiently use artificial intelligence within certain
              boundaries, parents need to help enforce this education and
              regulate AI usage at home, and students need to do their part and
              learn to use AI effectively without abusing this technology.
            </p>
            <p className="lede">
              Schools should replace direct AI bans with structured education
              that teaches students how to use AI ethically, responsibly, and
              efficiently within clear academic boundaries.
            </p>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-logos">
            <img
              className="hero-logo"
              src="/pictures/openai_logo.png"
              alt="OpenAI logo"
            />
            <img
              className="hero-logo"
              src="/pictures/claude_logo2.png"
              alt="Claude logo"
            />
            <img
              className="hero-logo"
              src="/pictures/gemini_logo.png"
              alt="Gemini logo"
            />
          </div>
          <div className="info-card">
            <h3>Important Ethical Habits for Students</h3>
            <ul className="info-list">
              <li>
                Verify any AI-generated information. According to Sam Altman,
                CEO of OpenAI, even the most reliable models can make the most
                rudimentary mistakes.
              </li>
              <li>Ensure proper citation of all AI-generated content.</li>
              <li>
                Don't let AI do the thinking for you. AI doesn't have the
                creativity and innovation that you do.
              </li>
            </ul>
          </div>
          <div className="info-card info-card-accent">
            <h3>AI Ethics Guide Goals</h3>
            <ul className="info-list">
              <li>Educate students on the proper and ethical uses of AI.</li>
              <li>
                Inform parents and teachers of guidelines to help students
                succeed in an AI-dominated industry.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Pillars for success</h2>
          <p className="section-lede">
            Three important mindsets to have to allow effective integration of
            AI in education.
          </p>
        </div>
        <div className="pillars">
          <article className="pillar-card">
            <div className="pillar-box">
              <h3>Open mindset</h3>
              <p>
                Students, teachers, and parents all have to be able to adapt to
                AI. According to the article "The Urgent Case of AI
                Regulation", AI is already being used for more serious tasks
                than people imagine. With AI comes possibility.
              </p>
            </div>
            <img
              className="pillar-image"
              src="/pictures/ai_future.png"
              alt="Abstract view of the future of AI"
            />
          </article>
          <article className="pillar-card">
            <div className="pillar-box">
              <h3>Critical thinking</h3>
              <p>
                AI can do a lot of tasks better than humans, but our innovation
                and insight remain unmatched by machines. According to the
                article "Guest Column: AI proof careers", the most important
                skills people need to have to not be replaced by machine is
                creativity, and critical thinking.
              </p>
            </div>
            <img
              className="pillar-image"
              src="/pictures/code_images.png"
              alt="Code and AI visuals"
            />
          </article>
          <article className="pillar-card">
            <div className="pillar-box">
              <h3>Caution</h3>
              <p>
                Use AI appropriately but don't depend on it. AI isn't a free
                tool and we might not always have access to it. The United
                Nations Environment Programs stated that AI data centers use
                massive amounts of electricity and consume large amounts of
                natural resources.
              </p>
            </div>
            <img
              className="pillar-image"
              src="/pictures/matrix_code.png"
              alt="Matrix-style code graphic"
            />
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Guides for every audience</h2>
          <p className="section-lede">
            Education for students, teachers, and families.
          </p>
        </div>
        <div className="card-grid">
          <Link to="/students" className="card card-link">
            <h2>Students</h2>
            <p>Build smart habits, question outputs, and keep your work honest.</p>
          </Link>
          <Link to="/teachers" className="card card-link">
            <h2>Teachers</h2>
            <p>
              Educate students to effectively and efficiently use AI ensuring
              their bright future.
            </p>
          </Link>
          <Link to="/parents" className="card card-link">
            <h2>Parents</h2>
            <p>
              Support your child's growth and education, establish boundaries
              for AI usage.
            </p>
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
            <span className="timeline-title">Understand</span>
            <span className="timeline-body">
              Learn what AI is. Understand its applications and its
              limitations.
            </span>
          </li>
          <li>
            <span className="timeline-title">Practice</span>
            <span className="timeline-body">
              Use various prompts and test how AI responds. Start to understand
              how to most efficiently utilize this technology.
            </span>
          </li>
          <li>
            <span className="timeline-title">Reflect</span>
            <span className="timeline-body">
              Set boundaries and decide how you plan to use AI appropriately.
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
