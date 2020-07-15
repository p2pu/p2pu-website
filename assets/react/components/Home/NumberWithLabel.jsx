import React, { Component } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class NumberWithLabel extends Component {
  constructor(props) {
    super(props);
    this.triggerCountup = () => this._triggerCountup()
    this.handleVisibilityChange = (e) => this._handleVisibilityChange(e)
  }

  _triggerCountup() {
    startAnimation(this.countUpNum);
  }

  _handleVisibilityChange(isVisible) {
    if (isVisible) {
      this.triggerCountup();
    }
  }

  render() {

    return (
      <div className="stat">
        <CountUp
          className="number"
          start={0}
          end={this.props.number}
          duration={2}
          ref={(el) => {this.countUpNum = el}}
        >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={(isVisible) => isVisible ? start() : null}>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
        </CountUp>
        <span className='text'>
          { this.props.label }
        </span>
      </div>
    );
  }
}