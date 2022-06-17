import { startCase } from 'lodash';

export type CreateSpacingConfig = {
  padding: boolean;
  margin: boolean;
};

const spacing = ['0', '1', '2', '3', '4', '5', '6', 'auto'];

const sides = ['', 't', 'r', 'b', 'l', 'x', 'y'];

const sideMap = {
  '': 'All',
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: 'Horizontal',
  y: 'Vertical',
};

const _createSpacing = (startLetter: 'p' | 'm', side: string) =>
  spacing.map(s => {
    const button = document.createElement('button');
    button.innerText = startCase(`${startLetter} Space${s === '' ? '' : ` - ${s}`}`);
    button.classList.add(`${startLetter}${side}${s === '' ? '' : `-${s}`}`, 'button');
    return button;
  });

export const createSpacing = (config: CreateSpacingConfig) => {
  const div = document.createElement('div');

  sides
    .map(side => {
      const classes = [] as (HTMLButtonElement | HTMLBRElement)[];

      if (config.padding) {
        classes.push(..._createSpacing('p', side));
      }

      const br = document.createElement('br');
      classes.push(br);

      if (config.margin) {
        classes.push(..._createSpacing('m', side));
      }

      const innerDiv = document.createElement('div');
      const title = document.createElement('h3');
      title.innerText = sideMap[side as keyof typeof sideMap];
      const buttonContainer = document.createElement('div');
      innerDiv.appendChild(title);
      innerDiv.appendChild(buttonContainer);
      classes.forEach(c => buttonContainer.appendChild(c));

      return innerDiv;
    })
    .flat()
    .forEach(section => div.appendChild(section));

  return div;
};
