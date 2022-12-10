import React from "react";
import CaptainItem from '../captains/CaptainItem';

function CaptainList({ captains }) {
    return (
        <div>
            {
                captains.map((captain) => (
                    <CaptainItem key={captain.id} {...captain} />
                ))
            }
        </div>
    );
}

export default CaptainList;
