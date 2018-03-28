import Controller from '@ember/controller';
import config from 'contact-book/config/environment';

export default Controller.extend({
  actions: {
    saveContact(ev) {
      ev.preventDefault();
      const properties = this.model;

      fetch(`${config.DS.host}/people`, {
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
