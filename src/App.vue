<template>
    <div id="app">
        <manage-products></manage-products>
    </div>
</template>

<script>
    import ManageProducts from './components/ManageProducts';

    export default {
        name: 'app',
        components: {
            ManageProducts
        }
    }
</script>
