import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stoptoast-btn stoptoast-btn-gre"
        onClick={props.start}>Toast</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stoptoast-btn stoptoast-btn-yel"
                  onClick={props.reset}>Cancel</button>
        </div> : ""
      }

  {(props.status === 2)? 
        <div>
          <button className="stoptoast-btn stoptoast-btn-yel"
                  onClick={props.reset}>Reset</button>
        
        </div> : ""
      }

    </div>
  );
}

export default BtnComponent;