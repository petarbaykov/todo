<template>
  <div>
    <div class="container mt-5">
      <Card class="bg-light shadow-sm">
        <div slot="header">
          Add task
        </div>
        <div slot="main">
          <Input label="Title" type="text" v-model="task.title" :invalid="errors.title"/>
          <Textarea label="Description" type="text" v-model="task.description" :invalid="errors.description" />
          <Button fill="primary" extend @click.native="addTask">Add</Button>
          
        </div>
      </Card>
      <List class="mt-2">
          <ListItem v-for="(task,index) in tasks" :key="index" :class="task.finished ? 'bg-dark text-white' : ''">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <Button fill="outline-success"  class="mr-3 opacity-5" v-if="!task.finished" @click.native="finish(task.id)">
                  <icon icon="check" />
                </Button>
                <Button fill="success"  class="mr-3" v-if="task.finished">
                  <icon icon="check" />
                </Button>
                <div class="mr-4 w-100">
                  <div class="d-flex w-100 justify-content-between align-items-center">
                    <h5 class="mb-1">
                        #{{ task.id }} {{ task.title }} 
                      </h5>
                  </div>
                  <p class="mb-1" :class="task.finished ? 'text-scratched' : ''">{{ task.description }}</p>
                </div>
                <Button fill="outline-danger" @click.native="remove(task.id)">
                  <icon icon="trash-alt" />
                </Button>
                
              </div>
          </ListItem>
      </List>
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
<style scoped>
.list-group-item {
  border: none;
  border-bottom: 1px solid #ccc;
}
.opacity-5 {
  opacity:0.5;
}
.text-scratched {
  text-decoration: line-through;
}
</style>  