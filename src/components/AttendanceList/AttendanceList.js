import React from 'react';


const AttendanceList = (props) => {
    const { people, setPeople } = props;
    
    const updateAttendance = (index) => {
        let tempPeople = people;
        tempPeople[index].isAttending = !tempPeople[index].isAttending;
        setPeople([...tempPeople]);
    }

    return (
        <>
            {
                people.map(function (person, index) {
                    return <div>
                        {person.name} <input type="checkbox" onChange={() => { updateAttendance(index) }} checked={person.isAttending ? true : ""}></input>
                        {person.isAttending ? ` Hates: ${person.hates.join(', ')}` : ''}
                    </div>
                })
            }
        </>
    )
}

export default AttendanceList;