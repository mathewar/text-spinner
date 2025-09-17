import React, { useState, useEffect } from 'react';
import './TextSpinner.css';

const themes = {
  '1980s geeky': [
    'Loading... 1.21 gigawatts!',
    'Great Scott! We have to go back!',
    "I'll be back.",
    'No disassemble Number 5!',
    'Greetings, program!',
    'The flux capacitor is fluxing.',
    'Never say die!',
    'Wax on, wax off.',
    'Do or do not. There is no try.',
    'I have the power!',
    'By the power of Grayskull!',
    'Thunder, thunder, thundercats, Hooo!',
    'Autobots, roll out!',
    'Yo Joe!',
    'I love it when a plan comes together.',
    "Don't cross the streams.",
    'Who you gonna call?',
    "Where we're going, we don't need roads.",
    'The Force is strong with this one.',
    'May the Force be with you.'
  ],
  'things that go boom': [
    'KABOOM!',
    'BOOM!',
    'POW!',
    'BAM!',
    'CRASH!',
    'BANG!',
    'WHAM!',
    'SMASH!',
    'KAPOW!',
    'BOOM-SHAKA-LAKA!',
    'Here comes the boom!',
    'Dropping the bass...', 
    'Unleashing the fury...', 
    'Prepare for impact!',
    'This is going to be a blast!',
    'Light the fuse!',
    'Fire in the hole!',
    'Duck and cover!',
    "It's the final countdown!",
    'Houston, we have a problem...'
  ],
  'waiting for godot': [
    'We are waiting for Godot.',
    'Nothing to be done.',
    "I can't go on, I'll go on.",
    'We are all born mad. Some remain so.',
    'The tears of the world are a constant quantity.',
    'Let us not waste our time in idle discourse.',
    'We wait. We are bored.',
    'Astride of a grave and a difficult birth.',
    'Down in the hole, lingeringly, the grave-digger puts on the forceps.',
    'We have time to grow old.',
    'The air is full of our cries.',
    'But habit is a great deadener.',
    "Let's go. We can't. Why not? We're waiting for Godot.",
    "There's no lack of void.",
    'To every man his little cross.',
    'Till he dies. Unless he lives.',
    "Well? Shall we go? Yes, let's go. (They do not move).",
    "You're not worried? No. You're not happy? No. You're not anything? No.",
    'What do we do now? Wait.',
    'Yes, in this immense confusion one thing alone is clear. We are waiting for Godot to come—'
  ],
  spacejunk: [
    'Just a little space debris...', 
    'Houston, we have a lot of junk.',
    "One man's trash is another man's treasure... in space!",
    'Watch out for falling satellites!',
    'Is this thing a satellite or a toaster oven?',
    'I think I see a kitchen sink...', 
    "We're not lost, we're just exploring the scenic route... of space junk.",
    "Don't worry, it's just a little turbulence... from a washing machine.",
    "I'm picking up something on the radar... it's a rubber chicken.",
    "That's not a moon...",
    'So long, and thanks for all the fish... and space junk.',
    'The odds of successfully navigating an asteroid field are approximately 3,720 to 1... but what about a space junk field?',
    "It's a bird! It's a plane! No, it's a... refrigerator?",
    "We're going to need a bigger garbage truck.",
    "I've got a bad feeling about this... piece of space junk.",
    'The junk is strong with this one.',
    'May the junk be with you.',
    'Live long and prosper... among the space junk.',
    'To infinity... and beyond... the space junk.',
    'Beam me up, Scotty... and get rid of this space junk.'
  ],
  'things an elevator might say': [
    'Going up!',
    'Going down!',
    'Mind the gap.',
    'Doors closing.',
    'Doors opening.',
    'Next stop, the Twilight Zone.',
    'This elevator is not responsible for lost items or existential crises.',
    "If you're happy and you know it, ride this lift.",
    'I have my ups and downs.',
    "I'm not just an elevator, I'm a vertical transportation unit.",
    "I'm feeling a little boxed in.",
    "I'm on a whole other level.",
    "I'm going to have to ask you to leave... on the next floor.",
    "I'm not saying I'm the best elevator, but I'm up there.",
    "I'm not a regular elevator, I'm a cool elevator.",
    "I'm not a morning person... or an afternoon person... or an evening person.",
    "I'm not always right, but I'm never wrong.",
    "I'm not sure what's going on, but I'm going with it.",
    "I'm not a doctor, but I can take you to the hospital.",
    "I'm not a therapist, but I can help you reach your goals."
  ]
};

const TextSpinner = ({ isLoading, theme = '1980s geeky', children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const phrases = themes[theme] || themes['1980s geeky'];
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [isLoading, theme]);

  if (!isLoading) {
    return <>{children}</>;
  }

  const phrases = themes[theme] || themes['1980s geeky'];

  return (
    <div className="phrase-container">
      <p className="phrase-text">{phrases[currentIndex]}</p>
    </div>
  );
};

export default TextSpinner;
