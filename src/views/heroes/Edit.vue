<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="exampleInputPassword1" placeholder="性别">
      </div>
      <button type="button" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  created() {
    axios
      .get(`http://localhost:3000/heroes/${this.id}`)
      .then((response) => {
        // console.log(response);
        if(response.status == 200) {
          this.formData = response.data;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style>

</style>
