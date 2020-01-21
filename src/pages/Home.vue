<template>
  <div>
    <div class="container mt-5">
      <Card>
        <div slot="header">
          Add task
        </div>
        <div slot="main">
          This is main
          <Input label="Title" type="text" v-model="task.title" />
          <Textarea label="Description" type="text" v-model="task.description"/>
          <Button fill="primary" extend @click.native="addTask">Add</Button>
          {{ tasks }}
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'Vuex'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Textarea from '../components/Textarea.vue'
export default {
  components: {
    Card,
    Button,
    Input,
    Textarea
  },
  data() {
    return {
      task: {
        title:null,
        description:null
      }
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    addTask() {
      this.$store.dispatch('setTask', { ...this.task })
    }
  }
}
</script>
