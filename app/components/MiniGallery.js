
import React    from 'react/addons';
let cx = React.addons.classSet;

import Velocity from 'velocity-animate/velocity';
import Hammer   from 'hammerjs/hammer';

import '../style/MiniGallery.scss';



let MiniGalleryContainer = React.createClass({

  render(){

    let fixedPosition = cx({
      "mini--gallery__container": !this.props.morePic,
      "mini--gallery__container freeze": this.props.morePic
    });

    return(
      <div className="gallery-container">
        <div className={fixedPosition}>
          <MiniGallery {...this.props} />
        </div>
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
      'width': window.innerWidth*0.8+'px'
    }

    return(
      <img className='mini--gallery__single' style={style} src={this.props.src}></img>
    )

  }

});

export default MiniGalleryContainer;
