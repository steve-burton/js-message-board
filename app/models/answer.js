import DS from 'ember-data';

export default DS.Model.extend({
  commenter: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
