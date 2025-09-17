
import React, { useState } from 'react';
import TextSpinner from './TextSpinner';
import './App.css';

const themes = [
  '1980s geeky',
  'things that go boom',
  'waiting for godot',
  'spacejunk',
  'things an elevator might say'
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('This is some initial text. Click the button to load new content.');
  const [theme, setTheme] = useState(themes[0]);

  const handleStart = () => {
    setIsLoading(true);
    setText('');

    // Simulate an API call
    setTimeout(() => {
      setText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Proin sed enim et nulla egestas commodo.');
      setIsLoading(false);
    }, 5000); // 5 seconds
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Spinner</h1>
      </header>
      <main>
        <div className="controls">
          <button onClick={handleStart} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Start'}
          </button>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div className={`content-area ${isLoading ? 'loading' : ''}`}>
          {isLoading && (
            <div className="overlay">
              <TextSpinner isLoading={isLoading} theme={theme} />
            </div>
          )}
          <textarea value={text} readOnly placeholder="Click 'Start' to load content..." />
        </div>
      </main>
    </div>
  );
}

export default App;
