const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.green,
                danger: colors.red,
                default: colors.gray,
            },
        },
    },
    plugins: [],
};
