# panda-dj

messing around with react and panda css animations

## Install/Run

* `npm install`

Then to run after that:

* `npm start`
* go to index.html in browser or if you have webpack server run `webpack-dev-server --watch`

## How To

Each sprite can be plopped in on its own just by pulling in the component

```
<PandaDj/>
```

Or you can stack sprites on top of each other with the `<Entity>` component

```
<Entity>
  <PandaDj />
  <StickerGit />
</Entity>
```

## Animation

Some of the sprites can animate. You can do this by passing the animate prop
as `true`

```
<PandaDj animate={true}/>
```

Todo:
* fix the animation on the pandadj laptop
* add more details to all the sprites
* create more accessories!
* lots of things I'm sure cuz work-in-progress


