export const siteConfig = {
  name: "Glasswave UI",
  description: "Beautiful glassmorphism UI components for React and Next.js",
  url: "https://glasswave-ui.vercel.app/", // Fallback URL
  // Base URL the `shadcn add` install commands point at. Must match the base
  // the registry JSON in `public/r` was built with.
  registryUrl: "https://glasswave-ui.vercel.app",
  ogImage: "https://glasswave-ui.vercel.app/og.png",
  links: {
    twitter: "https://twitter.com/deniiiiz_i",
    github: "https://github.com/deniiiiz-i/glasswave",
    npm: "https://www.npmjs.com/package/glasswave",
  },
  author: "Deniz",
};

export type SiteConfig = typeof siteConfig;
