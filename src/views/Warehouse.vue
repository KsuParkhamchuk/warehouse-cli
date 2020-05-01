<template>
  <div>
    <Navigation></Navigation>
    <main class="d-flex justify-content-center align-items-center">
      <div class="row shipment">
        <div class="col-4">
          <div class="shelfInfo">
            <div class="shelfInfo__content">
              <div class="shelfInfo__content--number">
                <span>Полка: А1-10-10</span>
                <span class="closeShelf"></span>
              </div>
              <div class="shelfInfo__content--description">
                <p>Стелаж: 7</p>
                <p>Продукция: древесина</p>
                <p>Количество: 50кг</p>
                <p>Дата приемки: 25.01.2000 16:56</p>
                <p>Дата отгрузки: 27.01.2000 14:00</p>
                <p>
                  Свободное место:
                  <span class="bold">да</span>
                </p>
              </div>
              <form class="shipmentNumberForm" action>
                <input type="text" />
                <select class name id>
                  <option value="кг">кг</option>
                  <option value="шт">шт</option>
                </select>
                <button type="submit">Отгрузить</button>
              </form>
            </div>
          </div>

          <div class="shelfInfo">
            <div class="shelfInfo__content">
              <div class="shelfInfo__content--number d-flex justify-content-between">
                <span>Полка: А1-10-10</span>
                <span class="closeShelf"></span>
              </div>
              <div class="shelfInfo__content--description">
                <p>Стелаж: 7</p>
                <p>Продукция: древесина</p>
                <p>Количество: 50кг</p>
                <p>Дата приемки: 25.01.2000 16:56</p>
                <p>Дата отгрузки: 27.01.2000 14:00</p>
                <p>
                  Свободное место:
                  <span class="bold">да</span>
                </p>
              </div>
              <form class="shipmentNumberForm" action>
                <input type="text" />
                <select class name id>
                  <option value="кг">кг</option>
                  <option value="шт">шт</option>
                </select>
                <button type="submit">Отгрузить</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="sheme"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.shipment {
  width: 95%;
}

.shelfInfo {
  margin-top: 50px;
  background-color: #f2edf5;
  border-radius: 10px;
  box-shadow: 0 0 6px #bbbbbb;

  &__content {
    padding: 10px 30px;

    &--number {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
      position: relative;
    }

    &--description {
      font-size: 16px;
      margin-bottom: 20px;

      & p {
        margin-bottom: 0;
      }
    }
  }
}

.shipmentNumberForm button {
  color: #fff;
  font-weight: bold;
  background-color: #add43f;
  border: 0;
  padding: 5px 70px;
}

.shipmentNumberForm input {
  width: 70px;
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
</style>