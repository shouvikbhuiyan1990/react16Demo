import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';

const Home = props => (
  <div>
    <a className="styled" onClick={() => props.changePage('/fragments')}>Fragments</a>
    <a className="styled" onClick={() => props.changePage('/custom-attr')}>Custom Attributes</a>
    <a className="styled" onClick={() => props.changePage('/portals')}>Portals</a>
    <a className="styled" onClick={() => props.changePage('/lifecycles')}>Portals</a>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (url) => push(url)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)