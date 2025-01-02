<template>
    <h1>Ini halaman user</h1>

    <h2>List User</h2>

    <ul>
        <li v-for="user in users">
            <RouterLink :to="'/user/' + user.id">
                {{ user.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    { id: 1, name: 'John Doe' },
                    { id: 2, name: 'Jane Doe' },
                    { id: 3, name: 'Jenny Doe' }
                ]
            }
        }
    }
</script>