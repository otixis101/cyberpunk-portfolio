"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "tunnel-crypto",
      title: "Tunnel Crypto",
      description: "Web Application used without creating an account to swap, buy and sell cryptocurrencies in a secure and seamless way.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Typescript", "LocalRamp"],
      category: "web",
    },
    {
      id: "tunnel-moon",
      title: "Tunnel Moon",
      description: "Web Application used Launching Solana-based token powered by moonshot",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Web3", "Typescript", "Moonshot", "Dexscreener" ],
      category: "crypto",
    },
    {
      id: "kloth-ware",
      title: "Kloth Ware",
      description: "Eccomerce Web Application platform for a clothing brands",
      image: "/images/kloth-ware.png",
      technologies: ["Next.js", "Typescript", "Redux", "Sanity", "Stripe" ],
      category: "web",
    },
    {
      id: "peer-peer",
      title: "Peer-Peer",
      description: "A Crypto P2P Trading platform for making safe and seemless transactions between users",
      image: "/images/peer-peer.png",
      technologies: ["Next.js", "Next-Auth", "Typescript", "Redux", "Prisma", "Postgresql" ],
      category: "crypto",
    },
    {
      id: "shippee",
      title: "Shippee",
      description: "Shipment Tracking Web Application platform for logistics services",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Typescript", "Redux", "Prisma", "Postgresql" ],
      category: "web",
    },
    {
      id: "crypto-dashboard",
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with customizable widgets and alerts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "WebSockets", "Chart.js"],
      category: "web",
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description: "Conversational AI assistant with natural language processing and machine learning capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "NLP", "TensorFlow"],
      category: "ai",
    },
    {
      id: "#",
      title: "Blockchain Explorer",
      description: "Tool for visualizing and exploring blockchain transactions and smart contracts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Ethers.js", "GraphQL"],
      category: "blockchain",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "crypto", name: "web3" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "blockchain", name: "Blockchain" },
    // { id: "ar", name: "AR/VR" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
