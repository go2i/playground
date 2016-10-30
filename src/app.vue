<template>
    <div class="pg-container">
        <pg-menu id="pg-menu"></pg-menu>

        <el-row class="tac">
            <el-col :span="4">

            </el-col>

            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'pg-menu': require('./components/menu/index.vue')
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
</style>