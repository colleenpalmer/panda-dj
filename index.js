var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var css = require('./styles.css');

var Stage = React.createClass({
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
        <div className='StageContent'>
          {this.props.children}
        </div>
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

var Speakers = React.createClass({
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
      'pandaSprite speakers': true,
      'speakers--animate': this.props.animate
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
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
        </div>
        <div>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
          <EmptySprite/>
        </div>
        <div>
          <Speakers />
          <Stage stageLeft={true} />
          <Stage />
          <Stage>
            <Entity>
              <PandaDj animate={true}/>
            </Entity>
          </Stage>
          <Stage>
            <Entity>
              <PandaDj animate={true}/>
            </Entity>
            <Entity>
              <PandaFan />
            </Entity>
          </Stage>
          <Stage>
            <Entity>
              <PandaDj animate={true}/>
              <StickerGit/>
            </Entity>
            <Entity>
            <PandaFan animate={true}/>
          </Entity>
          </Stage>
          <Stage>
          </Stage>
          <Stage stageRight={true} />
          <Speakers />
        </div>
        <div>
          <EmptySprite/>
          <EmptySprite/>
          <Entity>
            <PandaFan />
          </Entity>
          <Entity>
            <PandaFan />
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
