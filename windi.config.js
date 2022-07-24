import colors from 'windicss/colors'

export default {
    extract: {
        include: ['./resources/**/*.{vue,js}']
    },
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '5px',
        },
        extend: {
            colors: {
                primary: colors.indigo,
            },
        }
    }
}  
