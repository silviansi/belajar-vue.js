<template>
  <Student @response="showData" studentName="Silvia">Ini adalah nilai slot dari parent</Student> <br>
  <Student @response="showData" studentName="Nanda" /> <br>
  <Student @response="showData" studentName="Syafa" />

  <p>
    Student Name: {{ studentName }}
  </p>
</template>

<script>
  import Student from './components/Student.vue'

  export default {
    components: {
      Student
    },
    data() {
      return {
        studentName: ''
      }
    },
    methods: {
      showData(data) {
        this.studentName = data
      }
    }
  }
</script>