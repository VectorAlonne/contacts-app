<template>
  <base-layout page-default-back-link="/welcome">
    <div class="image-container">
      <ion-img :src="image" class="image"></ion-img>
    </div>

    <ion-list class="format">
      <ion-label class="label-title" position="stacked"><b>E-mail</b></ion-label>
      <ion-input placeholder="E-mail" class="input"></ion-input>
    </ion-list>

    <ion-list class="format">
      <ion-label class="label-title" position="stacked"><b>Password</b></ion-label>
      <ion-input placeholder="Password" class="input"></ion-input>
      <ion-text>
        <a href="" class="forgot">Forgot your Password?</a>
      </ion-text>
    </ion-list>

    <ion-list class="submit-button">
      <ion-button shape="round" class="button" color="tertiary" router-link="/contacts"
        >Submit</ion-button
      >
    </ion-list>

    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#5260FF"
        fill-opacity="1"
        d="M0,64L40,85.3C80,107,160,149,240,176C320,203,400,213,480,208C560,203,640,181,720,154.7C800,128,880,96,960,74.7C1040,53,1120,43,1200,64C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </base-layout>
</template>

<script>
import {
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonList,
  IonImg,
} from "@ionic/vue";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonList,
    IonImg,
  },
  setup() {
    const image = computed(() =>
      require("../../public/assets/usuario-de-perfil.png")
    );
    return {
      image
    }
  }
});
</script>

<style scoped>
.format {
  margin-top: 15px;
  margin-left: 10px;
}

.label-title {
  font-size: 24px;
}

.submit-button {
  margin-top: 20px;
  text-align: center;
}

.button {
  font-size: 20px;
  width: 50%;
  height: 50px;
}

.input {
  width: 90%;
  border-radius: 5px;
  background-color: rgb(255, 224, 255);
  font-size: 18px;
}

.wave {
  position: absolute;
  bottom: 0;
}

.forgot {
  font-size: 14px;
  color: gray;
  text-decoration: none;
}

.image-container {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100px;
  height: 100px;
}
</style>
