$(document).ready(function() {


	$("#register-form").validate({
		errorElement : 'span',
		errorClass : 'help-block',

		rules : {
			cronname : "required",


			cronrule : "required",
			cron_cmd : "required",
			cron_service_ip : "required",



		},
		messages : {
			cronname : "������Ϊ��",
			cronrule : "������Ϊ��",
			cron_cmd : "������Ϊ��",
			cron_service_ip : "������Ϊ��",



		},
		errorPlacement : function(error, element) {
			element.next().remove();
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error has-feedback');
		},
		success : function(label) {
			var el=label.closest('.form-group').find("input");
			el.next().remove();
			el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
		},

	})
});