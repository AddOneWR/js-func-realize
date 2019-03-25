import Track from '...';
export default {
  init(app) {
    app.track = new Track(app.options.track);
    app.track.tracking();
  }
}