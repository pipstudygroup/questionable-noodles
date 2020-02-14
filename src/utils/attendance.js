import React, { Fragment, useState } from 'react';

const [people, setPeople] = useState(peopleList);

const attendance= (props) => {
      const [people, setPeople] = useState(peopleList);


  const updateAttendance = (index) => {
    let tempPeople = people;
    tempPeople[index].isAttending = !tempPeople[index].isAttending;
    setPeople([...tempPeople]);
  }

}