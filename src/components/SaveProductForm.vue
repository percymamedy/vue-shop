<template>
    <form>
        <div :class="['form-group', formError.name ? 'has-danger' : '']">
            <label class="form-control-label" for="productName">Product Name</label>
            <input type="text" v-model="product.name"
                   :class="['form-control', formError.name ? 'form-control-danger' : '']" id="productName"
                   maxlength="32"
                   placeholder="Enter product name">
            <div class="form-control-feedback" v-if="formError.name">
                The Product Name is not Valid.
            </div>
        </div>
        <!--/.form-group-->

        <div :class="['form-group', formError.description ? 'has-danger' : '']">
            <label class="form-control-label" for="productDescription">Product Description
                <small class="text-muted">(optional)</small>
            </label>
            <textarea id="productDescription" v-model="product.description"
                      :class="['form-control', formError.description ? 'form-control-danger' : '']" rows="3"
                      maxlength="128" placeholder="Enter description"></textarea>
            <div class="form-control-feedback" v-if="formError.description">
                The Product Description is not Valid.
            </div>
        </div>
        <!--/.form-group-->

        <div :class="['form-group', formError.price ? 'has-danger' : '']">
            <label class="form-control-label" for="price">Price</label>
            <input type="number" v-model="product.price"
                   :class="['form-control', formError.price ? 'form-control-danger' : '']" id="price"
                   placeholder="Enter Price"
                   number>
            <div class="form-control-feedback" v-if="formError.price">
                The Product Price is not Valid.
            </div>
        </div>
        <!--/.form-group-->

        <div class="form-group">
            <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">{{ saveLabel }}</button>
            <button v-if="editMode" type="button" @click.prevent="onCancel" class="btn btn-default">Cancel</button>
        </div>
    </form>
</template>

<script>
    const initialFormError = () => {
        return {
            name: false,
            description: false,
            price: false
        }
    };

    export default {
        props: ['product', 'editMode'],

        data() {
            return {
                formError: initialFormError()
            }
        },

        computed: {
            saveLabel() {
                return this.editMode ? 'Update Product' : 'Add Product';
            }
        },

        created() {
            this.$watch('product.id', (newVal, oldVal) => {
                if(newVal) {
                    this.resetErrors();
                }
            });
        },

        methods: {
            onSubmit() {
                if (this.validate()) {
                    this.$emit('submit', this.product)
                }
            },

            onCancel() {
                this.$emit('cancel');
            },

            resetErrors() {
                this.formError = initialFormError();
            },

            validate() {
                let isValid = true;

                if (!this.product.name) {
                    isValid = false;
                    this.formError.name = true;
                } else {
                    isValid = true;
                    this.formError.name = false;
                }

                if (this.product.description.length > 100) {
                    isValid = false;
                    this.formError.description = true;
                } else {
                    isValid = true;
                    this.formError.description = false;
                }

                if (!this.product.price) {
                    isValid = false;
                    this.formError.price = true;
                } else {
                    isValid = true;
                    this.formError.price = false;
                }

                return isValid;
            }
        }
    }
</script>

<style scoped>
    button {
        cursor: pointer;
    }
</style>
