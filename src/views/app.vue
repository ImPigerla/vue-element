<template>
    <section>
        <p class="text test-p">hello, Vue ElementUI App</p>
        <el-input type="textarea" v-model.trim="content" placeholder="请输入"></el-input>
        <p v-text="content"></p>
    </section>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                content: ''
            }
        }
    }
</script>

<style lang="scss">
    .test-p {
        text-align: center;
    }
</style>