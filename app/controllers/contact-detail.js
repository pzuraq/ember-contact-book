import Controller from '@ember/controller';
import config from 'contact-book/config/environment';

export default Controller.extend({
  actions: {
    deleteContact(ev) {
      ev.preventDefault();
      const { id } = this.model;

      fetch(`${config.DS.host}/people/${id}`, {
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
