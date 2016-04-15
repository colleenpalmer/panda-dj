var React = require('react');
var ReactDOM = require('react-dom');

var css = require('./styles.css');

var PandaCape = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite pandaCape'>
      </div>
    );
  }
});

var PandaFan = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite pandaFan'>
      </div>
    );
  }
});

var PandaSuperFan = React.createClass({
  render: function() {
    return (
      <div className="superFan">
        <PandaCape />
        <PandaFan />
      </div>
    );
  }
});

var PandaDj = React.createClass({
  render: function() {
    return (
      <div className='pandaDj'>
        Put stuffs here for panda dj
      </div>
    );
  }
});

var PandaSandbox = React.createClass({
  render: function() {
    return (
      <div>
        <PandaFan />
        <PandaCape />
        <PandaDj />
        <PandaSuperFan />
      </div>
    );
  }
});

ReactDOM.render(
  <PandaSandbox/>,
  document.getElementById('pandj')
);
