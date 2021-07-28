import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Navbar from './NavBar';

import calendar from '../Assets/calendar.png';

function Cal(props) {

    const [param, setProp] = useState(""); 
    const [view, setView] = useState(false);
    const [update, setUpdate] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        const time = new Date(date).getTime() + 5.5 * (3600000); 
        props.updatedData(time, props.item);
        setDate(date);
        setView(false);
        setUpdate(true);
    }

    const onClick = () => {
        setView(prevState => !prevState);
        setUpdate(false);
        setProp(props.item['name']);
    }
    
    return (
        <div>
            <img alt='calendar' className="ml-5" src={calendar}
                style={{ width: "2.5em", height: "2.5em", float: "left" }} />
            <button onClick={onClick} variant="light" style={{
                background: "white", color: "#57698a",
                textDecoration: "none", border: "0.4em solid white", marginTop: "5px", fontSize: "0.9em"
            }}>
            <p className="ml-0 mx-0 my-0"> Schedule Again</p>
            </button>
            {
                view === true ? <Calendar onChange={onChange} value={date} /> : null
            }
            <div style={{ display: "none" }}>
                {
                    (update === true) ?
                    <div>
                      <Navbar key={update} param={param}
                                update={update}
                                date={date}
                     /> 
                      </div> : null

                }
            </div>
        </div>
    );
};

export default Cal;