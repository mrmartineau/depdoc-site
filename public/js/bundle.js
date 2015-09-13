(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mrmartineau/htdocs/depdoc-site/node_modules/atomicjs/dist/atomic.js":[function(require,module,exports){
/*! atomicjs v1.1.0 | (c) 2015 @munkychop | github.com/munkychop/atomicjs */
!function() {
    "use strict";
    var exports = {}, parse = function(req) {
        var result;
        try {
            result = JSON.parse(req.responseText);
        } catch (e) {
            result = req.responseText;
        }
        return [ result, req ];
    }, xhr = function(httpMethod, url, data, contentType) {
        var contentTypeHeader = contentType || "application/x-www-form-urlencoded", methods = {
            success: function() {},
            error: function() {}
        }, XHR = window.XMLHttpRequest || ActiveXObject, request = new XHR("MSXML2.XMLHTTP.3.0");
        request.open(httpMethod, url, !0), request.setRequestHeader("Content-type", contentTypeHeader), 
        request.onreadystatechange = function() {
            4 === request.readyState && (request.status >= 200 && request.status < 300 ? methods.success.apply(methods, parse(request)) : methods.error.apply(methods, parse(request)));
        }, request.send(data);
        var callbacks = {
            success: function(callback) {
                return methods.success = callback, callbacks;
            },
            error: function(callback) {
                return methods.error = callback, callbacks;
            }
        };
        return callbacks;
    };
    exports.get = function(src) {
        return xhr("GET", src);
    }, exports.put = function(url, data, contentType) {
        return xhr("PUT", url, data, contentType);
    }, exports.post = function(url, data, contentType) {
        return xhr("POST", url, data, contentType);
    }, exports["delete"] = function(url) {
        return xhr("DELETE", url);
    }, "undefined" != typeof define && define.amd ? define(function() {
        return exports;
    }) : "undefined" != typeof module && module.exports ? module.exports = exports : window.atomic = exports;
}();
},{}],"/Users/mrmartineau/htdocs/depdoc-site/public/js/script.js":[function(require,module,exports){
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
			});
	});

});

},{"atomicjs":"/Users/mrmartineau/htdocs/depdoc-site/node_modules/atomicjs/dist/atomic.js"}]},{},["/Users/mrmartineau/htdocs/depdoc-site/public/js/script.js"]);
