<template>
    <table class="table table-hover product-table" v-if="hasProducts">
        <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        </thead>
        <tbody>
        <tr v-for="product in products" track-by="id" @click.prevent="onEdit(product)">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
                <a href="javascript:" @click.prevent.stop="onRemove(product)">
                    remove
                </a>
            </td>
        </tr>
        </tbody>
    </table>
    <!--/.table-->
</template>

<script>
    export default {
        props: ['products'],

        computed: {
            hasProducts() {
                return this.products.length > 0;
            }
        },

        methods: {
            onEdit(product) {
                this.$emit('edit', product);
            },

            onRemove(product) {
                this.$emit('remove', product)
            }
        }
    }
</script>
