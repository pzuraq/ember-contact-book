import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return fetch(`http://localhost:3000/people/${id}`, {
      credentials: 'include',
    }).then(r => r.json());
  }
})
