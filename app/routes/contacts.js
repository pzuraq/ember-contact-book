import Route from '@ember/routing/route';
import config from 'contact-book/config/environment';

export default Route.extend({
  model() {
    return fetch(`${config.DS.host}/people`, {
      credentials: 'include',
    }).then(r => r.json());
  }
});
