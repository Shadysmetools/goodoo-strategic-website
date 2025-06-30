'use client'

import React, { useState, useEffect } from 'react'

interface MindMapNode {
  id: string
  title: string
  description?: string
  x: number
  y: number
  color: string
  size: 'small' | 'medium' | 'large'
  connections: string[]
}

interface MindMapProps {
  nodes: MindMapNode[]
  title?: string
  className?: string
}

export default function MindMap({ nodes, title, className = '' }: MindMapProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const getNodeSize = (size: string) => {
    switch (size) {
      case 'small': return 'w-16 h-16 text-xs'
      case 'medium': return 'w-20 h-20 text-sm'
      case 'large': return 'w-24 h-24 text-base'
      default: return 'w-20 h-20 text-sm'
    }
  }

  const getNodeColor = (color: string) => {
    const colors = {
      blue: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      pink: 'bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className={`relative ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          {title}
        </h3>
      )}
      
      <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node) => 
            node.connections.map((connectionId) => {
              const targetNode = nodes.find(n => n.id === connectionId)
              if (!targetNode) return null
              
              const isHovered = hoveredNode === node.id || hoveredNode === connectionId
              const isSelected = selectedNode === node.id || selectedNode === connectionId
              
              return (
                <line
                  key={`${node.id}-${connectionId}`}
                  x1={node.x + 40}
                  y1={node.y + 40}
                  x2={targetNode.x + 40}
                  y2={targetNode.y + 40}
                  className={`mind-map-connection ${isHovered || isSelected ? 'stroke-blue-500 stroke-3' : ''}`}
                  strokeDasharray={isHovered || isSelected ? '0' : '5,5'}
                />
              )
            })
          )}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`absolute mind-map-node ${getNodeSize(node.size)} ${getNodeColor(node.color)} 
                       text-white font-semibold rounded-full flex items-center justify-center cursor-pointer
                       shadow-soft hover:shadow-medium transition-all duration-300
                       ${hoveredNode === node.id ? 'scale-110 z-20' : 'z-10'}
                       ${selectedNode === node.id ? 'ring-4 ring-blue-300 ring-opacity-50' : ''}`}
            style={{ left: node.x, top: node.y }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
          >
            <div className="text-center leading-tight">
              {node.title.split(' ').map((word, index) => (
                <div key={index}>{word}</div>
              ))}
            </div>
          </div>
        ))}

        {/* Tooltip for selected node */}
        {selectedNode && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-strong p-4 animate-fade-in-up">
            {(() => {
              const node = nodes.find(n => n.id === selectedNode)
              if (!node) return null
              
              return (
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{node.title}</h4>
                  {node.description && (
                    <p className="text-slate-600 text-sm">{node.description}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {node.connections.map((connectionId) => {
                      const connectedNode = nodes.find(n => n.id === connectionId)
                      return (
                        <span
                          key={connectionId}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-200"
                          onClick={() => setSelectedNode(connectionId)}
                        >
                          {connectedNode?.title}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}

// Predefined mind map data for different use cases
export const strategicMindMapData: MindMapNode[] = [
  {
    id: 'vision',
    title: 'Vision',
    description: 'Long-term strategic vision and company direction',
    x: 200,
    y: 100,
    color: 'blue',
    size: 'large',
    connections: ['mission', 'goals', 'values']
  },
  {
    id: 'mission',
    title: 'Mission',
    description: 'Core purpose and what we do',
    x: 100,
    y: 200,
    color: 'green',
    size: 'medium',
    connections: ['vision', 'goals']
  },
  {
    id: 'goals',
    title: 'Goals',
    description: 'Specific objectives and targets',
    x: 300,
    y: 200,
    color: 'purple',
    size: 'medium',
    connections: ['vision', 'strategy']
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'How we achieve our goals',
    x: 400,
    y: 100,
    color: 'orange',
    size: 'large',
    connections: ['goals', 'execution', 'metrics']
  },
  {
    id: 'execution',
    title: 'Execution',
    description: 'Implementation and delivery',
    x: 500,
    y: 200,
    color: 'pink',
    size: 'medium',
    connections: ['strategy', 'metrics']
  },
  {
    id: 'metrics',
    title: 'Metrics',
    description: 'KPIs and success measures',
    x: 400,
    y: 300,
    color: 'indigo',
    size: 'medium',
    connections: ['strategy', 'execution']
  },
  {
    id: 'values',
    title: 'Values',
    description: 'Core principles and culture',
    x: 100,
    y: 300,
    color: 'green',
    size: 'medium',
    connections: ['vision', 'culture']
  },
  {
    id: 'culture',
    title: 'Culture',
    description: 'Organizational culture and behavior',
    x: 200,
    y: 400,
    color: 'blue',
    size: 'medium',
    connections: ['values', 'people']
  },
  {
    id: 'people',
    title: 'People',
    description: 'Team and talent management',
    x: 300,
    y: 400,
    color: 'purple',
    size: 'medium',
    connections: ['culture', 'execution']
  }
]

export const productMindMapData: MindMapNode[] = [
  {
    id: 'product',
    title: 'Product',
    description: 'Core product offering and features',
    x: 200,
    y: 100,
    color: 'blue',
    size: 'large',
    connections: ['market', 'users', 'technology']
  },
  {
    id: 'market',
    title: 'Market',
    description: 'Target market and segments',
    x: 100,
    y: 200,
    color: 'green',
    size: 'medium',
    connections: ['product', 'competition']
  },
  {
    id: 'users',
    title: 'Users',
    description: 'User personas and needs',
    x: 300,
    y: 200,
    color: 'purple',
    size: 'medium',
    connections: ['product', 'features']
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Product features and capabilities',
    x: 400,
    y: 100,
    color: 'orange',
    size: 'large',
    connections: ['users', 'technology', 'roadmap']
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Technical architecture and stack',
    x: 500,
    y: 200,
    color: 'pink',
    size: 'medium',
    connections: ['product', 'features']
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    description: 'Product development timeline',
    x: 400,
    y: 300,
    color: 'indigo',
    size: 'medium',
    connections: ['features', 'goals']
  },
  {
    id: 'goals',
    title: 'Goals',
    description: 'Product goals and objectives',
    x: 300,
    y: 400,
    color: 'green',
    size: 'medium',
    connections: ['roadmap', 'success']
  },
  {
    id: 'success',
    title: 'Success',
    description: 'Success metrics and KPIs',
    x: 200,
    y: 300,
    color: 'blue',
    size: 'medium',
    connections: ['goals', 'product']
  },
  {
    id: 'competition',
    title: 'Competition',
    description: 'Competitive landscape',
    x: 100,
    y: 300,
    color: 'purple',
    size: 'medium',
    connections: ['market', 'product']
  }
]

export const marketStrategyMindMapData: MindMapNode[] = [
  {
    id: 'gtm-strategy',
    title: 'GTM Strategy',
    description: 'Overall go-to-market strategy and approach',
    x: 200,
    y: 100,
    color: 'blue',
    size: 'large',
    connections: ['market-segments', 'channels', 'positioning']
  },
  {
    id: 'market-segments',
    title: 'Market Segments',
    description: 'Target customer segments and personas',
    x: 100,
    y: 200,
    color: 'green',
    size: 'medium',
    connections: ['gtm-strategy', 'customer-needs', 'competition']
  },
  {
    id: 'channels',
    title: 'Channels',
    description: 'Distribution and marketing channels',
    x: 300,
    y: 200,
    color: 'purple',
    size: 'medium',
    connections: ['gtm-strategy', 'partnerships', 'sales']
  },
  {
    id: 'positioning',
    title: 'Positioning',
    description: 'Brand positioning and value proposition',
    x: 400,
    y: 100,
    color: 'orange',
    size: 'large',
    connections: ['gtm-strategy', 'messaging', 'brand']
  },
  {
    id: 'customer-needs',
    title: 'Customer Needs',
    description: 'Customer pain points and requirements',
    x: 100,
    y: 300,
    color: 'pink',
    size: 'medium',
    connections: ['market-segments', 'product-fit']
  },
  {
    id: 'product-fit',
    title: 'Product-Market Fit',
    description: 'Alignment between product and market needs',
    x: 200,
    y: 400,
    color: 'indigo',
    size: 'medium',
    connections: ['customer-needs', 'success-metrics']
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    description: 'Strategic partnerships and alliances',
    x: 400,
    y: 300,
    color: 'green',
    size: 'medium',
    connections: ['channels', 'ecosystem']
  },
  {
    id: 'sales',
    title: 'Sales Strategy',
    description: 'Sales approach and methodology',
    x: 500,
    y: 200,
    color: 'blue',
    size: 'medium',
    connections: ['channels', 'revenue']
  },
  {
    id: 'messaging',
    title: 'Messaging',
    description: 'Marketing messages and communication',
    x: 500,
    y: 100,
    color: 'purple',
    size: 'medium',
    connections: ['positioning', 'brand']
  },
  {
    id: 'brand',
    title: 'Brand',
    description: 'Brand identity and recognition',
    x: 400,
    y: 400,
    color: 'orange',
    size: 'medium',
    connections: ['positioning', 'messaging']
  },
  {
    id: 'competition',
    title: 'Competition',
    description: 'Competitive analysis and differentiation',
    x: 200,
    y: 200,
    color: 'pink',
    size: 'medium',
    connections: ['market-segments', 'positioning']
  },
  {
    id: 'ecosystem',
    title: 'Ecosystem',
    description: 'Market ecosystem and stakeholders',
    x: 300,
    y: 400,
    color: 'green',
    size: 'medium',
    connections: ['partnerships', 'market-segments']
  },
  {
    id: 'revenue',
    title: 'Revenue Model',
    description: 'Revenue streams and monetization',
    x: 500,
    y: 300,
    color: 'indigo',
    size: 'medium',
    connections: ['sales', 'success-metrics']
  },
  {
    id: 'success-metrics',
    title: 'Success Metrics',
    description: 'KPIs and performance indicators',
    x: 300,
    y: 300,
    color: 'blue',
    size: 'medium',
    connections: ['product-fit', 'revenue', 'gtm-strategy']
  }
] 