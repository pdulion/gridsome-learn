<template>
    <footer>Copyright &copy; {{getCurrentYear}} by <a :href="href">Phillip DuLion</a></footer>
</template>

<script>
export default {
    data: () =>  ({
        href: 'http://dulion.com/'
    }),
    computed: {
        getCurrentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>
footer {
    text-align: center;
    color: #00a672;
    letter-spacing: 0.5px;
    padding: 20px;
}
</style>