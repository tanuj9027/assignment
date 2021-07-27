import React, { useState } from 'react';
import GameRows from './GameRows';

// It is used ot set Upcoming, Live and Past event and show them based on their time period.

function NavBarManager(props) {

    const [campaignJson, setJson] = useState(props.data);

    function updateData(d, item) {
        const campaignData = campaignJson.map(data => {
            if (data['name'] === item['name']) {
                return { ...data, createdOn: d }
            }
            return data;
        });
        setJson(campaignData);
    }

    // 86400000 is define a period of 24 hours.

    let d = new Date();
    let milsec = d.getTime();
    let upcomingData = campaignJson.map(val => {
        if ((parseInt(val['createdOn']) - milsec) > 86400000) {
            return val;
        } return null;
    }).filter(Boolean);

    let liveData = campaignJson.map(val => {
        if ((parseInt(val['createdOn']) - milsec) >= 0 && (parseInt(val['createdOn']) - milsec) <= 86400000) {
            return val;
        } return null;
    }).filter(Boolean);

    let pastData = campaignJson.map(val => {
        if (parseInt(val['createdOn']) < milsec) {
            return val;
        } return null;
    }).filter(Boolean);

    const gameRowData = props.activeState === 'upcoming' ? upcomingData :
        props.activeState === 'live' ? liveData :
            props.activeState === 'past' ? pastData : null;

    return (
        <GameRows data={gameRowData} updatedData={updateData} />
    );
}

export default NavBarManager;