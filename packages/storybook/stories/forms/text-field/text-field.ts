import { startCase } from 'lodash';

export type CreateButtonConfig = {};

export const createCheckbox = (config: CreateButtonConfig) => {
  const div = document.createElement('div');

  const container = document.createElement('div');
  container.classList.add('text-field');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'default';
  input.id = 'default';
  container.appendChild(input);

  const label = document.createElement('label');
  label.appendChild(document.createTextNode('Default'));
  label.htmlFor = 'default';
  container.appendChild(label);

  const separator = document.createElement('br');

  div.appendChild(container);
  div.appendChild(separator);

  switchColors.forEach(color => {
    const container = document.createElement('div');
    container.classList.add('text-field', `is-${color}`);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = color;
    input.id = color;
    container.appendChild(input);

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(startCase(color)));
    label.htmlFor = color;
    container.appendChild(label);

    const separator = document.createElement('br');
    div.appendChild(container);
    div.appendChild(separator);
  });

  return div;
};

export const switchColors = [
  'white',
  'light',
  'dark',
  'black',
  'scale-1',
  'scale-2',
  'scale-3',
  'scale-4',
  'scale-5',
  'scale-6',
  'scale-7',
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
  'blue-grey',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];
