import React from 'react';
import { sprite } from '../styles/emojione-sprite';
import EMOJI_DATA from '../data/emoji-data';

const Emoji = ({
  codepoint,
  style = {},
  onClick,
  ariaLabel
}) => {
  return React.createElement("span", {
    onClick: onClick,
    style: sprite(codepoint, style),
    role: "img",
    "aria-label": ariaLabel
  }, EMOJI_DATA.get(codepoint));
};

const getRenderer = ({
  style,
  onClick,
  ariaLabel
}) => (codepoint, key) => React.createElement(Emoji, {
  codepoint: codepoint,
  style: style,
  onClick: onClick,
  ariaLabel: ariaLabel,
  key: key
});

export default getRenderer;