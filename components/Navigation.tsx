import React from 'react'

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', href: '/' },
  { id: 'product-roadmap', label: 'Product Roadmap', href: '/product-roadmap' },
  { id: 'gtm-strategy', label: 'GTM Strategy', href: '/gtm-strategy' },
  { id: 'master-plan', label: 'Master Plan', href: '/master-plan' },
  { id: 'user-personas', label: 'User Personas', href: '/user-personas' },
  { id: 'development-roadmap', label: 'Development Roadmap', href: '/development-roadmap' },
  { id: 'final-vision', label: 'Final Vision', href: '/final-vision' },
]

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="py-4 px-2 border-b-2 border-transparent text-secondary-600 hover:text-primary-600 hover:border-primary-600 whitespace-nowrap transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
} 