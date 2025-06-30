# Goodoo.ai Strategic Website

A comprehensive strategic management platform for Goodoo.ai with role-based dashboards for CEO, CTO, and CPO.

## 🚀 Features

### Role-Based Navigation
- **CEO Dashboard**: Strategic planning, business strategy, market analysis
- **CTO Dashboard**: Technical architecture, development roadmap, technology stack
- **CPO Dashboard**: Product vision, user personas, feature prioritization

### Dynamic Meeting System
- **Current Date**: Sunday, June 22, 2025
- **Meeting Schedule**: Every Monday at 10:00 AM EST
- **Automatic Week Calculation**: System automatically calculates week numbers and date ranges
- **HTML Artifact Support**: Easy weekly content updates with HTML artifacts

### Document Management
- **PDF Documents**: Strategic documents, presentations, reports
- **HTML Artifacts**: Weekly meeting content that can be easily updated
- **Search & Filter**: Advanced document search and categorization

## 📅 Dynamic Meeting System

### How It Works

The meeting system is based on the current date (22/06/2025) and automatically generates:

1. **Week Numbers**: Calculated based on the current year
2. **Meeting Dates**: Every Monday starting from the next Monday after the current date
3. **Meeting Status**: Automatically marks meetings as "Scheduled" or "Completed"
4. **Artifact Links**: Dynamic links to meeting artifacts (PDFs and HTML pages)

### Current Week Information

- **Current Date**: Sunday, June 22, 2025
- **Current Week**: Week 25 (June 16-22, 2025)
- **Next Meeting**: Monday, June 23, 2025 (Week 26)
- **Meeting Type**: Strategic Planning & Business Review

### Updating the Current Date

To update the current date, simply edit the `CURRENT_DATE` in `app/utils/dateUtils.ts`:

```typescript
export const CURRENT_DATE = new Date('2025-06-22') // Change this date
```

The system will automatically:
- Recalculate all week numbers
- Update meeting schedules
- Adjust meeting statuses (Scheduled/Completed)
- Generate new meeting artifacts

### Weekly HTML Artifacts

Each role has dedicated HTML artifact pages that can be updated weekly:

- **CEO**: `/ceo/meetings/week-{weekNumber}/actions`
- **CTO**: `/cto/meetings/week-{weekNumber}/security-assessment`
- **CPO**: `/cpo/meetings/week-{weekNumber}/user-feedback`

#### How to Update HTML Artifacts

1. **Provide HTML Content**: Send your weekly HTML content
2. **Automatic Update**: The content will be integrated into the appropriate week's page
3. **Preserved Styling**: All navigation and styling will be maintained
4. **Easy Access**: Content will be accessible through the meetings page

## 🏗️ Project Structure

```
app/
├── ceo/                    # CEO role pages
│   ├── meetings/          # CEO meetings
│   ├── documents/         # CEO documents
│   └── page.tsx          # CEO dashboard
├── cto/                    # CTO role pages
│   ├── meetings/          # CTO meetings
│   ├── documents/         # CTO documents
│   └── page.tsx          # CTO dashboard
├── cpo/                    # CPO role pages
│   ├── meetings/          # CPO meetings
│   ├── documents/         # CPO documents
│   └── page.tsx          # CPO dashboard
├── utils/
│   └── dateUtils.ts      # Date utilities for meeting system
└── page.tsx              # Homepage with role selection
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages (configured)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website-smetools
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
npm start
```

## 📋 Meeting Schedule

### CEO Meetings (Mondays)
- Strategic Planning & Business Review
- Financial Performance & Budget Review
- Product Strategy & Roadmap Alignment
- Market Analysis & Competitive Review
- Team Performance & Leadership Review
- Investor Relations & Board Update
- Operational Excellence Review
- Q3 2025 Strategic Planning

### CTO Meetings (Mondays)
- Technical Architecture Review
- Sprint Planning & Roadmap Review
- Infrastructure & DevOps Planning
- Code Review & Quality Assurance
- Technology Stack Evaluation
- Engineering Team Retrospective
- Performance & Security Review
- Q3 2025 Technical Planning

### CPO Meetings (Mondays)
- Product Roadmap Review & Planning
- User Research & Persona Development
- Feature Launch Planning & Go-to-Market
- Product Analytics & Performance Review
- Product Strategy Alignment
- Q2 2025 Product Planning
- User Experience & Design Review
- Q3 2025 Product Strategy

## 🔄 Weekly Updates

### For HTML Artifacts
1. Navigate to the appropriate role's meetings page
2. Click on the "Action Items" or relevant HTML artifact link
3. Provide your HTML content
4. The content will be integrated into the page

### For Document Updates
1. Navigate to the role's documents page
2. Use the upload or create functionality
3. Documents will be categorized and searchable

## 📊 Current Status

- **Total Roles**: 3 (CEO, CTO, CPO)
- **Weekly Meetings**: 3 (one per role)
- **Document Categories**: 4 per role
- **Meeting Artifacts**: 3 per meeting (PDF + PDF + HTML)
- **Current Week**: Week 25 (June 16-22, 2025)
- **Next Meeting**: Monday, June 23, 2025

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Goodoo.ai.

---

**Last Updated**: June 22, 2025  
**Version**: 1.0.0  
**Status**: Active Development 