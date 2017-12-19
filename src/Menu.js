import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const imgStyle = {
  width: 260,
  height: 260,
  margin: 20,
  textAlign: 'center'
}

class Menu extends Component {
  render() {
    return (
        <div>
            Menu

            <div>
              <Paper style={paperStyle} zDepth={5}>
                <img src="https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps23273_CW163681C12_11_2b.jpg" style={imgStyle} alt="Menu item"/>
              </Paper>
              <Paper style={paperStyle} zDepth={5}>
                <img src="https://i.pinimg.com/originals/62/ab/d3/62abd386f018d71d3706245fd7d81c92.jpg" style={imgStyle} alt="Menu item"/>
              </Paper>
              <Paper style={paperStyle} zDepth={5}>
                <img src="http://www.seriouseats.com/images/2017/04/20170429-one-pot-vegetarian-dinners-recipes-roundup-14.jpg" style={imgStyle} alt="Menu item"/>
              </Paper>
            </div>
        </div>
    );
  }
}
export default Menu;