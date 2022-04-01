<template>
  <base-layout page-default-back-link="/login">
    <ion-list class="search">
      <h1 class="title"><b>Contacts</b></h1>
      <ion-input class="input"></ion-input>
    </ion-list>

    <ion-list>

      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Maria Rodriguez</b></h2>
          <h3 class="description">I have some questions about...</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>

      <ion-item class="background" lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image2"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Sara Fagundez</b></h2>
          <h3 class="description">http://www.warephase.com</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image3"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Roberto Diaz</b></h2>
          <h3 class="description">Hope ir will work in the week...</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image4"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Federico Suarez</b></h2>
          <h3 class="description">Thank you! It really shine with...</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image5"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Yessica Leites</b></h2>
          <h3 class="description">Yes i know</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail>
          <ion-img class="profile-photo" :src="image6"></ion-img>
        </ion-thumbnail>
        <ion-list class="info">
          <h2 class="name"><b>Lee Cheng</b></h2>
          <h3 class="description">It will be olnile in 2 days</h3>
        </ion-list>
        <ion-thumbnail class="position">
          <ion-img router-link="/contacts-id" class="arrow" :src="icon"></ion-img>
        </ion-thumbnail>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonInput, IonImg, IonThumbnail, IonItem } from "@ionic/vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
  components: {
    IonList,
    IonInput,
    IonImg,
    IonThumbnail,
    IonItem,
  },
  setup() {
    const image = computed(() => require("../../public/assets/profile1.jpg"));
    const image2 = computed(() => require("../../public/assets/profile2.jpg"));
    const image3 = computed(() => require("../../public/assets/profile3.jpg"));
    const image4 = computed(() => require("../../public/assets/profile4.jpg"));
    const image5 = computed(() => require("../../public/assets/profile5.jpg"));
    const image6 = computed(() => require("../../public/assets/profile6.jpg"));
    const icon = computed(() => require("../../public/assets/next.png"));

    return {
      image,
      image2,
      image3,
      image4,
      image5,
      image6,
      icon,
    };
  },
});
</script>

<style scoped>
.search {
  height: 25%;
  background-color: rgb(241, 241, 241);
}

.title {
  color: skyblue;
  font-size: 50px;
  margin-left: 20px;
}

.input {
  height: 40px;
  font-size: 30px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: white;
}

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
  font-size: 16px;
}

.arrow {
  width: 40px;
  height: 40px;
}

.position {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.background {
  background-color: rgb(255, 224, 255);
}
</style>