<template>
    Ini halaman detail user {{ $route.params.id }}
    <br>
    <RouterLink :to="'/user/'+$route.params.id+'/post'">{{ $route.params.id }}'s Posts'</RouterLink>
    <br>
    <RouterLink :to="'/user/'+$route.params.id+'/profile'">{{ $route.params.id }}'s Profile'</RouterLink>
</template>