import Vue from 'vue'

/**
 * bytes : 数据大小位
 * decimals : 小数点后保留多少位
 */

Vue.filter('byteFormat', function (bytes, decimals) {
    if (bytes === 0) return '0 Bytes';

    let k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
})