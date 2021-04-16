
import React from 'react'

const BusinessListItem = (props) => (
  <div>
    Parking Lot Name: <span> <a href={props.url}>{props.name}</a></span> Rating: {props.rating}, Review Count: {props.review_count}, Score: {props.score}
  </div>
)

export default BusinessListItem;