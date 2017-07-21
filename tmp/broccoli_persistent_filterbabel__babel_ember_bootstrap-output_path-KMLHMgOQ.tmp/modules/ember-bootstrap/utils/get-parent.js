import Ember from 'ember';

var get = Ember.get;


export default function getParent(view) {
  if (get(view, 'tagName') === '') {
    // Beware: use of private API! :(
    if (Ember.ViewUtils && Ember.ViewUtils.getViewBounds) {
      return Ember.ViewUtils.getViewBounds(view).parentElement;
    } else {
      return view._renderNode.contextualElement;
    }
  } else {
    return get(view, 'element').parentNode;
  }
}