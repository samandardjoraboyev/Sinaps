<template>
  <main>
    <div class="main-home h-auto">
      <div class="flex gap-7" style="height:500px">
        <!-- Left big card -->
        <div
          class="w-full lg:w-2/5 rounded-xl text-white flex items-center justify-center">
          <Card />
        </div>

        <!-- Right side 4 cards -->
        <div class="w-full gap-7 lg:w-3/5 flex flex-col">
          <!-- Row 1 -->
          <div class="flex gap-7 items-start">
            <div
              class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
            <div
              class="w-1/3 bg-blue-400 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
          </div>

          <!-- Row 2 -->
          <div class="flex gap-7">
            <div
              class="w-1/3 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
            <div
              class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
          </div>
        </div>
      </div>


    </div>

  </main>

  <section>
    <div class="flex justify-between items-end py-4">
      <div>
        <h4 class="font-bold text-[#FFB23F]">Bu qiziq</h4>
        <h1 class="font-bold" style="font-size: 34px">Interkativ saytlarimiz</h1>
      </div>
      <p style="width: 767px" class="text-sm text-[#5E5E5E] italic use-poppins">Mazkur bo‘limda
        turli fanlar bo‘yicha interaktiv saytlar joylashgan.
        Masalan, kimyo fanidan davriy jadval yoki geografiya fanidan dunyo xartitasi.</p>
    </div>

    <!--    cards start-->
    <div class="flex justify-between">
      <div>
        <div
          class="relative w-[397px] h-[235px] overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="@/assets/map.png" alt="Dunyo Xarita" class="w-full h-full object-cover">

          <!-- Overlay qismi -->
          <div
            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 py-4 text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <h3 class="text-lg font-semibold">Dunyo Xaritasi</h3>
          </div>
        </div>

      </div>

      <div>
        <div
          class="relative w-[397px] h-[235px] overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="@/assets/map.png" alt="Dunyo Xaritasi" class="w-full h-full object-cover">

          <!-- Overlay qismi -->
          <div
            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 py-4 text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <h3 class="text-lg font-semibold">Dunyo Xaritasi</h3>
          </div>
        </div>

      </div>

      <div>
        <div
          class="relative w-[397px] h-[235px] overflow-hidden rounded-lg shadow-lg group cursor-pointer">
          <img src="@/assets/map.png" alt="Dunyo Xarita" class="w-full h-full object-cover">

          <!-- Overlay qismi -->
          <div
            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 py-4 text-white opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <h3 class="text-lg font-semibold">Dunyo Xaritasi</h3>
          </div>
        </div>


      </div>

    </div>

    <!--    cards end-->

    <div class="flex justify-between my-4 items-center">
      <div class="mt-4">
        <div class=" items-center">
          <div>
            <h4 class="font-bold text-[#FFB23F]">Ma'lumotlar toplami</h4>
            <h1 class="font-bold" style="font-size: 34px">Ensiklopediya</h1>
          </div>
          <p style="width: 430px" class="text-sm text-[#5E5E5E] italic use-poppins">Mazkur bo‘limda
            Ensiklopediya — muayyan tizimga solingan keng qamrovli bilimlar to‘plami.</p>
        </div>
        <div>
          <h1 class="font-bold" style="font-size: 34px">498+</h1>
          <p style="width: 430px" class="text-sm text-[#5E5E5E] italic use-poppins">maqola</p>
        </div>
        <div>
          <button class="bg-cyan-500 my-2 text-white rounded-md px-4 py-2">Barchasi</button>
        </div>
      </div>
      <div>
        <ul>
          <li>Timsohlar odamga hamla qiladimi?</li>
          <hr>
          <li>Termometrni kim ixtiro qilgan?</li>
          <hr>
          <li>Kaktuslar suvsiz qanday yashaydi?</li>
          <hr>
          <li>Nega kenguruning xaltachasi bor?</li>
          <hr>
          <li>Delfin gapira oladimi?</li>
        </ul>

      </div>
    </div>



  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import ExtraMiniCard from '@/components/ExtraMiniCard.vue'
import CardMini from '@/components/CardMini.vue'
import BaseIcon from '@/components/BaseIcon.vue'

const cardData = ref([
  {
    id: 1,
    title: 'Arktika baliqlarining inson oziqlanishidagi',
    subtitle: 'Arktika hududida asosan qadimgi kristall qalqonlar va',
    img: '@/assets/img/main-fish.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...'
  },
  {
    id: 2,
    title: 'Shimolda nimalar iste’mol qilinadi?',
    img: '/src/assets/images/arctica.png',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...'

  },
  {
    id: 3,
    title: 'Kelajakdagi Arktikada qurilishlari davom',
    img: '/src/assets/images/mountain.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...'

  },
  {
    id: 4,
    title: 'Kelajakdagi Arktikada qurilishlari davom',
    img: '/src/assets/images/mountain.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...'

  },
  {
    id: 5,
    title: 'Shimolda nimalar iste’mol qilinadi?',
    img: '/src/assets/images/arctica.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...'

  }
])

</script>


<style lang="scss">
  @use "@/assets/_variables.scss" as *;
  @use "@/assets/_font.scss" as *;


  div {
    margin: 0;
    padding: 0;
  }

  .main-home {
    margin-top: 4rem;
    @media (max-width: $tablet) {
      margin-top: 0.5rem;

    }
  }

  .main-font {
    @include font("Poppins", normal, 36px, 600, 150%, #121212, 0.04em);
    //width: 70% !important;
  }

  .main-font__info {
    @include font("Poppins", italic, 18px, 500, 150%, #B6B6B6, 0.04em);
    width: 548px;
    @media (max-width: 986px) {
      width: 320px;
    }

  }
</style>
