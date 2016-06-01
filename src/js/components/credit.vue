<template lang="pug">
section#credit
  div.credit__content
    div.content__close
      a(v-link="{ path: '/' }")
        i.fa.fa-close
    div.content__author
      h2
        | Author
      figure.author__image.author__image--1
      div.author__detail
        p.detail__name
          | いちは
        div.detail__link
          span.link--pixiv
            a(href='http://www.pixiv.net/member.php?id=1158614')
              | pixiv
          span
              | &nbsp;/&nbsp;
          span.link--twitter
            a(href='https://twitter.com/nig_18')
              | twitter
    div.content__author
      h2
        | WebDesign
      figure.author__image.author__image--2
      div.author__detail
        p.detail__name
          | 汐瀬なぎ
        div.detail__link
          span.link--pixiv
            a(href='http://www.pixiv.net/member.php?id=32783')
              | pixiv
          span
              | &nbsp;/&nbsp;
          span.link--twitter
            a(href='https://twitter.com/polyxx')
              | twitter
</template>

<script>
export default {
  ready() {
    App.DatasetHelper.set('credit', 'render', 'ready');
    App.DatasetHelper.set(['content', 'bglayer'], 'contentRender', 'credit');
  },
  route: {
    deactivate(transition) {
      App.DatasetHelper.set('credit', 'render', 'destroy');
      App.DatasetHelper.set(['content', 'bglayer'], 'contentRender', '/');
      setTimeout(function() {
        transition.next();
      }, 1000);
    }
  }
}
</script>
