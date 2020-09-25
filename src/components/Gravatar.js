import React from 'react';
import md5 from 'md5';

function Gravatar (props) {
  const email = props.email;
  const hash = md5 (email);
  // if (props.avatar === undefined) {
  //   return (
  //     <img
  //       className={props.className}
  //       src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
  //       alt="Avatar"
  //     />
  //   );
  // } else {
  return <img className={props.className} src={props.avatar} alt="Avatar" />;
  // }
}

export default Gravatar;
