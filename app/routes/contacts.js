import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('http://localhost:3000/people', {
      credentials: 'include',
    }).then(r => r.json());
  }
});
