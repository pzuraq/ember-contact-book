import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveContact(ev) {
      ev.preventDefault();
      const properties = this.model;

      fetch('http://localhost:3000/people', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(properties)
      }).then(() => {
        this.transitionToRoute('contacts');
      });
    }
  }
});
