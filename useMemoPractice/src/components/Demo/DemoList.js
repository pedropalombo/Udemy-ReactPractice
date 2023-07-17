import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props; //getting only 'props.items'
  
  //same as useCallback(), in but for data
  //OBS: explained in '01-starting-setup/src/App.js'
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
