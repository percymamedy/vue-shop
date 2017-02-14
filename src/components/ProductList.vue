<template>
    <table class="table table-hover product-table">
        <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        </thead>
        <tbody>
        <tr v-for="product in products" track-by="id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
        </tr>
        </tbody>
    </table>
    <!--/.table-->
</template>

<script>
    export default {
        props: ['products']
    }
</script>
