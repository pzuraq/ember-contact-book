import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteContact(ev) {
      ev.preventDefault();
      const { id } = this.model;

      fetch(`http://localhost:3000/people/${id}`, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.transitionToRoute('contacts');
      });
    }
  }
});
