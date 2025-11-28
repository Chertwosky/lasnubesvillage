<template>
  <section class="yandex-widgets">
    <div class="yandex-widgets__container">
      <div class="yandex-widgets__map">
        <div class="yandex-widgets__map-frame">
          <a
            class="yandex-widgets__map-link"
            href="https://yandex.ru/maps/org/las_nubes_village/75864277924/?utm_medium=mapframe&utm_source=maps"
            rel="noopener noreferrer"
            target="_blank"
          >
            Las nubes village
          </a>
          <a
            class="yandex-widgets__map-link yandex-widgets__map-link_secondary"
            href="https://yandex.ru/maps/11004/republic-of-adygea/category/guest_house/131994109947/?utm_medium=mapframe&utm_source=maps"
            rel="noopener noreferrer"
            target="_blank"
          >
            Гостевой дом в Республике Адыгея
          </a>
          <iframe
            class="yandex-widgets__iframe"
            src="https://yandex.ru/map-widget/v1/org/las_nubes_village/75864277924/?ll=40.189279%2C44.282678&z=17"
            allowfullscreen="true"
            frameborder="1"
          ></iframe>
        </div>
      </div>
      <div class="yandex-widgets__reviews">
        <div class="yandex-widgets__reviews-frame">
          <iframe
            class="yandex-widgets__iframe yandex-widgets__iframe_reviews"
            src="https://yandex.ru/maps-reviews-widget/75864277924?comments"
            frameborder="1"
          ></iframe>
          <a
            class="yandex-widgets__reviews-link"
            href="https://yandex.ru/maps/org/las_nubes_village/75864277924/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Las nubes village на карте Республики Адыгея — Яндекс Карты
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.yandex-widgets {
  margin: 60px auto 0;
  max-width: var(--container-width);
  padding: 0 var(--container-padding);
}

.yandex-widgets__container {
  display: flex;
  gap: 24px;
  align-items: stretch;
}

.yandex-widgets__map,
.yandex-widgets__reviews {
  flex: 1 1 0;
}

.yandex-widgets__map-frame,
.yandex-widgets__reviews-frame {
  background: var(--white-color);
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(8, 23, 52, 0.08);
  overflow: hidden;
  height: 100%;
  position: relative;
  min-height: 420px;
}

.yandex-widgets__map-link {
  color: #666;
  font-size: 12px;
  position: absolute;
  left: 12px;
  text-decoration: none;
  z-index: 1;
}

.yandex-widgets__map-link_secondary {
  top: 20px;
}

.yandex-widgets__map-link:not(.yandex-widgets__map-link_secondary) {
  top: 6px;
}

.yandex-widgets__iframe {
  border: none;
  width: 100%;
  height: 100%;
}

.yandex-widgets__iframe_reviews {
  min-height: 420px;
}

.yandex-widgets__reviews-link {
  box-sizing: border-box;
  text-decoration: none;
  color: #b3b3b3;
  font-size: 10px;
  font-family: 'YS Text', sans-serif;
  padding: 10px 20px;
  text-align: center;
  display: block;
  border-top: 1px solid #e6e6e6;
  background: #f9f9f9;
}

@media (max-width: 992px) {
  .yandex-widgets__container {
    flex-direction: column;
  }

  .yandex-widgets__map-frame,
  .yandex-widgets__reviews-frame {
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .yandex-widgets {
    padding: 0 16px;
  }

  .yandex-widgets__map-frame,
  .yandex-widgets__reviews-frame {
    min-height: 320px;
  }
}
</style>
