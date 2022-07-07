import { startCase } from 'lodash';

export type CreateButtonConfig = {};

export const createCheckbox = (config: CreateButtonConfig) => {
  const div = document.createElement('div');

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const separator = document.createElement('br');

  label.classList.add('checkbox');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode('Default'));

  div.appendChild(label);
  div.appendChild(separator);

  checkboxColors.forEach(color => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const separator = document.createElement('br');

    label.classList.add('checkbox', `is-${color}`);
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(startCase(color)));

    div.appendChild(label);
    div.appendChild(separator);
  });

  return div;
};

export const checkboxColors = [
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
