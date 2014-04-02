
Drupal.behaviors.form_confirm_example = function(context) {
	$('.confirm-fieldset').hide();

	$('#edit-noconfirm-submit').click(function(event) {
		event.preventDefault();
		$(this).hide();
		$('.confirm-fieldset').show();
	});

	$('#edit-confirm-fieldset-cancel').click(function(event) {
		event.preventDefault();
		$('.confirm-fieldset').hide();
		$('#edit-noconfirm-submit').show();
	});
};