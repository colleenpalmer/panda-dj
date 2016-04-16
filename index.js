var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var css = require('./styles.css');

var PandaDj = React.createClass({
  propTypes: {
      animate: React.PropTypes.bool
  },
  getDefaultProps() {
      return {
          animate: false
      };
  },
  render: function() {
    var animateClass = classNames({
      'pandaSprite pandaDj': true,
      'pandaDj--animate': this.props.animate
    });
    return (
      <div className={animateClass}>
      </div>
    );
  }
});

var PandaFan = React.createClass({
  propTypes: {
      animate: React.PropTypes.bool
  },
  getDefaultProps() {
      return {
          animate: false
      };
  },
  render: function() {
    var animateClass = classNames({
      'pandaSprite pandaFan': true,
      'pandaFan--animate': this.props.animate
    });
    return (
      <div className={animateClass}>
      </div>
    );
  }
});

var SpriteAlign = React.createClass({
  render: function() {
    return (
      <div className='spriteAlign'>
        <div className='spriteContent'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var PandaSandbox = React.createClass({
  render: function() {
    return (
      <div className="sandbox">
        <SpriteAlign>
          <PandaDj/>
        </SpriteAlign>
        <SpriteAlign>
          <PandaDj animate={true} />
        </SpriteAlign>
        <SpriteAlign>
          <PandaFan />
        </SpriteAlign>
        <SpriteAlign>
          <PandaFan animate={true} />
        </SpriteAlign>
      </div>
    );
  }
});

ReactDOM.render(
  <PandaSandbox/>,
  document.getElementById('pandj')
);
