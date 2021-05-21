import React from 'react';

const BidData = ({selected}) =>{
    return(<div>
        {selected.map(data=><ul>{data.firstname}'s bids are : {data.bids.map(bid=><li>{bid.amount}</li>)}</ul>)}
    </div>)
}

export default BidData;