
# Text Spinner for React

A simple, lightweight, and customizable text spinner component for React. Instead of a traditional loading animation, this component displays a rotating set of phrases to entertain the user.

## Installation

To use this component in your React project, you can either copy the `src/TextSpinner.js` and `src/TextSpinner.css` files into your project, or you can install it from npm (once it is published).

```bash
npm install react-text-spinner
```

## Usage

Import the `TextSpinner` component and its CSS file into your component:

```javascript
import React, { useState } from 'react';
import TextSpinner from './src/TextSpinner';
import './src/TextSpinner.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? 'Stop Loading' : 'Start Loading'}
      </button>
      {isLoading && <TextSpinner isLoading={isLoading} />}
    </div>
  );
}
```

## Props

| Prop        | Type      | Default         | Description                                                                 |
| ----------- | --------- | --------------- | --------------------------------------------------------------------------- |
| `isLoading` | `boolean` | `false`         | Controls whether the spinner is visible or not.                             |
| `theme`     | `string`  | `'1980s geeky'` | The theme of the phrases to display. See the list of available themes below. |

## Themes

The following themes are available:

*   `1980s geeky`
*   `things that go boom`
*   `waiting for godot`
*   `spacejunk`
*   `things an elevator might say`

## Example with Themes

```javascript
import React, { useState } from 'react';
import TextSpinner from './src/TextSpinner';
import './src/TextSpinner.css';

const themes = [
  '1980s geeky',
  'things that go boom',
  'waiting for godot',
  'spacejunk',
  'things an elevator might say'
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(themes[0]);

  return (
    <div>
      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? 'Stop Loading' : 'Start Loading'}
      </button>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
      {isLoading && <TextSpinner isLoading={isLoading} theme={theme} />}
    </div>
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
