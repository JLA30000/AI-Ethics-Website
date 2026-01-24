function Students() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Students</p>
          <h1>Curiosity with guardrails.</h1>
          <p className="lede">
            Learn how to question AI outputs, understand bias, and build digital
            habits that protect your voice and creativity.
          </p>
        </div>
        <div className="page-hero__media">
          <img
            className="page-image"
            src="/pictures/student_using_GPT.png"
            alt="Student using AI responsibly for learning"
          />
        </div>
      </div>
      <div className="card-grid">
        <article className="card">
          <h2>Quick Challenges</h2>
          <p>
            Short prompts that reveal how models can get it wrong and how to
            verify what matters.
          </p>
        </article>
        <article className="card">
          <h2>Creative Labs</h2>
          <p>
            Pair human ideas with AI tools while keeping credit, context, and
            consent in focus.
          </p>
        </article>
        <article className="card">
          <h2>Student Pledges</h2>
          <p>
            Draft a personal commitment to responsible use and share it with
            your community.
          </p>
        </article>
      </div>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Before you submit work</h2>
          <p className="section-lede">
            A quick checklist to keep your learning honest and visible.
          </p>
        </div>
        <ul className="checklist">
          <li>Can you explain the AI output in your own words?</li>
          <li>Did you verify facts with a second source?</li>
          <li>Have you noted where AI helped you brainstorm or edit?</li>
        </ul>
      </section>
      <section className="section-block">
        <div className="resource-card">
          <img
            className="resource-media"
            src="/pictures/ai_bot.png"
            alt="Friendly AI assistant illustration"
          />
          <div className="resource-content">
            <p className="eyebrow">Interactive</p>
            <h2>AI Ethics Kahoot</h2>
            <p className="section-lede">
              Test your understanding of ethical AI use with a short, classroom
              friendly quiz.
            </p>
            <a
              className="button"
              href="https://create.kahoot.it/share/ai-ethics-kahoot/f7b59598-a5d6-42fd-a828-f47785fa7dd5"
              target="_blank"
              rel="noreferrer"
            >
              Play the Kahoot
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Students
