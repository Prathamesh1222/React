import React, { useState } from 'react';

import DayMonthSwitch from '../../components/DayMonthSwitch';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';



export default function DashboardHeader({getData}) {
    const [firstDate, setFirstDate] = useState(null);
    const [secondDate, setSecondDate] = useState(null)
    const [dayOrMonthState, setDayOrMonthState] = React.useState('Month');
    const dayOrMonthSwitchHandler = (value) => {
        setDayOrMonthState(value)        
    }
    const searchHandler = () => {
   

        if (firstDate === null || secondDate === null) {
            toast.error('Please select both dates', 'danger');
        } else {
            const ftDate =  dayjs(firstDate).format(dayOrMonthState==="Date"?'DD/MM/YYYY':'MM/YYYY');
            const sDate =  dayjs(secondDate).format(dayOrMonthState==="Date"?'DD/MM/YYYY':'MM/YYYY');
             
            //CAll api
           
            console.log({ ftDate, sDate,dayOrMonthState })
            getData({ ftDate, sDate,dayOrMonthState })
        } 
    }
    return (
        <>
            <h2>LPS API STATISTICS</h2>
            <div className='grid-containerr' >


                <div className='ww'>
                    <DayMonthSwitch checked={false} onSwitch={dayOrMonthSwitchHandler} />
                </div>
                {dayOrMonthState === 'Date' ? (
                    <>
                        <DatePicker label={'First Date'} slotProps={{ textField: { size: 'small' } }} views={['day', 'month', 'year']}
                             defaultValue={null}
                            onAccept={(value) => {
                                setFirstDate(value)
                            }}
                        />
                        <DatePicker label={'Second Date'} slotProps={{ textField: { size: 'small' } }} views={['day', 'month', 'year']}
                             defaultValue={null}  
                            onAccept={(value) => {
                                setSecondDate(value)
                            }}
                        />


                    </>) : (
                    <>
                        <DatePicker label={'First Month/Year'} slotProps={{ textField: { size: 'small' } }} views={['month', 'year']}
                            
                            defaultValue={null}
                            onAccept={(value) => {
                                setFirstDate(value)
                            }}
                        />
                        <DatePicker label={'Second Month/Year'} slotProps={{ textField: { size: 'small' } }} views={['month', 'year']}
                             defaultValue={null}
                            onAccept={(value) => {
                                setSecondDate(value)
                            }}
                        />
                    </>

                )
                }


                <Button variant="outlined" color="primary" onClick={searchHandler}>search</Button>

            </div>

        </>
    );
}