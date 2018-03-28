import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('contact-new', { path: '/contacts/new' });
  this.route('contact-detail', { path: '/contacts/:id' });
  this.route('contact-edit', { path: '/contacts/:id/edit' });
});

export default Router;
