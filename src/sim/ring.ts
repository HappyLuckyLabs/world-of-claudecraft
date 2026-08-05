// The Corrupted Neural Core: the ring every character carries out of the
// starter zone, and the one permanent identity choice attached to it.
//
// The ring is attuned exactly once, at the Inference Spire, by turning in the
// attunement quest with a chosen path. There is deliberately no re-attune
// path: the professions archetype system has amends/return quests for changing
// your mind, and the ring is the thing in this world that does not let you.
//
// Pure decision core (no DOM, no Sim internals, no rng): the quest-effect
// dispatch calls in, and PlayerMeta owns the state.

import type { PlayerMeta } from './sim';
import type { RingPath } from './types';

/** The three attunements, in the order they are offered. */
export const RING_PATHS: readonly RingPath[] = ['restore', 'merge', 'chaos'] as const;

export function isRingPath(value: string | undefined): value is RingPath {
  return value !== undefined && (RING_PATHS as readonly string[]).includes(value);
}

/** Every path a character may still choose. Empty once attuned: the choice is
 *  permanent, which is the whole point of it. */
export function ringAttunementTargets(meta: Pick<PlayerMeta, 'ringPath'>): RingPath[] {
  return meta.ringPath ? [] : [...RING_PATHS];
}

export function canAttuneRing(
  meta: Pick<PlayerMeta, 'ringPath'>,
  selection: string | undefined,
): boolean {
  if (meta.ringPath) return false;
  return isRingPath(selection);
}

/** Apply the attunement. Returns false (mutating nothing) when the character is
 *  already attuned or the selection is not a path, so the turn-in transaction
 *  can refuse cleanly. */
export function attuneRing(
  meta: Pick<PlayerMeta, 'ringPath'>,
  selection: string | undefined,
): boolean {
  if (!canAttuneRing(meta, selection)) return false;
  meta.ringPath = selection as RingPath;
  return true;
}
