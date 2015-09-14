var ajax = require('atomicjs');

document.addEventListener('DOMContentLoaded', function() {

	var submitBtn = document.querySelector('.submit');
	var resultContainer = document.querySelector('.depdocResult');

	submitBtn.addEventListener('click', function(e) {
		e.preventDefault();
		var spinner = document.createElement('div');
		spinner.className = 'spinner';

		resultContainer.innerHTML = '';
		resultContainer.appendChild(spinner);
		resultContainer.classList.add('is-loading');

		var input = document.querySelector('.packageInput').value;
		var normalisedInput = input.replace(/\r?\n|\s|\r/g,'');

		ajax.post('/depdoc', normalisedInput, 'application/json')
			.success(function (data, xhr) {
				resultContainer.classList.remove('is-loading');
				resultContainer.innerText = xhr.response;
			})
			.error(function (data, xhr) {
				resultContainer.innerHTML = 'Ooops.. there was a problem. We are working on it.';
				console.log(xhr.response);
			});
	});

});