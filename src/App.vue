<template>
  <div id="nav">
    <router-link to="/">WorkExperience</router-link>
    <router-link to="Education">Education</router-link>
    <router-link to="Project">Project</router-link>
    <router-link to="CV">CV</router-link>
  </div>
  <div class="container"></div>
  <router-view></router-view>

  <div class="selection:bg-green-100"></div>
</template>

<style scoped lang="scss">

#nav{
  width : 80 px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius : 5 px;
  }

</style>

