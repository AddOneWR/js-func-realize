import App from './App';
import Router from './modules/Router';
import Track from './modules/Track';

// 注入依赖
App.use([Router, Track]);

new App({
  router: {
    mode: 'hash'
  },
  track: {

  },
  onReady(app) {
    // app....
  }
})