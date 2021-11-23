let account = JSON.parse(localStorage.getItem('user')) === null ? '' : JSON.parse(localStorage.getItem('user')).email
account == '' ?  account = ['_default', ''] : account = /([^@]+)/.exec(account)

export const baseUrl = 'https://skateshopbaku-default-rtdb.europe-west1.firebasedatabase.app'
export const productsUrl = baseUrl + '/products/.json'
export const cartUrl = baseUrl + '/' + account[0] + '_user' + '/cart/.json'
export const wishlistUrl = baseUrl + '/' + account[0] + '_user' + '/wishlist/.json'
