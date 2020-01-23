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
            <List>
                <ListItem v-for="(task,index) in tasks" :key="index" :class="task.finished ? 'bg-light' : ''">
                    <div class="d-flex w-100 justify-content-between align-items-center">
                      <icon icon="check" />
                      <div class="mr-4 w-100">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                          <h5 class="mb-1">
                              #{{ task.id }} {{ task.title }} 
                            </h5>
                          <!-- <small class="badge badge-dark">{{ new Date(task.date).toLocaleString() }}</small> -->
                        </div>
                        <p class="mb-1">{{ task.description }}</p>
                      </div>
                      <Button fill="danger" @click.native="remove(task.id)">
                        Remove
                      </Button>
                      <Button fill="success" v-if="!task.finished" @click.native="finish(task.id)">
                        Done
                      </Button>
                    </div>
                </ListItem>
            </List>
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
import List from '../components/List.vue'
import ListItem  from '../components/ListItem.vue'

export default {
  components: {
    Card,
    Button,
    Input,
    Textarea,
    List,
    ListItem
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
  created() {
    this.$store.dispatch('getTasks')
  },
  methods: {
    async addTask() {
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
      await this.$store.dispatch('setTask', { ...this.task, finished:false, date: new Date() })
      this.task.title = null
      this.task.description = null
    },
    finish(id) {
      this.$store.commit('finishTask', id)
    },
    remove(id){
      this.$store.commit('removeTask',id)
    }
  }
}
</script>
