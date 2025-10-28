<template>
    <section class="sky">
        <img :src="Sky" alt="Небо" class="sky__reel" draggable="false" />
        <div class="sky__wrap">
        <div class="sky__wrap_block">
            <img :src="Logo" alt="Лого" class="sky__wrap_block_reel" draggable="false" />
            <span class="sky__wrap_block_text">Там, где горы встречают облака</span>
        </div>
    </div>
    </section>
  </template>

  <script setup>
  import Sky from '@/assets/images/core/sky/sky.svg'
  import Logo from '@/assets/images/core/sky/logo.svg'
  </script>

  <style scoped>

  .sky {
    position: relative;
    margin: 50px 0 0 0;
  }

  .sky__wrap {
    position: absolute;
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    z-index: 10000;
    align-items: center;
    align-self: center;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    justify-content: end;
}

  .sky__reel {
    width: 99.2vw;       /* на всю ширину экрана */
    max-height: 600px;  /* ограничиваем по высоте */
    object-fit: cover;  /* обрезает/масштабирует картинку по контейнеру */
    display: block;
  }

  .sky__wrap_block {
    display: flex;
    align-items: center;
  }

  .sky__wrap_block_text {
    font-family: var(--font-secondary);
    font-size: calc(var(--fontsize-secondary)*4.25);
    color: var(--white-color);
    max-width: 340px;
}




@media (max-width:1024px) {
    .sky {
        width: 100vw;
    }
    .sky__reel {
    width: 99.99vw;       /* на всю ширину экрана */
  }

  .sky__wrap_block_reel {
    width: 250px;
  }

  .sky__wrap_block_text {

    font-size: calc(var(--fontsize-secondary)*3.25);
    max-width: 340px;
}

.sky__wrap {
    left: 28%;
    top: 48%;
}


}

@media (max-width:800px) {


.sky__wrap {

left: 41%;
top: 39%;

}

}

@media (max-width:540px) {
    .sky__wrap_block_reel {
    width: 100px;
  }

  .sky__wrap_block_text {

font-size: calc(var(--fontsize-secondary)*1.25);
max-width: 340px;
}

.sky__wrap {

left: 41%;
top: 40%;

}

}


  </style>
