<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="exampleInputPassword1" placeholder="性别">
      </div>
      <button type="button" @click="heroesAdd" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // 注意：组件中的data是一个函数
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    heroesAdd() {
      axios
        .post('http://localhost:3000/heroes', this.formData)
        .then((response) => {
          // console.log(response);
          if(response.status == 201) {
            this.$router.push('/heroes');
          }else {
            console.log('添加失败');
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
