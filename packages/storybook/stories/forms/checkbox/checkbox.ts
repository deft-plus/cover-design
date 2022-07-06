export type CreateButtonConfig = {};

export const createCheckbox = (config: CreateButtonConfig) => {
  const label = document.createElement('label');
  const checkbox = document.createElement('input');

  label.classList.add('checkbox');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode('Check me'));

  return label;
};
