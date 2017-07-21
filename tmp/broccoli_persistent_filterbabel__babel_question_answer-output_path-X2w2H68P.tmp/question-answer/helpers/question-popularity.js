define('question-answer/helpers/question-popularity', ['exports', 'ember'], function (exports, _ember) {
  exports.questionPopularity = questionPopularity;

  function questionPopularity(params) {
    var question = params[0];
    var popularity;

    if (question.get('answers').get('length') === 0) {
      popularity = _ember['default'].String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span><span>New!!</span>');
    } else if (question.get('answers').get('length') <= 5) {
      popularity = _ember['default'].String.htmlSafe('<span class="glyphicon glyphicon-pencil"></span><span>Needs More Answers</span>');
    } else {
      popularity = _ember['default'].String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span>Hot Topic!</span>');
    }
    return popularity;
  }

  exports['default'] = _ember['default'].Helper.helper(questionPopularity);
});