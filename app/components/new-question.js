import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        ask: this.get('ask') ? this.get('ask') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
