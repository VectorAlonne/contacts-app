<template>
  <base-layout page-default-back-link="/contacts-edit">
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

    <ion-list class="address">
      <h1><b>Address</b></h1>
      <h2 class="description">717 S 34th St</h2>
      <h3 class="description">Matton, IL 61938</h3>
    </ion-list>

    <ion-list class="address">
      <h1><b>Phone</b></h1>
      <h2 class="description">(217) 499-0822</h2>
    </ion-list>

    <ion-list class="address">
      <h1><b>Email</b></h1>
      <h2 class="description">mariarodriguez@hotmail.com</h2>
    </ion-list>

    <ion-list class="edit">
      <ion-text class="list">
        <ion-button
          router-link="/contacts-edit"
          shape="round"
          color="tertiary"
          class="button"
          >Edit</ion-button
        >
      </ion-text>
    </ion-list>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonButton,
  IonText,
} from "@ionic/vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
  components: {
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonButton,
    IonText,
  },
  setup() {
    const image = computed(() => require("../../public/assets/profile1.jpg"));

    return {
      image,
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
.edit {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.list {
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.button {
  width: 50%;
  height: 50px;
  font-size: 20px;
}
</style>
