import moment from 'moment' 

const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function fromNow (time) {
  return moment.unix(time).fromNow();
}

export function pluralize(time, label) {
    if (time === 1) {
        return time + ' '+label
    }

    return time + ' '+label + 's';
}