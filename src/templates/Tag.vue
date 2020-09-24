<template>
  <Layout>
  <!-- Page Header -->
  <header 
    class="masthead"
    :style="{backgroundImage: `url(${GRIDSOME_API_URL+$page.tag.cover.url})`}"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
              <h1>{{$page.tag.title}}</h1>
              <span class="meta"
                >Taged by
                <a href="#" style="margin-right:6px;">{{$page.tag.created_by.firstname + $page.tag.created_by.lastname}}</a>
                on  {{$page.tag.created_at | date}}
              </span>
            </div>
        </div>
      </div>
    </div>
  </header>

  <!-- tag Content -->
  <article>
    <div class="container">
      <div class="row">
        <ul class="col-lg-8 col-md-10 mx-auto" >
         <li v-for="post in $page.tag.posts" :key="post.id">
           <g-link :to="'post/' +post.id">
                       <img :src="GRIDSOME_API_URL+post.cover.url" style="width:60px;height:60px;border-radius:50%;margin-right:10px;">
          <h5 style="display:inline-block;"> {{post.title}}</h5>
          <p style="margin:10px;">Posted on  {{post.created_at | date}}</p>
           </g-link>

         </li>
        </ul>
      </div>
    </div>
  </article>
  </Layout>
</template>

<page-query>
query($id:ID!){
  tag:strapiTag(id: $id) {
    id
    title
    cover {
      url
    }
    posts {
      id
      title
      cover {
        url
      }
      created_at
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
import dayjs from 'dayjs'
export default {
  name: 'TagPage',
  metaInfo(){
    return{
      title: this.tagInfo.title
    }
  },
  data () {
    return {

    }
  },
  computed: {
    tagInfo(){
      return this.$page.tag
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
