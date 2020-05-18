
const UtilityHandler = require('utilityhandler');

module.exports = () => {
    var moment = require('moment-jalaali')
    return parseInt(moment().format('jYYYYjMjDHHmmss'))
}

module.exports.GetYear = () => {
    var moment = require('moment-jalaali')
    return moment().format('jYYYY');
}

module.exports.GetMonth = () => {
    var moment = require('moment-jalaali')
    return moment().format('jM');
}

module.exports.GetDay = () => {
    var moment = require('moment-jalaali')
    return moment().format('jD');
}

module.exports.GetDate = () => {
    var moment = require('moment-jalaali')
    
    let y = moment().format('jYYYY'),
        m = moment().format('jM'),
        d = moment().format('jD');

    m = UtilityHandler.InitInt(m);
    d = UtilityHandler.InitInt(d);

    return y + '/' + m + '/' + d;

}

module.exports.GetHHMMSS = () => {
    var moment = require('moment-jalaali')
    return moment().format('HH:mm:ss');
}

module.exports.GetHHMM = () => {
    var moment = require('moment-jalaali')
    return moment().format('HH:mm');
}

module.exports.GetHH = () => {
    var moment = require('moment-jalaali')
    return moment().format('HH');
}

module.exports.GetMM = () => {
    var moment = require('moment-jalaali')
    return moment().format('mm');
}

module.exports.GetSS = () => {
    var moment = require('moment-jalaali')
    return moment().format('ss');
}

module.exports.AddTime = (count, type /* seconds, minutes, hours */) => {
    var moment = require('moment-jalaali')
    var travelTime = moment().add(count, type).format('jYYYY/jM/jD HH:mm:ss');
    return travelTime
}

module.exports.GetNowDash = () => {
    var moment = require('moment-jalaali')
    

    let 
    y = moment().format('jYYYY'),
    m = moment().format('jM'),
    d = moment().format('jD'),
    hour = moment().format('jD')

    if(parseInt(m) < 10)
        m = '0' + m;

    if(parseInt(d) < 10)
        d = '0' + d;
        return y + '-' + m + '-' + d + ' ' + moment().format('HH:mm:ss');
}

module.exports.ConvertToDash = (_Date) => {
    let _tmpDate = _Date.split(' ')[0]
    let _tmpTime = _Date.split(' ')[1]

    let cDate = _tmpDate.split('/')
    let cTime = _tmpTime.split(':')
    let Converted = cDate[0] + '-' + cDate[1] + '-' + cDate[2] + ' ' + cTime[0] + ':' + cTime[1] + ':' + cTime[2]
    return Converted
}

module.exports.DifTime = (_Time) => {
    var moment = require('moment-jalaali')
    
    var then = moment(_Time, "jYYYY/jM/jD HH:mm:ss");
    var now = moment();

    var diff = moment.duration(now.diff(then));
    if (diff < 0) {
        diff = Math.abs(diff);
    }
    var d = moment.utc(diff).format("HH:mm:ss");
    return d

}

module.exports.TimeSince = (_tmp) => {
    if(!UtilityHandler.isEmpty(_tmp)) {
        var moment = require('moment-jalaali')
        let 
        y = moment().format('jYYYY'),
        m = moment().format('jM'),
        d = moment().format('jD'),
        hour = moment().format('jD'),
        NowDash

        if(parseInt(m) < 10)
            m = '0' + m;

        if(parseInt(d) < 10)
            d = '0' + d;
            NowDash = y + '-' + m + '-' + d + ' ' + moment().format('HH:mm:ss');

        let _tmpDate = _tmp.split(' ')[0]
        let _tmpTime = _tmp.split(' ')[1]

        let cDate = _tmpDate.split('/')
        let cTime = _tmpTime.split(':')
        let Converted = cDate[0] + '-' + cDate[1] + '-' + cDate[2] + ' ' + cTime[0] + ':' + cTime[1] + ':' + cTime[2]

        var d2 = new Date(NowDash);
        var d1 = new Date(Converted);

        var seconds =  (d2- d1)/1000;

        var interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
            return interval + " سال پیش ";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + " ماه پیش ";
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + " روز پیش ";
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + " ساعت پیش ";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + " دقیقه پیش ";
        }
        //return Math.floor(seconds) + " لحظاتی قبل";
        return "لحظاتی قبل";
    } else 
        return `نامشخص`
}

module.exports.GetNow = () => {
    var moment = require('moment-jalaali')


    let 
    y = moment().format('jYYYY'),
    m = moment().format('jM'),
    d = moment().format('jD')


    if(parseInt(m) < 10)
        m = '0' + m;

    if(parseInt(d) < 10)
        d = '0' + d;
        return y + '/' + m + '/' + d + ' ' + moment().format('HH:mm:ss');

}

module.exports.GetTime = () => {
    var moment = require('moment-jalaali')
    return moment().format('HH:mm');
}

module.exports.GetDayOfDate = (date) => {
    var moment = require('moment-jalaali')

    return moment(date, 'jYYYY/jM/jD').day()
}

module.exports.GetStringDay = (day) => {
    let name = ''
    switch (day) {
        case 6:
                name = 'شنبه'
            break;
        case 0:
                name = 'یک شنبه'
            break;
        case 1:
                name = 'دو شنبه'
            break;
        case 2:
                name = 'سه شنبه'
            break;
        case 3:
                name = 'چهار شنبه'
            break;
        case 4:
                name = 'پنج شنبه'
            break;
        case 5:
                name= 'جمعه'
            break;
    
        default:
            break;
    }
    return name
}

