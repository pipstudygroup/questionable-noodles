import React, { Fragment } from 'react';

import useGlobal from './../../../utils/store/stateManager';

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
        <Fragment>
        {currentAttendance.map(function(person, index) {
            return <div>
                {person.name} <input type="checkbox" onChange={() => {updateAttendance(index)}} checked={person.isAttending ? "true" : ""}></input>
            </div>
        })}
        </Fragment>
    )
}

export default AttendanceList