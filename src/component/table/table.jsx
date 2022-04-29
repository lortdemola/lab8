import React from 'react';
import TableRow from "./table-row";

const Table = (props) => {

    return (
        <div>
            <ul className="list-group">
                {props.answers.map((elem, key) => {
                    return <TableRow
                        checkAnswer={props.checkAnswer}
                        key={key}
                        text={elem}
                        currentKey={key}
                        markedAnswer={props.markedAnswer}/>
                })}
            </ul>
        </div>
    )
};

export default Table;
