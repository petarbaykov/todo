<template>

    <div class="form-group">
        <label> {{ label }} </label>
        <input :type="type" class="form-control" :class="invalid ? 'is-invalid' : ''" >
    </div>

</template>

<script>
export default {
    props:{
        label: String,
        type: String,
        invalid: Boolean
    }
}
</script>
