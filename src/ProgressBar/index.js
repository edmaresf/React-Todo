import React from 'react';
import { TodoContext } from '../TodoContext';
import './ProgressBar.css';

function PBar() {
    // const {
      // completedTodos,
      // totalTodos,
    // } = React.useContext(TodoContext);
    
    return (
      <div className="circle-wrap">
        <div className='circle'>
            {/* {totalTodos} */}
            {/* {completedTodos}, */}
        </div>
      </div>,
      document.getElementById('chart')
    );
  }
  
  export { PBar };