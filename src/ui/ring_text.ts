// Localized names and one-line descriptions for the ring's three attunements.
// The sim owns the vocabulary (src/sim/ring.ts); this is the display layer the
// quest dialog reads when it offers the choice.

import { isRingPath } from '../sim/ring';
import { t } from './i18n';

export function ringPathNameText(target: string): string {
  if (!isRingPath(target)) return target;
  return t(`hudChrome.ring.path.${target}` as never);
}

export function ringPathPreviewText(target: string): string {
  if (!isRingPath(target)) return '';
  return t(`hudChrome.ring.preview.${target}` as never);
}
