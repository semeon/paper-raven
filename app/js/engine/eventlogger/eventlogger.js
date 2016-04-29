import React from 'react';
import {render} from 'react-dom';

class EventLogger {

  constructor(p) {
    this.feed = [];
    this.renderer = {};
  }

  setRenderer(r) {
    console.log("Setting Renderer");
    this.renderer = r;
  }

  log(m) {
    this.feed.push(m);
    this.updateFeedView();
  }

  getFeed() {
    return this.feed;
  }

  updateFeedView() {
    this.renderer.renderAll();
  }

}

export var logger = new EventLogger();