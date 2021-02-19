import React, { useState, useEffect } from "react";
import "../App.css"

export default function Linebar(props) {
    const [rows, setRows] = useState([0]);

    useEffect(() => {
        let addRow = rows.slice();
        for (let i = 1; i <= 200; i++) {
            addRow.push(i);
        }
        setRows(addRow)
    }, [])

    return <div className="lineNumbers">
        {rows.map(i => {
            return <p>{i}</p>
        })}
    </div>
}