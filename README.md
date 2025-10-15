<<<<<<< HEAD
# TheBestWalls - Company Website

A modern, responsive website for TheBestWalls, a women-owned wall repairs and painting company.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Fixed header with smooth scrolling to sections
- **Services Showcase**: Two main service tiles (Wall Repairs & Painting)
- **Image Gallery**: Carousel with pagination (3 images per page)
- **Contact Form**: Expandable form with validation and Airtable integration
- **Women-Owned Focus**: Highlights the company's women-owned status

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Styled Components** for CSS-in-JS styling
- **React Router DOM** for navigation
- **Airtable API** for contact form submissions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd thebestwalls-website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env
```

4. Configure Airtable integration:
   - Get your Airtable Base ID and API Key from your Airtable account
   - Update the `.env` file with your credentials
   - Make sure your Airtable base has a table named "Contacts" with the required fields

### Development

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Airtable Setup

To enable the contact form functionality:

1. Create an Airtable account at [airtable.com](https://airtable.com)
2. Create a new base with a table named "Contacts"
3. Add the following fields to your Contacts table:
   - **Name** (Single line text)
   - **Email** (Email)
   - **Message** (Long text)
   - **Date** (Date)
4. Get your Base ID from the URL when viewing your base
5. Get your API Key from Account Settings > API
6. Update your `.env` file with these credentials

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services showcase
│   ├── Gallery.tsx         # Image carousel
│   └── Contacts.tsx        # Contact form
├── App.tsx                 # Main app component
└── main.tsx               # App entry point
```

## Customization

### Images

Replace the placeholder images in the Gallery component with your actual project photos. Update the `allImages` array in `src/components/Gallery.tsx`.

### Content

Update the text content in each component to match your specific business information:

- Company name and branding
- Service descriptions
- Contact information
- About section content

### Styling

The website uses Styled Components for styling. You can customize colors, fonts, and layout by modifying the styled components in each file.

## Deployment

The website can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Make sure to set up your environment variables in your hosting platform's configuration.

## License

This project is proprietary software for TheBestWalls company.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> origin/main
