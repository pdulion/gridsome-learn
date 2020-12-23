<template>
  <Layout>
    <h1>#{{ $page.tag.title }}</h1>
    <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <g-image :src="edge.node.cover_image" class="cover" />
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} ({{ edge.node.timeToRead }} minute read).</p>
      <div>
        <g-link class="tags" v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">#{{ tag.id }}</g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
    </article>
  </Layout>
</template>

<page-query>
query ($id: String) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
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
  }
}
</page-query>