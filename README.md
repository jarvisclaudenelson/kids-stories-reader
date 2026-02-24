# Park City Ski Planner - Project Files

This is a React + Vite + Tailwind project ready to deploy to Vercel.

## Setup (Local)

```bash
cd park-city-ski-planner
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Build command: `npm run build`
4. Output dir: `dist`

## Files Created

### Core App
- `src/App.jsx` - Main React component with 3 tabs:
  - Find Runs (filter by difficulty, terrain type, area)
  - Mountain Tour (suggested progression)
  - End of Day (route planning to exit)
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind styles

### Data
- `src/data/parkCityData.js` - Trail & lift data extracted from PDF
  - 35+ lifts
  - 36+ trails
  - Difficulty: green, blue, black, double-black
  - Types: groomed, moguls, trees, bowls, terrain park
  - 5 lodges/exit points

### Config
- `index.html` - Entry HTML
- `vite.config.js` - Vite config
- `tailwind.config.js` - Tailwind config
- `package.json` - Dependencies

## Features Implemented

✅ Filter trails by difficulty (green/blue/black/double-black)
✅ Filter by terrain type (groomed/moguls/trees/bowl/park)
✅ Filter by area (Canyons/Park City)
✅ Show lift status (open/closed toggle for demo)
✅ Mountain tour suggestions
✅ End-of-day routing to lodges
✅ Mobile-friendly UI

## To Add (Live Data)

The app currently uses simulated lift status. To add live data:

1. Use Puppeteer/Playwright to scrape parkcitymountain.com
2. Or find their API endpoints
3. Or have users manually toggle lifts

The debug panel at the bottom allows toggling lift status for testing.
