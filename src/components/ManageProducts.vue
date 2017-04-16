<template>
    <section>
        <save-product-form
            :product="productInForm"
            :edit-mode="editMode"
            @submit="onFormSave"
            @cancel="resetProductInForm"
        >
        </save-product-form>
        <product-list
            :products="products"
            @edit="onEditClicked"
            @remove="onRemoveClicked"
        >
        </product-list>
    </section>
</template>

<script>
    import ProductList from './ProductList';
    import SaveProductForm from './SaveProductForm';
    import uuid from 'uuid';
    import { mapGetters, mapActions } from 'vuex';

    const initialData = () => {
        return {
            productInForm: {
                id: null,
                name: '',
                description: '',
                price: null
            },
            editMode: false,
        }
    };

    export default {
        components: {
            ProductList,
            SaveProductForm
        },

        data: initialData,

        computed: mapGetters({
            products: 'getProducts'
        }),

        methods: {
            ...mapActions([
                'saveProduct',
                'deleteProduct'
            ]),

            onFormSave(product) {
                // Save Product.
                this.saveProduct(product);
                // reset the form
                this.resetProductInForm();
            },

            onEditClicked(product) {
                // We turn on edit mode.
                this.editMode = true;

                // since objects are passed by reference we need to clone the product
                // either by using Object.assign({}, product) or by using object
                // spread like we do here.
                this.productInForm = {...product};
            },

            onRemoveClicked(product) {
                // Delete Product.
                this.deleteProduct(product.id);
                // Reset form if needed.
                if (product.id === this.productInForm.id) {
                    this.resetProductInForm();
                }
            },

            resetProductInForm() {
                this.editMode = false;
                this.productInForm = initialData().productInForm;
            }
        }
    }
</script>
