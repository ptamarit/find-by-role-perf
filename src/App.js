import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(new Date(2021, 0, 1));

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={date} onChange={setDate} variant="static" />
    </MuiPickersUtilsProvider>
  );
}

export default App;
