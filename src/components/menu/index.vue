<template>
    <el-menu id="pg-menu" default-active="2" theme="dark" mode="horizontal" :router="true">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-menu-item index="/"><i class="el-icon-menu"></i>Dashboard</el-menu-item>
                <el-menu-item index="/arp"><i class="el-icon-information"></i>Arp</el-menu-item>
            </el-col>
        </el-row>
    </el-menu>
</template>

<script>
    module.exports = {}
</script>

<style>
    #pg-menu {
        border-radius: 0;
    }
</style>