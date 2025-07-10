# Goodoo.ai Strategic Website - Setup Guide

## Overview
This is a Next.js application for Goodoo.ai's strategic framework showcase with role-based access control (CEO, CTO, CPO).

## Features
- 🔐 Authentication system with JWT tokens
- 👥 Role-based access (CEO, CTO, CPO)
- 📄 Document management system
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🛡️ Error boundaries and loading states

## Prerequisites
- Node.js 18+ 
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website-smetools
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Default Login Credentials

The application comes with pre-configured users in `data/users.json`:

- **Email:** shady@smetools.io
- **Email:** hsa@smetools.io
- **Password:** (Contact administrator for password)

## Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── documents/         # Document management
│   │   └── ...
│   ├── components/            # Reusable components
│   ├── contexts/              # React contexts
│   ├── ceo/                   # CEO role pages
│   ├── cto/                   # CTO role pages
│   ├── cpo/                   # CPO role pages
│   └── ...
├── components/                # Global components
├── data/                      # JSON data files
├── public/                    # Static assets
├── utils/                     # Utility functions
└── ...
```

## Key Components

### Authentication
- **AuthContext**: Manages authentication state
- **ConditionalLogoutButton**: Shows logout only when authenticated
- **Login Page**: User authentication interface

### Error Handling
- **ErrorBoundary**: Catches and displays errors gracefully
- **LoadingSpinner**: Shows loading states
- **apiUtils**: Consistent API error handling

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom colors**: Primary (blue) and secondary (gray) color schemes
- **Responsive design**: Mobile-first approach

## Common Issues & Solutions

### 1. Logout button appears on login page
**Solution**: Fixed - The logout button now only appears when authenticated and not on the login page.

### 2. Authentication not working
**Solution**: 
- Ensure JWT_SECRET is set in `.env.local`
- Check that users exist in `data/users.json`
- Verify middleware configuration

### 3. Styling issues
**Solution**: 
- All custom color classes have been replaced with standard Tailwind classes
- Primary colors use `blue-*` classes
- Secondary colors use `gray-*` classes

### 4. API errors
**Solution**: 
- Check browser console for detailed error messages
- Verify API routes are properly configured
- Ensure proper error handling in components

## Development

### Adding New Features
1. Create new components in `app/components/`
2. Add API routes in `app/api/`
3. Update navigation in `components/Navigation.tsx`
4. Add proper error handling and loading states

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color scheme (blue/gray)
- Ensure responsive design
- Add hover and focus states

### Authentication Flow
1. User visits protected route
2. Middleware checks for valid JWT token
3. If no token, redirect to `/login`
4. After successful login, redirect to original route
5. Logout clears token and redirects to login

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
JWT_SECRET=your-production-secret-key
NODE_ENV=production
```

## Security Considerations

- JWT tokens are httpOnly cookies
- Passwords are hashed with bcrypt
- API routes are protected by middleware
- Error messages don't expose sensitive information

## Support

For issues or questions:
- Check the browser console for errors
- Review the authentication flow
- Verify all dependencies are installed
- Contact the development team 