# Goodoo.ai Strategic Website

A comprehensive strategic framework showcase for Goodoo.ai, featuring detailed product roadmaps, go-to-market strategies, user personas, and development plans.

## 🚀 Features

- **Strategic Dashboard**: Overview of all strategic documents
- **Product Roadmap**: 12-month strategic plan with phases and initiatives
- **GTM Strategy**: Go-to-market strategy focusing on Odoo PMs
- **Master Plan**: 1-year CPO strategy with KPIs and quarterly roadmaps
- **User Personas**: Detailed customer profiles including primary and secondary personas
- **Development Roadmap**: Technical implementation with sprint breakdowns
- **Final Vision**: Complete product vision and future capabilities

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **TypeScript**: Full type safety
- **Deployment**: GitHub Pages with GitHub Actions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/goodoo-strategic-website.git
   cd goodoo-strategic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create a GitHub repository**
   - Go to [GitHub.com](https://github.com)
   - Create a new repository named `goodoo-strategic-website`
   - Make it **Public** for free hosting

2. **Add remote and push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/goodoo-strategic-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Save

4. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Your site will be available at: `https://YOUR_USERNAME.github.io/goodoo-strategic-website`

### Alternative: Vercel

1. **Deploy to Vercel**
   - Connect your GitHub repository to [Vercel](https://vercel.com)
   - Vercel will automatically detect Next.js and deploy
   - Get a custom domain and SSL certificate

## 📁 Project Structure

```
goodoo-strategic-website/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Dashboard
│   ├── product-roadmap/          # Product roadmap page
│   ├── gtm-strategy/            # GTM strategy page
│   ├── master-plan/             # Master plan page
│   ├── user-personas/           # User personas page
│   ├── development-roadmap/     # Development roadmap page
│   └── final-vision/            # Final vision page
├── components/                   # Reusable components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   └── StrategicDashboard.tsx
├── data/                        # JSON data files
│   ├── product-roadmap.json
│   ├── gtm-strategy.json
│   ├── master-plan.json
│   ├── user-personas.json
│   ├── development-roadmap.json
│   └── final-vision.json
├── .github/workflows/           # GitHub Actions
│   └── deploy.yml
└── public/                      # Static assets
```

## 🎨 Customization

### Adding New Strategic Documents

1. **Create JSON data file** in `data/` directory
2. **Create page component** in `app/` directory
3. **Update navigation** in `components/Navigation.tsx`
4. **Update dashboard** in `components/StrategicDashboard.tsx`

### Styling

- Uses Tailwind CSS for styling
- Custom color scheme defined in `tailwind.config.js`
- Responsive design with mobile-first approach

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Git Workflow

- `main` - Production branch
- `stage` - Staging branch
- `test` - Testing branch

## 📊 Data Structure

All strategic data is stored in JSON files in the `data/` directory:

- **Product Roadmap**: Phases, initiatives, success metrics
- **GTM Strategy**: Core strategy, phases, initiatives
- **Master Plan**: Executive summary, KPIs, quarterly roadmaps
- **User Personas**: Primary and secondary persona profiles
- **Development Roadmap**: Technical phases, sprints, user stories
- **Final Vision**: Product vision, features, technical specifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Goodoo.ai.

## 👥 Team

- **Product Lead**: Shady Al-halawani
- **Email**: shady@smetools.io
- **Company**: SMEtools Holdings

## 🔗 Links

- **Live Demo**: [https://goodo-test.vercel.app/](https://goodo-test.vercel.app/)
- **Test Platform**: [https://goodo-test.vercel.app/](https://goodo-test.vercel.app/)

---

Built with ❤️ for Goodoo.ai 