module.exports.Parse = (dateAndtime) => {
    let date = dateAndtime.split("/")
    let fixDate = date[0] + date[1] + date[2].split(" ")[0]
    let time = dateAndtime.split(":")
    let fixTime = time[0].split(" ")[1] + time[1] + time[2]
    let fixDateAndTime = fixDate + fixTime
    return parseInt(fixDateAndTime)
}

module.exports.Ghamari_GetDate = function() {
    const moment = require('moment-jalaali')    
    const GhamariMoment = require("moment-hijri")
    let 
    y = moment().format('YYYY'),
    m = moment().format('M'),
    d = moment().format('D')

    const _moment = GhamariMoment(y + '/' + m + '/' + d + '', 'YYYY/M/D')
    const _d = _moment.format('iYYYY/iM/iD')
    return convertArabicNumberToEnglish(_d)
}

module.exports.Ghamari_GetDay = function() {
    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri")
    let 
    y = JalaliMoment().format('YYYY'),
    m = JalaliMoment().format('M'),
    d = JalaliMoment().format('D')

    const _moment = GhamariMoment(y + '/' + m + '/' + d + '', 'YYYY/M/D')
    const _d = _moment.format('iD')
    return convertArabicNumberToEnglish(_d)
}


module.exports.Ghamari_GetMonth = function() {
    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri")
    let 
    y = JalaliMoment().format('YYYY'),
    m = JalaliMoment().format('M'),
    d = JalaliMoment().format('D')

    const _moment = GhamariMoment(y + '/' + m + '/' + d + '', 'YYYY/M/D')
    const _d = _moment.format('iM')
    return convertArabicNumberToEnglish(_d)
}

module.exports.Ghamari_GetYear = function() {
    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri") 
    let 
    y = JalaliMoment().format('YYYY'),
    m = JalaliMoment().format('M'),
    d = JalaliMoment().format('D')
    
    const _moment = GhamariMoment(y + '/' + m + '/' + d + '', 'YYYY/M/D')
    const _d = _moment.format('iYYYY')
    return convertArabicNumberToEnglish(_d)
}


module.exports.Ghamari_GetNow = function() {
    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri")   
    let 
    y = JalaliMoment().format('YYYY'),
    m = JalaliMoment().format('M'),
    d = JalaliMoment().format('D')
    const _moment = GhamariMoment(y + '/' + m + '/' + d + '', 'YYYY/M/D')

    y = _moment.format('iYYYY'),
    m = _moment.format('iM'),
    d = _moment.format('iD')

    if(parseInt(m) < 10)
        m = '0' + m;

    if(parseInt(d) < 10)
        d = '0' + d;
    
    return convertArabicNumberToEnglish( y + '/' + m + '/' + d + ' ' + GhamariMoment().format('HH:mm:ss') )
}


module.exports.Gregorian_GetDate = function() {
    var moment = require('moment-jalaali')    
    return moment().format("YYYY/M/D")
}
module.exports.Gregorian_GetNow = function() {
    var moment = require('moment-jalaali')    
    return moment().format("YYYY/M/D HH:mm:ss")
}
module.exports.Gregorian_GetYear = function() {
    var moment = require('moment-jalaali')    
    return moment().format("YYYY")
}
module.exports.Gregorian_GetMonth = function() {
    var moment = require('moment-jalaali')    
    return moment().format("M")
}
module.exports.Gregorian_GetDay = function() {
    var moment = require('moment-jalaali')    
    return moment().format("D")
}

module.exports.Convert_Ghamari_To_Gregorian = function(date) {
    const GhamariMoment = require("moment-hijri")   
    const _moment = GhamariMoment(date, 'iYYYY/iM/iD')
    return convertArabicNumberToEnglish(_moment.format("YYYY/M/D"))
}

module.exports.Convert_Gregorian_To_Ghamari = function(date) {
    const GhamariMoment = require("moment-hijri") 
    const _moment = GhamariMoment(date, 'YYYY/M/D')
    return convertArabicNumberToEnglish(_moment.format("iYYYY/iM/iD"))
}

module.exports.Convert_Jalali_To_Ghamari = function(date) {

    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri")

    const gregorianDate = convertArabicNumberToEnglish( JalaliMoment(date, "jYYYY/jM/jD").format('YYYY/M/D') )

    const _moment = GhamariMoment(gregorianDate, 'YYYY/M/D')
    return convertArabicNumberToEnglish(_moment.format("iYYYY/iM/iD"))
}

module.exports.Convert_Ghamari_To_Jalali = function(date) {
    const JalaliMoment = require('moment-jalaali')
    const GhamariMoment = require("moment-hijri")
    const GhamariDate = GhamariMoment(date, 'iYYYY/iM/iD')
    const gregorianDate = convertArabicNumberToEnglish(GhamariDate.format("YYYY/M/D"))
    const JalaliDate = JalaliMoment(gregorianDate, "YYYY/M/D").format('jYYYY/jM/jD')
    return convertArabicNumberToEnglish(JalaliDate)
}

function convertArabicNumberToEnglish(str)
{
    return str.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
       return c.charCodeAt(0) - 0x06f0;
   });
};

