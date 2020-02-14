import React, { Fragment } from 'react';

import useGlobal from '../../utils/store/stateManager'

const NamesList = () => {
    const [globalState, globalActions] = useGlobal();

    const updateAttendance = (index) => {
        let tempPeople = globalState.attendingPersons;
        tempPeople[index].isAttending = !tempPeople[index].isAttending;
        globalActions.setAttendingPersons([...tempPeople]);
    }

    return (
        <Fragment>
        {globalState.attendingPersons.map(function(person, index) {
            return <div>
            {person.name} <input type="checkbox" onChange={() => {updateAttendance(index)}} checked={person.isAttending ? "true" : ""}></input>
        </div>
        })}
        </Fragment>
    )
}

export default NamesList