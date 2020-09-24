<template>
  <Layout>
  <!-- Page Header -->
  <header 
    class="masthead"
    :style="{backgroundImage: `url(${GRIDSOME_API_URL + $page.post.cover.url})`}"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <span class="meta"
                >Posted by
                <a href="#" style="margin-right:6px;">{{$page.post.created_by.firstname + $page.post.created_by.lastname}}</a>
                on  {{$page.post.created_at | date}}</span
              >
            </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
         <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">
          </div>
      </div>
    </div>
  </article>
  </Layout>
</template>

<page-query>
query($id:ID!){
  post:strapiPost(id: $id) {
    id
    title
    content
    cover {
      url
    }
    tags {
      id
      title
    }
    created_at
    created_by {
      id
      firstname
      lastname
    }
  }
}
</page-query>


<script>
import MarkDownIt from 'markdown-it'
import dayjs from 'dayjs'
export default {
  name: 'PostPage',
  metaInfo(){
    return{
      title: this.postInfo.title
    }
  },
  data () {
    return {

    }
  },
  computed: {
    postInfo(){
      return this.$page.post
    }
  },
  methods: {
    mdToHtml(markdown){
      const md = new MarkDownIt()
      return md.render(markdown)
    }
  },
  filters:{
    date(value,format='YYYY-MM-DD HH:mm'){
      return dayjs(value).format(format)
    }
  }
}
</script>

<style scoped>

</style>
