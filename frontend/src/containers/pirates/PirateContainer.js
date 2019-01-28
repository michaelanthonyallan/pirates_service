import React, {Component} from 'react';
import Request from '../../helpers/Request';
import PirateList from '../../components/pirates/PirateList.js';


class PirateContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      pirates: []
    }
  }

  componentDidMount() {
    let request = new Request();
    request.get('/api/pirates')
        .then((data) => {
          console.log("component says:", data._embedded);
          this.setState({pirates: data._embedded.pirates})
        })
  }


  render(){
    return (
        <PirateList pirates={this.state.pirates}/>
    );
  }










}

export default PirateContainer;
