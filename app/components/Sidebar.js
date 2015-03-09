
import React    from 'react';
import Velocity from 'velocity-animate/velocity';
import Hammer   from 'hammerjs/hammer';

import '../style/Sidebar.scss';


export let Sidebar = React.createClass({

  componentDidMount(){
    let drag   = document.getElementById("side-bar_drag");
    let dim    = document.getElementById("side-bar_dim");
    let hammer = new Hammer(drag);

    hammer.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

    hammer.on('pan', (event) => {

      drag.style.transform = "translate(" + event.deltaX + "px)";
      dim.style.opacity = event.deltaX/window.innerWidth*0.75;

      if (event.deltaX >= window.innerWidth){
        drag.style.transform = "translate(" + window.innerWidth + "px)";
      }

    });

    hammer.on('panend', (event) => {
      Velocity(drag, ({translateX: [0,event.deltaX], translateY: [0,0]}));
      Velocity(dim, ({opacity: 0}));
    });

  },

  render: function() {
    let style = {
      'position': 'fixed',
      'width': window.innerWidth,
      'height': window.innerHeight,
    }

    let dimStyle = {
      'position': 'fixed',
      'backgroundColor': 'black',
      'width': window.innerWidth,
      'height': window.innerHeight,
      'opacity': 0,
      'pointerEvents': 'none'
    }

    return(
      <div id="side-bar_drag">

        <div id="button">
          <div className="side-bar_button" onClick={this.handleClick}></div>
        </div>

        <div id="side-bar_dim" style={dimStyle}></div>

        <div className="container">
          <div className="side-bar"  style={style}> adfasd </div>
        </div>

      </div>
    );
  }

});


export let Button = React.createClass({

  render: function() {
    let style={
      'transform': 'translateX('+((window.innerWidth*0.5)-15)+'px)',
    }
    return(
      <div id="button">
        <div className="more_button" onClick={this.props.onClick} style={style}></div>
      </div>
    );
  }

});
