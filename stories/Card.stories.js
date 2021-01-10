import CardGeneral from './components/CardGeneral';

export default {
  title: 'Card'
};

export const General = () => `<div class="max-w-md">${CardGeneral}</div>`;

General.parameters = {
  docs: {
    source: {
      code: CardGeneral
    }
  }
};
