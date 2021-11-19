import React, {Fragment} from 'react';

const Avatar = ({imagen}) => {
    console.log("avatar", imagen)
    return(
        <Fragment>
            <img alt="imagen "src={imagen} className="mr-3"/>
        </Fragment>
    )
}

export default Avatar