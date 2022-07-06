import { FC } from 'react';

const Checkboxes: FC = () => {
  return (
    <div>
      <h1>Checkboxes</h1>

      <label className="checkbox">
        <input type="checkbox" />
        Remember me
      </label>
    </div>
  );
};

export default Checkboxes;
