<template>
  <div>
    <div class="container mt-5">
      <Card>
        <div slot="header">
          Tasks
        </div>
        <div slot="main">
          This is main
        </div>
        <div slot="footer">
            <Button face="primary">Add task</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
export default {
  components: {
    Card,
    Button
  }
}
</script>
