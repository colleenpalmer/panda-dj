var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var css = require('./styles.css');


var SpaceFiller = React.createClass({
  render: function() {
    return (
      <div className='pandaSprite spaceFiller'>
      </div>
    );
  }
});

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
      'pandaDj--animate': this.props.animate,
      'pandaDj--position': this.props.absolute
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
        <div>
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
        <div><SpaceFiller /></div>
        <div>
          <SpaceFiller />
          <SpriteAlign>
            <StageScaffold />
          </SpriteAlign>
          <SpaceFiller />
          <SpaceFiller />
          <SpaceFiller />
          <SpaceFiller />
          <SpaceFiller />
          <SpriteAlign>
            <StageScaffold />
          </SpriteAlign>
        </div>
        <div>
          <StageSide stageLeft={true}/>
          <SpriteAlign>
            <StageScaffold />
            <StageSide />
          </SpriteAlign>
          <StageSide />
          <SpriteAlign>
            <PandaDj absolute={true} />
            <StageSide />
          </SpriteAlign>
          <SpriteAlign>
            <PandaDj absolute={true} />
            <StageSide />
          </SpriteAlign>
          <SpriteAlign>
            <PandaDj absolute={true} animate={true} />
            <StageSide />
          </SpriteAlign>
          <StageSide />
          <SpriteAlign>
            <StageScaffold />
            <StageSide />
          </SpriteAlign>
          <StageSide stageRight={true}/>

        </div>
        <div>
          <SpaceFiller />
          <SpaceFiller />
          <SpaceFiller />
          <SpriteAlign>
            <PandaFan animate={true}/>
          </SpriteAlign>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <PandaSandbox/>,
  document.getElementById('pandj')
);
