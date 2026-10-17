import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

interface TechSkill {
  name: string;
  category: 'AI & ML' | 'Backend' | 'Frontend' | 'DevOps & Tools';
  level: string;
  iconUrl?: string;
  customIcon?: React.ReactNode;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Exactly 15 prominent skills with official tech stack icons (card-free design)
  const skills: TechSkill[] = [
    {
      name: 'Python',
      category: 'Backend',
      level: 'Advanced · Core Language',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'PyTorch',
      category: 'AI & ML',
      level: 'Deep Learning & Tensors',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    },
    {
      name: 'FastAPI',
      category: 'Backend',
      level: 'Async REST APIs',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    },
    {
      name: 'LangChain & LangGraph',
      category: 'AI & ML',
      level: 'Multi-Agent Workflows',
      customIcon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#0a0f1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      category: 'Backend',
      level: 'Relational & pgvector',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Docker',
      category: 'DevOps & Tools',
      level: 'Containerization',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 'Component Architecture',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      level: 'Full-Stack SSR',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 'Type Safety & Logic',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Redis',
      category: 'Backend',
      level: 'Caching & Celery Queues',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Modern UI & Responsive',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'Git & GitHub',
      category: 'DevOps & Tools',
      level: 'Version Control',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Linux / Bash',
      category: 'DevOps & Tools',
      level: 'Shell & Server Admin',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
    {
      name: 'OpenCV',
      category: 'AI & ML',
      level: 'Computer Vision',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    },
    {
      name: 'LLM & RAG',
      category: 'AI & ML',
      level: 'Vector Search & Grounding',
      customIcon: (
        <svg className="w-10 h-10 text-[#0a0f1c]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.0193 19.818a5.9847 5.9847 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.735-7.0968zM8.7505 5.6802a4.3575 4.3575 0 0 1 7.3756-1.5543l-8.4908 4.9026a1.1444 1.1444 0 0 1-1.1294 0L4.1704 7.6749a4.3414 4.3414 0 0 1 4.5801-1.9947zm-5.719 8.219a4.3592 4.3592 0 0 1 1.7061-7.3323l8.4907 4.9025v2.2573a1.146 1.146 0 0 1-.5647.9782L4.1705 19.5982a4.3404 4.3404 0 0 1-1.139-5.699zm14.6547 5.699a4.3592 4.3592 0 0 1-7.3757 1.5542l8.4908-4.9026a1.1444 1.1444 0 0 1 1.1294 0l2.3355 1.3536a4.3414 4.3414 0 0 1-4.58 1.9948zm5.719-8.219a4.3592 4.3592 0 0 1-1.7062 7.3323l-8.4907-4.9025v-2.2573a1.146 1.146 0 0 1 .5647-.9782l8.4931-4.903a4.3404 4.3404 0 0 1 1.1391 5.6987zm-11.419-5.4627l4.2465-2.4513a4.3575 4.3575 0 0 1 2.8711 7.248l-8.4908-4.9026a1.1444 1.1444 0 0 1 .3743-1.8941zm-1.1294 9.4052l-4.2465 2.4513a4.3575 4.3575 0 0 1-2.8711-7.248l8.4908 4.9026a1.1444 1.1444 0 0 1-.3743 1.8941z"/>
        </svg>
      ),
    },
  ];

  const categories = ['All', 'AI & ML', 'Backend', 'Frontend', 'DevOps & Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-white/80 backdrop-blur-[1px] border-t border-slate-100 selection:bg-[#2563eb] selection:text-white"
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
                SKILLS &amp; TECHNOLOGIES
              </span>
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#2563eb] rounded-full inline-block" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a0f1c] tracking-tight leading-[1.15]">
              Core Tech Stack &amp;{' '}
              <span className="text-[#2563eb]">Specializations.</span>
            </h2>
          </div>

          {/* Filter Pills with motion feedback */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-[#0a0f1c] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Clean, Card-Free Tech Stack Icon Grid with Staggered GSAP-Style Scroll Keyframes */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                transition={{
                  duration: 1.4,
                  delay: (idx % 5) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                className="flex flex-col items-center justify-center text-center p-5 rounded-2xl group cursor-pointer"
              >
                {/* Tech Icon Container */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.15)] group-hover:border-blue-400/80 flex items-center justify-center p-3 transition-all duration-300 relative">
                  {skill.iconUrl ? (
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      {skill.customIcon}
                    </div>
                  )}

                  {/* Subtle ping indicator on hover */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Tech Name */}
                <h4 className="mt-3.5 text-sm sm:text-base font-bold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">
                  {skill.name}
                </h4>

                {/* Sub-label Level */}
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Skill Proficiency Strip with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2563eb]" />
            <span className="font-medium text-slate-700">Specialized in Autonomous AI Agents &amp; Asynchronous Python Backends</span>
          </div>
          <span className="font-mono text-slate-400">15 CORE TECHNOLOGIES</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
