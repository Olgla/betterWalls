# TheBestWalls - Company Website

A modern, responsive website for TheBestWalls, a women-owned wall repairs and painting company.

## Project Description

TheBestWalls is a professional wall repair and painting service company. This website showcases our services, features a project gallery, customer testimonials, and provides an easy way for customers to contact us for estimates.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Fixed header with smooth scrolling to sections
- **Services Showcase**: Two main service tiles (Wall Repairs & Painting)
- **Image Gallery**: Carousel with pagination (3 images per page)
- **Contact Form**: Expandable form with validation and Airtable integration
- **Women-Owned Focus**: Highlights the company's women-owned status
- **Customer Testimonials**: Dynamic testimonials section
- **FAQ Section**: Expandable frequently asked questions

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **Styled Components** for CSS-in-JS styling
- **React Router DOM** for client-side routing
- **Airtable API** for contact form submissions

## Dependencies

### Core Dependencies

- `react`: ^18.3.1 - React library for building user interfaces
- `react-dom`: ^18.3.1 - React DOM rendering
- `react-router-dom`: ^7.9.4 - Client-side routing
- `styled-components`: ^6.1.19 - CSS-in-JS styling library

### Development Dependencies

- `@vitejs/plugin-react`: ^5.0.4 - Vite React plugin
- `vite`: ^7.1.7 - Build tool and dev server
- `eslint`: ^9.36.0 - Code linting
- `@eslint/js`: ^9.36.0 - ESLint JavaScript configuration

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
cp .env.local.example .env.local
```

4. Configure Airtable integration:
   - Get your Airtable Base ID and API Key from your Airtable account
   - Update the `.env.local` file with your credentials
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

## API Connection Details

### Airtable Integration

The contact form integrates with Airtable for data storage:

1. Create an Airtable account at [airtable.com](https://airtable.com)
2. Create a new base with a table named "Contacts"
3. Add the following fields to your Contacts table:
   - **Name** (Single line text)
   - **Email** (Email)
   - **Phone** (Single line text)
   - **Message** (Long text)
   - **Date** (Date)
4. Get your Base ID from the URL when viewing your base
5. Get your API Key from Account Settings > API
6. Update your `.env.local` file with these credentials

### Required Credentials

- `VITE_AIRTABLE_BASE_ID`: Your Airtable base ID
- `VITE_AIRTABLE_API_KEY`: Your Airtable API key

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # About section
│   ├── Services.jsx     # Services showcase
│   ├── Gallery.jsx      # Image carousel
│   └── Contacts.jsx     # Contact form
├── features/            # Feature-specific components
│   ├── Testimonials/    # Customer testimonials feature
│   └── FAQ/             # FAQ feature
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   ├── AboutPage.jsx    # About page
│   ├── ServicesPage.jsx # Services page
│   ├── GalleryPage.jsx  # Gallery page
│   ├── ContactPage.jsx  # Contact page
│   └── NotFound.jsx     # 404 page
├── shared/              # Shared components
│   ├── Container.jsx    # Layout container
│   ├── Button.jsx      # Reusable button component
│   └── LoadingSpinner.jsx # Loading indicator
├── assets/              # Static assets
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── style.css            # Global styles
```

## React Concepts Demonstrated

- **Functional Components**: All components use functional syntax
- **Hooks**: useState, useEffect, useCallback for state management
- **Props**: Proper prop passing and validation
- **Conditional Rendering**: Dynamic content based on state
- **Controlled Components**: Form inputs with state management
- **Event Handling**: User interactions and form submissions
- **Routing**: Client-side navigation with React Router
- **Data Fetching**: Simulated API calls and loading states

## Customization

### Images

Replace the placeholder images in the Gallery component with your actual project photos. Update the `allImages` array in `src/components/Gallery.jsx`.

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
