import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('new-contact', { path: '/contacts/new' });
  this.route('contact-detail', { path: '/contacts/:id' });
});

export default Router;
