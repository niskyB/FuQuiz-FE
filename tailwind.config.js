const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
