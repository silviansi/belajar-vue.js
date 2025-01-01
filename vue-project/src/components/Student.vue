<template>
    <slot>Ini adalah slot default karena parent komponen tidak memberikan data</slot> <br>
    Ini adalah data dari siswa bernama {{ studentName }} <button @click="showData">Show Detail</button>
</template>

<script>
export default {
    props: {
        studentName : String
    },
    emits: ['response'],
    methods: {
        showData() {
            this.$emit('response', this.studentName)
        }
    }
}
</script>