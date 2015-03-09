
import React    from 'react';
import Velocity from 'velocity-animate/velocity';
import Hammer   from 'hammerjs/hammer';

import '../style/MiniGallery.scss';



let MiniGalleryContainer = React.createClass({

  render(){

    return(
      <div className="mini--gallery__container">
        <MiniGallery {...this.props} />
      </div>
    )
  }

});

let MiniGallery = React.createClass({

  render(){

    let imageList = this.props.imageList.map((image, i)=>{
      return <SingleImage src={image} key={'image'+i}/>
    }.bind(this));

    return (
      <div>{imageList}</div>
    )
  }

});

let SingleImage = React.createClass({

  render(){
    let style = {
      'width': window.innerWidth*0.85+'px'
    }

    return(
      <img className='mini--gallery__single' style={style} src={this.props.src}></img>
    )

  }

});

export default MiniGalleryContainer;
