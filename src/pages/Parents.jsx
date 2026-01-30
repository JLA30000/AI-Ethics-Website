function Parents() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Parents</p>
          <h1>Guide Your Kid to Success in the AI Age</h1>
          <p className="lede">
            Provide guidance, assistance, and boundaries. Help your kid learn
            how to properly use this tool to ensure their future success.
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
          <h2>Guidance</h2>
          <p>
            Help your kids manage workloads efficiently. Teach them
            appropriate scenarios to use AI.
          </p>
        </article>
        <article className="card">
          <h2>Assistance</h2>
          <p>
            Help your kids with their work. Ensure they have resources to
            succeed without needing to constantly turn to generative AI.
          </p>
        </article>
        <article className="card">
          <h2>Boundaries</h2>
          <p>
            Don't block AI on children's devices. Instead, monitor AI usage so that
            you can track how your kid is using the technology.
          </p>
        </article>
      </div>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Helpful Tips</h2>
          <p className="section-lede">
            Ensure your child's success in an uncertain future.
          </p>
        </div>
        <ul className="checklist">
          <li>Set guidelines on when AI should be used for schoolwork.</li>
          <li>Review AI outputs together to ensure credible information.</li>
          <li>
            Help your kid turn AI into a tool to help their understanding and
            education.
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Parents
