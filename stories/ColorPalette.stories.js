import ColorPrimary from './components/ColorPrimary';
import ColorSecondary from './components/ColorSecondary';
import {
  ColorBlack,
  ColorDarkGray,
  ColorMiddleGray,
  ColorLightGray
} from './components/ColorGray';

const template = `
<div class="flex flex-wrap -mx-4">
  <div class="w-full sm:w-1/4 p-4">
    ${ColorPrimary}
  </div>

  <div class="w-full sm:w-1/4 p-4">
    ${ColorSecondary}
  </div>
</div>

<div class="flex flex-wrap -mx-4">
  <div class="w-full sm:w-1/4 p-4">
    ${ColorBlack}
  </div>

  <div class="w-full sm:w-1/4 p-4">
    ${ColorDarkGray}
  </div>

  <div class="w-full sm:w-1/4 p-4">
    ${ColorMiddleGray}
  </div>

  <div class="w-full sm:w-1/4 p-4">
  ${ColorLightGray}
</div>
</div>
`;

export default {
  title: 'Color',
  parameters: {
    docs: {
      disable: true
    }
  }
};

export const ColorPalette = () => `<div class="max-w-3xl">${template}</div>`;
