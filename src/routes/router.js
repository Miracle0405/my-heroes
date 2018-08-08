import VueRouter from 'vue-router';
import Vue from 'vue';

// 导入英雄列表组件
import HeroList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
// 添加英雄
import HeroAdd from '../views/heroes/Add.vue';

// 注册路由
Vue.use(VueRouter);

var router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/heroes' },
    { name: 'heroes', path: '/heroes', component: HeroList },
    { name: 'heroesadd', path: '/heroes/add', component: HeroAdd },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'weapons', path: '/weapons', component: WeaponsList}
  ]
});

export default router;