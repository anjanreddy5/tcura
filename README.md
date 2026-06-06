# MEDI JOURNEY - Medical Tourism Platform

A modern, responsive medical tourism platform built with React and TypeScript. This platform connects patients with healthcare providers, hospitals, and treatments worldwide, facilitating seamless medical tourism experiences.

## 🚀 Technologies & Languages

### Core Technologies
- **React 18.2.0** - UI library for building user interfaces
- **TypeScript 5.2.2** - Typed superset of JavaScript
- **Vite 5.1.4** - Fast build tool and development server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing tool
- **Autoprefixer 10.4.17** - CSS vendor prefixing

### UI Component Libraries
- **Radix UI** - Headless UI component primitives
  - React Accordion, Alert Dialog, Avatar, Checkbox, Collapsible
  - Context Menu, Dialog, Dropdown Menu, Hover Card
  - Label, Menubar, Navigation Menu, Popover
  - Progress, Radio Group, Scroll Area, Select
  - Separator, Slider, Switch, Tabs, Toggle, Tooltip
- **shadcn/ui** - Re-usable components built on Radix UI
- **Lucide React 0.344.0** - Icon library
- **Sonner 1.7.4** - Toast notification system
- **Embla Carousel React 8.0.0** - Carousel component
- **Recharts 2.12.0** - Charting library

### State Management & Routing
- **React Context API** - For state management (Cart, Treatments)
- **Custom Router** - Client-side routing implementation

### Styling & Theming
- **Tailwind CSS Animate 1.0.7** - Animation utilities
- **next-themes 0.4.6** - Theme management
- **class-variance-authority 0.7.0** - Component variant management
- **clsx 2.1.0** - Conditional class names
- **tailwind-merge 2.2.1** - Merge Tailwind classes

### Development Tools
- **ESLint 8.56.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **@vitejs/plugin-react 4.2.1** - Vite plugin for React

## 📁 Project Structure

```
PROJECT M/
├── index.html                 # HTML entry point
├── package.json              # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
│
├── src/
│   ├── main.tsx             # React application entry point
│   └── lib/
│       └── utils.ts         # Utility functions
│
└── MEDI JOURNEY - Copy/
    ├── App.tsx              # Main application component
    ├── Router.tsx           # Client-side routing logic
    │
    ├── components/          # Reusable UI components
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── HeroSection.tsx
    │   ├── HowItWorks.tsx
    │   ├── TopTreatments.tsx
    │   ├── TopHospitals.tsx
    │   ├── FeaturedDoctors.tsx
    │   ├── Testimonials.tsx
    │   ├── FloatingChat.tsx
    │   ├── BookConsultationModal.tsx
    │   ├── CartModal.tsx
    │   ├── ContactHospitalModal.tsx
    │   ├── TreatmentDetailsModal.tsx
    │   ├── figma/
    │   │   └── ImageWithFallback.tsx
    │   └── ui/              # shadcn/ui components
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── dialog.tsx
    │       ├── input.tsx
    │       ├── select.tsx
    │       ├── toast.tsx
    │       └── ... (40+ UI components)
    │
    ├── pages/               # Page components
    │   ├── AboutPage.tsx
    │   ├── AuthPage.tsx
    │   ├── CheckoutPage.tsx
    │   ├── ContactPage.tsx
    │   ├── DoctorsPage.tsx
    │   ├── HospitalsPage.tsx
    │   ├── ProfilePage.tsx
    │   └── TreatmentsPage.tsx
    │
    ├── context/             # React Context providers
    │   └── CartContext.tsx
    │
    ├── contexts/
    │   └── TreatmentsContext.tsx
    │
    ├── styles/
    │   └── globals.css      # Global styles
    │
    ├── utils/
    │   └── navigation.ts    # Navigation utilities
    │
    └── guidelines/
        └── Guidelines.md
```

## 🎯 Key Features

