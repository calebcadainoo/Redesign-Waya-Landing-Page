$(function(){

	// set currency conversion image
	function setCurrencyFlag(currency, element){
		$(element).removeClass('cur-gh');
		$(element).removeClass('cur-ke');
		$(element).removeClass('cur-ng');
		
		if (currency == 'GHS') {
			$(element).addClass('cur-gh');
		}else if (currency == 'KES') {
			$(element).addClass('cur-ke');
		}else if (currency == 'NGN') {
			$(element).addClass('cur-ng');
		}
	}
	
	$('#sender-currency').on('load change', () => {
		let sender = $("#sender-currency :selected").text().toString();
		setCurrencyFlag(sender, '.sender-flag.currency-flag');
	});

	$('#recipient-currency').on('load change', () => {
		let recipient = $('#recipient-currency :selected').text();
		setCurrencyFlag(recipient, '.recipient-flag.currency-flag');
	});
});