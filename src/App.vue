<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style lang="scss">
/* roboto-100 - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 100;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.eot"); /* IE9 Compat Modes */
	src: local("Roboto Thin"), local("Roboto-Thin"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-100.svg#Roboto")
			format("svg"); /* Legacy iOS */
}
/* roboto-300 - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 300;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.eot"); /* IE9 Compat Modes */
	src: local("Roboto Light"), local("Roboto-Light"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-300.svg#Roboto")
			format("svg"); /* Legacy iOS */
}
/* roboto-regular - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.eot"); /* IE9 Compat Modes */
	src: local("Roboto"), local("Roboto-Regular"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-regular.svg#Roboto")
			format("svg"); /* Legacy iOS */
}
/* roboto-500 - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.eot"); /* IE9 Compat Modes */
	src: local("Roboto Medium"), local("Roboto-Medium"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-500.svg#Roboto")
			format("svg"); /* Legacy iOS */
}
/* roboto-700 - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.eot"); /* IE9 Compat Modes */
	src: local("Roboto Bold"), local("Roboto-Bold"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-700.svg#Roboto")
			format("svg"); /* Legacy iOS */
}
/* roboto-900 - latin_cyrillic-ext_cyrillic_latin-ext */
@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 900;
	src: url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.eot"); /* IE9 Compat Modes */
	src: local("Roboto Black"), local("Roboto-Black"),
		url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.eot?#iefix")
			format("embedded-opentype"),
		/* IE6-IE8 */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.woff2")
			format("woff2"),
		/* Super Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.ttf")
			format("truetype"),
		/* Safari, Android, iOS */
			url("./assets/fonts/Roboto/roboto-v20-latin_cyrillic-ext_cyrillic_latin-ext-900.svg#Roboto")
			format("svg"); /* Legacy iOS */
}

* {
	font-family: "Roboto" !important;
	box-sizing: border-box;
}

.container {
	max-width: 1600px !important;
}

img {
	width: 100%;
}

body {
	margin: 0;
	padding: 0;
}

.bold {
	font-weight: bold;
}

header {
	background-color: #0f1a51;
	color: #fff;
	box-shadow: 0 5px 5px #cccccc;
}

header .row {
	padding: 13px;
	margin: 0 30px;
	width: 97%;
}

h1 {
	font-size: 36px !important;
}

.burgerMenu {
	position: relative;
	cursor: pointer;
}

.burgerLine,
.burgerLine:before,
.burgerLine:after {
	content: "";
	width: 40px;
	height: 4px;
	left: 0;
	position: absolute;
	background-color: #fff;
	border-radius: 8px;
}

.burgerLine:before {
	top: -10px;
}

.burgerLine:after {
	top: 10px;
}

.pageTitle {
	font-size: 25px;
	font-weight: bold;
}

.pageItem {
	color: rgba(255, 255, 255, 0.6);
	font-weight: bold;

	&__wrapper {
		padding-left: 20px;
		padding-right: 20px;
		position: relative;
		text-align: center;
		text-transform: uppercase;
	}

	&:hover,
	&.router-link-active,
	&.router-link-active:hover {
		color: #fff;
		text-decoration: none;
		font-weight: bold;
	}

	&.router-link-active:after {
		content: "";
		width: -webkit-fill-available;
		height: 4px;
		background-color: #fff;
		position: absolute;
		left: 0;
		top: 33px;
	}
}

.navigation {
	padding-top: 60px;
	position: fixed;
	z-index: 20;
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #fff;
	overflow-y: auto;
	left: -100%;
	transition: 0.5s;
}

.burger__menu--active .navigation {
	left: 0;
	top: 0;
}

.nav__link {
	padding: 20px 60px;
	margin: 5px 15px;
	font-size: 20px;
	border-radius: 10px;
	font-weight: bold;
	color: #0f1a51;

	&:hover {
		text-decoration: none;
		background-color: rgba(94, 71, 234, 0.25);
		color: #0f1a51;
	}
}

.burger__menu--overlay {
	display: none;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	right: 0;
	z-index: 10;
}

.burger__menu--active .burger__menu--overlay {
	display: block;
	background-color: rgba(0, 0, 0, 0.5);
}

.nav__Title {
	font-size: 33px;
	font-weight: bold;
	color: #0f1a51;
	margin: 0 70px 75px;
}

.customInput {
	border: 0;
	box-shadow: 0 0 5px #cccccc;

	&.long {
		width: 300px;
		height: 30px;
	}
}

.hintLabel {
	font-size: 14px;
}

.greenBtn {
	border: 0;
	background-color: #add43f;
	color: #fff;
	font-weight: bold;
	padding: 5px 40px;
	cursor: pointer;

	&:hover {
		background-color: #96b935;
	}
}

.whiteBtn {
	border: 0;
	background-color: #fff;
	box-shadow: 0 0 5px #cccccc;
	padding: 0 5px;
	cursor: pointer;

	&:hover {
		background-color: #eceaf5;
	}
}

.pg__title {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 40px;
}

.addItem {
	background-color: #add43f;
	color: #fff;
	font-weight: bold;
	padding: 5px 13px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #9abd38;
	}
}

.container-95 {
	max-width: 95%;
	margin: 50px auto;

	&__inner {
		box-shadow: 0 0 7px #cccccc;
		padding: 30px;
		max-height: 600px;
		overflow-y: auto;
	}
}

.table__item {
	box-shadow: 0 0 7px #cccccc;
	padding: 20px 10px;
	border-radius: 7px;
}

.documentLeft {
	width: 200px;
}

.data-container {
	border-radius: 10px;
	box-shadow: 0 0 7px #cccccc;
	padding: 25px;
}

.max-width-480 {
	max-width: 480px;
}

/*shelfInfo*/
.selfInfo {
	background-color: #f2edf5;
	border-radius: 10px;
	box-shadow: 0 0 6px #bbbbbb;

	&__content {
		padding: 10px 30px;
	}

	&__content--number {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20px;
		position: relative;
	}

	&__content--description {
		font-size: 16px;
		margin-bottom: 20px;
	}
	&__content--description p {
		margin-bottom: 10px;
	}
}

.shipmentNumberForm input {
	width: 70px;
	height: 30px;
}

.shipmentNumberForm select {
	margin-right: 30px;
	height: 30px;
}

.sheme {
	margin-top: 50px;
	height: 100%;
	box-shadow: 0 0 6px #cccccc;
	border-radius: 10px;
}

.closeShelf {
	position: absolute;
	right: -16px;
	top: 0;
	width: 32px;
	height: 17px;
	opacity: 0.3;

	&:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		position: absolute;
		left: 15px;
		content: " ";
		height: 17px;
		width: 2px;
		background-color: #333;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
}

.userForm {
	max-width: 40%;
	padding: 50px;
}
</style>
