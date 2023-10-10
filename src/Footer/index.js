import React from 'react';
import { ReactComponent as Git } from './git.svg';
import { ReactComponent as In } from './in.svg';
import { ReactComponent as Gmail } from './gmail.svg';
import './Footer.css';

function Footer() {
    return (
        <>
        <h2>Déjame saber tus comentarios a:</h2>
        <footer >
            <a className="Links-container" href="mailto:esteban.dmares@gmail.com?subject=Info&amp;body=Hello%20Esteban" alt="website">
            <Gmail />
            </a>
            <a className="Links-container" href="https://github.com/edmaresf">
            <Git />
            </a>
            <a className="Links-container" href="https://www.linkedin.com/in/estebanmares/">
            <In fill='#0a66c2'/>
            </a>
      </footer>
      </>
    )
  }
  
  export { Footer };


