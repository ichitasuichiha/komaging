<template lang="pug">
section#info
  div.info__content
    div.content__close
      a(v-link="{ path: '/' }")
        i.fa.fa-close
    div.content__work
      h2
        | komazing
      div.work__images
        figure.work__image.work__image--1
        figure.work__image.work__image--2
      div.work__images
        figure.work__image.work__image--3
        figure.work__image.work__image--4
      div.work__detail
        p.detail__pages
          | A5&nbsp;/&nbsp;16p&nbsp;/&nbsp;FullColor
        p.detail__price
          | 500yen
        p.detail__event
          | 古明地こんぷれっくす みっつめ。
        p.detail__space
          | 古-04 「いちたすいちは」
</template>

<script>
export default {
  ready() {
    App.DatasetHelper.set('info', 'render', 'ready');
    App.DatasetHelper.set(['content', 'bglayer'], 'contentRender', 'info');
  },
  route: {
    deactivate(transition) {
      App.DatasetHelper.set('info', 'render', 'destroy');
      App.DatasetHelper.set(['content', 'bglayer'], 'contentRender', '/');
      setTimeout(function() {
        transition.next();
      }, 1000);
    }
  }
}
</script>
