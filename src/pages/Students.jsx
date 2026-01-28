function Students() {
  return (
    <section className="page-stack">
      <div className="page-hero">
        <div className="page-hero__text section-header">
          <p className="eyebrow">For Students</p>
          <h1>Effectively Navigate Education.</h1>
          <p className="lede">
            We understand that education is a stressful process. The steps you
            take now can determine your future so you need to carefully decide
            what those are. AI exists as a tool and it has great potential to
            make your life easier. The AI Ethics Guide exists to help you
            navigate AI usage to further your education so you can achieve your
            greatest potential.
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
          <h2>Importance</h2>
          <p>
            As AI continues to develop, it is more important than ever for you
            to be exposed to this technology and understand what it's capable
            of.
          </p>
        </article>
        <article className="card">
          <h2>Pitfalls</h2>
          <p>
            Using AI to do your homework and exams for you seems like a cheat
            code. But at the end of day, the score shouldn't be what you're
            aiming for. The knowledge and growth are far more important.
          </p>
        </article>
        <article className="card">
          <h2>Solution</h2>
          <p>
            Learn what AI is and how to use it. But make sure that you still
            remember how to think and solve your own problems. Don't form a
            dependancy on this technology.
          </p>
        </article>
      </div>
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Industries and skills shaped by AI</h2>
          <p className="section-lede">
            You may have heard rumors that AI is going to completely replace
            all human labor. These rumors are completely false. According to a
            report by McKinsey & Company, AI is expect to create over 20 million
            jobs globally by 2030. The job market is being destroyed, but also
            developed. Jobs are changing and the skills you need to grow are
            shifting too. Learn what aspects of education matter the most for
            whichever field you intend to pursue.
          </p>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Computer Science and Engineering</h3>
            <p>
              AI is reshaping how software is built, tested, and secured, so
              strong fundamentals and critical thinking matter more than ever.
            </p>
          </article>
          <article className="card">
            <h3>Medicine and Healthcare</h3>
            <p>
              AI supports diagnostics and research, but human judgment and
              ethics still guide decisions.
            </p>
          </article>
          <article className="card">
            <h3>Business</h3>
            <p>
              Automation helps with analysis and drafting, while creativity and
              leadership remain human strengths.
            </p>
          </article>
          <article className="card">
            <h3>Art and Design</h3>
            <p>
              AI can generate ideas quickly, yet originality and taste still
              come from human creators.
            </p>
          </article>
        </div>
      </section>
      <section className="section-block section-block-compact">
        <div className="section-header">
          <h2 className="section-title">Input tips on how to use AI</h2>
          <p className="section-lede">
            AI is a tool that can help improve your education and support your
            growth journey. Follow these tips to effectively use this
            technology
          </p>
        </div>
        <ul className="checklist checklist-long">
          <li>
            It&apos;s critical that you don&apos;t rely too much on AI as you never
            know if the technology will always be there. And don&apos;t doubt
            yourself, your work can be just as good if not better than that of
            generative AI. Redmond High School CSA teacher Mr. Methvin said that
            most students are under the false impression that AI is always
            right. Make sure to fact check the responses because AI is only as
            good as information it&apos;s trained from. It&apos;s just as prone to
            make errors as normal people are
          </li>
          <li>
            Using generative AI as a personal tutor can be both rewarding and
            risky. The information it gives might not be accurate so it&apos;s
            not recommended to depend on it for your learning. However, it can
            be a very helpful tool if you&apos;re struggling to solve a single
            problem. Just make sure you actually understand what you&apos;re
            trying to solve and make sure you can solve the next problem without
            AI&apos;s help. AI can also be a strong tool when it comes to
            recommending reliable resources.
          </li>
          <li>
            Here are some of the most practical ways for students to effectively
            utilize AI: asking AI to review writing, asking AI to debug code,
            asking AI to summarize long readings, using AI to help plan out a
            schedule. Notice how these all center around using AI to speed up
            or check things you already know how to do. If you&apos;re asking AI
            to look at something you don&apos;t understand, you have no way of
            making sure whether AI is actually giving out accurate information
          </li>
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
              Test your understanding of ethical AI use with a short quiz.
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
