<template>
  <q-page>
    <section class="hero">
      <img src="images/kathrin_hero_eyespop.png" class="hero-image">
        <div class="hero-text">
          <div>
          <div class="overlay"></div>
          <div class="overlay2"></div>
          <h1 class="name text-primary">Kathrin Egger</h1>
          <h2 class="description text-accent agrandir-thin-italic">Music, Art & Photography</h2>
        </div>

      </div>
    </section>

    <div class="row">
      <div class="col">

      </div>
      <div class="col bg-amber">col2</div>
    </div>


  </q-page>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  width: 100%;
  // background-image: linear-gradient(to left,  rgba(0, 0, 0, 0.535), rgba(25, 0, 0, 0.968));

  @media (max-width: 767px) {
    height: calc(100vh - 50px);
  }

  @media (min-width: 768px) {
    height: 91.3vh;
  }

  .hero-text {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    h1 {
        font-size: 2.2rem;
        line-height: 0.5;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

      h2 {
        margin: 0.8rem 0 0 0;
        padding-left: 0.28rem;
        font-size: 1rem;
        line-height: 0.5;
      }

    @media (min-width: 380px){
      h1 {
        font-size: 3.2rem;
        line-height: 0.5;
        text-shadow: 1px 0px 1px rgba(255, 255, 255, 0.3);
        margin: 0;
      }

      h2 {
        margin: 0.8rem 0 0 0;
        padding-left: 0.28rem;
        font-size: 1.1rem;
        line-height: 0.5;
      }
    }


    /* mobile */
    @media (min-width: 0px) and (max-width: 600px) {
      background-color: rgba(231, 214, 172, 0.1);
      align-items: center;
      justify-content: baseline;
      width: 100%;
      bottom: 35%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

    /* tablets */
    @media (min-width: 601px) and (max-width: 1024px) {
      width: 100%;
      align-items: center;
      bottom: 0;
      right: 0;
      height: 20%;
      background-color: rgba(231, 214, 172, 0.1);

      h1{
        font-size: 5rem;
        text-shadow: 2px 2px 50px rgb(27, 2, 2);
      }
      h2{
        font-size: 1.8rem;
        text-shadow: 1px 0px 0px rgb(97, 16, 16);
      }
    }

    /* desktop */
    @media (min-width: 1025px) {
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      padding-left: 8rem;
      bottom: 5%;
      right: 0;
      left: 0;
      height: 30%;
      background-color: rgba(231, 214, 172, 0.1);
      /*background-color: rgba(231, 214, 172, 1);*/
      background-image: linear-gradient(to right,  rgba(58, 42, 1, 0.15), rgba(0, 0, 0, 0));

      h1{
        padding-right: 10rem;
        line-height: 130%;
        font-size: 6rem;
        text-shadow: 2px 2px 50px rgb(27, 2, 2);
      }
      h2{
        font-size: 2.8rem;
        padding-right: 2rem;
        text-align: end;
        text-shadow: 1px 0px 0px rgb(97, 16, 16);
        background-image: linear-gradient(to left,  rgba(231, 214, 172, 0.141), rgba(0, 0, 0, 0));
      }
    }

    @media(min-width: 1400px){
      background-image: linear-gradient(to right,  rgba(255, 0, 0, 0.15), rgba(45, 2, 2, 0.192));
    }
  }




  .hero-image {
    align-self: flex-start;
    position: absolute;
    top: 0px;
    left: 0;
    height: 50%;
    width: 100%;
    object-fit: cover;
    opacity: 70%;

    @media(min-width: 601px){
      height:79%;
      object-fit: contain;
    }

    @media (min-width: 1024px) {
      height:90%;
      left: 0;
    }

    @media(min-width: 1400px){
      left: -200px;
      object-fit: contain;
      width:100%;

    }

  }
}

.overlay{
  @media (min-width: 1400px){
        position: absolute;
        top:-51%;
        right: 0;
        height: 51%;
        width: 100%;
        background-image: linear-gradient(to right,  rgba(255, 0, 0, 0), rgba(45, 2, 2, 0.192));
        z-index: 0;
}
}
</style>
