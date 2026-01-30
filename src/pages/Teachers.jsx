function Teachers() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Teachers</p>
          <h1>Embrace the New Style of Education</h1>
          <p className="lede">
            As AI develops, education isn't the same as it used to be. Your
            students need to develop and prioritize different skills in order
            to thrive in the AI industry.
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
      <div className="card-grid card-grid-featured teacher-feature-cards teacher-feature-row">
        <article className="card card-feature">
          <h2>Student Usage</h2>
          <div className="card-body">
            <p>
              Allowing students to use AI conditionally can be a huge benefit
              for their education.
            </p>
            <p>
              Students need to learn how to effectively use AI to thrive in the
              new job landscape.
            </p>
          </div>
        </article>
        <article className="card card-feature">
          <h2>Teacher Usage</h2>
          <div className="card-body">
            <p>
              As a teacher, you also should begin exploring AI in order to
              share your personal experiences regarding the technology with
              your students. AI can be used to speed up boring processes like
              grading homework.
            </p>
          </div>
        </article>
      </div>
      <div className="card-grid card-grid-featured teacher-feature-cards">
        <article className="card card-feature">
          <h2>AI in the Classroom</h2>
          <div className="card-body">
            <p>
              Set boundaries and guidelines for AI usage in the classroom.
              Students should be exposed to AI and learn how to use this
              technology appropriately.
            </p>
            <p>
              In order for students to succeed, they need to learn how to solve
              problems both with and without access to AI. Exposing students to
              the right amount of AI will give them valuable experience
              regarding the technology while also ensuring their critical
              thinking development.
            </p>
          </div>
        </article>
      </div>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Pros and Cons of AI bans</h2>
          <p className="section-lede">
            Many school districts around the world have implemented policies
            banning the use of generative AI. Banning can feel like a safe and
            easy option, but is it the best solution?
          </p>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Pros</h3>
            <ul>
              <li>Easy to implement</li>
              <li>Ensures that students learn actual knowledge</li>
              <li>Helps prevent abusive use of AI</li>
              <li>Protects innovation and thinking skills</li>
            </ul>
          </article>
          <article className="card">
            <h3>Cons</h3>
            <ul>
              <li>Students fail to get exposure to how to use AI</li>
              <li>
                Students who can't use AI as a tool will fall behind others who
                can
              </li>
              <li>Fails to prepare students for the job industry</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">The Solution</h2>
          <p className="section-lede">
            With all the rapid technological development that's currently
            happening, accessibility of digital resources has greatly
            increased. But these digital tools aren't always harmful. In order
            for students to learn how to most effectively utilize them, schools
            need to step in.
          </p>
          <p className="section-lede">
            Starting from a young age, teachers need to structure classes that
            integrate AI. Schools should teach what AI is, its applications,
            its limits, and how and when students should use it.
          </p>
        </div>
        <div className="card-grid card-grid-featured card-grid-stack solution-cards">
          <article className="card card-feature">
            <div className="solution-card-body">
              <p>
                Adding an AI-focused class can be extremely beneficial for
                students. This class aims to educate students on how they
                should use AI to further their education. Salman Khan, CEO of
                Khan Academy, believes that using AI as a personal tutor can
                help them understand difficult principles,
                learn content ahead of the curriculum, and review content that
                they struggled with. If students are exposed to AI and know
                how to use it effectively, they'll be better prepared to
                succeed in college and beyond.
              </p>
            </div>
          </article>
          <article className="card card-feature">
            <div className="solution-card-body">
              <p>
                While AI exposure is important, ensure that students don't
                abuse AI. Research from MIT professors has shown that consistent, repetitive use
                of AI can damage critical thinking skills. Students need to
                develop their thinking and small everyday tasks help them do
                so. If they begin to use AI to do everything, then their
                innovation skills will be severely underdeveloped. Having
                classrooms full of students whose thinking is wired into AI
                can be harmful as it leads to a severe reduction in our
                diversity of thought.
              </p>
            </div>
          </article>
          <article className="card card-feature">
            <div className="solution-card-body">
              <p>
                The future is bright for all students as technology is making
                the world better. AI can be an amazing tool to reduce
                financial barriers, assist in solving unsolved problems, and
                make life easier in general. If students learn how to use this
                tool to its maximum potential, they will be well-prepared to
                succeed in the new world.
              </p>
            </div>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Teachers
