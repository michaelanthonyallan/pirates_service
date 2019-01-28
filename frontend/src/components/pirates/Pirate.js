import React  from 'react';
import {Link} from 'react-router-dom';

const Pirate = (props) => {

    const {id, firstName, lastName, age, ship} = props.pirate;

  return (
    <div className="component">

        <p className={"name"}>

            <Link to={"/pirates/" + id} className="name">

            {firstName} {lastName}
            </Link>
        </p>

        <p className={"age"}>
            {age}
        </p>

        <p className={"ship"}>
            {ship.name}
        </p>

    </div>
  )


};

export default Pirate;
