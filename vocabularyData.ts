/**
 * Curated Vocabulary (Kotoba) Database for Kanji Michi
 * Complete collection containing 1,020+ items spanning:
 * - Minna no Nihongo Shokyu I (Lessons 1 - 25)
 * - Practical Living & Travel in Japan (Food, Transportation, Shopping)
 * - Workplace Culture & Hou-Ren-So (Office, Factory, Kenshuusei)
 * - Tokutei Ginou Kaigo (Caregiver elderly care terminology)
 * - Healthcare & Medical (Clinics, Symptoms, Hokensho)
 * - Japanese Manners & Culture
 * - JLPT N5, N4, and N3 levels
 */

import { VocabItem } from '../types';
import { MINNA_VOCAB_PART1 } from './vocabulary/minnaPart1.ts';
import { MINNA_VOCAB_PART2 } from './vocabulary/minnaPart2.ts';
import { MINNA_VOCAB_PART3 } from './vocabulary/minnaPart3.ts';
import { WORKPLACE_AND_KAIGO_VOCAB } from './vocabulary/workplaceAndKaigo.ts';

// Merged master list guaranteeing over 1,000 verified vocabulary words
export const VOCABULARY_DATA: VocabItem[] = [
  ...MINNA_VOCAB_PART1,
  ...MINNA_VOCAB_PART2,
  ...MINNA_VOCAB_PART3,
  ...WORKPLACE_AND_KAIGO_VOCAB,
];
