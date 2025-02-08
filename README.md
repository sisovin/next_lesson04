# Next_Lesson04: Lazy Loading Modules

A Next.js project demonstrating lazy loading, dynamic routing, and bundle analysis with a blog post application. The project demonstrates these benefits through its Component structure and Dynamic routing. This Next.js blog application showcases three key optimization techniques:

1. **Lazy Loading** - Defers loading of heavy components like Moment.js until needed
2. **Dynamic Routing** - Handles blog post URLs with flexible `/posts/[postId]` routes
3. **Bundle Analysis** - Visualizes code splitting and optimizes bundle sizes

## Features

- Lazy loading of Moment.js for date formatting
- Dynamic routing for blog posts
- Bundle analysis visualization
- Server and client-side components
- Responsive UI with Tailwind CSS

## Project Structure

```

app/
├── components/
│   ├── Moment.js       # Lazy loading demo component
│   └── page.js         # Component page
├── posts/
│   ├── page.js         # Blog list view
│   ├── layout.js       # Posts layout
│   ├── new/
│   │   └── page.js     # New post form
│   └── [postId]/
│       └── page.js     # Dynamic post view
└── layout.js           # Root layout

```

## Getting Started

1. Install dependencies:
```bash
npm install
# Install moment.js for lazy loading demo
npm install moment
```

2. Run development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

3. Analyze bundle (optional):

```bash
npm run analyze
```

## Key Implementations

### 1. Lazy Loading

- Demonstrated in Moment.js
- Dynamic import of Moment.js library
- Reduces initial bundle size

### 2. Dynamic Routing

- Blog post routes: `/posts/[postId]`
- New post form: `/posts/new`
- List view: `/posts`

### 3. Bundle Analysis

- Configured with @next/bundle-analyzer
- Visualize bundle sizes and chunks
- Optimize performance

## Lazy Loading Benefits

1. **Reduced Initial Bundle Size**

- The initial page load only includes essential code
- Heavy libraries like Moment.js are loaded only when needed
- Smaller initial JavaScript bundle means faster page loads

2. **Better Performance**

```javascript
// Example from Moment.js component
const handleFormatDate = async () => {
  // Only loads moment when user clicks button
  const moment = (await import("moment")).default;
  const formatted = moment().format("MMMM Do YYYY, h:mm:ss a");
};
```

3. **Improved Resource Management**

- Resources are loaded on-demand
- Saves bandwidth for users
- Better memory usage since unused code isn't loaded

4. **Bundle Analysis Shows Benefits**

- From bundle analysis output:
  - Initial bundle: 105 KB shared code
  - Components page: only 436 B additional code
  - Dynamic routes: only 139 B additional code

5. **SEO Friendly**

- Core content loads faster
- Search engines see important content first
- Better Core Web Vitals scores

6. **User Experience**

- Faster initial page load
- Progressive loading of features
- Smoother navigation between pages

7. **Development Benefits**

- Easier code maintenance
- Better code organization
- Clear separation of concerns

## Tech Stack

- Next.js 15.1.6
- React 19.0.0
- Tailwind CSS
- Moment.js (lazy loaded)

## Development Features

- Turbopack enabled
- Bundle analysis support
- ESLint configuration
- PostCSS with Tailwind

## Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "analyze": "set ANALYZE=true && next build"
}
```

## Author

**[Chieng Sisovin](https://github.com/sisovin)**

## GitHub Integration Steps

1. **Initialize Git Repository:**

   ```sh
   git init
   ```

2. **Add Remote Repository:**

   ```sh
   git remote add origin https://github.com/sisovin/next_lesson04.git
   ```

3. **Commit and Push Changes:**

   ```sh
   git add .
   git commit -m "Initial commit the next_lesson04"
   git push -u origin main

## License

This project is open source and available under the MIT license.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/new)