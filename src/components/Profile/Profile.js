import React from 'react';
import { useLocation } from 'react-router-dom';

const useSearch = () => {
  return new URLSearchParams(useLocation().search);
}

export const Profile = () => {
  const search = useSearch();
  return (
    <>
        <div>I am a Profile Page! HI</div>
        <div>{search.get('name')}</div>
    </>
  )
}
