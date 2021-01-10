import CardGeneral from './components/CardGeneral';

const list = `
<div class="flex flex-wrap -m-4">
  <div class="w-full md:w-1/2 p-4">
    ${CardGeneral}
  </div>

  <div class="w-full md:w-1/2 p-4">
    ${CardGeneral}
  </div>

  <div class="w-full md:w-1/2 p-4">
    ${CardGeneral}
  </div>

  <div class="w-full md:w-1/2 p-4">
    ${CardGeneral}
  </div>
</div>
`;

export default {
  title: 'Card List'
};

export const General = () => list;

General.parameters = {
  docs: {
    source: {
      code: list
    }
  }
};
