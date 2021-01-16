<template>
    <span v-if="$parent.isLabeled" class="uk-position-bottom-center uk-margin" style="font-size: 8pt;">
      <strong class="uk-label uk-label-success" style="font-size: 6pt;">SPRINT {{sprintNumber}}</strong> | 
      <strong class="uk-label" style="font-size: 6pt;">{{version}}</strong>
    </span>
</template>

<script>
export default {
    name: "Label",
    props:{
        sprintNumber: Int8Array,
        version: String
    }
}
</script>