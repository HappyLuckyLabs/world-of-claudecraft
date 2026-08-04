# PARODY.md — the Claude of the Rings meta-layer

(Named PARODY.md because this fork's upstream DESIGN.md is the visual design
language. This file is the parody/meta-layer canon, ported from the Unity-era
prototype where it was DESIGN.md.)

Supersedes the meta-layer examples in GDD v1.0, which overstated the effect.
The GDD's structure (factions, zones, ring, endgame reveal) is unchanged.

## The core principle

**Surface first.** This is a charming low-poly fantasy MMO that a casual player
can play start to finish without ever noticing anything is off. The meta layer
is not content — it is *suspicion*. It accumulates from double meanings and
small wrongnesses, and it only becomes text at the endgame reveal.

If a name, spell, or line of dialogue makes a player think "ah, an AI joke,"
it has failed. If it makes them think nothing — but a second playthrough makes
them go "...wait" — it has succeeded.

## The dial (every piece of content sits at exactly one level)

| Level | What | Budget |
|-------|------|--------|
| **0 — Surface** | Pure fantasy. Most content lives here. | Unlimited |
| **1 — Double meaning** | Reads as fantasy; happens to also be an AI term. Invisible until you know. | Common, but every instance must pass the "casual player wouldn't blink" test |
| **2 — Wrongness** | Gameplay-level oddities, never explained in text. The chest that's never where it was. The boss that always attacks the third party member. A quest board that refills itself. | Rare — a handful per zone |
| **3 — Overt** | The simulation says the quiet part out loud. | Endgame reveal ONLY (Dark Lord = AI entity), plus at most 1-2 deeply hidden easter eggs |

## Calibration rulings (from playtesting, 2026-08-04)

**Approved — these work:**
- *Hallucination* as a spell/enemy/quest concept ("The Hallucinated Cache") — level 1-2
- *Co-Work* for raids/arena specifically (not sprinkled on everything) — level 1
- *Tokens* as currency instead of coins — level 1
- *Alignment* as the faction choice — level 1
- *Routine* for daily/repeat quests, *Dispatch Board* as quest hub — level 1
- *Glitch Sprite* — sprite is both a fairy and a graphics term — level 1
- "Large Lizard Monster" as a boss name — level 1 **without ever printing "LLM"**
- *Simulacrum*, *Prompt* (as scrolls), *Inference* (as divination) — level 1 when
  dressed in full fantasy clothing

**Rejected — cut or reworked:**
- Printing the acronym: "The LLM — Large Lizard Monster" explains its own joke
- Spells/paths named after the practice itself ("Vibe Code") — nothing in the
  game refers to vibe coding until the secret ending
- Per-ability/per-item "meta notes" and version strings (v.0.1.3, "Unowned",
  "do not ship to production") — a whole parallel commentary track is overkill
- The `\` meta overlay that dumps the jargon layer on demand — the layer should
  never be listable
- NPC dialogue that winks at the camera ("deterministic loop", "generated
  token by token", "CONFIDENCE: 0.73")

**Kept, endgame-scoped (level 3 by design):**
- The ring is the *Corrupted Neural Core*
- *The Neural Forge* objective in the Volcanic Rift
- The Dark Lord reveal, the three endings (delete / merge / the secret
  terminal ending — this is where vibe coding finally gets named)

## Writing guide

- NPCs may be *slightly off* (a seer who's too accurate, a golem that speaks
  in a flat register, a quartermaster who can't remember hiring anyone) — but
  they explain themselves in-world, never in jargon.
- Wrongness is shown, not told. No text ever labels a glitch as a glitch.
- When in doubt, write the pure-fantasy version first, then ask whether one
  word can be swapped for a double meaning without changing how it reads.
