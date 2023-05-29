import React, { useState, useEffect } from 'react';
import { css } from 'twin.macro';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity: 0 }
`;

const cursor = css`
    animation: ${blink} 0.9s step-end infinite;
    margin-left: 2px;
`;

const Typewriter = ({ text = '', speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(intervalId);
                setIsTypingDone(true);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <span>
            {displayedText}
            {!isTypingDone && <span css={cursor}>|</span>}
        </span>
    );
};

export default Typewriter;
