import React from "react";
import CaptainItem from '../captains/CaptainItem';

function CaptainList({ captains }) {
    return (
                <div className="flex flex-wrap -m-4 px-9">
            {
                captains.map((captain) => (
                    <CaptainItem key={captain.id} {...captain} />
                ))
            }
        </div>
    );
}

export default CaptainList;
