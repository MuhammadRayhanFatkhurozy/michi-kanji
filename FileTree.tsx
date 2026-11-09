import React from 'react';
import { 
  FileCode, 
  FileJson, 
  FileText, 
  Folder, 
  FolderOpen, 
  Search, 
  FilePlus, 
  SlidersHorizontal,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { ProjectFile } from '../data/projectFiles';

interface FileTreeProps {
  files: ProjectFile[];
  activeFileId: string;
  onSelectFile: (file: ProjectFile) => void;
  searchFilter: string;
  setSearchFilter: (query: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  onOpenCreateModal: () => void;
  language: 'id' | 'en';
}

export const FileTree: React.FC<FileTreeProps> = ({
  files,
  activeFileId,
  onSelectFile,
  searchFilter,
  setSearchFilter,
  categoryFilter,
  setCategoryFilter,
  onOpenCreateModal,
  language
}) => {
  const [collapsedFolders, setCollapsedFolders] = React.useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setCollapsedFolders(prev => ({ ...prev, [folderName]: !prev[folderName] }));
  };

  const getFileIcon = (ext: string, lang: string) => {
    if (lang === 'typescript' || lang === 'javascript') {
      return <FileCode className="w-4 h-4 text-sky-500 shrink-0" />;
    }
    if (lang === 'json') {
      return <FileJson className="w-4 h-4 text-amber-500 shrink-0" />;
    }
    if (lang === 'html' || lang === 'css') {
      return <FileCode className="w-4 h-4 text-emerald-500 shrink-0" />;
    }
    return <FileText className="w-4 h-4 text-neutral-400 shrink-0" />;
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = 
      file.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      file.path.toLowerCase().includes(searchFilter.toLowerCase());

    if (!matchesSearch) return false;

    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'code') return file.language === 'typescript' || file.language === 'javascript';
    if (categoryFilter === 'config') return file.language === 'json';
    if (categoryFilter === 'web') return file.language === 'html' || file.language === 'css';
    if (categoryFilter === 'env') return file.language === 'plaintext' || file.language === 'markdown';
    return true;
  });

  // Group files by directory
  const rootFiles = filteredFiles.filter(f => f.folder === '/');
  const srcFiles = filteredFiles.filter(f => f.folder === '/src');
  const otherFiles = filteredFiles.filter(f => f.folder !== '/' && f.folder !== '/src');

  return (
    <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 w-full sm:w-80 shrink-0 select-none">
      {/* Search Header */}
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
            {language === 'id' ? 'Daftar File Proyek' : 'Project Files'}
          </span>
          <button
            type="button"
            onClick={onOpenCreateModal}
            className="flex items-center gap-1 text-xs font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-pointer py-1 px-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
            title={language === 'id' ? 'Buat atau Periksa File Baru' : 'Add or Inspect File'}
          >
            <FilePlus className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'File Baru' : 'New File'}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            placeholder={language === 'id' ? 'Cari nama file...' : 'Filter files...'}
            className="w-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 rounded-md py-1.5 pl-8 pr-2.5 text-xs text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Segmented Filter Control */}
        <div className="flex items-center gap-1 p-0.5 bg-neutral-100 dark:bg-neutral-800 rounded-md text-[11px] overflow-x-auto">
          {[
            { id: 'all', label: language === 'id' ? 'Semua' : 'All' },
            { id: 'code', label: 'Code' },
            { id: 'config', label: 'Config' },
            { id: 'web', label: 'Web' },
            { id: 'env', label: 'Env' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-2 py-1 font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                categoryFilter === tab.id
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* File Tree List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 text-xs">
        {filteredFiles.length === 0 ? (
          <div className="p-4 text-center text-neutral-400 dark:text-neutral-500">
            {language === 'id' ? 'Tidak ada file yang cocok' : 'No matching files found'}
          </div>
        ) : (
          <>
            {/* Root Directory Section */}
            {rootFiles.length > 0 && (
              <div>
                <button
                  type="button"
                  onClick={() => toggleFolder('/')}
                  className="w-full flex items-center gap-1.5 px-2 py-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-semibold cursor-pointer rounded hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                >
                  {collapsedFolders['/'] ? (
                    <ChevronRight className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                  {collapsedFolders['/'] ? (
                    <Folder className="w-3.5 h-3.5 text-neutral-400" />
                  ) : (
                    <FolderOpen className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                  <span>/ (root)</span>
                  <span className="text-[10px] text-neutral-400 ml-auto font-normal font-mono tabular-nums">
                    {rootFiles.length}
                  </span>
                </button>
                {!collapsedFolders['/'] && (
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {rootFiles.map(file => (
                      <FileTreeItem
                        key={file.id}
                        file={file}
                        isActive={file.id === activeFileId}
                        onSelect={() => onSelectFile(file)}
                        icon={getFileIcon(file.extension, file.language)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* /src Directory Section */}
            {srcFiles.length > 0 && (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => toggleFolder('/src')}
                  className="w-full flex items-center gap-1.5 px-2 py-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-semibold cursor-pointer rounded hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                >
                  {collapsedFolders['/src'] ? (
                    <ChevronRight className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                  {collapsedFolders['/src'] ? (
                    <Folder className="w-3.5 h-3.5 text-sky-400" />
                  ) : (
                    <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
                  )}
                  <span>/src</span>
                  <span className="text-[10px] text-neutral-400 ml-auto font-normal font-mono tabular-nums">
                    {srcFiles.length}
                  </span>
                </button>
                {!collapsedFolders['/src'] && (
                  <div className="pl-3 space-y-0.5 mt-0.5">
                    {srcFiles.map(file => (
                      <FileTreeItem
                        key={file.id}
                        file={file}
                        isActive={file.id === activeFileId}
                        onSelect={() => onSelectFile(file)}
                        icon={getFileIcon(file.extension, file.language)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Other Files if uploaded / custom */}
            {otherFiles.length > 0 && (
              <div className="mt-2">
                <div className="px-2 py-1 text-neutral-500 font-semibold text-[11px] uppercase tracking-wider">
                  {language === 'id' ? 'File Tambahan' : 'Custom Files'}
                </div>
                <div className="pl-3 space-y-0.5">
                  {otherFiles.map(file => (
                    <FileTreeItem
                      key={file.id}
                      file={file}
                      isActive={file.id === activeFileId}
                      onSelect={() => onSelectFile(file)}
                      icon={getFileIcon(file.extension, file.language)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
        <span className="tabular-nums font-mono">
          {files.length} {language === 'id' ? 'file terdeteksi' : 'files indexed'}
        </span>
        <span>Vite · React 19</span>
      </div>
    </div>
  );
};

interface FileTreeItemProps {
  file: ProjectFile;
  isActive: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ file, isActive, onSelect, icon }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center justify-between px-2 py-1.5 rounded transition-colors text-left cursor-pointer group ${
        isActive
          ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-medium'
          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
      }`}
    >
      <div className="flex items-center gap-2 min-w-0 pr-2">
        {icon}
        <span className="truncate">{file.name}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tabular-nums shrink-0">
        <span>{file.lines}L</span>
      </div>
    </button>
  );
};
