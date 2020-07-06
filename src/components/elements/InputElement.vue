<template>
<div>
    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
    <input type="text" name="input" class="form-control">
</div>
</template>

<script>
export default {
    props: ['field']
}
</script>