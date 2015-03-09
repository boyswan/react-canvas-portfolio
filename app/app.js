import React             from 'react';

import Gallery           from './components/Gallery';
import {Sidebar, Button} from './components/Sidebar';
import MiniGallery       from './components/MiniGallery';

import Data        from './common/data';  
import Data2        from './common/data2';  


import './style/Utilities.scss';


React.initializeTouchEvents(true)

let App = React.createClass({

  getInitialState(){
    return{
      imageList: Data2,
      menu: true
    }
  },

  getNumberOfPages(){
    return Data.length;
  },

  getPageHeight(){
    return document.getElementById('main').getBoundingClientRect().height;
  },
  getSize(){
    return document.getElementById('main').getBoundingClientRect();
  },

  buttonClick(child){
    // console.log(child.props.article.title)
    if (!this.state.menu){
      Velocity(document.getElementById('gallery'),({ translateX: ['-80%', [90,10]] }), 600);
      this.setState({menu: true})
    }  
    if (this.state.menu){
      Velocity(document.getElementById('gallery'),({ translateX: ['0%', [90,10]] }), 600);
      this.setState({menu: false})
    }

  },

  render(){
    return(
      <div className='background'>

        <Sidebar />
        <div className="to-top">
          <Gallery 
            getNumberOfPages={this.getNumberOfPages}
            pageHeight={this.getPageHeight}
            getSize={this.getSize}
            onClick={this.buttonClick} />
        </div>
        <MiniGallery imageList={this.state.imageList}/>

      </div>
    )
  }

});

React.render(<App />, document.getElementById('main'));
