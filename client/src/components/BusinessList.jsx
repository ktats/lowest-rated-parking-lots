import React from 'react';
import BusinessListItem from'./BusinessListItem.jsx'

const BusinessList = (props) => {
  if (props.businesses && props.businesses.length > 0) {
    return (<div>
      <h5> List of businesses/parking lots in ascending order by rating</h5>
      <br></br>
      <div>
      {props.businesses.map((business, index) => (
        <BusinessListItem name={business.name} url={business.url} rating={business.rating} review_count={business.review_count} score={(( business.review_count * business.rating ) / (business.review_count + 1)).toFixed(2)} key={index}/>
      ))}
      </div>
    </div>);
  } else {
  return <div><h5>List of businesses/parking lots in ascending order by rating</h5></div>
  }
}

export default BusinessList;