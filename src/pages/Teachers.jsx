function Teachers() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Teachers</p>
          <h1>Confident instruction in a changing landscape.</h1>
          <p className="lede">
            Structured lesson flows, discussion scaffolds, and classroom policy
            templates to support ethical adoption.
          </p>
        </div>
        <div className="page-hero__media">
          <img
            className="page-image"
            src="/pictures/teacher_teaching_ai.png"
            alt="Teacher explaining AI concepts in a classroom setting"
          />
        </div>
      </div>
      <div className="card-grid">
        <article className="card">
          <h2>Lesson Blueprint</h2>
          <p>
            Step-by-step sequences that align with standards and spark critical
            thinking.
          </p>
        </article>
        <article className="card">
          <h2>Assessment Lens</h2>
          <p>
            Rubrics and reflection prompts that value process, transparency, and
            originality.
          </p>
        </article>
        <article className="card">
          <h2>Policy Toolkit</h2>
          <p>
            Editable templates for classroom expectations and parent
            communication.
          </p>
        </article>
      </div>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Suggested lesson flow</h2>
          <p className="section-lede">
            Use this structure to align AI use with standards and integrity.
          </p>
        </div>
        <ol className="timeline timeline-compact">
          <li>
            <span className="timeline-title">Frame</span>
            <span className="timeline-body">
              Define the learning objective and where AI fits.
            </span>
          </li>
          <li>
            <span className="timeline-title">Model</span>
            <span className="timeline-body">
              Demonstrate transparent prompts and citation practices.
            </span>
          </li>
          <li>
            <span className="timeline-title">Reflect</span>
            <span className="timeline-body">
              Ask students to document what they kept, changed, or rejected.
            </span>
          </li>
        </ol>
      </section>
    </section>
  )
}

export default Teachers
