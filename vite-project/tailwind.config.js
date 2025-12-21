/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
    animation: {
        // Animaciones para GOH
        'powerCharge': 'powerCharge 2s ease-in-out infinite',
        'impactShake': 'impactShake 0.5s ease-in-out',
        
        // Animaciones para Naruto
        'chakraPulse': 'chakraPulse 3s ease-in-out infinite',
        'sharinganSpin': 'sharinganSpin 5s linear infinite',
        
        // Animaciones generales
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
    },
    keyframes: {
        // GOH - Carga de poder
        powerCharge: {
        '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 10px #dc2626'
        },
        '50%': { 
            transform: 'scale(1.02)', 
            boxShadow: '0 0 20px #dc2626'
        },
        },
        impactShake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-5px)' },
        '75%': { transform: 'translateX(5px)' },
        },
        
        // Naruto - Pulso de chakra
        chakraPulse: {
        '0%, 100%': { 
            borderColor: 'rgba(59, 130, 246, 0.5)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
        },
        '50%': { 
            borderColor: 'rgba(59, 130, 246, 1)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
        },
        },
        sharinganSpin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
        },
        
        // Animaciones generales
        fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
        },
    },
    },
},
plugins: [],
}