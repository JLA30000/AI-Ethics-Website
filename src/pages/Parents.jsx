function Parents() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Parents</p>
          <h1>Family-centered guidance that feels human.</h1>
          <p className="lede">
            Get conversation starters, privacy tips, and shared agreements that
            help children use AI thoughtfully.
          </p>
        </div>
        <div className="page-hero__media">
          <img
            className="page-image"
            src="/pictures/parent_teaching_kid.png"
            alt="Parent guiding a child on responsible AI use"
          />
        </div>
      </div>
      <div className="card-grid">
        <article className="card">
          <h2>Conversation Starters</h2>
          <p>
            Age-appropriate questions that make AI less mysterious and more
            manageable.
          </p>
        </article>
        <article className="card">
          <h2>Family Agreements</h2>
          <p>
            Simple guidelines that balance exploration with safety and respect.
          </p>
        </article>
        <article className="card">
          <h2>Resource Shelf</h2>
          <p>
            Curated links for ongoing learning, from privacy basics to media
            literacy.
          </p>
        </article>
      </div>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Family guardrails</h2>
          <p className="section-lede">
            Keep expectations clear while encouraging curiosity.
          </p>
        </div>
        <ul className="checklist">
          <li>Agree on where AI is allowed for homework.</li>
          <li>Review AI outputs together for bias or missing context.</li>
          <li>Protect privacy by avoiding personal details in prompts.</li>
        </ul>
      </section>
    </section>
  )
}

export default Parents
