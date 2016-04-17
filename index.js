var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var css = require('./styles.css');

var StageScaffold = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite stageScaffold'>
      </div>
    );
  }
});

var StageSide = React.createClass({
  propTypes: {
      stageLeft: React.PropTypes.bool,
      stageRight: React.PropTypes.bool,
      stageMid: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      stageLeft: false,
      stageRight: false,
      stageMid: true
    };
  },
  render: function() {
    var renderStage = classNames({
      'pandaSprite stage': true,
      'stage--left': this.props.stageLeft,
      'stage--right': this.props.stageRight
    });
    return (
      <div className={renderStage}>
      </div>
    );
  }
});

var PandaDj = React.createClass({
  propTypes: {
      animate: React.PropTypes.bool,
      absolute: React.PropTypes.bool
  },
  getDefaultProps() {
      return {
          animate: false,
          absolute: false
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

/* Stickers!! */
var StickerGit = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite StickerGit'>
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

/* This is hacky and shouldn't be used in anything but sandbox */
/* It's so we can space things out to build a stage, etc */
var EmptySprite = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite EmptySprite'>
      </div>
    );
  }
});

var Entity = React.createClass({
  render: function() {
    return (
      <div className='Entity'>
        <div className='EntityContent'>
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
        <div>
          <Entity>
            <PandaDj/>
            <StickerGit/>
          </Entity>
          <Entity>
            <PandaDj animate={true}/>
          </Entity>
          <Entity>
            <PandaDj animate={true}/>
            <StickerGit/>
          </Entity>
          <Entity>
            <PandaFan />
          </Entity>
          <Entity>
            <PandaFan animate={true} />
          </Entity>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <PandaSandbox/>,
  document.getElementById('pandj')
);
