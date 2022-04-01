<template>
  <base-layout-welcome>
    <svg class="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#5260FF"
        fill-opacity="1"
        d="M0,256L40,240C80,224,160,192,240,165.3C320,139,400,117,480,101.3C560,85,640,75,720,85.3C800,96,880,128,960,122.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>

    <div class="image-container">
      <ion-img class="image" :src="image"></ion-img>
    </div>

    <ion-text class="presentation">
      <h1 class="title"><b>Welcome!</b></h1>

      <h2 class="presentation-text">
        If you are alredy registed, Welcome back! if not please join our
        application by pressing the sing up button and start to chat with your
        frinds and family!
      </h2>
    </ion-text>

    <ion-list class="buttons">
      <ion-text class="list">
        <ion-button
          shape="round"
          class="login"
          color="tertiary"
          router-link="/login"
          >Login</ion-button
        >

        <ion-button shape="round" color="tertiary" class="singup"
          >Sing Up</ion-button
        >
      </ion-text>
    </ion-list>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#5260FF"
        fill-opacity="1"
        d="M0,64L40,85.3C80,107,160,149,240,176C320,203,400,213,480,208C560,203,640,181,720,154.7C800,128,880,96,960,74.7C1040,53,1120,43,1200,64C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </base-layout-welcome>
</template>

<script>
import { IonText, IonButton, IonList, IonImg } from "@ionic/vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
  components: {
    IonText,
    IonList,
    IonButton,
    IonImg,
  },
  setup() {
    const image = computed(() =>
      require("../../public/assets/title-image.png")
    );

    return {
      image,
    };
  },
});
</script>

<style scoped>
.presentation {
  display: grid;
  text-align: center;
}

.presentation-text {
  font-size: 20px;
  margin-bottom: 50px;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 400px;
  height: 400px;
}

.title {
  color: skyblue;
  font-size: 50px;
}

.buttons {
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 1000;
}

.list {
  height: 150px;
  display: grid;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.login,
.singup {
  width: 200px;
  height: 50px;
  font-size: 18px;
}

.wave-top {
  position: absolute;
  top: 0;
}

.wave {
  position: absolute;
  bottom: 0;
}
</style>
