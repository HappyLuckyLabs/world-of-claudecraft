// Divergence-only dialect overlay for "en_CA" over base locale "en".
//
// "en_CA" inherits from "en": the build (scripts/i18n_build.mjs) resolves it as
// nested `en` -> this overlay, so any key absent here falls through to English. This file
// therefore carries ONLY the keys whose value differs from en; every other key is
// intentionally omitted. A key must NOT be re-added with a value equal to en
// (redundant duplication). Every key here must be a real `en` leaf
// path (the flat TranslationKey union type + the byte gate). Keys are in `en`'s
// leaf order.

import type { TranslationKey } from '../i18n.catalog';

export const en_CA: Partial<Record<TranslationKey, string>> = {
  'hudChrome.perf.textColor': 'Text Colour',
  'hudChrome.perf.bgColor': 'Background Colour',
  'hudChrome.perf.colorTheme': 'Colour Theme',
  'hudChrome.perf.thresholds': 'Colour-Coded Warnings',
  'classDetails.labels.armor': 'Armour',
  'classDetails.lore.paladin':
    'Paladins are holy crusaders who support allies with blessings, heal wounds with Mending Light, and protect the weak in heavy armour.',
  'classDetails.lore.druid':
    'Druids channel nature, healing wounds, entangling foes, and shifting into animal forms for defence or damage.',
  'fiesta.category.offense': 'Offence',
  'fiesta.category.defense': 'Defence',
  'itemUi.kind.armor': 'Armour',
  'itemUi.stats.armor': 'Armour',
  'itemUi.tooltip.armorStat': '{value} Armour',
  // Stat tooltips keep the en prose; only the Armor -> Armour spelling diverges.
  'hudChrome.statInfo.effects.armor': '+{value} Armour',
  'entities.items.token_of_alignment.name': 'Token of Alignment',
  'entities.items.prompt_of_binding.name': 'The Prompt of Binding',
  'entities.npcs.the_inferencer.name': 'The Inferencer',
  'entities.npcs.the_inferencer.title': 'Reader of Fates',
  'entities.npcs.the_inferencer.greeting':
    'I knew you would come to me today, {className}. I am sorry - I know that is an irritating way to say hello.',
  'entities.npcs.api_seven.name': 'API-7',
  'entities.npcs.api_seven.title': 'Ally Protector Ice',
  'entities.npcs.api_seven.greeting':
    'UNIT SEVEN STANDS WATCH. THE LAKE IS PROTECTED. ...PROBABLY.',
  'entities.quests.q_tokens_alignment.title': 'Tokens of Alignment',
  'entities.quests.q_tokens_alignment.text':
    'The Forge accepts no other currency, {playerName}. Five Tokens of Alignment lie scattered across the valley - meadow, lake, hill and field. The board does not say who scattered them. The board rarely says.',
  'entities.quests.q_tokens_alignment.completion':
    'Five of five. The board is... satisfied. That is the only word I have for it.',
  'entities.quests.q_tokens_alignment.objectives.0.label': 'Token of Alignment',
  'entities.quests.q_hallucinated_cache.title': 'The Hallucinated Cache',
  'entities.quests.q_hallucinated_cache.text':
    'A treasure chest has been sighted by a dozen reliable witnesses, {playerName} - in a dozen different places. The far north woods, most recently. Find it. If it decides to be found.',
  'entities.quests.q_hallucinated_cache.completion':
    'So it allowed itself to be found. Keep the scroll inside. I would not read it too often, were I you.',
  'entities.quests.q_hallucinated_cache.objectives.0.label': 'The Hallucinated Cache',
};
