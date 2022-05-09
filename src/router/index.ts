import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WorkExperience from '../components/WorkExperience.vue';
import Project from '../components/Project.vue';
import Education from '../components/Education.vue';
import CV from '../components/CV.vue';


const routes: Array<RouteRecordRaw> = [
{
    path: '/',
    name: 'WorkExperience  ',
    component:WorkExperience
},
{
    path: '/Project',
    name: '  Project  ',
    component:Project
},
{
    path: '/Education',
    name: '  Education  ',
    component:Education
},
{
    path: '/CV',
    name: '  CV  ',
    component:CV
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;