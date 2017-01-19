import moment from 'moment'

export function timeAgo(date) {
    if (date) {
        return moment(date).fromNow();
    }
    return ''
}