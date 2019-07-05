<template>
    <div class="tag">
        <ul>
            <li class="tag-list" v-for="(item,index) in services" :key="index">
                <div class="tag-list-item">{{item.name}}</div>
                <p>{{item.description}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'tag',
    props:{
        services:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style lang="scss">
@import './index'
</style>