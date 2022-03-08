<template>
  <div class="container">
    <div class="sample-input">
      <h1>FormKit Starter Project</h1>
      <FormKit type="group" v-model="formData">
        <!-- Hello world -->
        <FormKit
          name="hello_world"
          label="Hello World"
          placeholder="Enter something here..."
          validation="required"
          validation-behavior="live"
          help="Read the docs for more info on using FormKit"
        />
        <!-- Opinion - Radio choice -->
        <FormKit
          name="opinion"
          label="Opinion"
          help="How excited are you about FormKit?"
          type="radio"
          value="A lot"
          :options="['A little', 'A lot']"
        />
        <!--File import -->
        <FormKit
          type="file"
          label="Documents"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Select as many documents as you would like."
          multiple
        />
        <!-- Color Picker -->
        <FormKit
          type="color"
          value="#00FF00"
          label="Select a color"
          help="Select your favorite color."
        />
        <!-- Date -->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Birthday"
          help="Enter your birth day"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Date Time -->
        <FormKit
          type="datetime-local"
          value="2020-03-13T18:22"
          label="End of the world"
          help="When will the end of the world take place?"
          validation="required|after"
          validation-visibility="live"
        />
        <!-- Email -->
        <FormKit
          type="email"
          label="Student email address"
          help="Please enter your student email address."
          validation="required|email|ends_with:.edu"
          validation-visibility="live"
          placeholder="vikas@school.edu"
        />
        <!-- Search -->
        <FormKit
          type="search"
          placeholder="Search..."
          label="Search"
          value="Apple Cider"
        />
        <!-- Select -->
        <FormKit
          type="select"
          label="What planet is the largest?"
          placeholder="Select a planet"
          name="planet"
          :options="{
            mercury: 'Mercury',
            venus: 'Venus',
            earth: 'Earth',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune',
          }"
          validation="required|is:jupiter"
          validation-visibility="dirty"
          :validation-messages="{
            is: 'Nope! Jupiter is the largest planet',
          }"
        />
        <!-- Button + event -->
        <FormKit
          type="submit"
          label="Click me!"
          help="You can bind event listeners."
          @click="PrintConsole"
        ></FormKit>
        <!-- Telephone -->
        <FormKit
          type="tel"
          label="Phone number"
          placeholder="xxx-xxx-xxxx"
          validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          :validation-messages="{
            matches: 'Phone number must be in the format xxx-xxx-xxxx',
          }"
          validation-visibility="dirty"
        />
        <!-- Text -->
        <FormKit
          type="text"
          label="Your username"
          value="calypso"
          help="Pick a username people will remember!"
        />
        <!-- Text Area -->
        <FormKit
          type="textarea"
          label="Your Essay"
          rows="10"
          placeholder="Remember to write in complete sentences."
          help="I'll know if you didn't read the book!"
        />
        <!-- Time -->
        <FormKit
          type="time"
          label="Time"
          value="23:15"
          help="What time will go home today?"
        />
        <!-- Url -->
        <FormKit
          type="url"
          label="Favorite website"
          placeholder="https://www.example.com..."
          validation="required|url"
          help="What is your favorite website?"
        />
        <!-- Week -->
        <FormKit
          label="Vacation"
          type="week"
          help="What week will you travel to Fiji?"
          value="2025-W02"
        />
        <!-- Range bar -->
        <div class="side-by-side">
          <FormKit
            name="recommendation"
            label="Recommendation"
            v-model="recommendation"
            help="How likely are you to recommend FormKit to a friend?"
            type="range"
            min="0"
            max="9"
          />
          <pre class="range-output">{{ recommendation }} </pre>
        </div>
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const recommendation = ref("9");
    const formData = ref({});

    return {
      recommendation,
      formData,
    };
  },
  methods: {
    PrintConsole: function () {
      console.log("Button click");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: auto;
  display: flex;
  justify-content: center;
}

.side-by-side {
  display: flex;
  align-items: flex-start;
}

pre.range-output {
  background: #eee;
  border-radius: 0.5em;
  text-align: center;
  margin-left: 1em;
  margin-top: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  line-height: 1;
  width: 1.5em;
}

pre.form-data {
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
}
</style>
