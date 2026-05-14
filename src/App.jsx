import { Analytics } from '@vercel/analytics/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Mail,
  Moon,
  MousePointer2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  TerminalSquare,
  Zap,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import './styles.css';

const projects = [
  {
    title: 'Lineage and Legacy Application',
    eyebrow: 'Interactive archive',
    summary:
      'A polished full-stack digital archive that turns family records and founder stories into a navigable product experience.',
    impact: ['Narrative UX', 'Structured heritage data', 'Vercel delivery'],
    href: 'https://lineage-tree.vercel.app/',
    stack: ['Full-stack', 'Vercel', 'Data visualization', 'Product UX'],
    icon: Layers3,
  },
  {
    title: 'ApplyFlow AI',
    eyebrow: 'AI workflow automation',
    summary:
      'A cloud-native AI orchestration platform for document analysis, job-application workflows, and automated decision support.',
    impact: ['FastAPI inference engine', 'Node.js automation', 'AWS ECS/Fargate'],
    href: 'http://ec2-100-25-148-154.compute-1.amazonaws.com/',
    stack: ['FastAPI', 'Node.js', 'TypeScript', 'Docker', 'AWS ECS'],
    icon: BrainCircuit,
  },
  {
    title: 'Veris',
    eyebrow: 'Multi-tenant B2B SaaS',
    summary:
      'A white-label sustainability compliance platform for consultancies delivering assessments across clients, organizations, and sites.',
    impact: ['Tenant-aware RBAC', 'Evidence workflows', 'Continuous monitoring'],
    href: 'http://ec2-18-232-192-212.compute-1.amazonaws.com/',
    stack: ['Django', 'React Router v7', 'PostgreSQL', 'Docker', 'RBAC'],
    icon: ShieldCheck,
  },
];

const roles = [
  {
    period: '2024–2025',
    company: 'Athena',
    title: 'Platform Engineer',
    text: 'Node.js integrations, HubSpot/CRM automation, serverless GCP pipelines, Pub/Sub workflows, monitoring, stakeholder documentation, and code review.',
  },
  {
    period: '2022–2023',
    company: 'TDi Sustainability',
    title: 'Software Engineer',
    text: 'Python, Docker, AWS EKS/RDS, GitLab CI/CD, Nginx, responsive frontend delivery, deployment automation with Ansible, pytest/MyPy quality gates.',
  },
  {
    period: '2021–2022',
    company: 'I&M Bank Group',
    title: 'Frontend Engineer',
    text: 'Customer-facing banking UI in a regulated fintech environment, Agile delivery with product/UX, Backbase ramp-up under tight timelines.',
  },
  {
    period: '2018–2021',
    company: 'GoodInfo, Voyage Control, Andela',
    title: 'Software Engineer / Associate Software Engineer',
    text: 'React, GraphQL/REST integrations, Django APIs, Angular features, Celery workflows, database optimization, mentoring, and code review improvement.',
  },
];

const capabilities = [
  { title: 'Backend systems', icon: TerminalSquare, text: 'Python, Django, FastAPI, Node.js, REST APIs, GraphQL, auth, RBAC, tenant-aware architecture.' },
  { title: 'Frontend craft', icon: Code2, text: 'React, React Router, Angular, TypeScript, accessible components, responsive UI, performance optimization.' },
  { title: 'Data + AI', icon: Bot, text: 'PostgreSQL, SQL, Pinecone, retrieval workflows, structured AI outputs, provider-agnostic orchestration.' },
  { title: 'Cloud delivery', icon: Cloud, text: 'AWS, GCP Cloud Functions/Pub/Sub, Docker, Linux, Nginx, Ansible, CI/CD, pytest, MyPy.' },
];

const proof = [
  { value: '6+', label: 'years shipping production systems', icon: BriefcaseBusiness },
  { value: '4', label: 'domains: fintech, sustainability, logistics, AI', icon: Sparkles },
  { value: 'Full-stack', label: 'from product UI to cloud infrastructure', icon: Rocket },
];



