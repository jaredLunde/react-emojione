import EMOJI_DATA from '../data/emoji-data';

const getRenderer = () => codepoint => EMOJI_DATA.get(codepoint);

export default getRenderer;