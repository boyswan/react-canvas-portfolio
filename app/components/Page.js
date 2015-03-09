import React       from 'react';
import ReactCanvas from 'react-canvas';

let Group = ReactCanvas.Group;
let Image = ReactCanvas.Image;

let SCROLL_SPEED_MULTIPLIER = 0.6;
let ALPHA_SPEED_OUT_MULTIPLIER = 1.25;
let ALPHA_SPEED_IN_MULTIPLIER = 2.6;
let IMAGE_LAYER_INDEX = 1;

let Page = React.createClass({

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    article: React.PropTypes.object.isRequired,
    scrollTop: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func
  },

  handleClick(){
    this.props.onClick(this)
  },

  render(){
    return (
      <Group>
        <Group style={this.getGroupStyle()} onClick={this.handleClick}>
          <Image style={this.getImageStyle()} src={this.props.article.imageUrl} fadeIn={true} useBackingStore={true} />
        </Group>
      </Group>
    );
  },


  // ========================================================================= STYLES ===========

  getGroupStyle(){
    return {
      top: 0,
      left: 0,
      width: this.props.width,
      height: this.props.height,
    };
  },

  getImageHeight(){
    return Math.round(this.props.height);
  },

  getImageStyle() {
    return {
      top: 0,
      left: 0,
      width: this.props.width,
      height: this.getImageHeight(),
      backgroundColor: '#eee',
      zIndex: IMAGE_LAYER_INDEX
    };
  }
  
});

export default Page;
