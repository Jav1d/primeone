'use strict'

// TYPE OF DEVICE ======================================================================================================================================
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/IPhone|IPad|IPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);	
	},
	any: function () {
		return (
		isMobile.Android() ||
		isMobile.BlackBerry() ||
		isMobile.iOS() ||
		isMobile.Opera());
	}
};

if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
};

// ADAPTIVE FUNCTIONS (replace code blocks) ===========================================================================================================
window.addEventListener("resize", adaptiveFunction);
function adaptiveHeader(w,h) {
	let headerMenu = document.querySelector(".menu");
	let headerLang = document.querySelector(".header__lang-list");
	let topParent = document.querySelector(".header__top-column");
	let menuLeftList = document.querySelector(".header__menu-left");
	let menuRightList = document.querySelector(".header__menu-right");
	let menuParentLeft = document.getElementById("parent-menu-left");
	let menuParentRight = document.getElementById("parent-menu-right");

	if (w < 767) {
		if (!headerLang.classList.contains("done")) {
			headerLang.classList.add("done");
			headerMenu.append(headerLang, menuLeftList, menuRightList);
		}
	}
	else {
		if (headerLang.classList.contains("done")) {
			headerLang.classList.remove("done");
			topParent.append(headerLang);
			menuParentLeft.append(menuLeftList);
			menuParentRight.append(menuRightList);
		}
	}
}

function adaptiveFunction() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	adaptiveHeader(w,h);
}
adaptiveFunction();

// BURGER MENU =========================================================================================================================================
const menuIcon = document.querySelector(".menu__icon");
const docBody = document.querySelector("body");
const menu = document.querySelector(".menu");

if (menuIcon) {
	menuIcon.addEventListener("click" , toggleFunc )
};

function toggleFunc() {
	menuIcon.classList.toggle("menu__icon_active");
	docBody.classList.toggle("lock");
	menu.classList.toggle("menu_active");
}