import Link from 'next/link';

export default function Docs() {
  return (
    <div>
      <h1>Docs | Buttons</h1>
      <br />
      <Link href="/" passHref>
        <a>home</a>
      </Link>
      <br />
      <div>
        <h3>Buttons</h3>

        <p>
          The button is an essential element of any design. It&apos;s meant to look and behave as an
          interactive element of your page.
        </p>

        <button className="cui-button">Button</button>

        <div>
          <p>
            The <code>.cui-button</code> class can be used on:
          </p>

          <ul>
            <li>
              <code>{'<a>'}</code> anchor links
            </li>
            <li>
              <code>{'<button>'}</code> form buttons
            </li>
          </ul>
        </div>

        <h4>Colors</h4>

        <h5>Grey</h5>
        <button className="cui-button is-white">White</button>
        <button className="cui-button is-light">Light</button>
        <button className="cui-button is-dark">Dark</button>
        <button className="cui-button is-black">Black</button>

        <h5>Palette</h5>
        <button className="cui-button is-red">Red</button>
        <button className="cui-button is-pink">Pink</button>
        <button className="cui-button is-purple">Purple</button>
        <button className="cui-button is-deep-purple">Deep Purple</button>
        <button className="cui-button is-indigo">Indigo</button>
        <button className="cui-button is-blue">Blue</button>
        <button className="cui-button is-light-blue">Light Blue</button>
        <button className="cui-button is-cyan">Cyan</button>
        <button className="cui-button is-teal">Teal</button>
        <button className="cui-button is-green">Green</button>
        <button className="cui-button is-light-green">Light Green</button>
        <button className="cui-button is-lime">Lime</button>
        <button className="cui-button is-yellow">Yellow</button>
        <button className="cui-button is-amber">Amber</button>
        <button className="cui-button is-orange">Orange</button>
        <button className="cui-button is-deep-orange">Deep Orange</button>
        <button className="cui-button is-brown">Brown</button>
        <button className="cui-button is-grey">Grey</button>
        <button className="cui-button is-blue-grey">Blue-grey</button>

        <br />

        <h5>Theme</h5>
        <button className="cui-button is-primary">Primary</button>
        <button className="cui-button is-secondary">Secondary</button>
        <button className="cui-button is-info">Info</button>
        <button className="cui-button is-success">Success</button>
        <button className="cui-button is-warning">Warning</button>
        <button className="cui-button is-error">Error</button>

        <h4>Sizes</h4>
        <button className="cui-button is-small">Small</button>
        <button className="cui-button">Default</button>
        <button className="cui-button is-regular">Regular</button>
        <button className="cui-button is-medium">Medium</button>
        <button className="cui-button is-large">Large</button>

        <p>
          You can change the size of multiple buttons at once by wrapping them in a cui-buttons
          parent, and applying one of 3 modifiers:
        </p>

        <h4>Variants</h4>

        <h5>Outlined</h5>
        <button className="cui-button is-primary is-outlined" disabled>
          Primary
        </button>
        <button className="cui-button is-secondary is-outlined">Secondary</button>
        <button className="cui-button is-info is-outlined">Info</button>
        <button className="cui-button is-success is-outlined">Success</button>
        <button className="cui-button is-warning is-outlined">Warning</button>
        <button className="cui-button is-error is-outlined">Error</button>

        <h5>Contained</h5>
        <button className="cui-button is-primary is-contained" disabled>
          Primary
        </button>
        <button className="cui-button is-secondary is-contained">Secondary</button>
        <button className="cui-button is-info is-contained">Info</button>
        <button className="cui-button is-success is-contained">Success</button>
        <button className="cui-button is-warning is-contained">Warning</button>
        <button className="cui-button is-error is-contained">Error</button>

        <h4>Round</h4>
        <button className="cui-button is-primary is-rounded">Primary</button>
        <button className="cui-button is-secondary is-rounded" disabled>
          Secondary
        </button>
        <button className="cui-button is-info is-rounded is-outlined">Info</button>
        <button className="cui-button is-success is-rounded is-contained">Success</button>
        <button className="cui-button is-warning is-rounded">Warning</button>
        <button className="cui-button is-error is-rounded">Error</button>

        <h4>Groups</h4>
        <div className="cui-buttons are-medium">
          <button className="cui-button">All</button>
          <button className="cui-button">Medium</button>
          <button className="cui-button">Size</button>
        </div>

        <h4>State</h4>

        <h5>Normal</h5>
        <button className="cui-button is-primary">Primary</button>
        <button className="cui-button is-secondary">Secondary</button>
        <button className="cui-button is-info">Info</button>
        <button className="cui-button is-success">Success</button>
        <button className="cui-button is-warning">Warning</button>
        <button className="cui-button is-error">Error</button>

        <h5>Loading</h5>
        <button className="cui-button is-primary is-loading">Primary</button>
        <button className="cui-button is-secondary is-loading">Secondary</button>
        <button className="cui-button is-info is-loading">Info</button>
        <button className="cui-button is-success is-loading">Success</button>
        <button className="cui-button is-warning is-loading">Warning</button>
        <button className="cui-button is-error is-loading">Error</button>

        <h5>Disabled</h5>
        <button className="cui-button is-primary" disabled>
          Primary
        </button>
        <button className="cui-button is-secondary" disabled>
          Secondary
        </button>
        <button className="cui-button is-info" disabled>
          Info
        </button>
        <button className="cui-button is-success" disabled>
          Success
        </button>
        <button className="cui-button is-warning" disabled>
          Warning
        </button>
        <button className="cui-button is-error" disabled>
          Error
        </button>

        <h4>Icons (with Boxicons)</h4>
        <button className="cui-button-icon">
          <i className="bx bx-search"></i>
        </button>
      </div>
    </div>
  );
}
