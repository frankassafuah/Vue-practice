<template>
  <div>
    <!-- <h1>{{title}}</h1> -->
    <!-- <ninjas />
    <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
    <Ninja v-bind:ninjas="ninjas"></Ninja>
    <Footer v-bind:title="title"></Footer>
    <FormHelper>
      <h2 slot="title">I am the slot title</h2>
      <p slot="text">I am the paragraph</p>
    </FormHelper>
    <component v-bind:is="component"></component> 
    <list-blogs></list-blogs> -->
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Ninjas from './Ninjas.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninja from './components/Ninjass.vue';
import formHelper from './components/formHelper.vue'
import FormHelper from './components/formHelper.vue';
import formOneVue from './components/formOne.vue';
import formTwoVue from './components/formTwo.vue';
import addBlogVue from './components/addBlog.vue';
import Vue from 'vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import navHeader from './components/navHeader.vue';

//Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})


export default {
  components: {
    "ninjas": Ninjas,
    Header,
    Footer,
    Ninja,
    formHelper,
    FormHelper,
    formOneVue,
    formTwoVue,
    addBlogVue,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'nav-header': navHeader
  },

  data() {
    return {
      // title: 'Ninja App',
      ninjas: [
        { name: 'Ryu', speciality: 'Vue Components', show: false },
        { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
        { name: 'Hitoshi', speciality: 'Click Events', show: false },
        { name: 'Tango', speciality: 'Conditionals', show: false },
        { name: 'Kami', speciality: 'Webpack', show: false },
        { name: 'Yoshi', speciality: 'Data Diggin', show: false }
      ],
      title: "Vue Ninjas",
      component: 'formTwoVue'
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle
    }
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
