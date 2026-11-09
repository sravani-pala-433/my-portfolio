import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download, ArrowRight, Database, Workflow, Layers3, Code2 } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', type: 'AI PRODUCT · BACKEND SYSTEMS', title: 'Startup validation, made more rigorous.',
    name: 'AI-Powered Startup Validation & Mentorship Platform', slug: 'axiora-pulse',
    summary: 'Backend APIs and AI-driven report generation for a platform that evaluates startup ideas through coordinated AI agents.',
    tags: ['FastAPI', 'PostgreSQL', 'Agentic workflows'],
    diagram: ['FOUNDER INPUT', 'IDEA ANALYSIS', 'AI AGENTS', 'EVALUATION REPORT'],
    detail: 'Built backend APIs for an agentic platform that analyzes founders’ ideas and produces structured evaluation reports. The work focused on API design, questionnaire workflows, persistence, and report generation.'
  },
  {
    number: '02', type: 'FINTECH · DATA ENGINEERING', title: 'Turning financial records into useful signals.',
    name: 'Financial Data Management Platform', slug: 'financial-data',
    summary: 'A financial data system that ingests statements, categorizes transactions, and supports budgeting and net-worth insights.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'AWS S3'],
    diagram: ['PDF / EXCEL', 'INGESTION', 'CLASSIFICATION', 'FINANCIAL INSIGHTS'],
    metrics: [{ value: '1,000+', label: 'records per upload' }, { value: '1,200+', label: 'transactions analyzed' }, { value: '20+', label: 'database tables' }],
    detail: 'Developed APIs using a Controller–Service–Repository pattern, optimized bulk processing, designed normalized database schemas, and secured asynchronous uploads using AWS S3 presigned URLs.'
  },
  {
    number: '03', type: 'REAL-TIME · APPLIED AI', title: 'A moderator built around research goals.',
    name: 'AI-Powered Chat Moderator System', slug: 'ai-moderator',
    summary: 'A real-time, research-driven chat moderator where admins define study objectives and AI instructions.',
    tags: ['Python', 'LLM integration', 'WebSockets'],
    diagram: ['STUDY BRIEF', 'MODERATOR RULES', 'LIVE CONVERSATION', 'RESEARCH SIGNALS'],
    detail: 'Built a chat moderation experience in which administrators configure research objectives and instructions, while participants interact using text, image, or voice.'
  },
  {
    number: '04', type: 'NLP · SEMANTIC ANALYSIS', title: 'Finding structure in unstructured feedback.',
    name: 'Text Embedding and Semantic Analysis Tool', slug: 'text-analysis',
    summary: 'A pipeline that embeds comments, clusters related ideas, and explores results in an interactive 3D space.',
    tags: ['Sentence Transformers', 'Embeddings', 'Semantic search'],
    diagram: ['COMMENTS', 'EMBEDDINGS', 'CLUSTERS', '3D EXPLORER'],
    detail: 'Built an embedding and clustering pipeline for user-uploaded comments across topics, with interactive 3D visualization and filtering by user attributes.'
  }
];

