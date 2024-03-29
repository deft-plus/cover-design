import { startCase } from 'lodash';

export type CreateCheckboxConfig = {};

export const createCheckbox = (config: CreateCheckboxConfig) => {
  const div = document.createElement('div');

  const container = document.createElement('div');
  container.classList.add('checkbox');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'default';
  container.appendChild(checkbox);

  const label = document.createElement('label');
  label.appendChild(document.createTextNode('Default'));
  label.htmlFor = 'default';
  container.appendChild(label);

  const separator = document.createElement('br');

  div.appendChild(container);
  div.appendChild(separator);

  checkboxColors.forEach(color => {
    const container = document.createElement('div');
    container.classList.add('checkbox', `is-${color}`);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = color;
    container.appendChild(checkbox);

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
