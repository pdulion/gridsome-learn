<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-image :src="edge.node.cover_image" class="cover" />
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} ({{ edge.node.timeToRead }} minute read).</p>
      <div>
        <g-link class="tags" v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">#{{ tag.id }}</g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
    </article>
    <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query($page: Int) {
  allPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM Do, YYYY")
        timeToRead
        path
        cover_image (width: 1000, height: 300)
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  components: { Pager }
}
</script>

<style>
article {
  margin-bottom: 3em;
}
.tags {
  padding-right: 0.25em;
}
.cover {
  width: 100%;
}
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>