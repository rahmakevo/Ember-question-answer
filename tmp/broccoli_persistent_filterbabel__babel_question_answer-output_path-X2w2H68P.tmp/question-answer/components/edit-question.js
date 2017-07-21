define('question-answer/components/edit-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    editMode: false,
    actions: {
      editQuestionForm: function editQuestionForm() {
        this.set('editMode', true);
      },
      edit: function edit(question) {
        var params = {
          ask: this.get('ask'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set('editMode', false);
        this.sendAction('edit', question, params);
      }
    }
  });
});