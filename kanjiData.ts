/**
 * Master Kanji Database for Kanji Michi (漢字道)
 * Exactly 150 curated characters:
 * - JLPT N5: 50 foundational characters
 * - JLPT N4: 50 intermediate daily & workplace characters
 * - JLPT N3: 50 advanced vocational, medical, and manufacturing characters
 *
 * All equipped with:
 * - Indonesian meanings
 * - Onyomi & Kunyomi with isolated phonetic kana for accurate audio speech
 * - Rice-grid stroke order guides (田字格)
 * - Real-world vocabulary and example sentences with furigana
 */

import { KanjiItem } from '../types';
import { KANJI_N5 } from './kanji/kanjiN5.ts';
import { KANJI_N4 } from './kanji/kanjiN4.ts';
import { KANJI_N3 } from './kanji/kanjiN3.ts';

export { KANJI_N5, KANJI_N4, KANJI_N3 };

export const KANJI_DATA: KanjiItem[] = [
  ...KANJI_N5,
  ...KANJI_N4,
  ...KANJI_N3,
];
