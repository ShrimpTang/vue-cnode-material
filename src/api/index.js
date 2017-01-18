import $ from 'webpack-zepto';
var baseUrl = `https://cnodejs.org/api/v1/`;
export function get(suffix,params) {
    return new Promise((resolve, reject) => {
        var url = baseUrl + suffix;
        if(params){
            url += `?`+$.param(params);
        }
        $.get(url, function (data) { 
            resolve(data);
        })
    })
}