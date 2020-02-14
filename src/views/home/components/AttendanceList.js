import React from 'react';

import useGlobal from './../../../utils/store/stateManager';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const AttendanceList = () => {
    const [globalState, globalActions] = useGlobal();
    const setAttendingPersons = globalActions.setAttendingPersons;
    const currentAttendance = globalState.attendingPersons

    const updateAttendance = (index) => {
        let tempPeople = currentAttendance;
        tempPeople[index].isAttending = !tempPeople[index].isAttending;
        setAttendingPersons([...tempPeople]);
    }

    return (
        <FormGroup className="Yeet">
            {currentAttendance.map(function(person, index) {
                return <FormControlLabel
                    control={
                        <Switch
                            type="checkbox" 
                            onChange={()=>updateAttendance(index)} 
                            checked={person.isAttending ? "true" : ""}
                        />
                    }
                    label={person.name}  
                />
            })}
        </FormGroup>
    )
}

export default AttendanceList