const skillGroups = [
  ['01 / BUILD', 'Languages & frameworks', 'Python, FastAPI, Pydantic'],
  ['02 / MODEL', 'Data & persistence', 'PostgreSQL, SQLAlchemy, AWS S3'],
  ['03 / CONNECT', 'Interfaces & protocols', 'REST APIs, HTTP, WebSockets'],
  ['04 / EXPLORE', 'AI & language systems', 'OpenAI, Gemini, Hugging Face, Perplexity, prompt engineering, embeddings, semantic search, agentic workflows'],
  ['05 / SHIP', 'Tools & delivery', 'Docker, AWS EC2, Git, Postman, Jira'],
  ['06 / VERIFY', 'Testing', 'pytest, MagicMock, unit testing']
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <a className="wordmark" href="#top" onClick={close}>SP<span>—</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav open' : 'nav'}>
      {['Work', 'Experience', 'About', 'Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={close}>{x}</a>)}
      <a className="nav-cta" href="mailto:sravanipala433@gmail.com" onClick={close}>Let’s talk <ArrowUpRight size={14}/></a>
    </nav>
  </header>;
}

function Project({ project, index }) {
  return <article className={`project project-${index+1}`}>
    <div className="project-topline"><span>{project.number} / SELECTED WORK</span><span>{project.type}</span></div>
    <div className="project-grid">
      <div className="project-copy">
        <p className="eyebrow">{project.slug}</p>
        <h3>{project.title}</h3>
        <p className="project-name">{project.name}</p>
        <p className="project-summary">{project.summary}</p>
        <p className="project-detail">{project.detail}</p>
        <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
      <div className="project-visual" aria-label="Illustrative system flow">
        <div className="visual-caption">SYSTEM FLOW <span>— CONCEPTUAL</span></div>
        <div className="flow-stack">{project.diagram.map((d,i) => <React.Fragment key={d}>
          <div className="flow-node"><span>0{i+1}</span>{d}</div>
          {i !== project.diagram.length-1 && <div className="flow-connector"><i/></div>}
        </React.Fragment>)}</div>
        <div className="visual-foot"><span>ENGINEERING NOTES</span><span>FIG. {project.number}</span></div>
      </div>
    </div>
    {project.metrics && <div className="metrics">{project.metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>}
  </article>;
}

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div id="top">
    <Header/>
    <main>
      <section className="hero page-wrap">
        <div className="hero-meta"><span>SOFTWARE ENGINEER</span><span>HYDERABAD, INDIA · OPEN TO OPPORTUNITIES</span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">BACKEND ENGINEERING / APPLIED AI</p>
            <h1>Building the<br/><em>systems</em> behind<br/>good ideas<span className="period">.</span></h1>
            <p className="hero-intro">I’m Sravani — a backend engineer working across APIs, data systems, and practical AI integrations. I care about making complex workflows dependable, clear, and useful.</p>
            <div className="hero-actions">
              <a className="button-dark" href="#work">Explore selected work <ArrowDownRight size={16}/></a>
              <a className="text-link" href="/sravani-pala-resume.pdf" download>Download résumé <Download size={15}/></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-index">FIELD NOTES / 2026</div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="art-core"><span>API</span><i>↗</i></div>
            <div className="art-label label-a">DATA<br/>MODELS</div>
            <div className="art-label label-b">AI<br/>SYSTEMS</div>
            <div className="art-label label-c">RELIABLE<br/>SOFTWARE</div>
            <div className="art-foot">THOUGHTFUL BY DESIGN<br/>BUILT TO WORK</div>
          </div>
        </div>
        <div className="hero-bottom"><span>02 YEARS OF BUILDING</span><span>PYTHON · FASTAPI · POSTGRESQL · LLMs</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="intro-band">
        <div className="page-wrap intro-band-inner"><span className="section-index">01 — APPROACH</span><p>Good backend engineering is often invisible.<br/><em>Its impact shouldn’t be.</em></p><span className="band-note">APIs / DATA / SYSTEMS</span></div>
      </section>

      <section id="work" className="work-section page-wrap section-pad">
        <div className="section-heading reveal"><div><span className="section-index">02 — SELECTED WORK</span><h2>Problems worth<br/><em>solving well.</em></h2></div><p>A selection of systems I’ve contributed to — from financial data pipelines to AI-assisted products.</p></div>
        {projects.map((p,i) => <Project key={p.slug} project={p} index={i}/>)}
      </section>

      <section id="experience" className="experience-section section-pad">
        <div className="page-wrap">
          <div className="section-heading reveal"><div><span className="section-index">03 — EXPERIENCE</span><h2>Where I’ve<br/><em>made things work.</em></h2></div><p>Building reliable product foundations with a focus on backend architecture, data processing, and quality.</p></div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-date">JUN 2026 — PRESENT<br/><span>HYDERABAD · REMOTE</span></div>
              <div><p className="eyebrow">BACKEND DEVELOPER · CONTRACT</p><h3>SRYTAL Systems India Pvt. Ltd.</h3><ul><li>Built REST APIs for interactive questionnaire management and PDF/Doc report generation within an agentic AI platform using FastAPI and PostgreSQL.</li><li>Wrote pytest unit tests achieving 90% coverage across contributed modules.</li></ul></div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-date">AUG 2024 — MAR 2026<br/><span>VISAKHAPATNAM · ONSITE</span></div>
              <div><p className="eyebrow">SOFTWARE ENGINEER</p><h3>Prodify Software Solutions LLP</h3><ul><li>Developed FastAPI REST APIs using the Controller–Service–Repository pattern, processing 1,000+ Excel and PDF financial records per upload.</li><li>Built an LLM-powered transaction categorization workflow for 1,200+ transactions.</li><li>Designed normalized PostgreSQL schemas across 20+ tables, optimized indexing, and implemented secure AWS S3 presigned uploads.</li><li>Collaborated through Jira sprints and maintained OpenAPI/Swagger specifications.</li></ul></div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="about-section page-wrap section-pad">
        <div className="about-left reveal"><span className="section-index">04 — A LITTLE ABOUT ME</span><h2>Curious about<br/>what happens<br/><em>under the hood.</em></h2></div>
        <div className="about-right reveal"><p className="about-lead">I’m a software engineer with a backend-first mindset and a growing focus on applied AI.</p><p>My work spans API development, relational data modeling, asynchronous file workflows, bulk processing, and LLM-powered features. I enjoy understanding a problem end to end — then shaping the backend systems that make the experience possible.</p><p>I value clear contracts, maintainable code, thoughtful data design, and tests that give a team confidence to ship.</p>
          <div className="education"><span className="eyebrow">EDUCATION</span><div><strong>B.Tech · Electronics & Communication Engineering</strong><span>Gayatri Vidya Parishad College of Engineering for Women · 2021–2024 · CGPA 8.13</span></div><div><strong>Diploma · Electronics & Communication Engineering</strong><span>Government Polytechnic for Women, Bheemunipatnam · 2018–2021 · CGPA 8.9</span></div></div>
          <div className="certs"><span className="eyebrow">CERTIFICATIONS</span><p>Google Data Analytics · Coursera<br/>Prompt Engineering · AWS Skill Builder</p></div>
        </div>
      </section>

      <section className="skills-section section-pad">
        <div className="page-wrap"><div className="skills-head"><span className="section-index">05 — TOOLKIT</span><h2>Tools of the <em>trade.</em></h2></div>
          <div className="skills-grid">{skillGroups.map(([n,title,items]) => <div className="skill-row" key={n}><span className="skill-number">{n}</span><h3>{title}</h3><p>{items}</p></div>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section page-wrap">
        <span className="section-index">06 — CONTACT</span>
        <div className="contact-main"><h2>Have a good<br/><em>problem to solve?</em></h2><a className="contact-email" href="mailto:sravanipala433@gmail.com">Let’s talk <ArrowUpRight/></a></div>
        <div className="contact-bottom"><div><span>EMAIL</span><a href="mailto:sravanipala433@gmail.com">sravanipala433@gmail.com</a></div><div><span>PHONE</span><a href="tel:+916281157116">+91 62811 57116</a></div><div><span>LOCATION</span><p>Hyderabad, India</p></div></div>
      </section>
    </main>
    <footer className="footer page-wrap"><a className="wordmark" href="#top">SP<span>—</span></a><span>DESIGNED WITH INTENTION · © 2026 SRAVANI PALA</span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
