<template>
  <div>
    <div class="container mt-5">
      <Card>
        <div slot="header">
          Add task
        </div>
        <div slot="main">
          This is main
          <Input label="Title" type="text" />
          <Textarea label="Description" type="text" :invalid="true" />
          <Button fill="primary" extend>Add</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
