import React from "react";
import useGlobalHook from "use-global-hook";

import people from './../../services/peopleAPI/peoplesAPI'

const actions = {
  setAttendingPersons: (store, attendingPersons) => {
    store.setState({attendingPersons});
  },
  setCurrentLunchLocation: (store, currentLunchLocation) => {
    store.setState({currentLunchLocation})
  }
}

const initialState = {
  currentLunchLocation: 'Click the Button',
  attendingPersons: people
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
