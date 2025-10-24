# Better Walls - Company Website

A modern, responsive website for TheBestWalls, a women-owned wall repairs and painting company.

## Project Description

Better Walls is a professional wall repair and painting service company. This website showcases our services, features a project gallery, customer testimonials, and provides an easy way for customers to contact us for estimates.

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

This project is proprietary software for Better Walls company.
