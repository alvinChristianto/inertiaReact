import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#EA9449",
                primaryhover: "#f5a968ff",
                secondary: "#0D9488",
                secondaryhover: "#25b6aaff",
                accent: "#ffffffff",
                accenthover: "#f5d8beff",
                neutral: "#322541",
                // default: "#ffffff",
                info: "#8edef6ff",
                success: "#1d997aff",
                warning: "#a17f12",
                error: "#fc4a56",
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                // 24 column grid
                24: "repeat(24, minmax(0, 1fr))",
            },
        },
    },

    plugins: [forms],
};
