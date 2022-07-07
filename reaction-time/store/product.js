export const state = () => ({
  products: []
})

export const mutations = {
  setProducts: (state, products)  => {
    state.products = products
  }
}


export const actions = {
  getProducts: async ({commit}) => {
    // const res = await this.$axios.get('/products')
    // commit('setProducts', res)
    const result = [
      { 
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gubral',
        price: '$300',
        subCategory: 'Sneakers',
        isFav: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    ];
    commit('setProducts', result)
  }
}

