import React from 'react';

function InputOption({ title, Icon, color }) {
  return <div className='inputOption'>
      {Icon && <Icon style={{ color: color }} />}
      <h4>{ title }</h4>
  </div>;
}

export default InputOption;
