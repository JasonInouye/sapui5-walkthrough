/*global QUnit*/

sap.ui.define([
	"MyApp/myapp/controller/MyApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyApp Controller");

	QUnit.test("I should test the MyApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
