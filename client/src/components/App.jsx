
import React from 'react';
import Search from './Search.jsx';
import BusinessList from './BusinessList.jsx';
import $ from 'jquery';

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           businesses: []
       };
   }

   search(term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'GET',
      url: `/yelp/${term}`,
      contentType: 'application/json',
      success: (getData) => {
        this.setState({businesses: getData})
      }
    });
   }

   render() {
       return (<div>
           <div>Parking Lot Improvement Tool</div>
           <Search onSearch={this.search.bind(this)}/>
           <BusinessList businesses={this.state.businesses} />
       </div>
       )
   }
}

export default App;