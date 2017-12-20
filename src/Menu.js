import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Email from './smtp'

function sendEmail() {

  Email.send("daniel@dij.io",
  "epicmrjones@gmail.com",
  "This is a subject",
  "this is the body",
  {token: "01b132f3-d101-4dfb-91cc-393bec2fe88e"});
  console.log(Email);
  console.log(Email.send);  
  console.log('sent');
}

function send() {
  $.ajax({
    url: "https://formspree.io/you@email.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});

  //let xhr = new XMLHttpRequest();
  //xhr.open('POST', 'https://formspree.io/epicmrjones', true, )
}

class Menu extends Component {
  render() {
    return (
        <div>
            Menu
            <div>
            <form action="https://formspree.io/epicmrjones@gmail.com" method="POST">
              <input type="text" name="name"/>
              <input type="email" name="_replyto"/>
              <input type="submit" value="Send"/>
            </form>
            </div>
            <div>
              <Paper className="menu-item" zDepth={5}>
                <img src="https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps23273_CW163681C12_11_2b.jpg" alt="Menu item" onClick={sendEmail}/>
              </Paper>
              <Paper className="menu-item" zDepth={5}>
                <img src="https://i.pinimg.com/originals/62/ab/d3/62abd386f018d71d3706245fd7d81c92.jpg" alt="Menu item"/>
              </Paper>
              <Paper className="menu-item" zDepth={5}>
                <img src="http://www.seriouseats.com/images/2017/04/20170429-one-pot-vegetarian-dinners-recipes-roundup-14.jpg" alt="Menu item"/>
              </Paper>
            </div>
           
        </div>
    );
  }
}
export default Menu;