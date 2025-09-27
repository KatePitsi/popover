const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                // editorialBase: ["EditorialNew"]
            },
            colors: {
                body: "#3C3D46",
                border: "#e5e7eb",
                mainB : "#fcf8f5",
            },
        },
        screens: {
            xs: "426px",
            ...screens
        },
    },
    plugins: [require("@tailwindcss/forms")],
};