import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBounding from '../components/ErrorBounding';


class App extends Component {
    
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''  
        }

    }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => {this.setState({robots:users})})
}
    
  onSearchChange =(event) => {

    this.setState({searchfield : event.target.value})
      
  }


    render() {
      const { robots , searchfield}=this.state;
    const filteredrobots=robots.filter(
        robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })

      if(!robots.length)
      {
        return (
           <div className='tc f2 grow'>
            <h1>Loading boy</h1>
            </div>
        );
      }
      else{
        return (
          <div className='tc'>
              <h1 className="f1 lh grow"> Robot are here </h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBounding>
                  <Cardlist robots={filteredrobots}/>
                  </ErrorBounding>
              </Scroll>
              </div>
          );

      }
   

  }
}
 export default App;