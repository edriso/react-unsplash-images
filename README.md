# Unsplash Images Gallery

A React application that allows you to search and browse high-quality stock photos from Unsplash. Features a modern UI with dark mode support and responsive design.

## Features

- 🔍 **Search Images**: Search for images using keywords
- 🌙 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Uses React Query for efficient data fetching and caching
- 🎨 **Modern UI**: Clean and intuitive user interface

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Query (TanStack Query)** - Data fetching and caching
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library
- **Unsplash API** - Image data source

## Prerequisites

- Node.js (version 14 or higher)
- npm or pnpm
- Unsplash API access key ([Get one here](https://unsplash.com/developers))

## Installation Steps

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_UNSPLASH_API_ACCESS_KEY=your_api_key_here
   ```
   
   **Important**: 
   - Replace `your_api_key_here` with your actual Unsplash API access key
   - The `.env` file should be added to `.gitignore` (do not commit your API key)

4. **Get your Unsplash API key**
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Sign up or log in to your Unsplash account
   - Create a new application
   - Copy your Access Key
   - Use "Public" authentication for this project

## Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   pnpm dev
   ```

2. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)
   - You should see the Unsplash Images interface

3. **Build for production**
   ```bash
   npm run build
   ```
   or
   ```bash
   pnpm build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```
   or
   ```bash
   pnpm preview
   ```

## How to Use

1. **Search for images**: Type a keyword in the search box (e.g., "cat", "nature", "city") and click "Search"
2. **Toggle dark mode**: Click the sun/moon icon in the top right corner to switch between light and dark themes
3. **Browse results**: Scroll through the gallery to view all search results

## Project Structure

```
react-unsplash-images/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx          # Displays image gallery
│   │   ├── SearchForm.jsx       # Search input form
│   │   └── ThemeToggle.jsx      # Dark mode toggle button
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   ├── context.jsx              # Global state management
│   └── index.css                # Global styles
├── public/                      # Static assets
├── .env                         # Environment variables (create this)
├── package.json                 # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. **Important**: Add your environment variable in Netlify:
   - Go to Site settings → Environment variables
   - Add `VITE_UNSPLASH_API_ACCESS_KEY` with your API key value

### Deploy to Vercel

1. Connect your repository to Vercel
2. Add environment variable `VITE_UNSPLASH_API_ACCESS_KEY` in Vercel dashboard
3. Deploy

## Notes

- The application uses React Query DevTools in development mode for debugging
- Dark mode preference is saved in localStorage
- The app automatically detects system dark mode preference on first load
- API requests are cached by React Query for better performance

## License

This project is for educational purposes.

## Resources

- [Unsplash API Documentation](https://unsplash.com/documentation)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Vite Documentation](https://vitejs.dev/)
