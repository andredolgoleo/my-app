import React from 'react';

type Props = {
  userName: string;
}

export const Header: React.FC<Props> = ({ userName }) => {

  return (<>
    <header>
      <h1>Hi {userName}!</h1>
    </header>
  </>);
};