function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function MagneticCard({ children, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(1);
  const [theme, setTheme] = useState(getInitialTheme);
  const selectedProject = projects[activeProject];
  const SelectedIcon = selectedProject.icon;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const floatingTags = useMemo(
    () => ['React', 'FastAPI', 'Django', 'AWS', 'GCP', 'PostgreSQL', 'TypeScript', 'AI workflows'],
    [],
  );

  return (
    <>
      <div className="noise" />
      <motion.div
        className="cursor-glow"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <header className="site-header">
        <nav className="shell nav-shell">
          <a href="#top" className="brand" aria-label="Allan Imire CV home">
            <motion.span
              className="brand-mark"
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 340, damping: 18 }}
            >
              <img src="/images/allan-profile-avatar.webp" alt="Allan Imire" />
              <span className="brand-orbit" aria-hidden="true" />
            </motion.span>
            <span>
              <strong>Allan Imire</strong>
              <small>senior software engineer / ai systems / cloud platforms</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Stack</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
                </span>
              </span>
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
            <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View CV <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="shell hero">
          <div className="hero-copy">
            <motion.div
              className="status-pill"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Zap size={15} /> Available for senior engineering, platform, and AI product work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              I build production software that feels like a product, not a prototype.
            </motion.h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              Senior full-stack engineer across backend, frontend, cloud, and AI-assisted workflows. I design systems, ship quickly, and keep architecture clean enough to scale.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <a className="button primary" href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Download size={18} /> Download CV
              </a>
              <a className="button" href="mailto:allanimire@gmail.com" target="_blank">
                <Mail size={18} /> Contact me
              </a>
              <a className="button ghost" href="https://github.com/imireallan" target="_blank" rel="noopener noreferrer">
                <Code2 size={18} /> GitHub
              </a>
              <a className="button ghost" href="https://www.linkedin.com/in/allanimire/" target="_blank" rel="noopener noreferrer">
                <BriefcaseBusiness size={18} /> LinkedIn
              </a>
            </motion.div>

            <div className="proof-grid" aria-label="Engineering proof points">
              {proof.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="proof-card"
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.32 + index * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <Icon size={20} />
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="hero-visual">
            <MagneticCard className="cv-stage">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>resume-preview.png</small>
              </div>
              <a className="cv-preview-link" href="/resume.pdf" aria-label="Open Allan Imire resume PDF" target="_blank" rel="noopener noreferrer">
                <img className="cv-preview" src="/resume-preview.png" alt="Full-page preview of Allan Imire's resume" />
              </a>
              <div className="cv-actions">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><FileText size={17} /> Open PDF</a>
                <a href="/resume.md" target="_blank" rel="noopener noreferrer"><Code2 size={17} /> Markdown</a>
              </div>
            </MagneticCard>

            <div className="floating-tags" aria-hidden="true">
              {floatingTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 10 : -10, 0] }}
                  transition={{ opacity: { delay: 0.45 + index * 0.05 }, y: { duration: 4 + index * 0.15, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section" id="work">
          <div className="section-head">
            <span><MousePointer2 size={16} /> Interactive work selector</span>
            <h2>Selected production work</h2>
            <p>Click through the cards. Each project highlights the product shape, engineering surface area, and delivery proof.</p>
          </div>

          <div className="project-lab">
            <div className="project-tabs" role="tablist" aria-label="Selected projects">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const active = activeProject === index;
                return (
                  <button
                    className={`project-tab ${active ? 'active' : ''}`}
                    key={project.title}
                    onClick={() => setActiveProject(index)}
                    type="button"
                    role="tab"
                    aria-selected={active}
                  >
                    <Icon size={20} />
                    <span>{project.title}</span>
                    {active && <motion.i layoutId="active-tab" />}
                  </button>
                );
              })}
            </div>

            <motion.article
              className="project-showcase"
              key={selectedProject.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="showcase-icon"><SelectedIcon size={28} /></div>
              <span className="eyebrow">{selectedProject.eyebrow}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.summary}</p>
              <ul>
                {selectedProject.impact.map((point) => (
                  <li key={point}><CheckCircle2 size={17} /> {point}</li>
                ))}
              </ul>
              <div className="tags">
                {selectedProject.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <a className="project-link" href={selectedProject.href} target="_blank" rel="noopener noreferrer">
                View live project <ExternalLink size={17} />
              </a>
            </motion.article>
          </div>
        </section>

        <section className="shell section" id="experience">
          <div className="section-head compact">
            <span><BriefcaseBusiness size={16} /> Work history</span>
            <h2>Production roles, not toy projects.</h2>
          </div>
          <div className="timeline">
            {roles.map((role, index) => (
              <motion.article
                className="role-card"
                key={`${role.company}-${role.period}`}
                initial={false}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="role-date">{role.period}</div>
                <div>
                  <span>{role.company}</span>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="shell section" id="stack">
          <div className="section-head">
            <span><Database size={16} /> System surface area</span>
            <h2>Core stack</h2>
            <p>Useful across the full product lifecycle: model data, build APIs, ship interfaces, deploy infrastructure, and wire AI where it creates leverage.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="capability-card"
                  key={item.title}
                  initial={false}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                >
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <p>© Allan Imire. Senior Software Engineer · Nairobi, Kenya</p>
          <a href="mailto:allanimire@gmail.com">allanimire@gmail.com</a>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
