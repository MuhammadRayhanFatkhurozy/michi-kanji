import React, { useState, useRef } from 'react';
import { X, Upload, FileCode, Check } from 'lucide-react';
import { ProjectFile } from '../data/projectFiles';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFile: (file: ProjectFile) => void;
  language: 'id' | 'en';
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onAddFile,
  language
}) => {
  const [fileName, setFileName] = useState('');
  const [content, setContent] = useState('');
  const [languageChoice, setLanguageChoice] = useState<'typescript' | 'javascript' | 'json' | 'html' | 'css' | 'plaintext'>('typescript');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName.trim()) return;

    const ext = fileName.includes('.') ? fileName.split('.').pop() || 'txt' : 'txt';
    const lines = content.split('\n').length;
    const size = new Blob([content]).size;

    const newFile: ProjectFile = {
      id: `custom-${Date.now()}`,
      name: fileName.trim(),
      path: `/${fileName.trim()}`,
      folder: '/custom',
      extension: ext,
      language: languageChoice,
      size,
      lines,
      descriptionEn: 'User-created custom scratchpad or uploaded file.',
      descriptionId: 'File kustom atau catatan yang dibuat pengguna.',
      content,
      isModified: true
    };

    onAddFile(newFile);
    onClose();
    setFileName('');
    setContent('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target?.result as string;
      setFileName(file.name);
      setContent(text);

      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext === 'json') setLanguageChoice('json');
      else if (ext === 'ts' || ext === 'tsx' || ext === 'js' || ext === 'jsx') setLanguageChoice('typescript');
      else if (ext === 'html') setLanguageChoice('html');
      else if (ext === 'css') setLanguageChoice('css');
      else setLanguageChoice('plaintext');
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-sky-500" />
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
              {language === 'id' ? 'Tambah / Periksa File Baru' : 'Add or Inspect File'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleCreate} className="p-5 space-y-4">
          {/* File Upload Zone */}
          <div>
            <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
              {language === 'id' ? 'Unggah dari Komputer' : 'Upload File from Device'}
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 cursor-pointer"
            >
              <Upload className="w-4 h-4 text-sky-500" />
              <span>{language === 'id' ? 'Pilih file teks / kode...' : 'Choose text / source code file...'}</span>
            </button>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
            <span className="flex-shrink mx-2 text-[11px] text-neutral-400 uppercase">
              {language === 'id' ? 'atau buat manual' : 'or enter manually'}
            </span>
            <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                {language === 'id' ? 'Nama File' : 'File Name'}
              </label>
              <input
                type="text"
                required
                value={fileName}
                onChange={e => setFileName(e.target.value)}
                placeholder="example.ts"
                className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-1.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-sky-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                {language === 'id' ? 'Format Sintaks' : 'Syntax'}
              </label>
              <select
                value={languageChoice}
                onChange={e => setLanguageChoice(e.target.value as any)}
                className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-1.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="typescript">TypeScript / JS</option>
                <option value="json">JSON</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="plaintext">Plaintext</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1">
              {language === 'id' ? 'Isi File / Kode' : 'File Content'}
            </label>
            <textarea
              rows={8}
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="// Paste your code or text here..."
              className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md p-3 text-xs font-mono text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
            >
              {language === 'id' ? 'Batal' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={!fileName.trim()}
              className="px-4 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed rounded shadow-xs transition-colors cursor-pointer"
            >
              {language === 'id' ? 'Buka File' : 'Inspect File'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
