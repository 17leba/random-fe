import moment from 'moment'

export function formatTime(time) {
    let date = new Date(time * 1000)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export function formatDate(date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
