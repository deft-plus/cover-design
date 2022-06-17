import { startCase } from 'lodash';

export type CreateButtonConfig = {
  disabled?: boolean;
  outlined?: boolean;
  contained?: boolean;
  rounded?: boolean;
  loading?: boolean;
  icon?: boolean;
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'size-1'
    | 'size-2'
    | 'size-3'
    | 'size-4'
    | 'size-5'
    | 'size-6'
    | 'size-7';
};

type Item = {
  button: HTMLButtonElement;
  color?: string;
};

const _createButton = ({ icon, color }: { icon?: boolean; color?: string }) => {
  const button = document.createElement('button');

  if (icon === true) {
    const icon = document.createElement('i');
    icon.classList.add('bx', 'bx-search');
    button.appendChild(icon);
    button.classList.add('m-1', 'button-icon');
  } else {
    button.innerText = startCase(color ?? 'Default');
    button.classList.add('m-1', 'button');
  }

  !!color && button.classList.add(`is-${color}`);

  return { button, color } as Item;
};

export const createButton = (config: CreateButtonConfig) => {
  const div = document.createElement('div');

  const items = buttonColors.map(color => _createButton({ icon: config.icon, color }));
  items.unshift(_createButton({ icon: config.icon }));

  items.forEach(item => {
    if (config.disabled === true) {
      item.button.setAttribute('disabled', 'disabled');
    }

    if (config.contained === true) {
      item.button.classList.add('is-contained');
    }

    if (config.rounded === true) {
      item.button.classList.add('is-rounded');
    }

    if (config.outlined === true) {
      item.button.classList.add('is-outlined');
    }

    if (config.loading === true) {
      item.button.classList.add('is-loading');
    }

    if (config.size) {
      item.button.classList.add(`is-${config.size}`);
    }

    if (['white', 'scale-1', 'red', 'primary'].includes(item.color ?? '')) {
      const separator = document.createElement('br');
      div.appendChild(separator);
    }

    div.appendChild(item.button);
  });

  return div;
};

export const buttonColors = [
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
