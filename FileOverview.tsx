import React from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  FileCode2, 
  CheckCircle2, 
  Box, 
  ArrowRight
} from 'lucide-react';
import { ProjectFile } from '../data/projectFiles';

interface FileOverviewProps {
  files: ProjectFile[];
  onSelectFile: (file: ProjectFile) => void;
  language: 'id' | 'en';
}

export const FileOverview: React.FC<FileOverviewProps> = ({ files, onSelectFile, language }) => {
  const totalLines = files.reduce((acc, f) => acc + f.lines, 0);
  const totalBytes = files.reduce((acc, f) => acc + f.size, 0);

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const dependencies = [
    { name: 'react & react-dom', version: '^19.0.1', type: 'Frontend Engine', desc: 'React 19 with modern hooks & concurrent rendering' },
    { name: 'vite', version: '^8.3.0', type: 'Build Tool', desc: 'Blazing fast ESM dev server and rollup production bundler' },
    { name: '@tailwindcss/vite', version: '^4.3.3', type: 'Styling Framework', desc: 'Tailwind CSS v4 engine with modern zero-config CSS imports' },
    { name: '@google/genai', version: '^2.4.0', type: 'AI Integration', desc: 'Official Google Gen AI SDK for Gemini models' },
    { name: 'motion', version: '^12.23.24', type: 'Animation', desc: 'Fluid 60fps micro-interactions and transitions' },
    { name: 'lucide-react', version: '^0.546.0', type: 'Iconography', desc: 'Pixel-perfect, accessible SVG icons' },
    { name: 'typescript', version: '^7.0.2', type: 'Type Safety', desc: 'Strict static typing & modern JavaScript features' }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Hero Area */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-sky-600 dark:text-sky-400 font-medium">
            <span>{language === 'id' ? 'Arsitektur Proyek' : 'Project Architecture'}</span>
            <span aria-hidden="true">·</span>
            <span>AI Studio Environment</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{files.length} Files</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance">
            {language === 'id'
              ? 'Penjelajah Kode & Struktur File'
              : 'File Inspector & Code Architecture'}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            {language === 'id'
              ? 'Ringkasan menyeluruh seluruh file proyek, konfigurasi build, dependensi, dan isi kode sumber siap diperiksa.'
              : 'Comprehensive overview of repository files, configuration manifests, installed dependencies, and source files.'}
          </p>
        </div>

        {/* 4-Stat Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              {language === 'id' ? 'Total File' : 'Total Files'}
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-white">
              {files.length}
            </div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              {language === 'id' ? 'Total Baris Kode' : 'Total Lines'}
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-white">
              {totalLines}
            </div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              {language === 'id' ? 'Ukuran Sumber' : 'Source Size'}
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-white">
              {formatBytes(totalBytes)}
            </div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              {language === 'id' ? 'Status Proyek' : 'Health Check'}
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 inline" />
              <span>Ready & Clean</span>
            </div>
          </div>
        </div>

        {/* File Directory Quick Navigation */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
              {language === 'id' ? 'Semua File dalam Repositori' : 'Indexed Repository Files'}
            </h2>
            <span className="text-xs text-neutral-400">
              {language === 'id' ? 'Klik untuk membuka file' : 'Click any row to inspect'}
            </span>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {files.map(file => (
                <div
                  key={file.id}
                  onClick={() => onSelectFile(file)}
                  className="p-3 sm:px-4 sm:py-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800/60 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileCode2 className="w-4 h-4 text-sky-500 shrink-0" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {file.name}
                        </span>
                        <span className="text-[11px] text-neutral-400 dark:text-neutral-500 hidden sm:inline">
                          {file.path}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate max-w-xl mt-0.5">
                        {language === 'id' ? file.descriptionId : file.descriptionEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 shrink-0 ml-2">
                    <span className="tabular-nums">{file.lines}L</span>
                    <span className="tabular-nums hidden sm:inline">{formatBytes(file.size)}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:text-sky-500 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Installed Packages & Tech Stack */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
            {language === 'id' ? 'Dependensi & Ekosistem Paket' : 'Core Dependencies & Tech Stack'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dependencies.map(dep => (
              <div
                key={dep.name}
                className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white">
                    {dep.name}
                  </span>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
                    {dep.version}
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {dep.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
