'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  {
    id: 'ceo',
    label: 'CEO',
    href: '/ceo',
    submenu: [
      { id: 'master-plan', label: 'Goodoo.ai: 1-Year Product & Strategy Master Plan', href: '/ceo/master-plan' },
      { id: 'gtm-strategy', label: 'Goodoo.ai Go-to-Market Strategy', href: '/ceo/gtm-strategy' },
      { id: 'business-strategy', label: 'Business Strategy', href: '/ceo/business-strategy' },
      { id: 'market-analysis', label: 'Market Analysis', href: '/ceo/market-analysis' },
    ]
  },
  {
    id: 'cto',
    label: 'CTO',
    href: '/cto',
    submenu: [
      { id: 'development-roadmap', label: 'Development Roadmap', href: '/cto/development-roadmap' },
      { id: 'technical-architecture', label: 'Technical Architecture', href: '/cto/technical-architecture' },
      { id: 'product-roadmap', label: 'Product Roadmap', href: '/cto/product-roadmap' },
      { id: 'technology-stack', label: 'Technology Stack', href: '/cto/technology-stack' },
    ]
  },
  {
    id: 'cpo',
    label: 'CPO',
    href: '/cpo',
    submenu: [
      { id: 'user-personas', label: 'User Personas', href: '/cpo/user-personas' },
      { id: 'product-vision', label: 'Product Vision', href: '/cpo/product-vision' },
      { id: 'feature-prioritization', label: 'Feature Prioritization', href: '/cpo/feature-prioritization' },
      { id: 'user-research', label: 'User Research', href: '/cpo/user-research' },
    ]
  }
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`py-4 px-2 border-b-2 whitespace-nowrap transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 border-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                {item.label}
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ${
                activeDropdown === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.href}
                      className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                        isActive(subItem.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      <div className="font-medium">{subItem.label}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
} 