import EMOJI_DATA from '../data/emoji-data';
export const unicodes = [];
export const unicodeToCodepoint = new Map();
EMOJI_DATA.forEach((unicode, codepoint) => {
  unicodes.push(unicode);
  unicodeToCodepoint.set(unicode, codepoint);
});