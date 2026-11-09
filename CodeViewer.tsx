import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  Search, 
  WrapText, 
  Maximize2, 
  Minimize2,
  FileCode, 
  FileText,
  FileJson,
  X,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';
import { ProjectFile } from '../data/projectFiles';
import { renderCodeWithSyntax } from '../utils/syntaxHighlight';

interface CodeViewerProps {
  file: ProjectFile | null;
  openTabs: ProjectFile[];
  onSelectTab: (file: ProjectFile) => void;
  onCloseTab: (fileId: string) => void;
  language: 'id' | 'en';
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  file,
  openTabs,
  onSelectTab,
  onCloseTab,
  language
}) => {
  const [copied, setCopied] = useState(false);
  const [wordWrap, setWordWrap] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchInFile, setSearchInFile] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  if (!file) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-neutral-50/50 dark:bg-neutral-900/50">
        <FileCode className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mb-3" />
        <h3 className="text-base font-semibold text-neutral-700 dark:text-neutral-300">
          {language === 'id' ? 'Pilih file untuk melihat isi kode' : 'Select a file to inspect its content'}
        </h3>
        <p className="text-xs text-neutral-500 max-w-sm mt-1">
          {language === 'id'
            ? 'Klik salah satu file di panel sebelah kiri untuk membaca kode, menyalin, mencari, atau mengunduhnya.'
            : 'Click any file in the sidebar to view source code, copy snippets, search text, or download.'}
        </p>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(file.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const matchCount = searchInFile.trim()
    ? (file.content.toLowerCase().match(new RegExp(searchInFile.toLowerCase(), 'g')) || []).length
    : 0;

  return (
    <div
      className={`flex-1 flex flex-col bg-white dark:bg-neutral-950 overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50' : 'relative'
      }`}
    >
      {/* Tab Bar */}
      <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto no-scrollbar shrink-0 px-2 pt-2 gap-1">
        {openTabs.map(tab => {
          const isActive = tab.id === file.id;
          return (
            <div
              key={tab.id}
              onClick={() => onSelectTab(tab)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-t-md border-t border-x cursor-pointer transition-colors whitespace-nowrap shrink-0 group ${
                isActive
                  ? 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                  : 'bg-neutral-100 dark:bg-neutral-900 border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              <span>{tab.name}</span>
              {openTabs.length > 1 && (
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    onCloseTab(tab.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded p-0.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-opacity"
                  title="Close Tab"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* File Action & Info Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-neutral-50/70 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 shrink-0">
        {/* Left: Path, Size, Line counts */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 truncate">
            {file.path}
          </span>
          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono tabular-nums">
            <span>{file.lines} lines</span>
            <span aria-hidden="true">·</span>
            <span>{formatBytes(file.size)}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase text-[10px] tracking-wider">{file.language}</span>
          </div>
        </div>

        {/* Right: Actions (Find, Wrap, Copy, Download, Fullscreen) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Find Button */}
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
              showSearch || searchInFile
                ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            title="Search in file"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{language === 'id' ? 'Cari' : 'Find'}</span>
          </button>

          {/* Word Wrap Toggle */}
          <button
            type="button"
            onClick={() => setWordWrap(!wordWrap)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
              wordWrap
                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-600'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            title="Toggle Word Wrap"
          >
            <WrapText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{wordWrap ? 'Wrap On' : 'Wrap Off'}</span>
          </button>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            title="Copy entire file"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {language === 'id' ? 'Tersalin' : 'Copied'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Salin' : 'Copy'}</span>
              </>
            )}
          </button>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded border bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            title="Download file"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'id' ? 'Unduh' : 'Download'}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer rounded"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Description Bar */}
      <div className="px-4 py-2 bg-sky-50/50 dark:bg-sky-950/20 border-b border-neutral-200 dark:border-neutral-800 flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
        <Info className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-relaxed">
          {language === 'id' ? file.descriptionId : file.descriptionEn}
        </span>
      </div>

      {/* In-File Search Bar */}
      {showSearch && (
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 dark:bg-neutral-800/90 border-b border-neutral-200 dark:border-neutral-700 gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <input
              type="text"
              autoFocus
              value={searchInFile}
              onChange={e => setSearchInFile(e.target.value)}
              placeholder={language === 'id' ? 'Ketik teks untuk dicari di file ini...' : 'Find in file...'}
              className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded px-2.5 py-1 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            {searchInFile && (
              <span className="font-mono tabular-nums">
                {matchCount} {matchCount === 1 ? 'match' : 'matches'}
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setShowSearch(false);
                setSearchInFile('');
              }}
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Code Area */}
      <div
        className={`flex-1 overflow-auto bg-neutral-50/30 dark:bg-neutral-950 p-2 sm:p-4 text-xs font-mono leading-relaxed select-text ${
          wordWrap ? 'whitespace-pre-wrap' : 'whitespace-pre'
        }`}
      >
        <div className="table w-full border-collapse">
          {renderCodeWithSyntax(file.content, file.language, searchInFile)}
        </div>
      </div>
    </div>
  );
};
