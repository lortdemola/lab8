import React, {useState} from 'react';

const Test2 = (props) => {

    const [value, setValue] = useState(0);

    return (
        <div>
            <p>{value}</p>
            <button className="btn btn-secondary btn-sm" onClick={() => setValue(1)}>Set Value</button>
        </div>
    )
};

export default Test2;

