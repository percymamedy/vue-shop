<template>
    <form>
        <div class="form-group">
            <label for="productName">Product Name</label>
            <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32"
                   placeholder="Enter product name">
        </div>
        <!--/.form-group-->
        <div class="form-group">
            <label for="productDescription">Product Description
                <small class="text-muted">(optional)</small>
            </label>
            <textarea id="productDescription" v-model="product.description" class="form-control" rows="3"
                      maxlength="128" placeholder="Enter description"></textarea>
        </div>
        <!--/.form-group-->
        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price"
                   number>
        </div>
        <!--/.form-group-->

        <div class="form-group">
            <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">{{ saveLabel }}</button>
            <button v-if="editMode" type="button" @click.prevent="onCancel" class="btn btn-default">Cancel</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['product', 'editMode'],

        computed: {
            saveLabel() {
                return this.editMode ? 'Update Product' : 'Add Product';
            }
        },

        methods: {
            onSubmit() {
                this.$emit('submit', this.product)
            },

            onCancel() {
                this.$emit('cancel');
            }
        }
    }
</script>

<style scoped>
    button {
        cursor: pointer;
    }
</style>