- **Medical Tourism Platform**: Browse hospitals, doctors, and treatments
- **Treatment Catalog**: Explore various medical treatments with details
- **Hospital Directory**: View top hospitals and their specialties
- **Doctor Profiles**: Browse featured doctors and book consultations
- **Shopping Cart**: Add treatments to cart and checkout
- **User Authentication**: Login and profile management
- **Responsive Design**: Mobile-first, responsive UI
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Client-Side Routing**: Smooth navigation without page reloads
- **Toast Notifications**: User feedback with Sonner
- **Floating Chat**: Support chat widget

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher recommended)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

### Verify Installation

```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project directory:

```bash
cd "D:\PROJECT M"
```

Or if you're using a relative path:

```bash
cd "PROJECT M"
```

### Step 2: Install Dependencies

Install all required packages and dependencies:

```bash
npm install
```

This command will:
- Read the `package.json` file
- Download and install all dependencies listed in `dependencies` and `devDependencies`
- Create a `node_modules` folder with all packages
- Generate/update `package-lock.json`

**Expected output:** The installation process may take a few minutes. You should see progress indicators and a success message when complete.

### Step 3: Verify Installation

After installation, verify that `node_modules` folder exists:

```bash
# Windows PowerShell
Test-Path "node_modules"

# Windows CMD / Linux / Mac
ls node_modules
```

## 🚀 Running the Website Locally

### Start Development Server

Run the following command to start the Vite development server:

```bash
npm run dev
```

**What happens:**
- Vite starts a local development server
- The server typically runs on `http://localhost:5173`
- If port 5173 is in use, Vite will automatically use the next available port (5174, 5175, etc.)
- The terminal will display the local and network URLs

**Expected output:**
```
  VITE v5.4.21  ready in 230 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Access the Website

1. **Automatic Browser Opening**: The browser may open automatically
2. **Manual Access**: 
   - Open your web browser
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The website should load and display the MEDI JOURNEY homepage

### Hot Module Replacement (HMR)

While the dev server is running:
- Any changes you make to the code will automatically reload in the browser
- No need to manually refresh the page
- Fast development experience with instant feedback

### Stop the Development Server

To stop the server, press `Ctrl + C` in the terminal where the server is running.

## 📜 Available Scripts

### Development

```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build for Production

```bash
npm run build
```
- Compiles TypeScript code
- Bundles and optimizes the application
- Creates a `dist` folder with production-ready files

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Lint Code

```bash
npm run lint
```
Runs ESLint to check for code quality issues and potential errors.

## 🌐 Browser Support

The website is designed to work on modern browsers:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)
- Opera (latest)

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin configuration
- Path aliases (`@` maps to `MEDI JOURNEY - Copy`)
- Build settings

### TypeScript Configuration (`tsconfig.json`)
- Compiler options
- Path mappings
- Strict type checking enabled

### Tailwind Configuration (`tailwind.config.js`)
- Custom theme colors
- Content paths
- Animation plugins
- Dark mode support

## 📦 Dependencies Overview

### Production Dependencies
- **React & React DOM**: Core React library
- **Radix UI**: 30+ accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Data visualization
- **Sonner**: Toast notifications
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component

### Development Dependencies
- **TypeScript**: Type checking
- **Vite**: Build tool and dev server
- **ESLint**: Code linting
- **PostCSS & Autoprefixer**: CSS processing

## 🐛 Troubleshooting

### Port Already in Use

If you see "Port 5173 is in use":
- Vite will automatically try the next port (5174, 5175, etc.)
- Check the terminal output for the correct URL
- Or manually specify a port: `npm run dev -- --port 3000`

### Module Not Found Errors

If you encounter import errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript Errors

If you see TypeScript errors:
```bash
# Check TypeScript version
npx tsc --version

# Run type checking
npx tsc --noEmit
```

### Build Errors

If the build fails:
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## 📝 Notes

- The project uses TypeScript for type safety
- Styling is done with Tailwind CSS utility classes
- UI components follow the shadcn/ui pattern
- Routing is implemented with a custom React Router
- State management uses React Context API

## 🤝 Contributing

This is a private project. For contributions or questions, please contact the project maintainer.

## 📄 License

This project is private and proprietary.

---

**Happy Coding! 🎉**

For issues or questions, please refer to the project documentation or contact the development team.

