<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {

    data() {
        return {
            blogs: [],
            search: ''
        }
    },

    methods: {
        async fetchBlogs() {
            const response = await this.axios.get('https://jsonplaceholder.typicode.com/posts');
            this.blogs = response.data.slice(0, 10);
        }
    },

    created() {
        this.fetchBlogs()
    },

    computed: {

    },

    //Registering custom filtes and directives
    filters: {
        'toUppercase':function(value){
            return value.toUpperCase()
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = '#' + Math.random().toString().slice(2,8);
            }
        }
    },

    mixins: [searchMixin]
}

</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>