export interface HTMLContent {
  id: string
  title: string
  content: string
  role: 'ceo' | 'cto' | 'cpo'
  category: string
  createdAt: string
  updatedAt: string
  description: string
  isPublic: boolean
  shareToken: string
} 