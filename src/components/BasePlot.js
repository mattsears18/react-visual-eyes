import React from 'react';
import Plot from 'react-plotly.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {}
});

class BasePlot extends React.Component {
  render() {
    return (
      <Plot
        width={500}
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'red' }
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }
        ]}
        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
      />
    );
  }
}

export default withStyles(styles)(BasePlot);
