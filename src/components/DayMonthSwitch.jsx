import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function DayMonthSwitch({onSwitch, checked}) {
  const [switchChecked, setSwitchChecked] = React.useState(checked);

  const handleChange = (event) => {
      if(onSwitch){
        const value  =event.target.checked===true?'Date':'Month'
        onSwitch(value)
      }
      setSwitchChecked(event.target.checked);
  };

  return (
      <>
      <span>Month </span>
    <Switch
      checked={switchChecked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}

    />
    <span>Day</span>
    </>
  );
}