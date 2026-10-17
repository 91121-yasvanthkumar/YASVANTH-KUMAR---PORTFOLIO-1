import React, { useState, useEffect } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, MapPin, Mail, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `
YASVANTH KUMAR
Python Developer & AI Engineer
Location: Tamil Nadu, India
Email: yasvanthkumar2306@gmail.com
GitHub: https://github.com/YASVANTHKUMAR23

SUMMARY:
Results-driven Python Developer and AI Engineer specializing in autonomous multi-agent systems, Retrieval-Augmented Generation (RAG), and high-throughput backend services. Proven capability in translating novel AI capabilities into production-ready software.

CORE SKILLS:
- Languages: Python (Advanced), Java, TypeScript, SQL
- AI/ML: Large Language Models, LangChain, LangGraph, RAG, PyTorch, Hugging Face, Vector Databases (Qdrant, Chroma)
- Backend: FastAPI, Flask, Django, AsyncIO, Celery, Redis, PostgreSQL
- DevOps: Docker, Git, CI/CD, Linux Systems

KEY PROJECTS:
- Agentic Swarm: Autonomous AI research & code self-verification system
- Cognitive RAG Engine: Low-latency semantic search with reciprocal rank fusion
- Neural Vision Core: Real-time edge object tracking and telemetry
- High-Concurrence Python Microservice: Distributed async task pipeline (12k+ req/sec)
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <FileText className="w-4 h-4 text-[#2563eb]" />
            <span>Curriculum Vitae Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0a0f1c] hover:bg-black text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body */}
        <div className="overflow-y-auto pt-6 pr-2 space-y-6 text-slate-700">
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-[#0a0f1c] tracking-tight">Yasvanth Kumar</h1>
            <p className="text-base font-semibold text-[#2563eb] mt-0.5">Python Developer &amp; AI Engineer</p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Tamil Nadu, India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> yasvanthkumar2306@gmail.com
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400" /> github.com/YASVANTHKUMAR23
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Executive Summary</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Innovative Python Developer and AI Engineer with deep expertise in designing autonomous multi-agent frameworks, hybrid RAG knowledge systems, and asynchronous backend microservices. Proven success engineering systems that scale with high reliability and low latency.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Core Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-[#0a0f1c] block mb-1">AI &amp; Machine Learning</span>
                <p className="text-slate-600">LLMs, LangChain, LangGraph, RAG, Prompt Engineering, PyTorch, Hugging Face, Vector DBs (Qdrant, Chroma)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-[#0a0f1c] block mb-1">Python &amp; Back-End</span>
                <p className="text-slate-600">Python 3.12+, FastAPI, Django, Flask, AsyncIO, Celery, Redis, PostgreSQL, REST APIs</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-[#0a0f1c] block mb-1">Languages &amp; Fundamentals</span>
                <p className="text-slate-600">Java (OOP, Algorithms), TypeScript, SQL, Object-Oriented Architecture, System Design</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-[#0a0f1c] block mb-1">DevOps &amp; Infrastructure</span>
                <p className="text-slate-600">Docker, Git &amp; GitHub, Linux Server Environments, CI/CD, Cloud Deployment</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key Engineering Projects</h2>
            <div className="space-y-4 text-xs">
              <div className="border-l-2 border-[#2563eb] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0a0f1c]">Agentic Swarm — Multi-Agent AI Framework</span>
                  <span className="font-mono text-slate-400">Python, LangGraph, LLMs</span>
                </div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Decentralized multi-agent system coordinating research, tool execution, and code verification loops. Achieved 3.8x faster synthesis cycles.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0a0f1c]">Cognitive RAG Retrieval Pipeline</span>
                  <span className="font-mono text-slate-400">Python, PyTorch, Qdrant</span>
                </div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Hybrid semantic search engine utilizing reciprocal rank fusion (RRF) and cross-encoder reranking with sub-80ms p95 latency.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#0a0f1c]">High-Throughput Microservice Task Engine</span>
                  <span className="font-mono text-slate-400">FastAPI, Celery, Redis</span>
                </div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Asynchronous distributed task architecture handling 12k+ requests/sec with exponential backoff and idempotency protection.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Education &amp; Foundations</h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-sm text-[#0a0f1c]">Bachelor of Engineering / Technology</div>
              <p className="text-slate-600">Computer Science &amp; Engineering · Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Official Profile of Yasvanth Kumar</span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF / Print</span>
          </button>
        </div>
      </div>
    </div>
  );
};
