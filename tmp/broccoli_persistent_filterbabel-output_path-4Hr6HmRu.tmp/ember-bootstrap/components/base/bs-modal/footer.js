define('ember-bootstrap/components/base/bs-modal/footer', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/footer'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsModalFooter) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
  
   Modal footer element used within [Components.Modal](Components.Modal.html) components. See there for examples.
  
   @class ModalFooter
   @namespace Components
   @extends Ember.Component
   @public
   */

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsModalFooter['default'],
    tagName: 'form',
    classNames: ['modal-footer'],

    /**
     * The title of the default close button. Will be ignored (i.e. no close button) if you provide your own block
     * template.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null or if you provide
     * your own block template.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null,

    hasSubmitButton: computed.notEmpty('submitTitle'),

    /**
     * Set to true to disable the submit button. If you bind this to some property that indicates if submitting is allowed
     * (form validation for example) this can be used to prevent the user from pressing the submit button.
     *
     * @property submitDisabled
     * @type boolean
     * @default false
     * @public
     */
    submitDisabled: false,

    /**
     * The action to send to the parent modal component when the modal footer's form is submitted
     *
     * @event onSubmit
     * @public
     */
    onSubmit: function onSubmit() {},

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {},
    submit: function submit(e) {
      e.preventDefault();
      // send to parent bs-modal component
      this.get('onSubmit')();
    }
  });
});