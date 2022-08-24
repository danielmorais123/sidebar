import { useCallback, useState } from 'react';
import '@natscale/react-calendar/dist/main.css';

const CalendarComp = () => {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue],
  );

  return (
    <div>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};

export default CalendarComp;
