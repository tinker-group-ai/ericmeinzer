import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 py-24 px-6 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            I build AI-native products
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Automation systems. Agent architecture. Products that think. I've spent years building with AI at the core—from distributed agent networks to intelligent automation frameworks. This is what I know.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              See what I've built
            </a>
            <a
              href="mailto:tinker.group.ai@gmail.com"
              className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Let's talk
            </a>
          </div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="border-b border-gray-200 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What I've built</h2>

          <div className="space-y-12">
            {/* Project 1: OpenClaw */}
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-2">OpenClaw</h3>
              <p className="text-gray-600 mb-4">
                Agent infrastructure for building autonomous systems. Built a runtime for deploying, orchestrating, and managing AI agents across distributed networks. Includes local-first execution, multi-provider LLM support, and real-time observability.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Agent Architecture</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Go/TypeScript</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Infrastructure</span>
              </div>
            </div>

            {/* Project 2: Agent Skills */}
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-2">Agent Skills Framework</h3>
              <p className="text-gray-600 mb-4">
                Modular skill system for AI agents. Built a composable framework that lets agents dynamically load and execute specialized tools—from GitHub automation to Google Workspace integration. Focus on developer experience and declarative skill definitions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Framework Design</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Developer Tools</span>
              </div>
            </div>

            {/* Project 3: Automation */}
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-2">AI-Driven Automation</h3>
              <p className="text-gray-600 mb-4">
                End-to-end automation systems that bridge AI and real work. Built pipelines that intelligently handle GitHub issues, PR reviews, email workflows, and calendar management. Real-world agent orchestration—not just theory.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Automation</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">API Integration</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I can do */}
      <section className="border-b border-gray-200 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What I can do for you</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">AI Product Development</h3>
              <p className="text-gray-600">
                Build intelligent products from the ground up. Architecture, implementation, and deployment of AI-native systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Agent Architecture & Automation</h3>
              <p className="text-gray-600">
                Design and build agent networks. Intelligent automation systems. Multi-agent orchestration and coordination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Technical Leadership</h3>
              <p className="text-gray-600">
                Fractional CTO / Technical Advisor. Help teams make better technical decisions. Build sustainable systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">System Design & Engineering</h3>
              <p className="text-gray-600">
                Clean architecture. Scalable systems. Infrastructure that doesn't become a liability in 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Let's build something smart together.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/tinker-group-ai"
              className="text-gray-600 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ericmeinzer"
              className="text-gray-600 hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tinker.group.ai@gmail.com"
              className="text-gray-600 hover:text-black transition"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026. Building.
          </p>
        </div>
      </section>
    </div>
  );
}
