<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
  
};
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@font-face {
  font-family: "raleway";
  src: url("/fonts/Raleway-Medium.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "raleway";
  src: url("/fonts/Raleway-Thin.ttf") format("ttf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "raleway";
  src: url("/fonts/Raleway-Bold.ttf") format("ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "raleway";
  src: url("/fonts/Raleway-Light.ttf") format("ttf");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "raleway";
  src: url("/fonts/Raleway-SemiBold.ttf") format("ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Medium.ttf") format("ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Bold.ttf") format("ttf");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Light.ttf") format("ttf");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Raleway-SemiBold.ttf") format("ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto-Thin.ttf") format("ttf");
  font-weight: 100;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

img {
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto" !important;
}

.bold {
  font-weight: bold;
}

header {
  font-family: "raleway";
  background-color: #0f1a51;
  color: #fff;
  box-shadow: 0 5px 5px #cccccc;
}

header .row {
  padding: 13px;
  margin: 0 30px;
  width: 97%;
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
  margin-left: 7%;
}

.pageItem {
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;

  &__wrapper {
    width: 150px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover,
  &__active,
  &__active:hover {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  &__active:after {
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
