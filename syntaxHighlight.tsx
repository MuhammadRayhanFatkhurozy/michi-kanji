import React from 'react';

// Lightweight regex-based syntax tokenization for pristine readability
export function renderCodeWithSyntax(
  code: string,
  language: string,
  searchQuery: string = ''
): React.ReactNode[] {
  const lines = code.split('\n');

  return lines.map((line, lineIndex) => {
    return (
      <div key={lineIndex} className="table-row hover:bg-neutral-100/50 dark:hover:bg-neutral-800/40 transition-colors">
        <span
          className="table-cell pr-4 pl-3 py-0.5 text-right select-none font-mono text-xs text-neutral-400 dark:text-neutral-500 tabular-nums border-r border-neutral-200 dark:border-neutral-800 w-12"
          aria-hidden="true"
        >
          {lineIndex + 1}
        </span>
        <span className="table-cell pl-4 pr-4 py-0.5 font-mono text-xs text-neutral-800 dark:text-neutral-200 whitespace-pre">
          {tokenizeAndSearch(line, language, searchQuery)}
        </span>
      </div>
    );
  });
}

function tokenizeAndSearch(line: string, language: string, searchQuery: string): React.ReactNode {
  if (!line) {
    return '\u00A0'; // non-breaking space for empty line height
  }

  // If there's an active search query, highlight matching text
  if (searchQuery.trim().length > 0) {
    const q = searchQuery.toLowerCase();
    const lowerLine = line.toLowerCase();
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;

    let matchIdx = lowerLine.indexOf(q, lastIdx);
    if (matchIdx === -1) {
      return tokenizeLine(line, language);
    }

    let keyCounter = 0;
    while (matchIdx !== -1) {
      if (matchIdx > lastIdx) {
        parts.push(
          <span key={`pre-${keyCounter}`}>
            {tokenizeLine(line.substring(lastIdx, matchIdx), language)}
          </span>
        );
      }
      parts.push(
        <mark
          key={`mark-${keyCounter}`}
          className="bg-amber-300 dark:bg-amber-500/40 text-neutral-900 dark:text-amber-100 rounded-xs px-0.5 font-semibold"
        >
          {line.substring(matchIdx, matchIdx + q.length)}
        </mark>
      );
      lastIdx = matchIdx + q.length;
      matchIdx = lowerLine.indexOf(q, lastIdx);
      keyCounter++;
    }

    if (lastIdx < line.length) {
      parts.push(
        <span key={`post-${keyCounter}`}>
          {tokenizeLine(line.substring(lastIdx), language)}
        </span>
      );
    }
    return parts;
  }

  return tokenizeLine(line, language);
}

function tokenizeLine(text: string, language: string): React.ReactNode {
  if (language === 'json') {
    return highlightJson(text);
  }
  if (language === 'typescript' || language === 'javascript') {
    return highlightTypeScript(text);
  }
  if (language === 'html') {
    return highlightHtml(text);
  }
  if (language === 'css') {
    return highlightCss(text);
  }
  return highlightPlain(text);
}

function highlightJson(text: string): React.ReactNode {
  // Key: value, numbers, booleans, strings
  const regex = /(".*?")(\s*:)?|(\btrue\b|\bfalse\b|\bnull\b)|(-?\d+\.?\d*)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [fullMatch, str, isKey, keyword, num] = match;
    if (str && isKey) {
      parts.push(
        <span key={match.index} className="text-sky-600 dark:text-sky-400 font-medium">
          {str}
        </span>
      );
      parts.push(isKey);
    } else if (str) {
      parts.push(
        <span key={match.index} className="text-emerald-600 dark:text-emerald-400">
          {str}
        </span>
      );
    } else if (keyword) {
      parts.push(
        <span key={match.index} className="text-purple-600 dark:text-purple-400 font-medium">
          {keyword}
        </span>
      );
    } else if (num) {
      parts.push(
        <span key={match.index} className="text-amber-600 dark:text-amber-400">
          {num}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function highlightTypeScript(text: string): React.ReactNode {
  // Comments first
  const commentIdx = text.indexOf('//');
  if (commentIdx !== -1) {
    const before = text.substring(0, commentIdx);
    const comment = text.substring(commentIdx);
    return (
      <>
        {tokenizeCodeKeywords(before)}
        <span className="text-neutral-400 dark:text-neutral-500 italic">{comment}</span>
      </>
    );
  }
  return tokenizeCodeKeywords(text);
}

function tokenizeCodeKeywords(text: string): React.ReactNode {
  const regex =
    /\b(import|export|from|default|const|let|var|function|return|if|else|switch|case|break|interface|type|extends|implements|as|new|async|await|true|false|null|undefined)\b|(".*?"|'.*?'|`.*?`)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [fullMatch, kw, str] = match;
    if (kw) {
      parts.push(
        <span key={match.index} className="text-rose-600 dark:text-rose-400 font-medium">
          {kw}
        </span>
      );
    } else if (str) {
      parts.push(
        <span key={match.index} className="text-emerald-600 dark:text-emerald-400">
          {str}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function highlightHtml(text: string): React.ReactNode {
  const regex = /(<\/?[a-zA-Z0-9\-]+)|(\s+[a-zA-Z0-9\-]+)(=(".*?"|'.*?'))?|(\/?>)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [fullMatch, tag, attr, eqVal, val, closeTag] = match;
    if (tag) {
      parts.push(
        <span key={match.index} className="text-indigo-600 dark:text-indigo-400 font-medium">
          {tag}
        </span>
      );
    } else if (attr) {
      parts.push(
        <span key={match.index} className="text-sky-600 dark:text-sky-400">
          {attr}
        </span>
      );
    } else if (closeTag) {
      parts.push(
        <span key={match.index} className="text-indigo-600 dark:text-indigo-400">
          {closeTag}
        </span>
      );
    } else {
      parts.push(fullMatch);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function highlightCss(text: string): React.ReactNode {
  if (text.trim().startsWith('@')) {
    return <span className="text-purple-600 dark:text-purple-400">{text}</span>;
  }
  return text;
}

function highlightPlain(text: string): React.ReactNode {
  if (text.trim().startsWith('#')) {
    return <span className="text-neutral-400 dark:text-neutral-500 italic">{text}</span>;
  }
  return text;
}
