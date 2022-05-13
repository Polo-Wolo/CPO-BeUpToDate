<template>
<div>
    <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged" nav-item-class="nav-item">
        <tab name="IdentityCard">
            <IdentityCard></IdentityCard>
        </tab>
        <tab name="Project">
            <Content v-model="config" />
            <TestAffichageConfig v-model="config" />
            <div class="selection:bg-green-100"></div>
        </tab>
        <tab name="Disabled tab" :is-disabled="true">
            This content will be unavailable while :is-disabled prop set to true
        </tab>
        <tab id="oh-hi-mark" name="Custom fragment">
            The fragment that is appended to the url can be customized
        </tab>
        <tab prefix="<span class='glyphicon glyphicon-star'></span> " 
             name="Prefix and suffix" 
             suffix=" <span class='badge'>4</span>">
            A prefix and a suffix can be added
        </tab>
    </tabs>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import IdentityCard from "../personnal_info/IdentityCard.vue"
import Content from "../Content.vue";
import TestAffichageConfig from "../TestAffichageConfig.vue";


export default defineComponent({
  name: "App",
  components: {
    IdentityCard, Content,TestAffichageConfig},
      data() {
            return { config: {} };
        }
});
</script>