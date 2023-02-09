export const convertStatus = (status: string) => {
    switch (status) {
        case 'alive':
            return 'жив'
        case 'dead':
            return 'мертв'
        case 'unknown':
            return 'неизвестно'
        default:
            return 'неизвестно'
    }
}