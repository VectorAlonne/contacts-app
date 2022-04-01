<template>
  <base-layout page-default-back-link="/login">
    <ion-list>
      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h1 class="name"><b>Maria Rodriguez</b></h1>
          <h2 class="description">UX Desingner</h2>
        </ion-list>
      </ion-item>
    </ion-list>

    <ion-list class="container">
      <div>
        <ion-label class="name"><b>Name</b></ion-label>
        <ion-input placeholder="Maria Rodriguez" class="input"></ion-input>
      </div>

      <div class="space">
        <ion-label class="name"><b>Title</b></ion-label>
        <ion-input placeholder="UX Designer" ion-input class="input"></ion-input>
      </div>

      <div>
        <ion-label class="name"><b>Profile Picture</b></ion-label>
        <ion-input placeholder="Upload file" class="input"></ion-input>
      </div>

      <div class="space">
        <ion-label class="name"><b>Address</b></ion-label>
        <ion-input placeholder="717 S 34th, St Matton, IL 61938" ion-input class="input"></ion-input>
      </div>

      <div>
        <ion-label class="name"><b>Phone</b></ion-label>
        <ion-input placeholder="(217) 499-0822" ion-input class="input"></ion-input>
      </div>

      <div class="space">
        <ion-label class="name"><b>Email</b></ion-label>
        <ion-input placeholder="mariarodriguez@hotmail.com" ion-input class="input"></ion-input>
      </div>
    </ion-list>

    <ion-list class="save">
      <ion-text class="position">
        <ion-button shape="round" color="tertiary" class="button"
        >Save</ion-button
      >
      </ion-text>
    </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonText,
  IonItem,
  IonThumbnail,
  IonImg,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
  components: {
    IonList,
    IonText,
    IonItem,
    IonThumbnail,
    IonImg,
    IonButton,
    IonLabel,
    IonInput,
  },
  setup() {
    const image = computed(() => require("../../public/assets/profile1.jpg"));
    const icon = computed(() => require("../../public/assets/lupa.png"));
    return {
      image,
      icon,
    };
  },
});
</script>

<style scoped>
.profile-photo {
  border-radius: 50px;
  width: 70px;
  height: 70px;
}

.info {
  width: 300px;
  margin-left: 30px;
}

.name {
  font-size: 20px;
}

.description {
  font-size: 18px;
}

.address {
  margin-left: 15px;
}
.save {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.button {
  width: 50%;
  height: 50px;
  font-size: 20px;
}

.container {
  margin-left: 20px;
}

.space {
  margin-top: 30px;
  margin-bottom: 30px;
}

.input {
  width: 90%;
  border-radius: 5px;
  background-color: rgb(255, 224, 255);
}

.position {
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
