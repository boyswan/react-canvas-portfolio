import React       from 'react';
import ReactCanvas from 'react-canvas';
import Page        from './Page';
import Data        from '../common/data';  

import '../style/Gallery.scss';

let Surface  = ReactCanvas.Surface;
let ListView = ReactCanvas.ListView;

let Gallery = React.createClass({

  getSize(){
    return document.getElementById('main').getBoundingClientRect();
  },

  getListViewStyle(){
    return {
      top: 0,
      left: 0,
      width: this.getSize().width,
      height: this.getSize().height
    };
  },

  handleClick(child){
    this.props.onClick(child)
  },

  renderPage(pageIndex, scrollTop) {
    let article = Data[pageIndex % Data.length];
    let pageScrollTop = pageIndex * this.props.pageHeight - scrollTop;
    return (
      <Page 
        width={this.getSize().width}
        height={this.getSize().height}
        article={article}
        pageIndex={pageIndex}
        scrollTop={pageScrollTop}
        onClick={this.handleClick} />
    );
  },
  
  render(){
    return (
        <div id="gallery">
          <Surface top={0} left={0} width={this.getSize().width} height={this.getSize().height}>
            <ListView
              style={this.getListViewStyle()}
              snapping={true}
              scrollingDeceleration={0.92}
              scrollingPenetrationAcceleration={0.13}
              numberOfItemsGetter={this.props.getNumberOfPages}
              itemHeightGetter={this.props.pageHeight}
              itemGetter={this.renderPage} />
          </Surface>
        </div>
    );
  }

});

export default Gallery;