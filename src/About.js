import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class About extends Component {
  render() {
    return (
        <div>
            About
            <Paper className="container" zDepth={5}>
              <div className="container">
                <p>
                Moore Than Meals Executive Chef and Founder Danielle Moore
                provides the meals you need to stay healthy and more importantly STAY FULL
              </p>
              <p className="">
              Raised in Seattle, Mario attended high school in Madrid and studied the golden age of Spanish theater at Rutgers University. Soon after graduating, Mario enrolled in Le Cordon Bleu in London, his first formal culinary training. But after a few short months, he withdrew to apprentice with London’s legendary chef Marco Pierre White. During three years of intense culinary training in the Northern Italian village of Borgo Capanne (population 200), Mario learned the essential skills to return to his native US eager to plant his orange-clad foot firmly on the checkered-tablecloth Italian restaurant establishment
              </p>
              </div>
            </Paper>
        </div>
    );
  }
}
export default About;