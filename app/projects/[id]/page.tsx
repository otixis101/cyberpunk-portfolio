"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "tunnel-crypto": {
      title: "Tunnel Crypto",
      description: "Web Application used without creating an account to swap, buy and sell cryptocurrencies in a secure and seamless way.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Typescript", "LocalRamp"],
      category: "crypto",
      github: "https://github.com",
      demo: "https://tunnelapp.co",
      longDescription:
        "Web Application used without creating an account to swap, buy and sell cryptocurrencies in a secure and seamless way.",
    },
    "tunnel-moon": {
      title: "Tunnel Moon",
      description: "Web Application used Launching Solana-based token powered by moonshot",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Web3", "Typescript", "Moonshot", "Dexscreener" ],
      category: "web3",
      github: "https://github.com/",
      demo: "https://tunnelmoon.co",
      longDescription:
        "Web Application used Launching Solana-based token powered by moonshot",
    },
    "kloth-ware": {
      title: "Kloth Ware",
      description: "Eccomerce Web Application platform for a clothing brands",
      image: "/images/kloth-ware.png",
      technologies: ["Next.js", "Typescript", "Redux", "Sanity", "Stripe" ],
      category: "web",
      github: "https://github.com/",
      demo: "https://kloth-ware.vercel.app",
      longDescription:
        "Eccomerce Web Application platform for a clothing brands",
    },
    "shippee": {
      title: "Shippee",
      description: "Shipment Tracking Web Application platform for logistics services",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Typescript", "Redux", "Prisma", "Postgresql" ],
      category: "web",
      github: "https://github.com/",
      demo: "https://shippee.vercel.app",
      longDescription:
        "Shipment Tracking Web Application platform for logistics services",
    },
    "peer-peer": {
      title: "Peer-Peer",
      description: "A Crypto P2P Trading platform for making safe and seemless transactions between users",
      image: "/images/peer-peer.png",
      technologies: ["Next.js", "Next-Auth", "Typescript", "Redux", "Prisma", "Postgresql" ],
      category: "web",
      github: "https://github.com/",
      demo: "https://peer-peer.vercel.app",
      longDescription:
        "A Crypto P2P Trading platform for making safe and seemless transactions between users",
    },
    "ai-chatbot": {
      title: "AI Chatbot",
      description: "Conversational AI assistant with natural language processing and machine learning capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "NLP", "TensorFlow"],
      category: "ai",
      github: "https://github.com/",
      demo: "https://ai-chatbot.example.com",
      longDescription:
        "An advanced conversational AI assistant that uses natural language processing and machine learning to understand and respond to user queries. The chatbot can be trained on specific domains and continuously improves its responses based on user interactions. It includes features like context awareness, sentiment analysis, and multi-language support.",
    },
    "blockchain-explorer": {
      title: "Blockchain Explorer",
      description: "Tool for visualizing and exploring blockchain transactions and smart contracts.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Ethers.js", "GraphQL"],
      category: "blockchain",
      github: "https://github.com/",
      demo: "https://blockchain-explorer.example.com",
      longDescription:
        "A comprehensive tool for exploring and visualizing blockchain transactions and smart contracts. Users can search for specific transactions, view detailed information about blocks and addresses, and analyze smart contract code. The explorer supports multiple blockchain networks and provides real-time updates on new transactions and blocks.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}
