import React, { Component, PropTypes } from 'react';
import { ART } from 'react-native';
const { Shape, Path } = ART;

export default class Bar extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

  render() {
    const { width, height } = this.props;

    const path = Path()
      .moveTo(width / -2, height * -1.5)
      .line(0, height)
      .curve(width, 0)
      .line(0, height)
      .curve(-width, 0)
      .close();

    return <Shape {...this.props} d={path}/>;
  }
}
