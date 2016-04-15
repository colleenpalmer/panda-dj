var React = require('react');
var ReactDOM = require('react-dom');


var PandaFan = React.createClass({
  render: function() {
    return (
      <div>
        pandaFan
      </div>
    );
  }
});

var PandaDj = React.createClass({
  render: function() {
    return (
      <div className=''>
        pandadj
      </div>
    );
  }
});

var PandaDjAll = React.createClass({
  render: function() {
    return (
      <div>
        <PandaDj />
        <PandaFan />
      </div>
    );
  }
});

ReactDOM.render(
  <PandaDjAll/>,
  document.getElementById('pandj')
);
