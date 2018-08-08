<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>英雄</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a href="edit.html">edit</a> -->
              <router-link :to="'/heroes/'+item.id">edit</router-link>
              &nbsp;&nbsp;
              <a @click.prevent="heroesDelete(item.id)" href="javascript:void(0)">delete</a>
              <!-- <router-link :to="'/heroes/'+item.id">delete</router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      list: []
    };
  },
  // Vue实例创建以后 data methods可以访问
  created() {
    this.loadHero();
  },
  methods: {
    loadHero() {
      axios
        .get('http://localhost:3000/heroes')
        .then((response) => {
          console.log(response);
          if(response.status == 200) {
            this.list = response.data;
          }
        }) 
        .catch((err) => {
          console.log(err);
        })
    },
    heroesDelete(id) {
      axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then((response) => {
          // console.log(response);
          if(response.status == 200) {
            this.loadHero();
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}

</script>

<style>

</style>
