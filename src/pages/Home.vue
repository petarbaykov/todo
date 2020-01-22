<template>
  <div>
    <div class="container mt-5">
      <Card>
        <div slot="header">
          Add task
        </div>
        <div slot="main">
          <Input label="Title" type="text" v-model="task.title" :invalid="errors.title"/>
          <Textarea label="Description" type="text" v-model="task.description" :invalid="errors.description" />
          <Button fill="primary" extend @click.native="addTask">Add</Button>
          
        </div>
      </Card>

      <Card class="mt-5">
        <div slot="header">
          Your tasks
        </div>
        <div slot="main">
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
      },
      errors: {
        title:false,
        description:false
      }
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    addTask() {
      // check if task title is empty
      if(!this.task.title) {
        this.errors.title  = true
        return
      } else {
        this.errors.title = false
      }


      //check if task description is empty
      if(!this.task.description) {
        this.errors.description = true
        return
      } else {
        this.errors.description = false
      }

      //add task
      this.$store.dispatch('setTask', { ...this.task, status:'pending', date: new Date() })
    }
  }
}
</script>
