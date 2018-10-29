import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
     <span style={{color:'white'}}><b><a href="#/">CMS</a> &copy; 2018 OTT</b></span>
        <span className="ml-auto" style={{color:'white'}}><b>Powered by <a href="#/">PlanetCast Media Services ltd.</a></b></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
