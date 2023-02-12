import React from 'react';

function DisplayComponent(props) {

  return (
    <div>
       &nbsp;&nbsp;
       <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s + ' s'}</span>&nbsp;:&nbsp;
       <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms + ' ms'}</span>
    </div>
  );
}

export default DisplayComponent;