// The Corrupted Neural Core's attunement: the one permanent identity choice in
// the game. These pin the rules that make it permanent, because every other
// identity transition in this world (archetype pairs, hobbies) is reversible
// and the ring deliberately is not.

import { describe, expect, it } from 'vitest';
import { computeQuestState } from '../src/sim/quests/quest_commands';
import {
  attuneRing,
  canAttuneRing,
  isRingPath,
  RING_PATHS,
  ringAttunementTargets,
} from '../src/sim/ring';
import type { RingPath } from '../src/sim/types';

function unattuned(): { ringPath: RingPath | null } {
  return { ringPath: null };
}

describe('ring attunement', () => {
  it('offers exactly the three authored paths, in order', () => {
    expect([...RING_PATHS]).toEqual(['restore', 'merge', 'chaos']);
  });

  it('recognizes only real paths', () => {
    for (const path of RING_PATHS) expect(isRingPath(path)).toBe(true);
    expect(isRingPath('debug')).toBe(false);
    expect(isRingPath('')).toBe(false);
    expect(isRingPath(undefined)).toBe(false);
  });

  it('offers every path while unattuned and none once attuned', () => {
    expect(ringAttunementTargets(unattuned())).toEqual(['restore', 'merge', 'chaos']);
    expect(ringAttunementTargets({ ringPath: 'merge' })).toEqual([]);
  });

  it('attunes an unattuned ring to the selected path', () => {
    for (const path of RING_PATHS) {
      const meta = unattuned();
      expect(attuneRing(meta, path)).toBe(true);
      expect(meta.ringPath).toBe(path);
    }
  });

  it('refuses a second attunement and leaves the first standing', () => {
    const meta = unattuned();
    expect(attuneRing(meta, 'restore')).toBe(true);
    for (const path of RING_PATHS) {
      expect(canAttuneRing(meta, path)).toBe(false);
      expect(attuneRing(meta, path)).toBe(false);
      expect(meta.ringPath).toBe('restore');
    }
  });

  it('refuses a selection that is not a path, mutating nothing', () => {
    for (const bogus of ['debug', 'vibecode', '', undefined]) {
      const meta = unattuned();
      expect(canAttuneRing(meta, bogus)).toBe(false);
      expect(attuneRing(meta, bogus)).toBe(false);
      expect(meta.ringPath).toBeNull();
    }
  });
});

describe('the attunement quest is offered exactly once', () => {
  // The gate lives in computeQuestState so BOTH hosts share it: the offline Sim
  // passes live PlayerMeta.ringPath, the online client passes its cprof mirror.
  const done = new Set(['q_spire_reading']);

  it('is available to an unattuned character who finished the reading', () => {
    expect(
      computeQuestState('q_spire_attunement', new Map(), done, 20, undefined, undefined, null),
    ).toBe('available');
  });

  it('is unavailable once the ring has settled, whatever the path', () => {
    for (const path of RING_PATHS) {
      expect(
        computeQuestState('q_spire_attunement', new Map(), done, 20, undefined, undefined, path),
      ).toBe('unavailable');
    }
  });

  it('still needs the reading first', () => {
    expect(
      computeQuestState('q_spire_attunement', new Map(), new Set(), 20, undefined, undefined, null),
    ).toBe('unavailable');
  });
});
