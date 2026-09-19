# freelance-widestar

Premium salon website concept built for Wide Star Beauty in Dubai Marina.

This project is a portfolio and prospecting asset focused on editorial art direction, responsive layouts, and a clear path from discovery to appointment booking.

> This is an independent concept website. It is not an official Wide Star Beauty website or commissioned brand channel.

## Highlights

- Editorial luxury visual direction with a warm neutral palette
- Responsive layouts for mobile, tablet, and desktop
- Route-based experience for the main salon journeys
- Local salon imagery used across services and gallery sections
- Animated customer review carousel
- Functional gallery filters
- Contact details, map, phone, Instagram, and Facebook links
- Mobile sticky booking bar and responsive navigation drawer
- External booking handoff to Salonist
- Vercel SPA rewrite for direct access to nested routes

## Pages

- `/` - Homepage with hero, services, work, reviews, location, and booking CTA
- `/services` - Full service categories and treatment details
- `/about` - Salon story, philosophy, and principles
- `/gallery` - Filterable salon work gallery
- `/contact` - Location, opening hours, map, and contact actions
- `/book` - Appointment handoff to Salonist

## Tech Stack

- React
- Vite
- React Router
- JavaScript
- CSS with custom responsive design system
- ESLint

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Validate the project

```bash
npm run lint
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/                  Local salon imagery
  components/
    common/                Shared UI components
    home/                  Homepage sections
    layout/                Navbar, footer, and mobile booking bar
  data/                    Services, gallery, reviews, and site links
  pages/                   Route-level page components
  App.jsx                  Router and page metadata
  App.css                  Site-wide component and responsive styles
public/                    Static icons and favicon
vercel.json                SPA routing rewrite for Vercel
```

## Deployment

The project is ready to deploy to Vercel. Import the GitHub repository, keep the default Vite settings, and deploy. The included `vercel.json` ensures direct navigation to nested routes works correctly.

## Content and Links

Business contact and social links are centralized in `src/data/site.js`. Service, gallery, and testimonial content is maintained in the other files under `src/data/`.
