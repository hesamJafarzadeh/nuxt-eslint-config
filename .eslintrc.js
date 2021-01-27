module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    plugins: [
        'vue'
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@nuxtjs'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'space-before-function-paren': [
            'error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        indent: ['error', 4]
    }
}
