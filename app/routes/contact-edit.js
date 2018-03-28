import Route from '@ember/routing/route';
import config from 'contact-book/config/environment';

export default Route.extend({
  model({ id }) {
    return fetch(`${config.DS.host}/people/${id}`, {
      credentials: 'include',
    }).then(r => r.json());
  }
})
