import LazyRender from './LazyRender.vue';

export default {
  install(app) {
    app.component('LazyRender', LazyRender);
  }
};

export { LazyRender };
