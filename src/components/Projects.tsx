import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, X, Sparkles, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { CircularTestimonials, Testimonial } from '@/components/ui/circular-testimonials';
import { BorderBeam } from '@/components/ui/border-beam';
import { TechToolPill } from './TechToolPill';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Top 3 Featured Projects configured for the CircularTestimonials 3D Carousel
  const featuredProjects: Testimonial[] = [
    {
      name: 'CareBridge',
      designation: 'Healthcare AI Workflow Platform',
      quote: 'AI-powered healthcare workflow platform to manage patient follow-ups with AI agents and a SaaS dashboard.',
      badge: 'Featured Project',
      src: '/src/assets/images/carebridge_ui_1791121502103.jpg',
      tags: ['Python', 'AI Agents', 'RAG', 'n8n', 'React', 'PostgreSQL'],
      features: [
        'Automated patient follow-ups using AI agents',
        'Multi-channel support (WhatsApp & IVR)',
        'SaaS dashboard for hospitals',
        'Scalable and secure architecture',
      ],
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      projectUrl: '#',
    },
    {
      name: 'Agentic Swarm Orchestrator',
      designation: 'Autonomous Multi-Agent AI Framework',
      quote: 'Multi-agent orchestration platform coordinating autonomous planning, tool execution, web search grounding, and self-evaluating Python code synthesis.',
      badge: 'Featured AI System',
      src: '/src/assets/images/agentic_ai_ui_1791121520902.jpg',
      tags: ['Python', 'LangGraph', 'LLMs', 'FastAPI', 'ChromaDB'],
      features: [
        'Hierarchical supervisor-worker agent delegation pattern',
        'Persistent state serialization with execution rewind',
        'Dynamic tool calling with sandboxed evaluation',
        'Sub-second agent coordination latency',
      ],
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      projectUrl: '#',
    },
    {
      name: 'Cognitive RAG Retrieval Core',
      designation: 'High-Throughput Semantic Knowledge Engine',
      quote: 'Production-ready semantic search engine featuring hybrid dense vector and BM25 sparse search with cross-encoder reranking and zero hallucinations.',
      badge: 'Featured Data Architecture',
      src: '/src/assets/images/rag_search_ui_1791121539019.jpg',
      tags: ['Python', 'PyTorch', 'Qdrant', 'HuggingFace', 'FastAPI'],
      features: [
        'Reciprocal rank fusion (RRF) combining dense & sparse search',
        'Cross-encoder reranking for precision relevancy filtering',
        'In-memory semantic vector cache cutting redundant calls by 42%',
        'Sub-80ms p95 latency on 1M+ document collections',
      ],
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      projectUrl: '#',
    },
  ];

  // 6 Other Projects in the clean responsive grid (bringing total to 9 projects)
  const otherProjects: ProjectItem[] = [
    {
      id: 'pillcarex',
      title: 'PillCareX',
      category: 'Healthcare & AI',
      description: 'Medication adherence platform with prescription reader and side-effect coach.',
      longDescription: 'PillCareX is an intelligent patient support platform designed to ensure strict medication compliance. Utilizes optical character recognition (OCR) and vision-language models to extract dosage instructions from medical prescriptions, followed by an automated AI coach offering side-effect guidance and timely WhatsApp intake reminders.',
      tags: ['Python', 'RAG', 'OCR', 'LLM'],
      metrics: '92% adherence compliance rate · 10,000+ doses scheduled',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'Automated prescription parsing via multi-modal OCR',
        'Drug-to-drug side effect contraindication checker',
        'Automated intake reminders with escalation alerts',
      ],
    },
    {
      id: 'healthcare-chatbot',
      title: 'Healthcare Chatbot',
      category: 'Vernacular AI & Telephony',
      description: 'Multilingual disease information chatbot for rural India with WhatsApp and IVR support.',
      longDescription: 'Engineered an accessible public health intelligence tool catering to rural and non-English speaking demographics across India. Integrated with Twilio for interactive voice response (IVR) phone calls, WhatsApp business APIs, and speech-to-text engines in regional dialects.',
      tags: ['Python', 'Rasa', 'Twilio', 'Docker'],
      metrics: '5 Indian languages supported · 15,000+ queries resolved',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'Dialect-aware conversational flow with speech synthesis',
        'Offline-first SMS and automated toll-free IVR fallback',
        'Symptom triage directing urgent cases to nearby clinics',
      ],
    },
    {
      id: 'aruna-oils',
      title: 'Aruna Cooking Oils',
      category: 'E-Commerce Platform',
      description: 'E-commerce platform with product catalog, payments, order tracking and admin dashboard.',
      longDescription: 'Complete direct-to-consumer e-commerce infrastructure built for a cold-pressed organic cooking oils brand. Features a responsive customer storefront, automated inventory alerts, dual Indian (Razorpay/UPI) and international (Stripe) payment gateways, and a logistics tracking dashboard.',
      tags: ['Next.js', 'Razorpay', 'Stripe', 'PostgreSQL'],
      metrics: '99.98% checkout success rate · Sub-2s page loads',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'Unified checkout handling UPI, cards, and net-banking',
        'Live inventory tracking with automated distributor orders',
        'Granular analytics dashboard with sales breakdown',
      ],
    },
    {
      id: 'capacity-connect',
      title: 'Capacity Connect',
      category: 'EdTech & Enterprise',
      description: 'Digital capacity building and learning management portal for training and competency development.',
      longDescription: 'Enterprise portal engineered for organizational learning, workforce upskilling, and skill gap assessment. Features role-based access control (RBAC), customized training pathway assignments, verifiable digital certification generation, and interactive progress analytics.',
      tags: ['Next.js', 'PostgreSQL', 'RBAC', 'AI'],
      metrics: '3,500+ active learners · Multi-tenant institutional portal',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'Multi-tenant architecture with custom branding for institutions',
        'Granular role-based permissions (Instructors, Admins, Trainees)',
        'Automated competency testing with verifiable certificates',
      ],
    },
    {
      id: 'neural-vision-edge',
      title: 'Neural Vision Core',
      category: 'Computer Vision & Edge',
      description: 'Real-time multi-stream video inference engine with defect classification and edge deployment.',
      longDescription: 'Constructed an ultra-low latency edge computer vision pipeline capable of parallel inference over 16 simultaneous RTSP video streams. Utilizes PyTorch and TensorRT optimizations for defect detection on industrial assembly lines.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'Docker'],
      metrics: '60 FPS inference throughput · 99.1% defect precision',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'TensorRT FP16 quantization achieving sub-16ms latency',
        'Zero-copy frame processing with shared memory ring buffers',
        'Real-time anomaly telemetry over WebSocket dashboards',
      ],
    },
    {
      id: 'finflow-ledger',
      title: 'FinFlow Ledger',
      category: 'FinTech Microservices',
      description: 'Double-entry distributed ledger system with idempotent transactions and audit logging.',
      longDescription: 'Engineered a mission-critical transactional accounting engine supporting ACID compliance and strict idempotency keys. Features transactional outbox patterns, automated balance reconciliation, and comprehensive Kafka event streaming.',
      tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: '12,000 TPS benchmarked · 0 ledger discrepancies',
      githubUrl: 'https://github.com/YASVANTHKUMAR23',
      highlights: [
        'Distributed lock management with Redis Redlock algorithm',
        'Immutable audit event trail with cryptographic hash verification',
        'Automated reconciliation pipelines catching discrepancies',
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-transparent selection:bg-[#2563eb] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header with Smooth GSAP-Style Scrolling Transition */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs sm:text-[13px] uppercase font-bold tracking-[0.2em] text-slate-500">
                PROJECTS
              </span>
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#2563eb] rounded-full inline-block" />
            </div>

            {/* Title: Things I’ve built to solve real problems. */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a0f1c] tracking-tight leading-[1.15]">
              Things I’ve built to solve{' '}
              <span className="text-[#2563eb]">real problems.</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed font-normal">
            A collection of projects where I combine backend engineering, AI and modern interfaces to build practical solutions.
          </p>
        </motion.div>

        {/* Featured Section with 3D CircularTestimonials Component (Smooth GSAP Scroll Transition) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 1.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="bg-[#f8faff] rounded-[28px] sm:rounded-[36px] border border-blue-100/70 p-4 sm:p-8 lg:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] transition-all duration-300">
            <CircularTestimonials
              testimonials={featuredProjects}
              autoplay={true}
              colors={{
                name: '#0a0f1c',
                designation: '#2563eb',
                testimony: '#475569',
                arrowBackground: '#0a0f1c',
                arrowForeground: '#ffffff',
                arrowHoverBackground: '#2563eb',
              }}
              fontSizes={{
                name: '2rem',
                designation: '0.95rem',
                quote: '1.05rem',
              }}
              onSelectProject={(project) => {
                const match = otherProjects.find((p) => p.title.toLowerCase().includes(project.name.toLowerCase()));
                if (match) setSelectedProject(match);
              }}
            />
          </div>
        </motion.div>

        {/* Other Projects Header with Smooth Glide */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-2.5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a0f1c]">
              Other Projects
            </h3>
            <span className="w-8 h-[2.5px] bg-[#2563eb] rounded-full inline-block" />
          </div>
        </motion.div>

        {/* Other Projects Grid with Unhurried Staggered GSAP-Style Keyframes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 1.45,
                delay: (idx % 3) * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Animated BorderBeam accent on card border */}
              <BorderBeam
                size={160}
                duration={12}
                delay={idx * 1.8}
                colorFrom="#2563eb"
                colorTo="#38bdf8"
                borderWidth={1.5}
              />
              <div>
                {/* Project Title */}
                <h4 className="text-xl font-bold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">
                  {project.title}
                </h4>

                {/* Short Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 mb-5 min-h-[48px]">
                  {project.description}
                </p>

                {/* Tech Pills with Logos */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <TechToolPill key={tag} tool={tag} />
                  ))}
                </div>
              </div>

              {/* Action Buttons matching screenshot */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
                {/* View Project Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-[#0a0f1c] hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Project</span>
                  <span className="text-xs">↗</span>
                </button>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-full shadow-xs transition-all flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0f1c] mt-1 mb-3">
              {selectedProject.title}
            </h3>

            <div className="bg-blue-50/60 p-4 rounded-xl mb-5 border border-blue-100">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-0.5">
                Key Performance Impact
              </span>
              <p className="text-sm font-bold text-[#0a0f1c]">{selectedProject.metrics}</p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedProject.longDescription}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
              Engineering Architecture Highlights:
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedProject.highlights.map((h, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <TechToolPill key={t} tool={t} />
                ))}
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0f1c] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Visit Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
