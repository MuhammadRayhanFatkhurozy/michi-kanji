export interface ProjectFile {
  id: string;
  name: string;
  path: string;
  folder: string;
  extension: string;
  language: 'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'plaintext' | 'markdown';
  size: number;
  lines: number;
  descriptionEn: string;
  descriptionId: string;
  content: string;
  isModified?: boolean;
}

export const INITIAL_FILES: ProjectFile[] = [
  {
    id: 'package-json',
    name: 'package.json',
    path: '/package.json',
    folder: '/',
    extension: 'json',
    language: 'json',
    size: 887,
    lines: 37,
    descriptionEn: 'Node.js manifest defining project dependencies, scripts (dev, build, lint), and metadata.',
    descriptionId: 'Manifest Node.js yang mendefinisikan dependensi proyek, skrip (dev, build, lint), dan metadata.',
    content: `{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}`
  },
  {
    id: 'index-html',
    name: 'index.html',
    path: '/index.html',
    folder: '/',
    extension: 'html',
    language: 'html',
    size: 920,
    lines: 20,
    descriptionEn: 'Single Page Application entry point with HTML meta tags, OpenGraph data, and viewport settings.',
    descriptionId: 'Titik masuk aplikasi Single Page Application dengan tag meta HTML, OpenGraph, dan pengaturan viewport.',
    content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Inspector & Code Explorer</title>
    <meta name="description" content="Interactive code explorer and file viewer for project inspection, code search, and syntax highlighting." />
    <meta property="og:title" content="File Inspector & Code Explorer" />
    <meta property="og:description" content="Interactive code explorer and file viewer for project inspection, code search, and syntax highlighting." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
  },
  {
    id: 'metadata-json',
    name: 'metadata.json',
    path: '/metadata.json',
    folder: '/',
    extension: 'json',
    language: 'json',
    size: 245,
    lines: 7,
    descriptionEn: 'AI Studio applet configuration specifying permissions and capabilities.',
    descriptionId: 'Konfigurasi applet AI Studio yang menentukan izin dan kapabilitas server/klien.',
    content: `{
  "name": "File Inspector & Code Explorer",
  "description": "Interactive code explorer and file viewer for project inspection, code search, and syntax highlighting.",
  "requestFramePermissions": [],
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}`
  },
  {
    id: 'vite-config-ts',
    name: 'vite.config.ts',
    path: '/vite.config.ts',
    folder: '/',
    extension: 'ts',
    language: 'typescript',
    size: 610,
    lines: 21,
    descriptionEn: 'Vite build and dev server configuration with Tailwind v4 and React plugins.',
    descriptionId: 'Konfigurasi build Vite dan dev server dengan plugin Tailwind CSS v4 dan React.',
    content: `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});`
  },
  {
    id: 'tsconfig-json',
    name: 'tsconfig.json',
    path: '/tsconfig.json',
    folder: '/',
    extension: 'json',
    language: 'json',
    size: 470,
    lines: 26,
    descriptionEn: 'TypeScript compiler configuration defining target ES2022, module resolution, and path aliases.',
    descriptionId: 'Konfigurasi compiler TypeScript yang menentukan target ES2022, resolusi modul, dan path alias.',
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  },
  "exclude": ["dist"]
}`
  },
  {
    id: 'env-example',
    name: '.env.example',
    path: '/.env.example',
    folder: '/',
    extension: 'example',
    language: 'plaintext',
    size: 320,
    lines: 9,
    descriptionEn: 'Template for environment variables (GEMINI_API_KEY, APP_URL) for cloud deployment.',
    descriptionId: 'Template variabel lingkungan (GEMINI_API_KEY, APP_URL) untuk deployment cloud.',
    content: `# GEMINI_API_KEY: Required for Gemini AI API calls.
# AI Studio automatically injects this at runtime from user secrets.
# Users configure this via the Secrets panel in the AI Studio UI.
GEMINI_API_KEY="MY_GEMINI_API_KEY"

# APP_URL: The URL where this applet is hosted.
# AI Studio automatically injects this at runtime with the Cloud Run service URL.
# Used for self-referential links, OAuth callbacks, and API endpoints.
APP_URL="MY_APP_URL"`
  },
  {
    id: 'gitignore',
    name: '.gitignore',
    path: '/.gitignore',
    folder: '/',
    extension: 'gitignore',
    language: 'plaintext',
    size: 73,
    lines: 9,
    descriptionEn: 'Specifies intentionally untracked files to ignore (node_modules, dist, .env secrets).',
    descriptionId: 'Menentukan file yang diabaikan oleh Git (node_modules, folder dist, file rahasia .env).',
    content: `node_modules/
build/
dist/
coverage/
.DS_Store
*.log
.env*
!.env.example`
  },
  {
    id: 'src-main-tsx',
    name: 'main.tsx',
    path: '/src/main.tsx',
    folder: '/src',
    extension: 'tsx',
    language: 'typescript',
    size: 154,
    lines: 6,
    descriptionEn: 'Client mounting script creating React 19 root and injecting App into the DOM.',
    descriptionId: 'Skrip inisialisasi klien yang membuat root React 19 dan memasang App ke elemen DOM.',
    content: `import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);`
  },
  {
    id: 'src-index-css',
    name: 'index.css',
    path: '/src/index.css',
    folder: '/src',
    extension: 'css',
    language: 'css',
    size: 260,
    lines: 13,
    descriptionEn: 'Global CSS styles importing Tailwind v4 with dark variant mapping and custom fonts.',
    descriptionId: 'Gaya CSS global yang mengimpor Tailwind v4 dengan varian tema gelap dan konfigurasi font.',
    content: `@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }
  code, pre, kbd, samp {
    font-family: 'JetBrains Mono', monospace;
  }
}`
  },
  {
    id: 'src-app-tsx',
    name: 'App.tsx',
    path: '/src/App.tsx',
    folder: '/src',
    extension: 'tsx',
    language: 'typescript',
    size: 1840,
    lines: 65,
    descriptionEn: 'Root React component orchestrating the file viewer, code syntax inspector, and search.',
    descriptionId: 'Komponen root React yang mengatur penampil file, inspektur sintaks kode, dan pencarian.',
    content: `import React, { useState } from 'react';
// File Viewer & Code Explorer Root Component`
  }
];
