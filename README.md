# Hogg Group Website

A modern, responsive website for Hogg Group - Finance expertise, led by US professionals.

## Technology Stack

- **Build Tool**: Vite
- **Framework**: React
- **Styling**: Custom CSS (no Tailwind)
- **Component Library**: Material-UI (MUI)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
hogg-website/
├── public/
│   └── assets/          # Images, logos, icons
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── DashboardShowcase.jsx
│   │   ├── BrandingContact.jsx
│   │   └── Integrations.jsx
│   ├── styles/          # CSS files
│   │   ├── variables.css
│   │   ├── main.css
│   │   └── components.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, professional design matching the inspiration
- **Component-Based**: Modular React components for easy maintenance
- **Custom CSS**: Tailored styling without framework dependencies (except MUI for components)

## Sections

1. **Header**: Navigation with mobile menu
2. **Hero**: Main landing section with dashboard mockup
3. **Services**: Three service cards (Bookkeeping, Payroll, Compliance)
4. **Dashboard Showcase**: Client dashboard preview with device mockups
5. **Branding/Contact**: Business cards and contact form
6. **Integrations**: Partner logos

## Asset Replacement

See `public/assets/ASSET_REPLACEMENT_GUIDE.md` for detailed instructions on replacing placeholder assets with final logos and icons.

## Development

- **Linting**: `npm run lint`
- **Preview Build**: `npm run preview`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
