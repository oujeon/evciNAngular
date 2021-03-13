export default class Utils {
  //

  //
  static checkUserId(value: string) {
    //영문자, 숫자, _, -
    return value.substr(0, 13).replace(/[^a-zA-Z0-9_-]/gi, '');
  }
  //
  static checkPassword(value: string) {
    //영문자, 숫자, 특수문자
    return value
      .substr(0, 13)
      .replace(/[^a-zA-Z0-9{\\[\]/?.,;:|)*~`!^\-+<>@#$%&\\=('"]/gi, '');
  }
//
  static setCookie(cookieName: string, cookieValue: string, day: number) {
    var date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie =
      cookieName +
      '=' +
      cookieValue +
      ';expires=' +
      date.toUTCString() +
      ';path=/';
  }
}

// /*
// * Copyright (c) 2019 LG Electronics Inc.
// * SPDX-License-Identifier: LicenseRef-LGE-Proprietary
// */
// import React from 'react';
// import axios from 'axios';
// import { Icon, notification } from 'antd';
// import { Modal } from 'antd';
// import Loading from '../../../src/resource/images/common/Loading.gif';
// import IcoNodata from '../../../src/resource/images/common/ico_nodata.png';
// //
// let responseCnt = 0;
// //
// const U = {
//     //
//     COOKIE_IS_LOGIN_DAYS: "1"
//     , COOKIE_NOTICE_NO_VIEW_DAYS: "1"
//     , COOKIE_REMEMBER_CHECKED_USERID_DAYS: "365"
//     , COOKIE_REMEMBER_USERID_DAYS: "365"
//     , SYNC_TIME: "5" // 동기화 기본 시간
//     , SYSTEM_CHECK: false // 공사중 화면 제어
//     , getURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         return url
//     }
//     , getCurrentURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let rtnUrl = "";
//         if (url === "localhost:3000") {
//             // rtnUrl = "https://" + "evci.duckdns.org";
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//             // rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "evci.duckdns.org") {
//             rtnUrl = "https://" + "evci.duckdns.org";
//         } else if (url === "evci.duckdns.org:9090") {
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "evci.duckdns.org:5050") {
//             rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "csms.duckdns.org") {
//             rtnUrl = "https://" + "csms.duckdns.org";
//         }
//         return rtnUrl
//     }
//     , getJusoKeyUrl() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let obj = {
//             confmKey: ""
//             , URL: ""
//         };
//         if (url === "localhost:3000") {
//             // http는 http을 호출
//             // http는 https을 호출 불가
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNDQwMzEwOTU3NjE=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNTMzODEwOTU3Njc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:9090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMzAwNTU1NjExMDMyMDQ=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:5050") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMjE0MDkwNDExMDMxNzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "10.177.206.55:8090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMDMzMTE1MTU1MDEwOTYwMzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "csms.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDcxMDE2MjAxMjEwOTk0NTc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         }
//         return obj;
//     }
//     , getKakaoJusoKey() {
//         let meUtils = this;
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let key = "";
//         if (url === "localhost:3000") {
//             meUtils.emptyCode("1");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org") {
//             meUtils.emptyCode("2");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:9090") {
//             meUtils.emptyCode("3");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:5050") {
//             meUtils.emptyCode("4");
//             key = "d869a5906b6132b37e541599626e8eb3=";
//         } else if (url === "10.177.206.55:8090") {
//             meUtils.emptyCode("5");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "csms.duckdns.org") {
//             meUtils.emptyCode("6");
//             key = "2e3471ee25f4ac9de697257197961318";
//         }
//         return key;
//     }
//     , getImgURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "https://evci.duckdns.org/") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "http://evci.duckdns.org:9090/") {
//             url = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "http://evci.duckdns.org:5050/") {
//             url = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "https://csms.duckdns.org/") {
//             url = 'https://' + 'csms.duckdns.org';
//         } else {
//             url = "http://" + url;
//         }
//         return url
//     }
//     , getOpenLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         }
//     }
//     , getLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         }
//     }
//     , async getAday() {
//         let meUtils = this;
//         try {
//             let URL = U.getCurrentURL() + '/external/general/time?tz=Asia/Seoul';
//             axios.defaults.withCredentials = false;
//             let response = await axios.get(URL);
//             let currentDateTime = response.data.data.time;
//             let y = currentDateTime.substr(0, 4);
//             let m = currentDateTime.substr(5, 2);
//             let d = currentDateTime.substr(8, 2);
//             let dt = new Date(y, ((m * 1) - 1), d);
//             dt.setDate(dt.getDate() + 1);
//             return dt.toGMTString();
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , getFormatTel(tel) {
//         let rtn = "";
//         let tempTel = tel.replace(/-/gi, "");
//         if (
//             tempTel.substr(0, 3) === "010" ||
//             tempTel.substr(0, 3) === "011" ||
//             tempTel.substr(0, 3) === "016" ||
//             tempTel.substr(0, 3) === "017" ||
//             tempTel.substr(0, 3) === "019"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, 4);
//                 let thirth = tempTel.substr(tempTel.length - 4, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.substr(0, 2) === "02") {
//             // '010','011','016','017','019'
//             // 서울 : 02	인천: 032	대전:042	부산:051	울산:052	대구: 053	광주:062	제주: 064
//             // 경기: 031	강원:033	충남:041	충북:043	경북:054	경남:055	전남:061	전북:063
//             if (tempTel.length === 9) {
//                 // 9자 : 02 384  2247
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(5, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 10) {
//                 // 10자 : 02 3333 3333
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (
//             tempTel.substr(0, 3) === "032" ||
//             tempTel.substr(0, 3) === "042" ||
//             tempTel.substr(0, 3) === "051" ||
//             tempTel.substr(0, 3) === "052" ||
//             tempTel.substr(0, 3) === "053" ||
//             tempTel.substr(0, 3) === "062" ||
//             tempTel.substr(0, 3) === "064" ||
//             tempTel.substr(0, 3) === "031" ||
//             tempTel.substr(0, 3) === "033" ||
//             tempTel.substr(0, 3) === "041" ||
//             tempTel.substr(0, 3) === "043" ||
//             tempTel.substr(0, 3) === "054" ||
//             tempTel.substr(0, 3) === "055" ||
//             tempTel.substr(0, 3) === "061" ||
//             tempTel.substr(0, 3) === "063" ||
//             tempTel.substr(0, 3) === "070"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 // 11자 : 031 3333 3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(7, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.length === 8) {
//             // 8자 : 1544-2222
//             let first = tempTel.substr(0, 4);
//             let sencond = tempTel.substr(4, 8);
//             rtn = first + "-" + sencond;
//         } else {
//             rtn = tempTel;
//         }
//         return rtn;
//     }
//     , getIsError(connectorStatus) {
//         // 삼각형 에러 클래스 추출
//         // 충전대기 : available
//         // 충전예약 : reserved
//         // 충전중 : charging,  Preparing, SuspendedEVSE, SuspendedEV
//         // 충전완료 : finishing
//         // 점검중 : faulted  Unavailable
//         // 통신장애/상태미확인 : offline
//         // 시나리오
//         // v.99a
//         // p 105
//         // 커넥터타입
//         // •해당충전기커넥터타입표시
//         // •장애, 고장등으로커넥터사용이불가능한경우커넥터별로사용불가능이미지표시
//         let rtn = "";
//         if (connectorStatus === "Faulted") {
//             // 점검중 : faulted
//             rtn = "is_error";
//         }
//         return rtn;
//     }
//     , msToTime(duration) {
//         let milliseconds = parseInt((duration % 1000) / 100)
//             , seconds = parseInt((duration / 1000) % 60)
//             , minutes = parseInt((duration / (1000 * 60)) % 60)
//             , hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//         hours = (hours < 10) ? "0" + hours : hours;
//         minutes = (minutes < 10) ? "0" + minutes : minutes;
//         seconds = (seconds < 10) ? "0" + seconds : seconds;
//         let obj = {
//             "hours": hours
//             , "minutes": minutes
//             , "seconds": seconds
//             , "milliseconds": milliseconds
//         }
//         return obj;
//     }
//     , reverseNum(arr, total) {
//         // 게시판의 번호의 역순을 보낸다
//         // ((total * 1) + 1) 여기서  +1은 시작을 total번호부터
//         // 하기 위해서 이다.
//         for (let idx01 in arr) {
//             arr[idx01]["num"] = ((((total * 1) + 1) - (idx01 * 1)) - 1);
//         }
//         return arr;
//     }
//     , forceLogout(callback) {
//         //
//         // this.setCookie("isLogin", "false", this.COOKIE_IS_LOGIN_DAYS);
//         //
//         let updateMainData = {
//             mainData: {
//                 login: {
//                     cmd: "LOGIN_FROCE_LOG_OUT"
//                     , isLogin: false // 로그인 상태
//                     , code: "" // 로그인 상태 코드
//                     , msg: ""  // 로그인 상태 메세지
//                     , company: ""  // 회사
//                     , email: ""  // 이메일
//                     , role: ""  // 권한
//                     , userId: ""  // 사용자아이디
//                     , userName: ""  // 사용자명
//                     , passwordChangedDate: "" //
//                     , passwordChangePopup: ""// 비밀번호변경 팝업호출
//                     , personalInformationAgreementPopup: ""// 개인정보 팝업호출
//                     // "" 주면 성공과 실패가 아닌 중간 상황 즉, 변경유무 판단을 하지 않는 상황
//                 }
//             }
//         };
//         callback(updateMainData);
//     }
//     // , isSpecialCharacter(str) {
//     //     // 한글자 특수문자
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
//     //     return regExp.test(str);
//     // }
//     // , isAllSpecialCharacter(arr) {
//     //     // 모든 특수문자 (_ , - 는제외)
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === true) {
//     //             return true;
//     //         }
//     //     }
//     //     return false;
//     // }
//     , isAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         return /^[a-zA-Z]+$/.test(str);
//     }
//     , isOneAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         let isAlphabet = false;
//         for (let i = 0; i < str.length; i++) {
//             isAlphabet = /^[a-zA-Z]+$/.test(str[i]);
//             if (isAlphabet) {
//                 // true가 나오면 즉시 값을 돌려준다.
//                 i = str.length;
//             }
//         }
//         return isAlphabet;
//     }
//     , isAllAlphabet(arr) {
//         // 모든 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , isNumber(str) {
//         //  숫자
//         str = str.replace(/ /gi, "");
//         var regExp = /^[0-9]+$/;
//         return regExp.test(str);
//     }
//     , isAllAlphabetNumber(arr) {
//         // 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z0-9]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     // , isAllAlphabetNumberSpecial(arr) {
//     //     //한글 제외한 나머지 글자
//     //     var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === false) {
//     //             return false;
//     //         }
//     //     }
//     //     return true;
//     // }
//     , formatIntegerDotFloat(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9.]/gi, ""); //숫자와 .만 허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , formatInteger(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9]/gi, ""); //숫자허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , numberDot(value) {
//         return value.replace(/[^0-9.]/gi, "");
//     }
//     , clearCommaDot(value) {
//         return value.replace(/[\,]/gi, "");
//     }
//     , numberAlphabetHypenUnderHypen(value) {
//         //         권한그룹코드
//         // • 영문, 숫자 조합하여 16자 이내로 입력 (한글 및 특수문자 입력 불가, 띄어쓰기 불가. 예외 : ‘-’, ‘_’)
//         return value.replace(/[^A-Za-z0-9\-\_]/gi, "");
//     }
//     , checkId(arr) {
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9_-]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , getCheckedId(value) {
//         //영문자, 숫자, _, -
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9_-]/gi, "");
//     }
//     , checkPassword(str) {
//         let arr = str.split("");
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         // 8에서 13자의 비밀번호중에 영문자 1개, 특수문자 1개, 숫자 1개는 반드시
//         // 있어야 하고 이것이 조합의 규칙이다.
//         var regExpAlpha = /^[a-zA-Z]+$/;
//         var regExpNumber = /^[0-9]+$/;
//         var regExpSpecial = /^[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         var isAlpha = false;
//         var isNumber = false;
//         var isSpecial = false;
//         for (let idx in arr) {
//             if (regExpAlpha.test(arr[idx]) === true) {
//                 isAlpha = true;
//             }
//             if (regExpNumber.test(arr[idx]) === true) {
//                 isNumber = true;
//             }
//             if (regExpSpecial.test(arr[idx]) === true) {
//                 isSpecial = true;
//             }
//         }
//         if (isAlpha === false || isNumber === false || isSpecial === false) {
//             return false;
//         }
//         return true;
//     }
//     , getCheckedPassword(value) {
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9{\\[\]/?.,;:|)*~`!^\-+<>@#$%&\\=('"]/gi, "");
//     }
//     , getCheckedDepartmentCode(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // 영문또는숫자조합하여16자이내로입력(ex : 부서코드, 그룹코드,거래조건코드)
//         // -한글및 특수문자입력불가, 띄어쓰기불가
//         // -예외: -대표거래처코드및거래처그룹코드의경우, 영문, 숫자조합하여6자리이내로입력
//         // -장애코드관리의장애코드의경우, 영문, 숫자조합하여50자이내로입력
//         let tempValue = value.substr(0, 16);
//         return tempValue.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , getCheckedEmail(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // -영문또는숫자조합하여32자이내로입력
//         // -한글및특수문자입력불가(예외: '-', '_', '.', '@'), 띄어쓰기불가
//         let tempValue = value.substr(0, 32);
//         return tempValue.replace(/[^a-zA-Z0-9-_.@]/gi, "");
//     }
//     , hypenTellphone(str) {
//         return str ? str.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace('--', '-') : str;
//     }
//     , clearUndefinedNull(str) {
//         // 검사 undefined, null, space
//         let rtn = "";
//         if (str === undefined || str === "undefined" || str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , clearArrNull(arrObj) {
//         // 검사 undefined, null, space
//         let rtnArr = [];
//         for (let idx01 in arrObj) {
//             let oneObj = arrObj[idx01];
//             let keys = Object.keys(oneObj);
//             let rtnObj = {};
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 if (oneObj[key] === undefined || oneObj[key] === "undefined" || oneObj[key] === null || oneObj[key] === "null") {
//                     rtnObj[key] = "";
//                 } else {
//                     rtnObj[key] = oneObj[key];
//                 }
//             }
//             rtnArr.push(rtnObj);
//         }
//         return rtnArr;
//     }
//     , classArr(str) {
//         // c_typ typ1 is_error id_disabled 에서
//         // is_error, id_disabled을 추가 삭제을 하기위한
//         // 배열을 만든다.
//         return str.split(" ");
//     }
//     , round2(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return Math.floor(num);// 소숫점 버럼
//     }
//     , round(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return num.toFixed(pos);
//     }
//     , floor(n, pos) {
//         // 10은 소숫점 첫번째 자리에서 자름
//         let sign = 1;
//         n = n * 1;
//         if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         return Math.floor(n * (pos * 1)) / (pos * 1)
//     }
//     , numberCeil(num) {
//         // 소수점 올림, 정수 반환
//         return Math.ceil(num);
//     }
//     , numberFloor(num) {
//         // 소수점 버림, 정수 반환
//         return Math.floor(num);
//     }
//     , numberRound(num) {
//         // 소수점 반올림, 정수 반환
//         return Math.round(num);
//     }
//     , onlyNumber(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9.]/gi, "");
//     }
//     , onlyInteger(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9]/gi, "");
//     }
//     , onlyAlphbetNumber(num) {
//         if (!num) {
//             return "";
//         }
//         return num.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , numberFormat(num) {
//         if (num === null) {
//             return '';
//         }
//         if (num === "") {
//             return '';
//         }
//         if (num === undefined) {
//             return '';
//         }
//         num = num.toString().replace(/,/gi, "");
//         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     , copyArrayObjct(arrObj) {
//         let arr = [];
//         arrObj.map(function (rec) {
//             let obj = {};
//             let keys = Object.keys(rec);
//             keys.map(function (keyname) {
//                 obj[keyname] = rec[keyname];
//             })
//             arr.push(obj);
//         });
//         return arr;
//     }
//     , strNullToSpace(str) {
//         let rtn = "";
//         if (str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , objNullToSpace(obj) {
//         let rtn = "";
//         let keys = Object.keys(obj);
//         for (let idx01 in keys) {
//             if (obj[keys[idx01]] === null || obj[keys[idx01]] === "null") {
//                 obj[keys[idx01]] = "";
//             }
//         }
//         rtn = obj;
//         return rtn;
//     }
//     , arrNullToSpace(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , arrNullToHypen(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "-";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , addKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key"] = (idx01 * 1) + 1;
//         }
//         return arr;
//     }
//     , add2kKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key2k"] = (idx01 * 1) + 2 + "k";
//         }
//         return arr;
//     }
//     , debugProps(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.props);
//         }
//     }
//     , debugState(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.state);
//         }
//     }
//     , isCookie() {
//         // 쿠키 저장
//         let isCookie = document.cookie;
//         if (isCookie === undefined || isCookie === null || isCookie === "") {
//             return false;
//         }
//         return true;
//     }
//     , deleteAllCookie() {
//         // logout
//         document.cookie.split(";").forEach(function (c) {
//             document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//         });
//     }
//     , deleteCookie(cookieName) {
//         // 쿠키 삭제
//         try {
//             var expireDate = new Date();
//             expireDate.setDate(expireDate.getDate() - 1);
//             document.cookie = cookieName + "=" + ";expires=" + expireDate.toGMTString();
//         } catch (e) {
//         }
//     }
//     , debugAllCookie() {
//         let meUtils = this;
//         // 쿠키 디버깅
//         document.cookie.split(";")
//             .forEach(function (c) {
//                 meUtils.consoleLog(c);
//             });
//     }
//     , setCookie(cookieName, cookieValue, day) {
//         // 쿠키 저장
//         // let today = new Date();
//         // let yy = today.getFullYear();
//         // let mm = today.getMonth(); //January is 0!
//         // let dd = today.getDate();
//         // let hh = today.getHours();s
//         // let mi = today.getMinutes();
//         // let ss = today.getSeconds();
//         // var date = new Date(yy, mm, dd, 0, 0, 0);
//         var date = new Date();
//         date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
//         document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
//     }
//     , setCookieAt00(name, value, expiredays) {
//         var todayDate = new Date();
//         //
//         todayDate.setHours(23);
//         todayDate.setMinutes(59);
//         todayDate.setSeconds(59);
//         todayDate.setMilliseconds(59);
//         //
//         document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
//     }
//     , getCookie(cookieName) {
//         // 특정쿠키 가져오기
//         cookieName = cookieName + '=';
//         var cookieData = document.cookie;
//         var start = cookieData.indexOf(cookieName);
//         var cookieValue = '';
//         if (start !== -1) {
//             start += cookieName.length;
//             var end = cookieData.indexOf(';', start);
//             if (end === -1)
//                 end = cookieData.length;
//             cookieValue = cookieData.substring(start, end);
//         }
//         return unescape(cookieValue);
//     }
//     , mergeNormalState(currentState, updateState) {
//         // 일반적인 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(updateState.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = updateState.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , mergeState(currentState, action) {
//         // redux의 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(action.value.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = action.value.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , checkUndefinedNullSpace(str) {
//         // 검사 undefined, null, space
//         if (str === undefined || str === "undefined" || str === null || str === "null" || str.trim() === "") {
//             return true;
//         }
//         return false;
//     }
//     , checkUndefinedNull(obj) {
//         // 검사 undefined와 null이 동시에 아닐 경우
//         if (obj === undefined || obj === "undefined" || obj === null || obj === "null") {
//             return true;
//         }
//         return false;
//     }
//     , clearObject(obj) {
//         //
//         let objKeys = Object.keys(obj);
//         //
//         for (let idx01 in objKeys) {
//             if (typeof (obj[objKeys[idx01]]) === "object") {
//                 if (Array.isArray(obj[objKeys[idx01]])) {
//                     obj[objKeys[idx01]] = [];
//                 } else {
//                     obj[objKeys[idx01]] = {}
//                 }
//             } else {
//                 obj[objKeys[idx01]] = "";
//             }
//         }
//         return obj;
//     }
//     , cloneTypeOf(data) {
//         let keys = Object.keys(data);
//         let newData = {};
//         //
//         for (let idx01 in keys) {
//             if (data[keys[idx01]] !== null) {
//                 if (typeof (data[keys[idx01]]) === "object") {
//                     if (Array.isArray(data[keys[idx01]])) {
//                         newData[keys[idx01]] = [];
//                     } else {
//                         newData[keys[idx01]] = {};
//                     }
//                 } else if (typeof (data[keys[idx01]]) === "boolean") {
//                     newData[keys[idx01]] = false;
//                 } else {
//                     newData[keys[idx01]] = "";
//                 }
//             } else {
//                 newData[keys[idx01]] = "";
//             }
//         }
//         return newData;
//     }
//     , isChanged(original, current) {
//         //
//         let originalKeys = Object.keys(original);
//         let currentKeys = Object.keys(current);
//         //
//         for (let idx01 in originalKeys) {
//             for (let idx02 in currentKeys) {
//                 if (originalKeys[idx01] === currentKeys[idx02]) {
//                     if (typeof (original[originalKeys[idx01]]) === "object") {
//                         if (Array.isArray(original[originalKeys[idx01]])) {
//                             if (original[originalKeys[idx01]].length !== current[currentKeys[idx02]].length) {
//                                 return true;
//                             } else if (original[originalKeys[idx01]].length === current[currentKeys[idx02]].length) {
//                                 let originalArray = original[originalKeys[idx01]];
//                                 let currentArray = current[currentKeys[idx02]];
//                                 let isChaged = false;
//                                 for (let idx03 in originalArray) {
//                                     if (originalArray[idx03] !== currentArray[idx03]) {
//                                         isChaged = true;
//                                     }
//                                 }
//                                 if (isChaged === true) {
//                                     return true;
//                                 } else if (isChaged === false) {
//                                     return false;
//                                 }
//                             }
//                         }
//                     } else {
//                         if (original[originalKeys[idx01]] !== current[currentKeys[idx02]]) {
//                             return true;
//                         }
//                     }
//                 }
//             }
//         }
//         return false;
//     }
//     , compareObj(originalObj, targetObj, except) {
//         let rtn = false;
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let originalKeys = [];
//         let targetKeys = [];
//         if (except.length >= 1) {
//             // 비교 제외할 항목
//             for (let idx033 = 0; idx033 < except.length; idx033++) {
//                 originalKeys.push(except[idx033])
//                 targetKeys.push(except[idx033]);
//             }
//         }
//         //
//         //
//         for (let idx01 = 0; idx01 < originalKeys.length; idx01++) {
//             // original
//             let originalKeyName = originalKeys[idx01];
//             let originValue = originalObj[originalKeyName];
//             // target
//             let targetKeyName = originalKeyName;
//             let targetValue = targetObj[originalKeyName];
//             //
//             if (typeof (originalObj[originalKeyName]) === "object") {
//                 // array과 Object은 모두 object으로 표현된다.
//                 if (Array.isArray(originalObj[originalKeyName])) {
//                     // 배열이면
//                     let new2Arr = [];
//                     let originalArr = originalObj[originalKeyName];
//                     let targetArr = targetObj[targetKeyName];
//                     if (originalArr.length !== targetArr.length) {
//                         rtn = true;
//                         idx01 = ((originalKeys.length * 1) + 1);
//                     }
//                     for (let idx03 = 0; idx03 < originalArr.length; idx03++) {
//                         if (originalArr[idx03] !== targetArr[idx03]) {
//                             rtn = true;
//                             idx03 = ((originalArr.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     rtnObj[originalKeyName] = new2Arr;
//                     //
//                 } else if (!Array.isArray(originalObj[originalKeyName])) {
//                     // 객체이면
//                     let original2Obj = originalObj[originalKeyName];
//                     let target2Obj = targetObj[originalKeyName];
//                     let original2Keys = Object.keys(original2Obj);
//                     //  let target2Keys = Object.keys(target2Obj);
//                     //
//                     for (let idx044 = 0; idx044 < original2Keys.length; idx044++) {
//                         let key2 = original2Keys[idx044];
//                         if (original2Obj[key2] !== target2Obj[key2]) {
//                             rtn = true;
//                             idx044 = ((original2Keys.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     //
//                 }
//             } else {
//                 if (originValue !== targetValue) {
//                     // 값이 틀리다면 true;
//                     rtn = true;
//                     idx01 = ((originalKeys.length * 1) + 1);
//                 }
//             }
//         }
//         return rtn;
//     }
//     , copyObj(targetObj) {
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let keys = Object.keys(targetObj);
//         //
//         for (let idx01 in keys) {
//             let keyName = keys[idx01];
//             //
//             rtnObj[keyName] = targetObj[keyName];
//             //
//             //
//             if (targetObj[keyName] !== null) {
//                 if (typeof (targetObj[keyName]) === "object") {
//                     //
//                     if (Array.isArray(targetObj[keyName])) {
//                         // Array
//                         let new2Arr = [];
//                         for (let idx03 in targetObj[keyName]) {
//                             new2Arr[idx03] = targetObj[keyName][idx03];
//                         }
//                         rtnObj[keyName] = new2Arr;
//                         //
//                     } else if (!Array.isArray(targetObj[keyName])) {
//                         // Object
//                         let target2Obj = targetObj[keyName];
//                         let newKeys = Object.keys(target2Obj);
//                         let newObj = {};
//                         for (let idx02 in newKeys) {
//                             newObj[newKeys[idx02]] = target2Obj[newKeys[idx02]];
//                         }
//                         rtnObj[keyName] = newObj;
//                     }
//                 }
//             }
//         }
//         return rtnObj;
//     }
//     , copyNewRefMainData(obj) {
//         // 인스턴스가 다른 mainData object을 복사
//         let keys = Object.keys(obj.mainData);
//         let newObj = {};
//         let newMainData = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = obj.mainData[keys[idx01]];
//         }
//         newMainData["mainData"] = newObj;
//         return newMainData;
//     }
//     , copyToNewRefObj(source) {
//         // 인스턴스가 다른  object을 복사
//         let keys = Object.keys(source);
//         let newObj = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = source[keys[idx01]];
//         }
//         return newObj;
//     }
//     , copyToNewRefArr(source) {
//         // 인스턴스가 다른  array 복사
//         let newArr = [];
//         for (let idx01 in source) {
//             let newObj = {};
//             let keys = Object.keys(source[idx01]);
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 let val = source[idx01][key];
//                 newObj[key] = val;
//             }
//             newArr.push(newObj);
//         }
//         return newArr;
//     }
//     , fullScreen() {
//         // 전체화면
//         if (!document.fullscreenElement &&    // alternative standard method
//             !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.mozRequestFullScreen) {
//                 document.documentElement.mozRequestFullScreen();
//             } else if (document.documentElement.webkitRequestFullscreen) {
//                 document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.cancelFullScreen) {
//                 document.cancelFullScreen();
//             } else if (document.mozCancelFullScreen) {
//                 document.mozCancelFullScreen();
//             } else if (document.webkitCancelFullScreen) {
//                 document.webkitCancelFullScreen();
//             }
//         }
//     }
//     , partOfFullScreen(id) {
//         // 특정화면 전체화면
//         // 2019-10-16
//         // 대시보드 안쪽 영역에서의 전체화면으로 추정된다.
//         if (!document.getElementById(id).fullscreenElement &&    // alternative standard method
//             !document.getElementById(id).mozFullScreenElement &&
//             !document.getElementById(id).webkitFullscreenElement) {  // current working methods
//             if (document.getElementById(id).requestFullscreen) {
//                 document.getElementById(id).requestFullscreen();
//             } else if (document.getElementById(id).mozRequestFullScreen) {
//                 document.getElementById(id).mozRequestFullScreen();
//             } else if (document.getElementById(id).webkitRequestFullscreen) {
//                 document.getElementById(id).webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.getElementById(id).cancelFullScreen) {
//                 document.getElementById(id).cancelFullScreen();
//             } else if (document.getElementById(id).mozCancelFullScreen) {
//                 document.getElementById(id).mozCancelFullScreen();
//             } else if (document.getElementById(id).webkitCancelFullScreen) {
//                 document.getElementById(id).webkitCancelFullScreen();
//             }
//         }
//     }
//     , getSliceYMD(str) {
//         return str.substr(0, 10);
//     }
//     , getTableDateTime(str) {
//         //+1000002019-01-01T00:00 -> 2019-01-01 00:00
//         let YYYY = str.substr(7, 4);
//         let MM = str.substr(12, 2);
//         let DD = str.substr(15, 2);
//         let HH = str.substr(18, 2);
//         let MI = str.substr(21, 2);
//         return YYYY + "-" + MM + "-" + DD + " " + HH + ":" + MI;
//     }
//     , titleYYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(4, 2);
//         let DD = str.substr(6, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , getYYYMMDDSPACEHHMM(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2) + " " + str.substr(11, 2) + str.substr(14, 2);
//     }
//     , getDateToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/:/gi, "");
//         tempStr = tempStr.replace(/ /gi, "");
//         tempStr = tempStr.replace(/T/gi, "");
//         tempStr = tempStr.replace(/-/gi, "");
//         tempStr = tempStr.replace(/\+/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     },
//     getPhoneToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/-/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     }
//     , getYYYMMDD(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2);
//     }
//     , getHHMM(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2);
//     }
//     , getHH(str) {
//         // HH
//         return str.substr(11, 2);
//     }
//     , getMM(str) {
//         // MM
//         return str.substr(14, 2);
//     }
//     , getYYYMMDDSPACEHHMMSS(str) {
//         // 2019-12-05T05:04:09.129272
//         // YYYYMMDD HHMMSS
//         return str.substr(0, 10) + " " + str.substr(11, 8)
//     }
//     , getHHMMSS(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2) + " : " + str.substr(17, 2);
//     }
//     , getYMD(str) {
//         // 날짜을 자른다.
//         // 2019-11-27 01:00:16
//         // 2019
//         // 11
//         // 27
//         // 01
//         // 00
//         // 16
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , splitDate(str) {
//         // 날짜을 자른다.
//         // "2019-11-08T11:24:39.992".substr(0,4)
//         // "2019-11-08T11:24:39.992".substr(5,2)
//         // "2019-11-08T11:24:39.992".substr(7,2)
//         // "2019-11-08T11:24:39.992".substr(8,2)
//         // "2019-11-08T11:24:39.992".substr(11,2)
//         // "2019-11-08T11:24:39.992".substr(14,2)
//         // "2019-11-08T11:24:39.992".substr(17,2)
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , cutDate(str) {
//         // 날짜을 자른다.
//         // +100000 0000-01-01T00:00
//         return str.substr(7, str.length - 1);
//     }
//     , cut10Date(str) {
//         // 날짜을 자른다.
//         // 0000-01-01
//         return str.substr(0, 10);
//     }
//     , rangePickerDateTime(str) {
//         // 날짜을 자른다.
//         // 2015-06-06T12:33 2015-06-06 12:33
//         let tempStr = str.split(".");
//         let tempStr2 = "";
//         if (tempStr.length === 2) {
//             tempStr2 = tempStr[0];
//         } else if (tempStr.length === 1) {
//             tempStr2 = str;
//         }
//         return tempStr2.replace("T", " ");
//     }
//     , hangulYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "년" + " " + MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , noticeDate(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , hangulMMDD(str) {
//         let MM = str.substr(5, 2) * 1;
//         let DD = str.substr(8, 2) * 1;
//         let rtn = MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , localDateTime() {
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + mm + dd + hour + min + sec;
//         return dateTime;
//     }
//     , beforeAMonth(ymd) {
//         let y1 = ymd.substr(0, 4);
//         let m1 = ((ymd.substr(5, 2) * 1) - 1);
//         let d1 = ymd.substr(8, 2);
//         //
//         let dt = new Date(y1, m1, d1);
//         dt.setDate(dt.getDate() + 1);
//         //
//         let y2 = "";
//         let m2 = "";
//         let d2 = "";
//         //
//         y2 = dt.getFullYear() + "";
//         if ((dt.getMonth() * 1) < 10) {
//             m2 = "0" + ((dt.getMonth() * 1) + 1) + "";
//         } else {
//             m2 = ((dt.getMonth() * 1) + 1) + "";
//         }
//         if ((dt.getDate() * 1) < 10) {
//             d2 = "0" + dt.getDate() + "";
//         } else {
//             d2 = dt.getDate() + "";
//         }
//         //
//         let rtn = y2 + "-" + m2 + "-" + d2;
//         //
//         return rtn;
//     }
//     , localRangeDateTime() {
//         // 서버시간
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min;
//         return dateTime;
//     }
//     , getRefDate(strDate) {
//         //
//         let yy = strDate.substr(0, 4);
//         let mm = strDate.substr(5, 2) - 1;
//         let dd = strDate.substr(8, 2);
//         let hh = strDate.substr(11, 2);
//         let mi = strDate.substr(14, 2);
//         //
//         let dt = new Date(yy, mm, dd, hh, mi)
//         //
//         return dt;
//     }
//     , getConnectorStatusInfo() {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         return {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//     }
//     , getConnectorStatusOneInfo(str) {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         let obj = {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//         return obj[str];
//     }
//     , getChargingSpeedInfo() {
//         // SUPER_FAST, FAST, SLOW
//         return {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getChargingSpeedOneInfo(str) {
//         // SUPER_FAST, FAST, SLOW
//         let obj = {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//         return obj[str];
//     }
//     , getConnectorTypeInfo() {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         return {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getConnectorTypeOneInfo(str) {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         let obj = {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         }
//         return obj[str];
//     }
//     , initParticularValidation(pId) {
//         // 특정 벨리데이션 초기화 함수
//         let oId = document.getElementById(pId);
//         if (oId.closest(".check_error").classList.contains("has_error")) {
//             oId.closest(".check_error").classList.remove("has_error");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ1")) {
//             oId.closest(".check_error").classList.remove("e_typ1");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ2")) {
//             oId.closest(".check_error").classList.remove("e_typ2");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ3")) {
//             oId.closest(".check_error").classList.remove("e_typ3");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ4")) {
//             oId.closest(".check_error").classList.remove("e_typ4");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ5")) {
//             oId.closest(".check_error").classList.remove("e_typ5");
//         }
//     }
//     , setValidationType(pId, pType) {
//         // type 벨리데이션 처리
//         let sId = pId;
//         let sType = pType
//         let oId1 = document.getElementById(sId);
//         if (oId1.closest(".check_error").classList.contains(sType)) {
//             oId1.closest(".check_error").classList.remove(sType);
//         }
//         if (oId1.closest(".check_error").classList.contains("has_error")) {
//             oId1.closest(".check_error").classList.remove("has_error");
//         }
//         oId1.closest(".check_error").classList.add("has_error");
//         oId1.closest(".check_error").classList.add(sType);
//         oId1.focus();
//     }
//     , sameObjForObj(source, target) {
//         // value가 값이 아니면 비교하지 않는다.
//         // 예 : 배열
//         let isSame = true;
//         let sourceKeys = Object.keys(source);
//         let targetKeys = Object.keys(target);
//         if (targetKeys.length <= 0) {
//             //비교대상이 없는 경우는 false
//             isSame = false;
//         }
//         for (let idx01 in sourceKeys) {
//             let sourceKey = sourceKeys[idx01];
//             let sourceValue = source[sourceKey];
//             for (let idx02 in targetKeys) {
//                 let targetKey = targetKeys[idx02];
//                 let targetValue = target[targetKey];
//                 if (!Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
//                     if (sourceKey === targetKey) {
//                         if (sourceValue !== targetValue) {
//                             isSame = false;
//                         }
//                     }
//                 }
//             }
//         }
//         return isSame;
//     }
//     , nullRequestCheck(str) {
//         let strReturn;
//         if (!str || str === 0) {
//             strReturn = null;
//         } else {
//             strReturn = str;
//         }
//         return strReturn;
//     }
//     , nullRequestArray(arr) {
//         let arrReturn;
//         if (arr.length === 0) {
//             arrReturn = [];
//         } else {
//             arrReturn = arr;
//         }
//         return arrReturn;
//     }
//     , datilHypone(str) {
//         let detailValue = "";
//         if (String(str) === "" || Number(str) === 0 || str === null) {
//             detailValue = "";
//         } else {
//             detailValue = str;
//         }
//         return detailValue;
//     }
//     , tableSort(str) {
//         let tableSort = "";
//         if (str === "-") {
//             tableSort = 9999999999999999999999999999999999999999;
//         } else {
//             tableSort = str
//         }
//         return tableSort
//     }
//     , padZero(str) {
//         if ((str * 1) < 10) {
//             str = "0" + str;
//         }
//         return str;
//     }
//     , inputTelNumber(obj) {
//         // 전화번호 format
//         var number = obj.replace(/[^0-9]/g, "");
//         var tel = "";
//         // 서울 지역번호(02)가 들어오는 경우
//         if (number.substring(0, 2).indexOf('02') === 0) {
//             if (number.length < 3) {
//                 return number;
//             } else if (number.length < 6) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2);
//             } else if (number.length < 10) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 3);
//                 tel += "-";
//                 tel += number.substr(5);
//             } else {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 4);
//                 tel += "-";
//                 tel += number.substr(6);
//             }
//             // 서울 지역번호(02)가 아닌경우
//         } else {
//             if (number.length < 4) {
//                 return number;
//             } else if (number.length < 7) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3);
//             } else if (number.length < 9) {
//                 tel += number.substr(0, 4);
//                 tel += "-";
//                 tel += number.substr(4);
//             } else if (number.length < 11) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 3);
//                 tel += "-";
//                 tel += number.substr(6);
//             } else {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 4);
//                 tel += "-";
//                 tel += number.substr(7);
//             }
//         }
//         return tel;
//     }
//     , getAnnounceCatagory(category, isComplete, warningLevel) {
//         // 알림 카테고리
//         //
//         // TROUBLE(고)
//         // WARNING(장애(Warning)
//         // OCCUPY(점유)
//         // COMM_FAULT(통신장애)
//         // UNKNOWN(상태미확인)
//         // INOPERATIVE(가용성변경)
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고장-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         // isComplete: false < 등록 : false , 완료 :  true
//         let troubleSubTitle = "";
//         let troubleSubColor = "";
//         let troubleSubColor2 = "";
//         if (category === "TROUBLE") {
//             if (isComplete === false) {
//                 troubleSubTitle = "등록";
//                 troubleSubColor = "typ1_1";
//                 troubleSubColor2 = "alert_typ1_1";
//             } else if (isComplete === true) {
//                 troubleSubTitle = "완료";
//                 troubleSubColor = "typ1_2";
//                 troubleSubColor2 = "alert_typ1_2";
//             }
//         }
//         let inoperativeSubTitle = "";
//         let inoperativeColor = "";
//         let inoperativeColor2 = "";
//         if (category === "INOPERATIVE") {
//             if (isComplete === true) {
//                 // opertive
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_4";
//                 inoperativeColor2 = "alert_typ1_4";
//             } else if (isComplete === false) {
//                 // inoperative
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_3";
//                 inoperativeColor2 = "alert_typ1_3";
//             }
//         }
//         let categoryColor = "";
//         let categoryColor2 = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 categoryColor = "typ3_2";
//                 categoryColor2 = "alert_typ3_2";
//             } else if (isComplete === false) {
//                 categoryColor = "typ3_1";
//                 categoryColor2 = "alert_typ3_1";
//             }
//         }
//         //
//         let knameOccupy = "";
//         let title1Occupy = "";
//         let title2Occupy = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 knameOccupy = "점유해제";
//                 title1Occupy = "점유해제";
//                 title2Occupy = "점유해제";
//             } else if (isComplete === false) {
//                 knameOccupy = "점유";
//                 title1Occupy = "점유";
//                 title2Occupy = "점유";
//             }
//         }
//         // , "WARNING": {
//         //     ename: "WARNING"
//         //     , kname: "장애"
//         //     , title1: "장애(Warning)"
//         //     , title2: "장애(Warning)"
//         //     , color1: "typ2"
//         //     , color2: "alert_typ2"
//         let knameWarning = "";
//         let title1Warning = "";
//         let title2Warning = "";
//         //
//         //
//         if (category === "WARNING") {
//             if (warningLevel === "Undefined") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Undefined)";
//                 title2Warning = "장애(Undefined)";
//             } else if (warningLevel === "Warning") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Warning)";
//                 title2Warning = "장애(Warning)";
//             } else if (warningLevel === "Critical") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Critical)";
//                 title2Warning = "장애(Critical)";
//             }
//         }
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고���-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         let obj = {
//             "TROUBLE": {
//                 ename: "TROUBLE"
//                 , kname: "고장"
//                 , title1: "고장-" + troubleSubTitle
//                 , title2: "고장-" + troubleSubTitle
//                 , color1: troubleSubColor
//                 , color2: troubleSubColor2
//             }
//             , "WARNING": {
//                 ename: "WARNING"
//                 , kname: knameWarning
//                 , title1: title1Warning
//                 , title2: title2Warning
//                 , color1: "typ2"
//                 , color2: "alert_typ2"
//             }
//             , "OCCUPY": {
//                 ename: "OCCUPY"
//                 , kname: knameOccupy
//                 , title1: title1Occupy
//                 , title2: title2Occupy
//                 , color1: categoryColor
//                 , color2: categoryColor2
//             }
//             , "COMM_FAULT": {
//                 ename: "COMM_FAULT"
//                 , kname: "통신장애"
//                 , title1: "통신장애"
//                 , title2: "통신장애"
//                 , color1: "typ4"
//                 , color2: "alert_typ4"
//             }
//             , "UNKNOWN": {
//                 ename: "UNKNOWN"
//                 , kname: "상태미확인"
//                 , title1: "상태미확인"
//                 , title2: "상태미확인"
//                 , color1: "typ5"
//                 , color2: "alert_typ5"
//             }
//             , "INOPERATIVE": {
//                 ename: "INOPERATIVE"
//                 , kname: "가용성변경"
//                 , title1: inoperativeSubTitle
//                 , title2: inoperativeSubTitle
//                 , color1: inoperativeColor
//                 , color2: inoperativeColor2
//             }
//             , "NOTICE": {
//                 ename: "NOTICE"
//                 , kname: "미확인알림"
//                 , title1: "미확인알림"
//                 , title2: "미확인알림"
//                 , color1: "typ6"
//                 , color2: "alert_typ6"
//             }
//         };
//         let keys = Object.keys(obj);
//         for (let idx in keys) {
//             if (category === keys[idx]) {
//                 return obj[keys[idx]];
//             }
//         }
//     }
//     , getColor() {
//         return [
//             "#00a99d"
//             , "#ff7663"
//             , "#ffb74f"
//             , "#a2df53"
//             , "#2c97de"
//             , "#b771ed"
//             , "#c69c6d"
//             , "#64c2f8"
//             , "#6874a8"
//             , "#fe2f87"
//             , "#3f1c00"
//             , "#0065c6"
//             , "#5f8a1f"
//             , "#8c6239"
//             , "#c90126"
//             , "#a2b9bc"
//             , "#b2ad7f"
//             , "#878f99"
//             , "#6b5b95"
//             , "#feb236"
//             , "#d64161"
//             , "#ff7b25"
//             , "#d6cbd3"
//             , "#eca1a6"
//             , "#bdcebe"
//             , "#ada397"
//             , "#b5e7a0"
//             , "#86af49"
//             , "#af8a65"
//             , "#c4b7a6"
//             , "#3e4444"
//             , "#405d27"
//             , "#92a8d1"
//             , "#034f84"
//             , "#c94c4c"
//             , "#80ced6"
//             , "#618685"
//             , "#50394c"
//             , "#b2b2b2"
//             , "#36486b"
//             , "#313188"
//             , "#bc5a45"
//             , "#c5d5c5"
//             , "#65623c"
//             , "#77a8a8"
//             , "#b0aac0"
//             , "#563f46"
//             , "#7e4a35"
//             , "#cab577"
//             , "#838060"
//             , "#bbab9b"
//             , "#686256"
//             , "#c1502e"
//             , "#4285F4"
//             , "#34A853"
//             , "#3B5998"
//             , "#EA4335"
//             , "#F65314"
//             , "#7CBB00"
//             , "#7B0099"
//             , "#BE9EC9"
//             , "#006E6D"
//             , "#485167"
//             , "#944743"
//             , "#DBB1CD"
//             , "#BC70A4"
//             , "#D2691E"
//             , "#AF9483"
//             , "#AD5D5D"
//             , "#006E51"
//             , "#D8AE47"
//             , "#B76BA3"
//             , "#a6001a"
//             , "#172035"
//             , "#686b69"
//             , "#1c1d22"
//             , "#0b0b0d"
//             , "#a0333a"
//             , "#c98a71"
//             , "#428b64"
//             , "#9e7339"
//             , "#d6265d"
//             , "#ee7979"
//             , "#e63d3d"
//             , "#4c5364"
//             , "#1b1464"
//             , "#440e62"
//             , "#007236"
//             , "#3cb878"
//             , "#f06eaa"
//             , "#fff200"
//             , "#80FF00"
//             , "#00FFFF"
//             , "#0000FF"
//             , "#8000FF"
//             , "#FF00FF"
//             , "#C21460"
//             , "#4424d6"
//             , "#347C98"
//             , "#a1a1a1"
//         ];
//     }
//     , getMessage(file, call, action, message) {
//         let me = this;
//         if (action === "SAVE") {
//             me.antNotice(null, null, message + " 저장했습니다.", function () { });
//         } else if (action === "MODIFY") {
//             me.antNotice(null, null, message + " 수정했습니다.", function () { });
//         } else if (action === "IS_NUMBER") {
//             me.antNotice(null, null, "숫자만 입력가능합니다", function () { });
//         }
//     }
//     , weekCount(dt) {
//         const day = 1000 * 60 * 60 * 24;
//         var thisDay = dt;
//         var theFirstDay = new Date(dt.getFullYear(), 0, 1);
//         var theFirstDayOfWeek = theFirstDay.getDay();
//         if (theFirstDayOfWeek > 4) {
//             theFirstDay.setDate(theFirstDayOfWeek - 4 - 1 + 7);
//         } else {
//             theFirstDay.setDate(4 - theFirstDayOfWeek + 1);
//         }
//         var diff = Math.abs(thisDay.getTime() - theFirstDay.getTime()) / day;
//         return Math.ceil(diff / 7);
//     }
//     , getWeekOfMonth(dt) {
//         var selectedDayOfMonth = dt.getDate();
//         var first = new Date(dt.getFullYear(), dt.getMonth() + 1, 1);
//         var monthFirstDateDay = first.getDay();
//         return Math.ceil((selectedDayOfMonth + monthFirstDateDay) / 7);
//     }
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Common Guide > Component 정의> 팝업 시나리오 v1.1 p52
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소 :
//     // 입력된 내용있는 경우, 취소 확인(Confirm) 시스템팝업호출
//     // ( '작성중인{상세영역또는팝업창Header Title} 정보가 저장되지 않았습니다. 페이지를 나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 추가 - 취소 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전 상태)
//     // 추가 - 취소 - 확인 : 팝업창닫힘. 저장안됨. 메뉴default로 복귀
//     // 추가 - 취소 - 입력된 내용없는 경우, 메뉴 default로 복귀
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 저장 : 저장 확인(Confirm) 시스템팝업호출
//     // ( '{상세영역또는팝업창HeaderTitle} 정보를 저장하시겠습니까?’ [취소] [확인] )
//     //
//     // 추가 - 저장 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 추가 - 저장 - 확인 - Y :
//     // 팝업창 닫힘.
//     // 저장성공한경우, 저장완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보를 저장했습니다.')
//     //
//     // 추가 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert) 시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보저장에 실패했습니다.‘ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제 :
//     // 삭제 확인(Confirm) 시스템 팝업 호출
//     // ( '{상세영역또는팝업창Header Title} 정보를 삭제하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 삭제 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 삭제 - 확인 - Y :
//     // 팝업창닫힘.
//     // 삭제성공한 경우 삭제완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창HeaderTitle} 정보를 삭제했습니다.' )
//     //
//     // 수정 - 삭제 - 확인 - N :
//     // 팝업창닫힘.
//     // 삭제실패한경우, 삭제실패알림(Alert)시스템팝업호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보삭제에 실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소 :
//     // 입력된 내용있는 경우, 취소확인(Confirm) 시스템 팝업 호출
//     // ('작성중인{상세영역또는팝업창Header Title} 정보가저장되지않았습니다. 페이지를나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 수정 - 취소 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 취소 - 확인 - N : 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 수정 - 취소 - 입력된내용없는경우, 메뉴default 상태로복귀
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장 :
//     // 저장확인(Confirm)시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보를 저장하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 저장 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 저장 - 확인 - Y :
//     // 팝업창닫힘.
//     // 저장성공한경우, 저장완료(Success Notification)시스템팝업(Toast)호출
//     // ('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//     //
//     // 수정 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert)시스템팝업호출
//     // ( '{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //   [Description]
//     // • 확인 시스템팝업 및 알림 시스템팝업에서는 제공하지 않음.
//     //   완료시스템팝업에서는 팝업창 닫기[X] 버튼 제공하며 클릭시, 팝업창 닫힘
//     //
//     // • [저장] 버튼default : 비활성화. 변경사항이 있는 경우에만 버튼활성화-[저장] 버튼클릭시,
//     //   validation check 진행후, 조건충족시에만 저장확인(Confirm)
//     //   시스템팝업 호출(validation 조건 미충족시, 알림(Alert) 팝업또는 필드하단에 도움말제공)
//     //
//     // • 메뉴 default : Control Area의 정보영역리스트 Deselect된 상태, Status Area 공백상태및 도움말제공(‘Click the item to read’)
//     //
//     // • 완료(Success Notification) 시스템팝업에 Toast 기능적용(팝업 호출되어 3초경과시, 팝업 자동닫힘. 모달팝업 아님)
//     //
//     // • 입력문구는 Common Guide를 따르며, 예외 케이스의 경우 상세시나리오 description을 따름
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 완료시스템팝업 Toast 기능추가
//     // 2) Ant design Modal 기능적용(적용하지 않을 경우, 브라우저 제공시스템 팝업 사용)
//     // 3) 저장/삭제 실패 케이스 추가
//     // 4) validation check 및확인시스템팝업순서규칙적용
//     // 1) 변경사항이 있는 경우 에만 [저장] 버튼활성화
//     // 2) 확인, 알림팝업에서는 닫기 버튼 미제공(Ant design)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) Ant design Modal 기능적용 (적용하지않을경우, 브라우저 제공시스템 팝업사용)
//     // 1) 팝업호출 되었을 때의 위치수정 (상단중앙영역)
//     // 2) 취소, 확인버튼위치는우측하단 (ant design제약)
//     // 3) 모달팝업내 닫기 버튼 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 취소 확인 시스템팝업 호출 Flow (새로운정보를 추가하거나 수정하는 경우 모두포함)
//     //
//     // 1) 내용 입력 또는 기존 설정 변경후, [취소] 버튼클릭시 취소확인 시스템팝업 호출
//     //    [취소] 팝업창 닫힘. 이전화면복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 2) 내용 입력 또는 기존 설정 변경후, Control Area의 정보영역(ex : Table영역) 클릭시 취소 확인 시스템 팝업 호출
//     //    [취소] 팝업창닫힘. 이전화면 복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 클릭된리스트의 정보가 Status Area 상세영역에 표시
//     //
//     // 3) 다른메뉴(ex : ‘대시보드’ 메뉴버튼) 클릭시 취소 확인 시스템팝업호출 되지않음. 선택된 메뉴default 화면으로 이동
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     //
//     // • 팝업창 유형:
//     //   - 일반팝업: 팝업내입력된정보를화면에적용([그림2])
//     //   - 정보성팝업: 정보 제공 목적으로[확인] 버튼만 존재([그림3])
//     //   - 확인(Confirm) 시스템팝업: 사용자에게 선택에 대한 확인이 목적으로[확인], [취소] 버튼이 함께 제공됨. 모달적용
//     //   - 알림(Alert)시스템팝업: 알림, 사용자조작에 대한 Feedback Message 전달이 목적으로[확인] 버튼만 존재. 모달적용
//     //   - 완료(Success Notification) 시스템팝업: 사용자조작이 성공했을 때의 Feedback Message 전달이목적,
//     //     Toast (3초)기능적용되며[확인] 버튼이 존재하지 않음. 모달적용안함
//     //   - [닫기] 버튼항상제공. 버튼클릭시 저장없이 팝업창 닫힘(예외: 확인시스템팝업및알림시스템팝업에서는제공하지않음)
//     //
//     // • 팝업창은 활성화된 브라우저 중앙에 위치하며 화면은 dim 처리됨(Opacity 값은디자인가이드참고)
//     //
//     // • 정보의양에따라대/중/소로크기를선택하여구성
//     //
//     // • [팝업] + [팝업]은지양하나[팝업] + [알림(Alert)팝업] 또는[팝업] + [완료(Success Notification)]은사용가능
//     //
//     // • 팝업에서Acton Button은팝업창영역중앙최하단에배치
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 배경dim 처리description 보완
//     // 2) 팝업창 유형 내용 추가
//     // 1) 닫기 버튼 예외케이스 description 추가
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 취소확인시스템팝업문구통일
//     // 2) 저장확인시스템팝업예시추가
//     // 3) 완료시스템팝업Toast 기능추가
//     // 4) Ant design Modal 기능적용
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 확인, 알림팝업의위치description 추가(상단중앙영역)
//     // 2) 아이콘색상ant design 따름(확인/알림/완료)
//     // 3) 취소, 확인버튼위치는우측하단(ant design제약)
//     // 4) 모달팝업내닫기버튼삭제
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1)그림2-3 추가(파일다운로드확인)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //  Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 결과에 대한 피드백이 나오류등의 메시지 팝업은 Confirm, Alert, Notification 형태로 제공함
//     //
//     // • 확인(Confirm) 시스템팝업:
//     //   사용자에게 선택에 대한 확인이 필요한 경우, [확인], [취소] 버튼이 함께 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업 호출
//     //
//     // • 알림(Alert) 시스템팝업:
//     //   피드백을 제공하여 별도 선택버튼이 필요없는 경우,
//     //   팝업창에[확인] 버튼이 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업호출
//     //   - validation check 조건에 부합하지않은 경우, 또는 저장/등록/승인/수정/생성/삭제 실패 했을때 알림 시스템팝업호출
//     //   - 엑셀등의 파일 다운로드 성공여부를 확인하기 위한 알림 시스템팝업호출([그림2-3])
//     //
//     // • 완료(Success Notification) 시스템팝업: [확인] 버튼없이 Toast 기능 적용됨,
//     //   모달 적용안함
//     //   - 저장/등록/승인/수정/생성/삭제 성공했을때 완료시스템팝업호출 (실패한경우알림(Alert) 시스템팝업호출)
//     //   - Toast 기능은 브라우저 화면 Bottom Right 영역에 팝업호출후 3초가 지난뒤자동으로 팝업닫힘. 모달팝업이 아니며,
//     //     [닫기] 버튼클릭시, 3초경과하지않아도팝업닫힘
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소
//     , popupAddCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content = "작성중인 " + prefix + ' 정보가 저장되지\n 않았습니다. 페이지를 나가시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 취소
//     , popupModifyCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content1 = "작성중인 " + prefix + " 정보가 저장되지 않았습니다. ";
//         let content2 = "페이지를 나가시겠습니까?";
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content1}<br />{content2}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 추가 - 저장
//     , popupNewAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 저장
//     , popupModifyAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 삭제
//     , popupModifyDelete(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 삭제하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 알림
//     , antNotice(me, response, content, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.info({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "알림"
//             , content: contentTag
//             , okText: '확인'
//             , onOk: okFunc
//         });
//     }
//     // 확인
//     , antConfirm(me, response, content, cancelFunc, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: contentTag
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 저장
//     , antNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: failFunc
//             });
//         }
//     }
//     // 저장
//     , antNotification2(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             //
//             failFunc();
//             //
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: function () { }
//             });
//         }
//     }
//     // 삭제 reponse 값에 성공 실패가 없는 상태의 값을 전달시 사용
//     , antDeleteNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         // 팝업창닫힘. 저장성공한경우,
//         // 저장완료(Success Notification)시스템팝업(Toast)
//         // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//         notification.config({
//             placement: 'bottomRight',
//             duration: 3,
//         });
//         notification.success({
//             message: message
//             , description: successDescription
//         });
//         successFunc();
//     }
//     , tableStatusMessage(tableStatus, errorCode) {
//         //         <Table
//         //   locale={{ emptyText: (<span>
//         //     暂无订单数据
//         //     <img src="https://www.baidu.com/img/bd_logo1.png" />
//         //     <Button>do something</Button>
//         //     </span>)
//         //    }} />
//         if (tableStatus === undefined || tableStatus === null || tableStatus === "") {
//             tableStatus = "FIRST";
//             errorCode = "000-00-000";
//         }
//         let emptyText = "";
//         //데이터가 존재하지 않습니다.
//         //데이터 처리중입니다. 잠시만 기다려주세요.
//         //데이터로딩에 실패하였습니다. Error Code : 000-00-000
//         if (tableStatus === "FIRST") {
//             emptyText = (
//                 <>
//                     <img src={Loading} />
//                     <p>데이터 처리중입니다.<br /> 잠시만 기다려주세요.</p>
//                 </>
//             );
//         } else if (tableStatus === "EXIST") {
//             emptyText = ("");
//         } else if (tableStatus === "EMPTY") {
//             emptyText = (
//                 <>
//                     <img src={IcoNodata} />
//                     <p>데이터가 존재하지 않습니다.</p>
//                 </>
//             );
//         } else if (tableStatus === "FAIL") {
//             emptyText = (<p>데이터로딩에 실패하였습니다.<br /> Error Code :{errorCode}</p>);
//         }
//         return emptyText;
//     }
//     , lightenDarkenColor(col, amt) {
//         var usePound = false;
//         if (col[0] === "#") {
//             col = col.slice(1);
//             usePound = true;
//         }
//         var num = parseInt(col, 16);
//         var r = (num >> 16) + amt;
//         if (r > 255) r = 255;
//         else if (r < 0) r = 0;
//         var b = ((num >> 8) & 0x00FF) + amt;
//         if (b > 255) b = 255;
//         else if (b < 0) b = 0;
//         var g = (num & 0x0000FF) + amt;
//         if (g > 255) g = 255;
//         else if (g < 0) g = 0;
//         return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
//     }
//     , getFileExts() {
//         // TRR때 말씀드린 공지사항 첨부파일 업로드 제한 타입에 대한 이슈입니다.
//         // 내용 참고하셔서 반영 부탁드립니다. 감사합니다.
//         // 파일 타입 제한 : 확장자는 대소문자 구분하지 않아야 함.
//         // • 인증서 파일: crt, cer, csr, pem, der, pfx, p12, jks, key
//         // • DB: cdx, idc, db, sql
//         // • 실행 파일: exe, com, cmd, bat, sh, apk
//         // • 윈도우 패스워드 서비스 스크립트파일: htr
//         // • 웹: html, htm, war
//         // • 서버 스크립트 파일: asp, aspx, ascx, ashx, axd, phtml, php, php3, php4, php5, inc, jsp, jspx, jsw, jsv, jspf, pl, pm, cgi, lib, cfm, cfml, cfc, dbm
//         return [
//             "crt", "cer",
//             "csr", "pem",
//             "der", "pfx",
//             "p12", "jks",
//             "key", "cdx",
//             "idc", "db",
//             "sql", "exe",
//             "com", "cmd",
//             "bat", "sh",
//             "apk", "htr",
//             "html", "htm",
//             "war", "asp",
//             "aspx", "ascx",
//             "ashx", "axd",
//             "phtml", "php",
//             "php3", "php4",
//             "php5", "inc",
//             "jsp", "jspx",
//             "jsw", "jsv",
//             "jspf", "pl",
//             "pm", "cgi",
//             "lib", "cfm",
//             "cfml", "cfc",
//             "dbm",
//         ]
//     }
//     , getBlockFileExt(fileExt) {
//         //
//         let meUtils = this;
//         let arrFileExts = meUtils.getFileExts();
//         let isExist = false;
//         for (let idx01 in arrFileExts) {
//             if (arrFileExts[idx01].toUpperCase() === fileExt.toUpperCase()) {
//                 //
//                 isExist = true;
//             }
//         }
//         return isExist
//     }
//     , checkResponse(filename, lineName, response, me) {
//         // file : 호출 할 때 파일명
//         // func : 호출 할 때 함수명
//         // cmm  : 호출 할 때 명령어
//         // toast : Toast 사용 유무
//         // response : axios 사용후 응답
//         // me : 호출 할 때 소속된 전체 객체, this
//         // cmm
//         // 대문자
//         // SAVE : 저장
//         // SEARCH : 조회
//         // UPDATE : 갱신
//         // DELETE : 삭제
//         // TOAST : 단순 toast 출력
//         // ETC : 기타 명령어
//         // =====================================================================
//         // response code
//         // =====================================================================
//         // HTTP : 200
//         // response : 100
//         // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 101
//         // "Your account has been disabled." 계정이 비활성 된 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 102
//         // "Full authentication is required to access this resource"
//         // 인증이 안 된 계정으로 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 104
//         // This session has been expired
//         // (possibly due to multiple concurrent logins being attempted as the same user)."
//         // 동일 아이디 동시 접속 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 105
//         // "Authentication request could not be processed due to internal server error."
//         // 내부 서버 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 106
//         // "Password mismatch"
//         // 입력한 현재 비밀번호 정보가 불일치했을 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 107
//         // "Password was recently used and is not valid for reuse."
//         // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//         // =====================================================================
//         // HTTP : 200
//         // response : 108
//         // "User ID already exists. Please use a different one."
//         // 이미 사용중인 ID로 사용자 추가하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 109
//         // "User not found."
//         // 존재하지 않는 사용자 ID를 수정하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 110
//         // "Invalid JSESSIONID."
//         // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 111
//         // "Delete the relevant user account before deleting the permissions.
//         // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//         // =====================================================================
//         // HTTP : 200
//         // response : 112
//         // "Role name is duplicated."
//         // =====================================================================
//         // 권한 이름 중복
//         // HTTP : 200
//         // response : 113
//         // "Group code is duplicated."
//         // =====================================================================
//         // 권한 그룹 코드 중복
//         // HTTP : 200
//         // response : 114
//         // "This session has been expired due to password change."
//         // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 115
//         // "This session has been expired due to account deactivation."
//         // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied"
//         //  권한 없는 메뉴가 호출되었습니다
//         // =====================================================================
//         let meUtils = this;
//         //
//         if (filename === "App" || filename === "loginInputBox") {
//             // App.
//             if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else {
//                 return true;
//             }
//         } else {
//             if (response.data.code === 0) {
//                 return true;
//             } else if (response.data.code === 200) {
//                 return true;
//             } else if (response.data.code === 100) {
//                 // HTTP : 200
//                 // response : 100
//                 // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//                 return false;
//             } else if (response.data.code === 101) {
//                 // HTTP : 200
//                 // response : 101
//                 // "Your account has been disabled." 계정이 비활성 된 경우
//                 return false;
//             } else if (response.data.code === 102) {
//                 // HTTP : 200
//                 // response : 102
//                 // "Full authentication is required to access this resource"
//                 // 인증이 안 된 계정으로 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.logOut();
//                     return false;
//                 }
//             } else if (response.data.code === 103) {
//                 // HTTP : 200
//                 // response : 103
//                 // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "권한없는 메뉴가 호출되었습니다.", function () {
//                         window.location.reload();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 105) {
//                 // HTTP : 200
//                 // response : 105
//                 // "Authentication request could not be processed due to internal server error."
//                 // 내부 서버 오류
//                 return false;
//             } else if (response.data.code === 106) {
//                 // HTTP : 200
//                 // response : 106
//                 // "Password mismatch"
//                 // 입력한 현재 비밀번호 정보가 불일치했을 때
//                 return false;
//             } else if (response.data.code === 107) {
//                 // HTTP : 200
//                 // response : 107
//                 // "Password was recently used and is not valid for reuse."
//                 // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//                 return false;
//             } else if (response.data.code === 108) {
//                 // HTTP : 200
//                 // response : 108
//                 // "User ID already exists. Please use a different one."
//                 // 이미 사용중인 ID로 사용자 추가하고자 할 때
//                 return false;
//             } else if (response.data.code === 109) {
//                 // HTTP : 200
//                 // response : 109
//                 // "User not found."
//                 // 존재하지 않는 사용자 ID를 수정하고자 할 때
//                 return false;
//             } else if (response.data.code === 110) {
//                 // HTTP : 200
//                 // response : 110
//                 // "Invalid JSESSIONID."
//                 // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//                 return false;
//             } else if (response.data.code === 111) {
//                 // HTTP : 200
//                 // response : 111
//                 // "Delete the relevant user account before deleting the permissions.
//                 // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//                 return false;
//             } else if (response.data.code === 112) {
//                 // HTTP : 200
//                 // response : 112
//                 // "Role name is duplicated."
//                 return false;
//             } else if (response.data.code === 113) {
//                 // HTTP : 200
//                 // response : 113
//                 // "Group code is duplicated."
//                 return false;
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 117) {
//                 // HTTP : 200
//                 // response : 117
//                 // 권한이 중간에 변경된 경우 해당 권한에 해당 하는 사용자는 로그아웃이 된다.
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "메뉴권한설정 정보가 변경되어 로그아웃 되었습니다.|재 로그인하세요.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     meUtils.emptyCode();
//                     return false;
//                 }
//             } else if (response.data.code === 1) {
//                 // HTTP : 200
//                 // response : 103
//                 // {"code":103, "msg":"Access is denied", "user": null}
//                 // 권한 없는 메뉴가 호출되었습니다
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "서버 오류로 인해 요청을 완료할 수 없습니다. 다시 시도해주세요.";
//                     meUtils.antNotice(null, null, message, function () { });
//                     return false;
//                 }
//             }
//         }
//     }
//     , logOut() {
//         try {
//             let meUtils = this;
//             meUtils.getLocationHref();
//         } catch (e) {
//         }
//     }
//     , consoleLog(e) {
//         let view = true;
//         if (view) {
//             console.log(e);
//         }
//     }
//     , graphYRange(num) {
//         // 1. y축에 0 눈금과 함께 5개의 눈금을 표시
//         // 2. 가장 긴 막대의 높이를 기준값으로하여 다음과 같이 눈금값을 표시
//         // 기준값: 0 ~ 5 -> y축 눈금값: 0, 1, 2, 3, 4, 5 (첨부파일: 최대값5이하.png)
//         // 기준값: 6 ~ 10 -> y축 눈금값: 0, 2, 4, 6, 8, 10 (첨부파일: 최대값10이하.png)
//         // 기준값: 11 ~ 50 -> y축 눈금값: 0, 10, 20, 30, 40, 50 (첨부파일:최대값50이하.png)
//         // 기준값: 51 ~ 100 -> y축 눈금값: 0, 20, 40, 60, 80, 100 (첨부파일:최대값100이하.png)
//         // 기준값: 101 ~ 500 -> y축 눈금값: 0, 100, 200, 300, 400, 500
//         // 기준값: 501 ~ 1000 -> y축 눈금값: 0, 200, 400, 600, 800, 1000
//         let rtn = [];
//         ///////////////////////////////////////////////////////////////////////
//         // 0
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) <= 0) {
//             rtn = [0];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 0 ~ 1
//         ///////////////////////////////////////////////////////////////////////
//         if (0.001 <= (num * 1) && (num * 1) <= 1) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1~10
//         ///////////////////////////////////////////////////////////////////////
//         if (1 <= (num * 1) && (num * 1) <= 5) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 11~100
//         ///////////////////////////////////////////////////////////////////////
//         if (11 <= (num * 1) && (num * 1) <= 50) {
//             rtn = [0, 10, 20, 30, 40, 50];
//         } else if (51 <= (num * 1) && (num * 1) <= 100) {
//             rtn = [0, 20, 40, 60, 80, 100];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 101~1000
//         ///////////////////////////////////////////////////////////////////////
//         if (101 <= (num * 1) && (num * 1) <= 500) {
//             rtn = [0, 100, 200, 300, 400, 500];
//         } else if (501 <= (num * 1) && (num * 1) <= 1000) {
//             rtn = [0, 200, 400, 600, 800, 1000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1001~10000
//         ///////////////////////////////////////////////////////////////////////
//         if (1001 <= (num * 1) && (num * 1) <= 5000) {
//             rtn = [0, 1000, 2000, 3000, 4000, 5000];
//         } else if (5001 <= (num * 1) && (num * 1) <= 10000) {
//             rtn = [0, 2000, 4000, 6000, 8000, 10000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10001~100000
//         ///////////////////////////////////////////////////////////////////////
//         if (10001 <= (num * 1) && (num * 1) <= 50000) {
//             rtn = [0, 10000, 20000, 30000, 40000, 50000];
//         } else if (50001 <= (num * 1) && (num * 1) <= 100000) {
//             rtn = [0, 20000, 40000, 60000, 80000, 100000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 100001~1000000
//         ///////////////////////////////////////////////////////////////////////
//         if (100001 <= (num * 1) && (num * 1) <= 500000) {
//             rtn = [0, 100000, 200000, 300000, 400000, 500000];
//         } else if (500001 <= (num * 1) && (num * 1) <= 1000000) {
//             rtn = [0, 200000, 400000, 600000, 800000, 1000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1000001~10000000
//         ///////////////////////////////////////////////////////////////////////
//         if (1000001 <= (num * 1) && (num * 1) <= 5000000) {
//             rtn = [0, 1000000, 2000000, 3000000, 4000000, 5000000];
//         } else if (5000001 <= (num * 1) && (num * 1) <= 10000000) {
//             rtn = [0, 2000000, 4000000, 6000000, 8000000, 10000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10000001~100000000
//         ///////////////////////////////////////////////////////////////////////
//         if (10000001 <= (num * 1) && (num * 1) <= 50000000) {
//             rtn = [0, 10000000, 20000000, 30000000, 40000000, 50000000];
//         } else if (50000001 <= (num * 1) && (num * 1) <= 100000000) {
//             rtn = [0, 20000000, 40000000, 60000000, 80000000, 100000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) > 100000000) {
//             rtn = [0, 100000000, 200000000, 300000000, 400000000, 500000000];
//         }
//         return rtn;
//     }
//     // phase 2 적용
//     , async getToolTipSpeed(callback) {
//         let meUtils = this;
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         try {
//             let URL = meUtils.getCurrentURL() + "/v1/setting/system/charge_speed";
//             axios.defaults.withCredentials = true;
//             let response = await axios.get(URL);
//             //
//             let rapid = response.data.data.rapid;
//             let fast = response.data.data.fast;
//             let slow = response.data.data.slow;
//             //
//             let tooltipText1 = "충전기 모델의 최대출력에 따라 충전속도가 구분됩니다. 초급속(" + rapid + "W 이상), 급속(" + fast + "kW 이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipText2 = "충전속도는 입력된 최대출력(kW) 값에 따라 자동으로 설정됩니다. 기준: 초급속(" + rapid + "kW 이상), 급속(" + fast + "kW이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipSpeed = {
//                 superfast: rapid
//                 , superfastMin: rapid
//                 , superfastMax: rapid
//                 , fast: fast
//                 , fastMin: fast
//                 , fastMax: rapid
//                 , slow: slow
//                 , slowMin: slow
//                 , slowMax: rapid
//                 , tooltipText1: tooltipText1
//                 , tooltipText2: tooltipText2
//             }
//             callback(tooltipSpeed);
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , emptyCode(str) {
//         // SonarLintd의 에러및 경고 표시 삭제용
//     }
// }
// export default U;/*
// * Copyright (c) 2019 LG Electronics Inc.
// * SPDX-License-Identifier: LicenseRef-LGE-Proprietary
// */
// import React from 'react';
// import axios from 'axios';
// import { Icon, notification } from 'antd';
// import { Modal } from 'antd';
// import Loading from '../../../src/resource/images/common/Loading.gif';
// import IcoNodata from '../../../src/resource/images/common/ico_nodata.png';
// //
// let responseCnt = 0;
// //
// const U = {
//     //
//     COOKIE_IS_LOGIN_DAYS: "1"
//     , COOKIE_NOTICE_NO_VIEW_DAYS: "1"
//     , COOKIE_REMEMBER_CHECKED_USERID_DAYS: "365"
//     , COOKIE_REMEMBER_USERID_DAYS: "365"
//     , SYNC_TIME: "5" // 동기화 기본 시간
//     , SYSTEM_CHECK: false // 공사중 화면 제어
//     , getURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         return url
//     }
//     , getCurrentURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let rtnUrl = "";
//         if (url === "localhost:3000") {
//             // rtnUrl = "https://" + "evci.duckdns.org";
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//             // rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "evci.duckdns.org") {
//             rtnUrl = "https://" + "evci.duckdns.org";
//         } else if (url === "evci.duckdns.org:9090") {
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "evci.duckdns.org:5050") {
//             rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "csms.duckdns.org") {
//             rtnUrl = "https://" + "csms.duckdns.org";
//         }
//         return rtnUrl
//     }
//     , getJusoKeyUrl() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let obj = {
//             confmKey: ""
//             , URL: ""
//         };
//         if (url === "localhost:3000") {
//             // http는 http을 호출
//             // http는 https을 호출 불가
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNDQwMzEwOTU3NjE=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNTMzODEwOTU3Njc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:9090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMzAwNTU1NjExMDMyMDQ=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:5050") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMjE0MDkwNDExMDMxNzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "10.177.206.55:8090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMDMzMTE1MTU1MDEwOTYwMzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "csms.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDcxMDE2MjAxMjEwOTk0NTc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         }
//         return obj;
//     }
//     , getKakaoJusoKey() {
//         let meUtils = this;
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let key = "";
//         if (url === "localhost:3000") {
//             meUtils.emptyCode("1");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org") {
//             meUtils.emptyCode("2");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:9090") {
//             meUtils.emptyCode("3");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:5050") {
//             meUtils.emptyCode("4");
//             key = "d869a5906b6132b37e541599626e8eb3=";
//         } else if (url === "10.177.206.55:8090") {
//             meUtils.emptyCode("5");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "csms.duckdns.org") {
//             meUtils.emptyCode("6");
//             key = "2e3471ee25f4ac9de697257197961318";
//         }
//         return key;
//     }
//     , getImgURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "https://evci.duckdns.org/") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "http://evci.duckdns.org:9090/") {
//             url = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "http://evci.duckdns.org:5050/") {
//             url = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "https://csms.duckdns.org/") {
//             url = 'https://' + 'csms.duckdns.org';
//         } else {
//             url = "http://" + url;
//         }
//         return url
//     }
//     , getOpenLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         }
//     }
//     , getLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         }
//     }
//     , async getAday() {
//         let meUtils = this;
//         try {
//             let URL = U.getCurrentURL() + '/external/general/time?tz=Asia/Seoul';
//             axios.defaults.withCredentials = false;
//             let response = await axios.get(URL);
//             let currentDateTime = response.data.data.time;
//             let y = currentDateTime.substr(0, 4);
//             let m = currentDateTime.substr(5, 2);
//             let d = currentDateTime.substr(8, 2);
//             let dt = new Date(y, ((m * 1) - 1), d);
//             dt.setDate(dt.getDate() + 1);
//             return dt.toGMTString();
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , getFormatTel(tel) {
//         let rtn = "";
//         let tempTel = tel.replace(/-/gi, "");
//         if (
//             tempTel.substr(0, 3) === "010" ||
//             tempTel.substr(0, 3) === "011" ||
//             tempTel.substr(0, 3) === "016" ||
//             tempTel.substr(0, 3) === "017" ||
//             tempTel.substr(0, 3) === "019"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, 4);
//                 let thirth = tempTel.substr(tempTel.length - 4, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.substr(0, 2) === "02") {
//             // '010','011','016','017','019'
//             // 서울 : 02	인천: 032	대전:042	부산:051	울산:052	대구: 053	광주:062	제주: 064
//             // 경기: 031	강원:033	충남:041	충북:043	경북:054	경남:055	전남:061	전북:063
//             if (tempTel.length === 9) {
//                 // 9자 : 02 384  2247
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(5, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 10) {
//                 // 10자 : 02 3333 3333
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (
//             tempTel.substr(0, 3) === "032" ||
//             tempTel.substr(0, 3) === "042" ||
//             tempTel.substr(0, 3) === "051" ||
//             tempTel.substr(0, 3) === "052" ||
//             tempTel.substr(0, 3) === "053" ||
//             tempTel.substr(0, 3) === "062" ||
//             tempTel.substr(0, 3) === "064" ||
//             tempTel.substr(0, 3) === "031" ||
//             tempTel.substr(0, 3) === "033" ||
//             tempTel.substr(0, 3) === "041" ||
//             tempTel.substr(0, 3) === "043" ||
//             tempTel.substr(0, 3) === "054" ||
//             tempTel.substr(0, 3) === "055" ||
//             tempTel.substr(0, 3) === "061" ||
//             tempTel.substr(0, 3) === "063" ||
//             tempTel.substr(0, 3) === "070"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 // 11자 : 031 3333 3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(7, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.length === 8) {
//             // 8자 : 1544-2222
//             let first = tempTel.substr(0, 4);
//             let sencond = tempTel.substr(4, 8);
//             rtn = first + "-" + sencond;
//         } else {
//             rtn = tempTel;
//         }
//         return rtn;
//     }
//     , getIsError(connectorStatus) {
//         // 삼각형 에러 클래스 추출
//         // 충전대기 : available
//         // 충전예약 : reserved
//         // 충전중 : charging,  Preparing, SuspendedEVSE, SuspendedEV
//         // 충전완료 : finishing
//         // 점검중 : faulted  Unavailable
//         // 통신장애/상태미확인 : offline
//         // 시나리오
//         // v.99a
//         // p 105
//         // 커넥터타입
//         // •해당충전기커넥터타입표시
//         // •장애, 고장등으로커넥터사용이불가능한경우커넥터별로사용불가능이미지표시
//         let rtn = "";
//         if (connectorStatus === "Faulted") {
//             // 점검중 : faulted
//             rtn = "is_error";
//         }
//         return rtn;
//     }
//     , msToTime(duration) {
//         let milliseconds = parseInt((duration % 1000) / 100)
//             , seconds = parseInt((duration / 1000) % 60)
//             , minutes = parseInt((duration / (1000 * 60)) % 60)
//             , hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//         hours = (hours < 10) ? "0" + hours : hours;
//         minutes = (minutes < 10) ? "0" + minutes : minutes;
//         seconds = (seconds < 10) ? "0" + seconds : seconds;
//         let obj = {
//             "hours": hours
//             , "minutes": minutes
//             , "seconds": seconds
//             , "milliseconds": milliseconds
//         }
//         return obj;
//     }
//     , reverseNum(arr, total) {
//         // 게시판의 번호의 역순을 보낸다
//         // ((total * 1) + 1) 여기서  +1은 시작을 total번호부터
//         // 하기 위해서 이다.
//         for (let idx01 in arr) {
//             arr[idx01]["num"] = ((((total * 1) + 1) - (idx01 * 1)) - 1);
//         }
//         return arr;
//     }
//     , forceLogout(callback) {
//         //
//         // this.setCookie("isLogin", "false", this.COOKIE_IS_LOGIN_DAYS);
//         //
//         let updateMainData = {
//             mainData: {
//                 login: {
//                     cmd: "LOGIN_FROCE_LOG_OUT"
//                     , isLogin: false // 로그인 상태
//                     , code: "" // 로그인 상태 코드
//                     , msg: ""  // 로그인 상태 메세지
//                     , company: ""  // 회사
//                     , email: ""  // 이메일
//                     , role: ""  // 권한
//                     , userId: ""  // 사용자아이디
//                     , userName: ""  // 사용자명
//                     , passwordChangedDate: "" //
//                     , passwordChangePopup: ""// 비밀번호변경 팝업호출
//                     , personalInformationAgreementPopup: ""// 개인정보 팝업호출
//                     // "" 주면 성공과 실패가 아닌 중간 상황 즉, 변경유무 판단을 하지 않는 상황
//                 }
//             }
//         };
//         callback(updateMainData);
//     }
//     // , isSpecialCharacter(str) {
//     //     // 한글자 특수문자
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
//     //     return regExp.test(str);
//     // }
//     // , isAllSpecialCharacter(arr) {
//     //     // 모든 특수문자 (_ , - 는제외)
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === true) {
//     //             return true;
//     //         }
//     //     }
//     //     return false;
//     // }
//     , isAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         return /^[a-zA-Z]+$/.test(str);
//     }
//     , isOneAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         let isAlphabet = false;
//         for (let i = 0; i < str.length; i++) {
//             isAlphabet = /^[a-zA-Z]+$/.test(str[i]);
//             if (isAlphabet) {
//                 // true가 나오면 즉시 값을 돌려준다.
//                 i = str.length;
//             }
//         }
//         return isAlphabet;
//     }
//     , isAllAlphabet(arr) {
//         // 모든 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , isNumber(str) {
//         //  숫자
//         str = str.replace(/ /gi, "");
//         var regExp = /^[0-9]+$/;
//         return regExp.test(str);
//     }
//     , isAllAlphabetNumber(arr) {
//         // 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z0-9]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     // , isAllAlphabetNumberSpecial(arr) {
//     //     //한글 제외한 나머지 글자
//     //     var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === false) {
//     //             return false;
//     //         }
//     //     }
//     //     return true;
//     // }
//     , formatIntegerDotFloat(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9.]/gi, ""); //숫자와 .만 허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , formatInteger(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9]/gi, ""); //숫자허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , numberDot(value) {
//         return value.replace(/[^0-9.]/gi, "");
//     }
//     , clearCommaDot(value) {
//         return value.replace(/[\,]/gi, "");
//     }
//     , numberAlphabetHypenUnderHypen(value) {
//         //         권한그룹코드
//         // • 영문, 숫자 조합하여 16자 이내로 입력 (한글 및 특수문자 입력 불가, 띄어쓰기 불가. 예외 : ‘-’, ‘_’)
//         return value.replace(/[^A-Za-z0-9\-\_]/gi, "");
//     }
//     , checkId(arr) {
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9_-]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , getCheckedId(value) {
//         //영문자, 숫자, _, -
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9_-]/gi, "");
//     }
//     , checkPassword(str) {
//         let arr = str.split("");
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         // 8에서 13자의 비밀번호중에 영문자 1개, 특수문자 1개, 숫자 1개는 반드시
//         // 있어야 하고 이것이 조합의 규칙이다.
//         var regExpAlpha = /^[a-zA-Z]+$/;
//         var regExpNumber = /^[0-9]+$/;
//         var regExpSpecial = /^[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         var isAlpha = false;
//         var isNumber = false;
//         var isSpecial = false;
//         for (let idx in arr) {
//             if (regExpAlpha.test(arr[idx]) === true) {
//                 isAlpha = true;
//             }
//             if (regExpNumber.test(arr[idx]) === true) {
//                 isNumber = true;
//             }
//             if (regExpSpecial.test(arr[idx]) === true) {
//                 isSpecial = true;
//             }
//         }
//         if (isAlpha === false || isNumber === false || isSpecial === false) {
//             return false;
//         }
//         return true;
//     }
//     , getCheckedPassword(value) {
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9{\\[\]/?.,;:|)*~`!^\-+<>@#$%&\\=('"]/gi, "");
//     }
//     , getCheckedDepartmentCode(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // 영문또는숫자조합하여16자이내로입력(ex : 부서코드, 그룹코드,거래조건코드)
//         // -한글및 특수문자입력불가, 띄어쓰기불가
//         // -예외: -대표거래처코드및거래처그룹코드의경우, 영문, 숫자조합하여6자리이내로입력
//         // -장애코드관리의장애코드의경우, 영문, 숫자조합하여50자이내로입력
//         let tempValue = value.substr(0, 16);
//         return tempValue.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , getCheckedEmail(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // -영문또는숫자조합하여32자이내로입력
//         // -한글및특수문자입력불가(예외: '-', '_', '.', '@'), 띄어쓰기불가
//         let tempValue = value.substr(0, 32);
//         return tempValue.replace(/[^a-zA-Z0-9-_.@]/gi, "");
//     }
//     , hypenTellphone(str) {
//         return str ? str.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace('--', '-') : str;
//     }
//     , clearUndefinedNull(str) {
//         // 검사 undefined, null, space
//         let rtn = "";
//         if (str === undefined || str === "undefined" || str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , clearArrNull(arrObj) {
//         // 검사 undefined, null, space
//         let rtnArr = [];
//         for (let idx01 in arrObj) {
//             let oneObj = arrObj[idx01];
//             let keys = Object.keys(oneObj);
//             let rtnObj = {};
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 if (oneObj[key] === undefined || oneObj[key] === "undefined" || oneObj[key] === null || oneObj[key] === "null") {
//                     rtnObj[key] = "";
//                 } else {
//                     rtnObj[key] = oneObj[key];
//                 }
//             }
//             rtnArr.push(rtnObj);
//         }
//         return rtnArr;
//     }
//     , classArr(str) {
//         // c_typ typ1 is_error id_disabled 에서
//         // is_error, id_disabled을 추가 삭제을 하기위한
//         // 배열을 만든다.
//         return str.split(" ");
//     }
//     , round2(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return Math.floor(num);// 소숫점 버럼
//     }
//     , round(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return num.toFixed(pos);
//     }
//     , floor(n, pos) {
//         // 10은 소숫점 첫번째 자리에서 자름
//         let sign = 1;
//         n = n * 1;
//         if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         return Math.floor(n * (pos * 1)) / (pos * 1)
//     }
//     , numberCeil(num) {
//         // 소수점 올림, 정수 반환
//         return Math.ceil(num);
//     }
//     , numberFloor(num) {
//         // 소수점 버림, 정수 반환
//         return Math.floor(num);
//     }
//     , numberRound(num) {
//         // 소수점 반올림, 정수 반환
//         return Math.round(num);
//     }
//     , onlyNumber(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9.]/gi, "");
//     }
//     , onlyInteger(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9]/gi, "");
//     }
//     , onlyAlphbetNumber(num) {
//         if (!num) {
//             return "";
//         }
//         return num.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , numberFormat(num) {
//         if (num === null) {
//             return '';
//         }
//         if (num === "") {
//             return '';
//         }
//         if (num === undefined) {
//             return '';
//         }
//         num = num.toString().replace(/,/gi, "");
//         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     , copyArrayObjct(arrObj) {
//         let arr = [];
//         arrObj.map(function (rec) {
//             let obj = {};
//             let keys = Object.keys(rec);
//             keys.map(function (keyname) {
//                 obj[keyname] = rec[keyname];
//             })
//             arr.push(obj);
//         });
//         return arr;
//     }
//     , strNullToSpace(str) {
//         let rtn = "";
//         if (str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , objNullToSpace(obj) {
//         let rtn = "";
//         let keys = Object.keys(obj);
//         for (let idx01 in keys) {
//             if (obj[keys[idx01]] === null || obj[keys[idx01]] === "null") {
//                 obj[keys[idx01]] = "";
//             }
//         }
//         rtn = obj;
//         return rtn;
//     }
//     , arrNullToSpace(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , arrNullToHypen(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "-";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , addKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key"] = (idx01 * 1) + 1;
//         }
//         return arr;
//     }
//     , add2kKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key2k"] = (idx01 * 1) + 2 + "k";
//         }
//         return arr;
//     }
//     , debugProps(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.props);
//         }
//     }
//     , debugState(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.state);
//         }
//     }
//     , isCookie() {
//         // 쿠키 저장
//         let isCookie = document.cookie;
//         if (isCookie === undefined || isCookie === null || isCookie === "") {
//             return false;
//         }
//         return true;
//     }
//     , deleteAllCookie() {
//         // logout
//         document.cookie.split(";").forEach(function (c) {
//             document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//         });
//     }
//     , deleteCookie(cookieName) {
//         // 쿠키 삭제
//         try {
//             var expireDate = new Date();
//             expireDate.setDate(expireDate.getDate() - 1);
//             document.cookie = cookieName + "=" + ";expires=" + expireDate.toGMTString();
//         } catch (e) {
//         }
//     }
//     , debugAllCookie() {
//         let meUtils = this;
//         // 쿠키 디버깅
//         document.cookie.split(";")
//             .forEach(function (c) {
//                 meUtils.consoleLog(c);
//             });
//     }
//     , setCookie(cookieName, cookieValue, day) {
//         // 쿠키 저장
//         // let today = new Date();
//         // let yy = today.getFullYear();
//         // let mm = today.getMonth(); //January is 0!
//         // let dd = today.getDate();
//         // let hh = today.getHours();s
//         // let mi = today.getMinutes();
//         // let ss = today.getSeconds();
//         // var date = new Date(yy, mm, dd, 0, 0, 0);
//         var date = new Date();
//         date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
//         document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
//     }
//     , setCookieAt00(name, value, expiredays) {
//         var todayDate = new Date();
//         //
//         todayDate.setHours(23);
//         todayDate.setMinutes(59);
//         todayDate.setSeconds(59);
//         todayDate.setMilliseconds(59);
//         //
//         document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
//     }
//     , getCookie(cookieName) {
//         // 특정쿠키 가져오기
//         cookieName = cookieName + '=';
//         var cookieData = document.cookie;
//         var start = cookieData.indexOf(cookieName);
//         var cookieValue = '';
//         if (start !== -1) {
//             start += cookieName.length;
//             var end = cookieData.indexOf(';', start);
//             if (end === -1)
//                 end = cookieData.length;
//             cookieValue = cookieData.substring(start, end);
//         }
//         return unescape(cookieValue);
//     }
//     , mergeNormalState(currentState, updateState) {
//         // 일반적인 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(updateState.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = updateState.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , mergeState(currentState, action) {
//         // redux의 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(action.value.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = action.value.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , checkUndefinedNullSpace(str) {
//         // 검사 undefined, null, space
//         if (str === undefined || str === "undefined" || str === null || str === "null" || str.trim() === "") {
//             return true;
//         }
//         return false;
//     }
//     , checkUndefinedNull(obj) {
//         // 검사 undefined와 null이 동시에 아닐 경우
//         if (obj === undefined || obj === "undefined" || obj === null || obj === "null") {
//             return true;
//         }
//         return false;
//     }
//     , clearObject(obj) {
//         //
//         let objKeys = Object.keys(obj);
//         //
//         for (let idx01 in objKeys) {
//             if (typeof (obj[objKeys[idx01]]) === "object") {
//                 if (Array.isArray(obj[objKeys[idx01]])) {
//                     obj[objKeys[idx01]] = [];
//                 } else {
//                     obj[objKeys[idx01]] = {}
//                 }
//             } else {
//                 obj[objKeys[idx01]] = "";
//             }
//         }
//         return obj;
//     }
//     , cloneTypeOf(data) {
//         let keys = Object.keys(data);
//         let newData = {};
//         //
//         for (let idx01 in keys) {
//             if (data[keys[idx01]] !== null) {
//                 if (typeof (data[keys[idx01]]) === "object") {
//                     if (Array.isArray(data[keys[idx01]])) {
//                         newData[keys[idx01]] = [];
//                     } else {
//                         newData[keys[idx01]] = {};
//                     }
//                 } else if (typeof (data[keys[idx01]]) === "boolean") {
//                     newData[keys[idx01]] = false;
//                 } else {
//                     newData[keys[idx01]] = "";
//                 }
//             } else {
//                 newData[keys[idx01]] = "";
//             }
//         }
//         return newData;
//     }
//     , isChanged(original, current) {
//         //
//         let originalKeys = Object.keys(original);
//         let currentKeys = Object.keys(current);
//         //
//         for (let idx01 in originalKeys) {
//             for (let idx02 in currentKeys) {
//                 if (originalKeys[idx01] === currentKeys[idx02]) {
//                     if (typeof (original[originalKeys[idx01]]) === "object") {
//                         if (Array.isArray(original[originalKeys[idx01]])) {
//                             if (original[originalKeys[idx01]].length !== current[currentKeys[idx02]].length) {
//                                 return true;
//                             } else if (original[originalKeys[idx01]].length === current[currentKeys[idx02]].length) {
//                                 let originalArray = original[originalKeys[idx01]];
//                                 let currentArray = current[currentKeys[idx02]];
//                                 let isChaged = false;
//                                 for (let idx03 in originalArray) {
//                                     if (originalArray[idx03] !== currentArray[idx03]) {
//                                         isChaged = true;
//                                     }
//                                 }
//                                 if (isChaged === true) {
//                                     return true;
//                                 } else if (isChaged === false) {
//                                     return false;
//                                 }
//                             }
//                         }
//                     } else {
//                         if (original[originalKeys[idx01]] !== current[currentKeys[idx02]]) {
//                             return true;
//                         }
//                     }
//                 }
//             }
//         }
//         return false;
//     }
//     , compareObj(originalObj, targetObj, except) {
//         let rtn = false;
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let originalKeys = [];
//         let targetKeys = [];
//         if (except.length >= 1) {
//             // 비교 제외할 항목
//             for (let idx033 = 0; idx033 < except.length; idx033++) {
//                 originalKeys.push(except[idx033])
//                 targetKeys.push(except[idx033]);
//             }
//         }
//         //
//         //
//         for (let idx01 = 0; idx01 < originalKeys.length; idx01++) {
//             // original
//             let originalKeyName = originalKeys[idx01];
//             let originValue = originalObj[originalKeyName];
//             // target
//             let targetKeyName = originalKeyName;
//             let targetValue = targetObj[originalKeyName];
//             //
//             if (typeof (originalObj[originalKeyName]) === "object") {
//                 // array과 Object은 모두 object으로 표현된다.
//                 if (Array.isArray(originalObj[originalKeyName])) {
//                     // 배열이면
//                     let new2Arr = [];
//                     let originalArr = originalObj[originalKeyName];
//                     let targetArr = targetObj[targetKeyName];
//                     if (originalArr.length !== targetArr.length) {
//                         rtn = true;
//                         idx01 = ((originalKeys.length * 1) + 1);
//                     }
//                     for (let idx03 = 0; idx03 < originalArr.length; idx03++) {
//                         if (originalArr[idx03] !== targetArr[idx03]) {
//                             rtn = true;
//                             idx03 = ((originalArr.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     rtnObj[originalKeyName] = new2Arr;
//                     //
//                 } else if (!Array.isArray(originalObj[originalKeyName])) {
//                     // 객체이면
//                     let original2Obj = originalObj[originalKeyName];
//                     let target2Obj = targetObj[originalKeyName];
//                     let original2Keys = Object.keys(original2Obj);
//                     //  let target2Keys = Object.keys(target2Obj);
//                     //
//                     for (let idx044 = 0; idx044 < original2Keys.length; idx044++) {
//                         let key2 = original2Keys[idx044];
//                         if (original2Obj[key2] !== target2Obj[key2]) {
//                             rtn = true;
//                             idx044 = ((original2Keys.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     //
//                 }
//             } else {
//                 if (originValue !== targetValue) {
//                     // 값이 틀리다면 true;
//                     rtn = true;
//                     idx01 = ((originalKeys.length * 1) + 1);
//                 }
//             }
//         }
//         return rtn;
//     }
//     , copyObj(targetObj) {
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let keys = Object.keys(targetObj);
//         //
//         for (let idx01 in keys) {
//             let keyName = keys[idx01];
//             //
//             rtnObj[keyName] = targetObj[keyName];
//             //
//             //
//             if (targetObj[keyName] !== null) {
//                 if (typeof (targetObj[keyName]) === "object") {
//                     //
//                     if (Array.isArray(targetObj[keyName])) {
//                         // Array
//                         let new2Arr = [];
//                         for (let idx03 in targetObj[keyName]) {
//                             new2Arr[idx03] = targetObj[keyName][idx03];
//                         }
//                         rtnObj[keyName] = new2Arr;
//                         //
//                     } else if (!Array.isArray(targetObj[keyName])) {
//                         // Object
//                         let target2Obj = targetObj[keyName];
//                         let newKeys = Object.keys(target2Obj);
//                         let newObj = {};
//                         for (let idx02 in newKeys) {
//                             newObj[newKeys[idx02]] = target2Obj[newKeys[idx02]];
//                         }
//                         rtnObj[keyName] = newObj;
//                     }
//                 }
//             }
//         }
//         return rtnObj;
//     }
//     , copyNewRefMainData(obj) {
//         // 인스턴스가 다른 mainData object을 복사
//         let keys = Object.keys(obj.mainData);
//         let newObj = {};
//         let newMainData = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = obj.mainData[keys[idx01]];
//         }
//         newMainData["mainData"] = newObj;
//         return newMainData;
//     }
//     , copyToNewRefObj(source) {
//         // 인스턴스가 다른  object을 복사
//         let keys = Object.keys(source);
//         let newObj = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = source[keys[idx01]];
//         }
//         return newObj;
//     }
//     , copyToNewRefArr(source) {
//         // 인스턴스가 다른  array 복사
//         let newArr = [];
//         for (let idx01 in source) {
//             let newObj = {};
//             let keys = Object.keys(source[idx01]);
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 let val = source[idx01][key];
//                 newObj[key] = val;
//             }
//             newArr.push(newObj);
//         }
//         return newArr;
//     }
//     , fullScreen() {
//         // 전체화면
//         if (!document.fullscreenElement &&    // alternative standard method
//             !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.mozRequestFullScreen) {
//                 document.documentElement.mozRequestFullScreen();
//             } else if (document.documentElement.webkitRequestFullscreen) {
//                 document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.cancelFullScreen) {
//                 document.cancelFullScreen();
//             } else if (document.mozCancelFullScreen) {
//                 document.mozCancelFullScreen();
//             } else if (document.webkitCancelFullScreen) {
//                 document.webkitCancelFullScreen();
//             }
//         }
//     }
//     , partOfFullScreen(id) {
//         // 특정화면 전체화면
//         // 2019-10-16
//         // 대시보드 안쪽 영역에서의 전체화면으로 추정된다.
//         if (!document.getElementById(id).fullscreenElement &&    // alternative standard method
//             !document.getElementById(id).mozFullScreenElement &&
//             !document.getElementById(id).webkitFullscreenElement) {  // current working methods
//             if (document.getElementById(id).requestFullscreen) {
//                 document.getElementById(id).requestFullscreen();
//             } else if (document.getElementById(id).mozRequestFullScreen) {
//                 document.getElementById(id).mozRequestFullScreen();
//             } else if (document.getElementById(id).webkitRequestFullscreen) {
//                 document.getElementById(id).webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.getElementById(id).cancelFullScreen) {
//                 document.getElementById(id).cancelFullScreen();
//             } else if (document.getElementById(id).mozCancelFullScreen) {
//                 document.getElementById(id).mozCancelFullScreen();
//             } else if (document.getElementById(id).webkitCancelFullScreen) {
//                 document.getElementById(id).webkitCancelFullScreen();
//             }
//         }
//     }
//     , getSliceYMD(str) {
//         return str.substr(0, 10);
//     }
//     , getTableDateTime(str) {
//         //+1000002019-01-01T00:00 -> 2019-01-01 00:00
//         let YYYY = str.substr(7, 4);
//         let MM = str.substr(12, 2);
//         let DD = str.substr(15, 2);
//         let HH = str.substr(18, 2);
//         let MI = str.substr(21, 2);
//         return YYYY + "-" + MM + "-" + DD + " " + HH + ":" + MI;
//     }
//     , titleYYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(4, 2);
//         let DD = str.substr(6, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , getYYYMMDDSPACEHHMM(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2) + " " + str.substr(11, 2) + str.substr(14, 2);
//     }
//     , getDateToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/:/gi, "");
//         tempStr = tempStr.replace(/ /gi, "");
//         tempStr = tempStr.replace(/T/gi, "");
//         tempStr = tempStr.replace(/-/gi, "");
//         tempStr = tempStr.replace(/\+/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     },
//     getPhoneToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/-/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     }
//     , getYYYMMDD(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2);
//     }
//     , getHHMM(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2);
//     }
//     , getHH(str) {
//         // HH
//         return str.substr(11, 2);
//     }
//     , getMM(str) {
//         // MM
//         return str.substr(14, 2);
//     }
//     , getYYYMMDDSPACEHHMMSS(str) {
//         // 2019-12-05T05:04:09.129272
//         // YYYYMMDD HHMMSS
//         return str.substr(0, 10) + " " + str.substr(11, 8)
//     }
//     , getHHMMSS(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2) + " : " + str.substr(17, 2);
//     }
//     , getYMD(str) {
//         // 날짜을 자른다.
//         // 2019-11-27 01:00:16
//         // 2019
//         // 11
//         // 27
//         // 01
//         // 00
//         // 16
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , splitDate(str) {
//         // 날짜을 자른다.
//         // "2019-11-08T11:24:39.992".substr(0,4)
//         // "2019-11-08T11:24:39.992".substr(5,2)
//         // "2019-11-08T11:24:39.992".substr(7,2)
//         // "2019-11-08T11:24:39.992".substr(8,2)
//         // "2019-11-08T11:24:39.992".substr(11,2)
//         // "2019-11-08T11:24:39.992".substr(14,2)
//         // "2019-11-08T11:24:39.992".substr(17,2)
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , cutDate(str) {
//         // 날짜을 자른다.
//         // +100000 0000-01-01T00:00
//         return str.substr(7, str.length - 1);
//     }
//     , cut10Date(str) {
//         // 날짜을 자른다.
//         // 0000-01-01
//         return str.substr(0, 10);
//     }
//     , rangePickerDateTime(str) {
//         // 날짜을 자른다.
//         // 2015-06-06T12:33 2015-06-06 12:33
//         let tempStr = str.split(".");
//         let tempStr2 = "";
//         if (tempStr.length === 2) {
//             tempStr2 = tempStr[0];
//         } else if (tempStr.length === 1) {
//             tempStr2 = str;
//         }
//         return tempStr2.replace("T", " ");
//     }
//     , hangulYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "년" + " " + MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , noticeDate(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , hangulMMDD(str) {
//         let MM = str.substr(5, 2) * 1;
//         let DD = str.substr(8, 2) * 1;
//         let rtn = MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , localDateTime() {
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + mm + dd + hour + min + sec;
//         return dateTime;
//     }
//     , beforeAMonth(ymd) {
//         let y1 = ymd.substr(0, 4);
//         let m1 = ((ymd.substr(5, 2) * 1) - 1);
//         let d1 = ymd.substr(8, 2);
//         //
//         let dt = new Date(y1, m1, d1);
//         dt.setDate(dt.getDate() + 1);
//         //
//         let y2 = "";
//         let m2 = "";
//         let d2 = "";
//         //
//         y2 = dt.getFullYear() + "";
//         if ((dt.getMonth() * 1) < 10) {
//             m2 = "0" + ((dt.getMonth() * 1) + 1) + "";
//         } else {
//             m2 = ((dt.getMonth() * 1) + 1) + "";
//         }
//         if ((dt.getDate() * 1) < 10) {
//             d2 = "0" + dt.getDate() + "";
//         } else {
//             d2 = dt.getDate() + "";
//         }
//         //
//         let rtn = y2 + "-" + m2 + "-" + d2;
//         //
//         return rtn;
//     }
//     , localRangeDateTime() {
//         // 서버시간
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min;
//         return dateTime;
//     }
//     , getRefDate(strDate) {
//         //
//         let yy = strDate.substr(0, 4);
//         let mm = strDate.substr(5, 2) - 1;
//         let dd = strDate.substr(8, 2);
//         let hh = strDate.substr(11, 2);
//         let mi = strDate.substr(14, 2);
//         //
//         let dt = new Date(yy, mm, dd, hh, mi)
//         //
//         return dt;
//     }
//     , getConnectorStatusInfo() {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         return {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//     }
//     , getConnectorStatusOneInfo(str) {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         let obj = {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//         return obj[str];
//     }
//     , getChargingSpeedInfo() {
//         // SUPER_FAST, FAST, SLOW
//         return {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getChargingSpeedOneInfo(str) {
//         // SUPER_FAST, FAST, SLOW
//         let obj = {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//         return obj[str];
//     }
//     , getConnectorTypeInfo() {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         return {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getConnectorTypeOneInfo(str) {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         let obj = {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         }
//         return obj[str];
//     }
//     , initParticularValidation(pId) {
//         // 특정 벨리데이션 초기화 함수
//         let oId = document.getElementById(pId);
//         if (oId.closest(".check_error").classList.contains("has_error")) {
//             oId.closest(".check_error").classList.remove("has_error");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ1")) {
//             oId.closest(".check_error").classList.remove("e_typ1");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ2")) {
//             oId.closest(".check_error").classList.remove("e_typ2");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ3")) {
//             oId.closest(".check_error").classList.remove("e_typ3");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ4")) {
//             oId.closest(".check_error").classList.remove("e_typ4");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ5")) {
//             oId.closest(".check_error").classList.remove("e_typ5");
//         }
//     }
//     , setValidationType(pId, pType) {
//         // type 벨리데이션 처리
//         let sId = pId;
//         let sType = pType
//         let oId1 = document.getElementById(sId);
//         if (oId1.closest(".check_error").classList.contains(sType)) {
//             oId1.closest(".check_error").classList.remove(sType);
//         }
//         if (oId1.closest(".check_error").classList.contains("has_error")) {
//             oId1.closest(".check_error").classList.remove("has_error");
//         }
//         oId1.closest(".check_error").classList.add("has_error");
//         oId1.closest(".check_error").classList.add(sType);
//         oId1.focus();
//     }
//     , sameObjForObj(source, target) {
//         // value가 값이 아니면 비교하지 않는다.
//         // 예 : 배열
//         let isSame = true;
//         let sourceKeys = Object.keys(source);
//         let targetKeys = Object.keys(target);
//         if (targetKeys.length <= 0) {
//             //비교대상이 없는 경우는 false
//             isSame = false;
//         }
//         for (let idx01 in sourceKeys) {
//             let sourceKey = sourceKeys[idx01];
//             let sourceValue = source[sourceKey];
//             for (let idx02 in targetKeys) {
//                 let targetKey = targetKeys[idx02];
//                 let targetValue = target[targetKey];
//                 if (!Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
//                     if (sourceKey === targetKey) {
//                         if (sourceValue !== targetValue) {
//                             isSame = false;
//                         }
//                     }
//                 }
//             }
//         }
//         return isSame;
//     }
//     , nullRequestCheck(str) {
//         let strReturn;
//         if (!str || str === 0) {
//             strReturn = null;
//         } else {
//             strReturn = str;
//         }
//         return strReturn;
//     }
//     , nullRequestArray(arr) {
//         let arrReturn;
//         if (arr.length === 0) {
//             arrReturn = [];
//         } else {
//             arrReturn = arr;
//         }
//         return arrReturn;
//     }
//     , datilHypone(str) {
//         let detailValue = "";
//         if (String(str) === "" || Number(str) === 0 || str === null) {
//             detailValue = "";
//         } else {
//             detailValue = str;
//         }
//         return detailValue;
//     }
//     , tableSort(str) {
//         let tableSort = "";
//         if (str === "-") {
//             tableSort = 9999999999999999999999999999999999999999;
//         } else {
//             tableSort = str
//         }
//         return tableSort
//     }
//     , padZero(str) {
//         if ((str * 1) < 10) {
//             str = "0" + str;
//         }
//         return str;
//     }
//     , inputTelNumber(obj) {
//         // 전화번호 format
//         var number = obj.replace(/[^0-9]/g, "");
//         var tel = "";
//         // 서울 지역번호(02)가 들어오는 경우
//         if (number.substring(0, 2).indexOf('02') === 0) {
//             if (number.length < 3) {
//                 return number;
//             } else if (number.length < 6) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2);
//             } else if (number.length < 10) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 3);
//                 tel += "-";
//                 tel += number.substr(5);
//             } else {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 4);
//                 tel += "-";
//                 tel += number.substr(6);
//             }
//             // 서울 지역번호(02)가 아닌경우
//         } else {
//             if (number.length < 4) {
//                 return number;
//             } else if (number.length < 7) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3);
//             } else if (number.length < 9) {
//                 tel += number.substr(0, 4);
//                 tel += "-";
//                 tel += number.substr(4);
//             } else if (number.length < 11) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 3);
//                 tel += "-";
//                 tel += number.substr(6);
//             } else {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 4);
//                 tel += "-";
//                 tel += number.substr(7);
//             }
//         }
//         return tel;
//     }
//     , getAnnounceCatagory(category, isComplete, warningLevel) {
//         // 알림 카테고리
//         //
//         // TROUBLE(고)
//         // WARNING(장애(Warning)
//         // OCCUPY(점유)
//         // COMM_FAULT(통신장애)
//         // UNKNOWN(상태미확인)
//         // INOPERATIVE(가용성변경)
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고장-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         // isComplete: false < 등록 : false , 완료 :  true
//         let troubleSubTitle = "";
//         let troubleSubColor = "";
//         let troubleSubColor2 = "";
//         if (category === "TROUBLE") {
//             if (isComplete === false) {
//                 troubleSubTitle = "등록";
//                 troubleSubColor = "typ1_1";
//                 troubleSubColor2 = "alert_typ1_1";
//             } else if (isComplete === true) {
//                 troubleSubTitle = "완료";
//                 troubleSubColor = "typ1_2";
//                 troubleSubColor2 = "alert_typ1_2";
//             }
//         }
//         let inoperativeSubTitle = "";
//         let inoperativeColor = "";
//         let inoperativeColor2 = "";
//         if (category === "INOPERATIVE") {
//             if (isComplete === true) {
//                 // opertive
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_4";
//                 inoperativeColor2 = "alert_typ1_4";
//             } else if (isComplete === false) {
//                 // inoperative
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_3";
//                 inoperativeColor2 = "alert_typ1_3";
//             }
//         }
//         let categoryColor = "";
//         let categoryColor2 = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 categoryColor = "typ3_2";
//                 categoryColor2 = "alert_typ3_2";
//             } else if (isComplete === false) {
//                 categoryColor = "typ3_1";
//                 categoryColor2 = "alert_typ3_1";
//             }
//         }
//         //
//         let knameOccupy = "";
//         let title1Occupy = "";
//         let title2Occupy = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 knameOccupy = "점유해제";
//                 title1Occupy = "점유해제";
//                 title2Occupy = "점유해제";
//             } else if (isComplete === false) {
//                 knameOccupy = "점유";
//                 title1Occupy = "점유";
//                 title2Occupy = "점유";
//             }
//         }
//         // , "WARNING": {
//         //     ename: "WARNING"
//         //     , kname: "장애"
//         //     , title1: "장애(Warning)"
//         //     , title2: "장애(Warning)"
//         //     , color1: "typ2"
//         //     , color2: "alert_typ2"
//         let knameWarning = "";
//         let title1Warning = "";
//         let title2Warning = "";
//         //
//         //
//         if (category === "WARNING") {
//             if (warningLevel === "Undefined") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Undefined)";
//                 title2Warning = "장애(Undefined)";
//             } else if (warningLevel === "Warning") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Warning)";
//                 title2Warning = "장애(Warning)";
//             } else if (warningLevel === "Critical") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Critical)";
//                 title2Warning = "장애(Critical)";
//             }
//         }
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고���-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         let obj = {
//             "TROUBLE": {
//                 ename: "TROUBLE"
//                 , kname: "고장"
//                 , title1: "고장-" + troubleSubTitle
//                 , title2: "고장-" + troubleSubTitle
//                 , color1: troubleSubColor
//                 , color2: troubleSubColor2
//             }
//             , "WARNING": {
//                 ename: "WARNING"
//                 , kname: knameWarning
//                 , title1: title1Warning
//                 , title2: title2Warning
//                 , color1: "typ2"
//                 , color2: "alert_typ2"
//             }
//             , "OCCUPY": {
//                 ename: "OCCUPY"
//                 , kname: knameOccupy
//                 , title1: title1Occupy
//                 , title2: title2Occupy
//                 , color1: categoryColor
//                 , color2: categoryColor2
//             }
//             , "COMM_FAULT": {
//                 ename: "COMM_FAULT"
//                 , kname: "통신장애"
//                 , title1: "통신장애"
//                 , title2: "통신장애"
//                 , color1: "typ4"
//                 , color2: "alert_typ4"
//             }
//             , "UNKNOWN": {
//                 ename: "UNKNOWN"
//                 , kname: "상태미확인"
//                 , title1: "상태미확인"
//                 , title2: "상태미확인"
//                 , color1: "typ5"
//                 , color2: "alert_typ5"
//             }
//             , "INOPERATIVE": {
//                 ename: "INOPERATIVE"
//                 , kname: "가용성변경"
//                 , title1: inoperativeSubTitle
//                 , title2: inoperativeSubTitle
//                 , color1: inoperativeColor
//                 , color2: inoperativeColor2
//             }
//             , "NOTICE": {
//                 ename: "NOTICE"
//                 , kname: "미확인알림"
//                 , title1: "미확인알림"
//                 , title2: "미확인알림"
//                 , color1: "typ6"
//                 , color2: "alert_typ6"
//             }
//         };
//         let keys = Object.keys(obj);
//         for (let idx in keys) {
//             if (category === keys[idx]) {
//                 return obj[keys[idx]];
//             }
//         }
//     }
//     , getColor() {
//         return [
//             "#00a99d"
//             , "#ff7663"
//             , "#ffb74f"
//             , "#a2df53"
//             , "#2c97de"
//             , "#b771ed"
//             , "#c69c6d"
//             , "#64c2f8"
//             , "#6874a8"
//             , "#fe2f87"
//             , "#3f1c00"
//             , "#0065c6"
//             , "#5f8a1f"
//             , "#8c6239"
//             , "#c90126"
//             , "#a2b9bc"
//             , "#b2ad7f"
//             , "#878f99"
//             , "#6b5b95"
//             , "#feb236"
//             , "#d64161"
//             , "#ff7b25"
//             , "#d6cbd3"
//             , "#eca1a6"
//             , "#bdcebe"
//             , "#ada397"
//             , "#b5e7a0"
//             , "#86af49"
//             , "#af8a65"
//             , "#c4b7a6"
//             , "#3e4444"
//             , "#405d27"
//             , "#92a8d1"
//             , "#034f84"
//             , "#c94c4c"
//             , "#80ced6"
//             , "#618685"
//             , "#50394c"
//             , "#b2b2b2"
//             , "#36486b"
//             , "#313188"
//             , "#bc5a45"
//             , "#c5d5c5"
//             , "#65623c"
//             , "#77a8a8"
//             , "#b0aac0"
//             , "#563f46"
//             , "#7e4a35"
//             , "#cab577"
//             , "#838060"
//             , "#bbab9b"
//             , "#686256"
//             , "#c1502e"
//             , "#4285F4"
//             , "#34A853"
//             , "#3B5998"
//             , "#EA4335"
//             , "#F65314"
//             , "#7CBB00"
//             , "#7B0099"
//             , "#BE9EC9"
//             , "#006E6D"
//             , "#485167"
//             , "#944743"
//             , "#DBB1CD"
//             , "#BC70A4"
//             , "#D2691E"
//             , "#AF9483"
//             , "#AD5D5D"
//             , "#006E51"
//             , "#D8AE47"
//             , "#B76BA3"
//             , "#a6001a"
//             , "#172035"
//             , "#686b69"
//             , "#1c1d22"
//             , "#0b0b0d"
//             , "#a0333a"
//             , "#c98a71"
//             , "#428b64"
//             , "#9e7339"
//             , "#d6265d"
//             , "#ee7979"
//             , "#e63d3d"
//             , "#4c5364"
//             , "#1b1464"
//             , "#440e62"
//             , "#007236"
//             , "#3cb878"
//             , "#f06eaa"
//             , "#fff200"
//             , "#80FF00"
//             , "#00FFFF"
//             , "#0000FF"
//             , "#8000FF"
//             , "#FF00FF"
//             , "#C21460"
//             , "#4424d6"
//             , "#347C98"
//             , "#a1a1a1"
//         ];
//     }
//     , getMessage(file, call, action, message) {
//         let me = this;
//         if (action === "SAVE") {
//             me.antNotice(null, null, message + " 저장했습니다.", function () { });
//         } else if (action === "MODIFY") {
//             me.antNotice(null, null, message + " 수정했습니다.", function () { });
//         } else if (action === "IS_NUMBER") {
//             me.antNotice(null, null, "숫자만 입력가능합니다", function () { });
//         }
//     }
//     , weekCount(dt) {
//         const day = 1000 * 60 * 60 * 24;
//         var thisDay = dt;
//         var theFirstDay = new Date(dt.getFullYear(), 0, 1);
//         var theFirstDayOfWeek = theFirstDay.getDay();
//         if (theFirstDayOfWeek > 4) {
//             theFirstDay.setDate(theFirstDayOfWeek - 4 - 1 + 7);
//         } else {
//             theFirstDay.setDate(4 - theFirstDayOfWeek + 1);
//         }
//         var diff = Math.abs(thisDay.getTime() - theFirstDay.getTime()) / day;
//         return Math.ceil(diff / 7);
//     }
//     , getWeekOfMonth(dt) {
//         var selectedDayOfMonth = dt.getDate();
//         var first = new Date(dt.getFullYear(), dt.getMonth() + 1, 1);
//         var monthFirstDateDay = first.getDay();
//         return Math.ceil((selectedDayOfMonth + monthFirstDateDay) / 7);
//     }
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Common Guide > Component 정의> 팝업 시나리오 v1.1 p52
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소 :
//     // 입력된 내용있는 경우, 취소 확인(Confirm) 시스템팝업호출
//     // ( '작성중인{상세영역또는팝업창Header Title} 정보가 저장되지 않았습니다. 페이지를 나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 추가 - 취소 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전 상태)
//     // 추가 - 취소 - 확인 : 팝업창닫힘. 저장안됨. 메뉴default로 복귀
//     // 추가 - 취소 - 입력된 내용없는 경우, 메뉴 default로 복귀
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 저장 : 저장 확인(Confirm) 시스템팝업호출
//     // ( '{상세영역또는팝업창HeaderTitle} 정보를 저장하시겠습니까?’ [취소] [확인] )
//     //
//     // 추가 - 저장 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 추가 - 저장 - 확인 - Y :
//     // 팝업창 닫힘.
//     // 저장성공한경우, 저장완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보를 저장했습니다.')
//     //
//     // 추가 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert) 시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보저장에 실패했습니다.‘ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제 :
//     // 삭제 확인(Confirm) 시스템 팝업 호출
//     // ( '{상세영역또는팝업창Header Title} 정보를 삭제하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 삭제 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 삭제 - 확인 - Y :
//     // 팝업창닫힘.
//     // 삭제성공한 경우 삭제완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창HeaderTitle} 정보를 삭제했습니다.' )
//     //
//     // 수정 - 삭제 - 확인 - N :
//     // 팝업창닫힘.
//     // 삭제실패한경우, 삭제실패알림(Alert)시스템팝업호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보삭제에 실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소 :
//     // 입력된 내용있는 경우, 취소확인(Confirm) 시스템 팝업 호출
//     // ('작성중인{상세영역또는팝업창Header Title} 정보가저장되지않았습니다. 페이지를나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 수정 - 취소 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 취소 - 확인 - N : 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 수정 - 취소 - 입력된내용없는경우, 메뉴default 상태로복귀
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장 :
//     // 저장확인(Confirm)시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보를 저장하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 저장 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 저장 - 확인 - Y :
//     // 팝업창닫힘.
//     // 저장성공한경우, 저장완료(Success Notification)시스템팝업(Toast)호출
//     // ('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//     //
//     // 수정 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert)시스템팝업호출
//     // ( '{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //   [Description]
//     // • 확인 시스템팝업 및 알림 시스템팝업에서는 제공하지 않음.
//     //   완료시스템팝업에서는 팝업창 닫기[X] 버튼 제공하며 클릭시, 팝업창 닫힘
//     //
//     // • [저장] 버튼default : 비활성화. 변경사항이 있는 경우에만 버튼활성화-[저장] 버튼클릭시,
//     //   validation check 진행후, 조건충족시에만 저장확인(Confirm)
//     //   시스템팝업 호출(validation 조건 미충족시, 알림(Alert) 팝업또는 필드하단에 도움말제공)
//     //
//     // • 메뉴 default : Control Area의 정보영역리스트 Deselect된 상태, Status Area 공백상태및 도움말제공(‘Click the item to read’)
//     //
//     // • 완료(Success Notification) 시스템팝업에 Toast 기능적용(팝업 호출되어 3초경과시, 팝업 자동닫힘. 모달팝업 아님)
//     //
//     // • 입력문구는 Common Guide를 따르며, 예외 케이스의 경우 상세시나리오 description을 따름
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 완료시스템팝업 Toast 기능추가
//     // 2) Ant design Modal 기능적용(적용하지 않을 경우, 브라우저 제공시스템 팝업 사용)
//     // 3) 저장/삭제 실패 케이스 추가
//     // 4) validation check 및확인시스템팝업순서규칙적용
//     // 1) 변경사항이 있는 경우 에만 [저장] 버튼활성화
//     // 2) 확인, 알림팝업에서는 닫기 버튼 미제공(Ant design)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) Ant design Modal 기능적용 (적용하지않을경우, 브라우저 제공시스템 팝업사용)
//     // 1) 팝업호출 되었을 때의 위치수정 (상단중앙영역)
//     // 2) 취소, 확인버튼위치는우측하단 (ant design제약)
//     // 3) 모달팝업내 닫기 버튼 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 취소 확인 시스템팝업 호출 Flow (새로운정보를 추가하거나 수정하는 경우 모두포함)
//     //
//     // 1) 내용 입력 또는 기존 설정 변경후, [취소] 버튼클릭시 취소확인 시스템팝업 호출
//     //    [취소] 팝업창 닫힘. 이전화면복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 2) 내용 입력 또는 기존 설정 변경후, Control Area의 정보영역(ex : Table영역) 클릭시 취소 확인 시스템 팝업 호출
//     //    [취소] 팝업창닫힘. 이전화면 복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 클릭된리스트의 정보가 Status Area 상세영역에 표시
//     //
//     // 3) 다른메뉴(ex : ‘대시보드’ 메뉴버튼) 클릭시 취소 확인 시스템팝업호출 되지않음. 선택된 메뉴default 화면으로 이동
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     //
//     // • 팝업창 유형:
//     //   - 일반팝업: 팝업내입력된정보를화면에적용([그림2])
//     //   - 정보성팝업: 정보 제공 목적으로[확인] 버튼만 존재([그림3])
//     //   - 확인(Confirm) 시스템팝업: 사용자에게 선택에 대한 확인이 목적으로[확인], [취소] 버튼이 함께 제공됨. 모달적용
//     //   - 알림(Alert)시스템팝업: 알림, 사용자조작에 대한 Feedback Message 전달이 목적으로[확인] 버튼만 존재. 모달적용
//     //   - 완료(Success Notification) 시스템팝업: 사용자조작이 성공했을 때의 Feedback Message 전달이목적,
//     //     Toast (3초)기능적용되며[확인] 버튼이 존재하지 않음. 모달적용안함
//     //   - [닫기] 버튼항상제공. 버튼클릭시 저장없이 팝업창 닫힘(예외: 확인시스템팝업및알림시스템팝업에서는제공하지않음)
//     //
//     // • 팝업창은 활성화된 브라우저 중앙에 위치하며 화면은 dim 처리됨(Opacity 값은디자인가이드참고)
//     //
//     // • 정보의양에따라대/중/소로크기를선택하여구성
//     //
//     // • [팝업] + [팝업]은지양하나[팝업] + [알림(Alert)팝업] 또는[팝업] + [완료(Success Notification)]은사용가능
//     //
//     // • 팝업에서Acton Button은팝업창영역중앙최하단에배치
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 배경dim 처리description 보완
//     // 2) 팝업창 유형 내용 추가
//     // 1) 닫기 버튼 예외케이스 description 추가
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 취소확인시스템팝업문구통일
//     // 2) 저장확인시스템팝업예시추가
//     // 3) 완료시스템팝업Toast 기능추가
//     // 4) Ant design Modal 기능적용
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 확인, 알림팝업의위치description 추가(상단중앙영역)
//     // 2) 아이콘색상ant design 따름(확인/알림/완료)
//     // 3) 취소, 확인버튼위치는우측하단(ant design제약)
//     // 4) 모달팝업내닫기버튼삭제
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1)그림2-3 추가(파일다운로드확인)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //  Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 결과에 대한 피드백이 나오류등의 메시지 팝업은 Confirm, Alert, Notification 형태로 제공함
//     //
//     // • 확인(Confirm) 시스템팝업:
//     //   사용자에게 선택에 대한 확인이 필요한 경우, [확인], [취소] 버튼이 함께 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업 호출
//     //
//     // • 알림(Alert) 시스템팝업:
//     //   피드백을 제공하여 별도 선택버튼이 필요없는 경우,
//     //   팝업창에[확인] 버튼이 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업호출
//     //   - validation check 조건에 부합하지않은 경우, 또는 저장/등록/승인/수정/생성/삭제 실패 했을때 알림 시스템팝업호출
//     //   - 엑셀등의 파일 다운로드 성공여부를 확인하기 위한 알림 시스템팝업호출([그림2-3])
//     //
//     // • 완료(Success Notification) 시스템팝업: [확인] 버튼없이 Toast 기능 적용됨,
//     //   모달 적용안함
//     //   - 저장/등록/승인/수정/생성/삭제 성공했을때 완료시스템팝업호출 (실패한경우알림(Alert) 시스템팝업호출)
//     //   - Toast 기능은 브라우저 화면 Bottom Right 영역에 팝업호출후 3초가 지난뒤자동으로 팝업닫힘. 모달팝업이 아니며,
//     //     [닫기] 버튼클릭시, 3초경과하지않아도팝업닫힘
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소
//     , popupAddCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content = "작성중인 " + prefix + ' 정보가 저장되지\n 않았습니다. 페이지를 나가시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 취소
//     , popupModifyCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content1 = "작성중인 " + prefix + " 정보가 저장되지 않았습니다. ";
//         let content2 = "페이지를 나가시겠습니까?";
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content1}<br />{content2}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 추가 - 저장
//     , popupNewAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 저장
//     , popupModifyAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 삭제
//     , popupModifyDelete(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 삭제하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 알림
//     , antNotice(me, response, content, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.info({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "알림"
//             , content: contentTag
//             , okText: '확인'
//             , onOk: okFunc
//         });
//     }
//     // 확인
//     , antConfirm(me, response, content, cancelFunc, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: contentTag
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 저장
//     , antNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: failFunc
//             });
//         }
//     }
//     // 저장
//     , antNotification2(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             //
//             failFunc();
//             //
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: function () { }
//             });
//         }
//     }
//     // 삭제 reponse 값에 성공 실패가 없는 상태의 값을 전달시 사용
//     , antDeleteNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         // 팝업창닫힘. 저장성공한경우,
//         // 저장완료(Success Notification)시스템팝업(Toast)
//         // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//         notification.config({
//             placement: 'bottomRight',
//             duration: 3,
//         });
//         notification.success({
//             message: message
//             , description: successDescription
//         });
//         successFunc();
//     }
//     , tableStatusMessage(tableStatus, errorCode) {
//         //         <Table
//         //   locale={{ emptyText: (<span>
//         //     暂无订单数据
//         //     <img src="https://www.baidu.com/img/bd_logo1.png" />
//         //     <Button>do something</Button>
//         //     </span>)
//         //    }} />
//         if (tableStatus === undefined || tableStatus === null || tableStatus === "") {
//             tableStatus = "FIRST";
//             errorCode = "000-00-000";
//         }
//         let emptyText = "";
//         //데이터가 존재하지 않습니다.
//         //데이터 처리중입니다. 잠시만 기다려주세요.
//         //데이터로딩에 실패하였습니다. Error Code : 000-00-000
//         if (tableStatus === "FIRST") {
//             emptyText = (
//                 <>
//                     <img src={Loading} />
//                     <p>데이터 처리중입니다.<br /> 잠시만 기다려주세요.</p>
//                 </>
//             );
//         } else if (tableStatus === "EXIST") {
//             emptyText = ("");
//         } else if (tableStatus === "EMPTY") {
//             emptyText = (
//                 <>
//                     <img src={IcoNodata} />
//                     <p>데이터가 존재하지 않습니다.</p>
//                 </>
//             );
//         } else if (tableStatus === "FAIL") {
//             emptyText = (<p>데이터로딩에 실패하였습니다.<br /> Error Code :{errorCode}</p>);
//         }
//         return emptyText;
//     }
//     , lightenDarkenColor(col, amt) {
//         var usePound = false;
//         if (col[0] === "#") {
//             col = col.slice(1);
//             usePound = true;
//         }
//         var num = parseInt(col, 16);
//         var r = (num >> 16) + amt;
//         if (r > 255) r = 255;
//         else if (r < 0) r = 0;
//         var b = ((num >> 8) & 0x00FF) + amt;
//         if (b > 255) b = 255;
//         else if (b < 0) b = 0;
//         var g = (num & 0x0000FF) + amt;
//         if (g > 255) g = 255;
//         else if (g < 0) g = 0;
//         return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
//     }
//     , getFileExts() {
//         // TRR때 말씀드린 공지사항 첨부파일 업로드 제한 타입에 대한 이슈입니다.
//         // 내용 참고하셔서 반영 부탁드립니다. 감사합니다.
//         // 파일 타입 제한 : 확장자는 대소문자 구분하지 않아야 함.
//         // • 인증서 파일: crt, cer, csr, pem, der, pfx, p12, jks, key
//         // • DB: cdx, idc, db, sql
//         // • 실행 파일: exe, com, cmd, bat, sh, apk
//         // • 윈도우 패스워드 서비스 스크립트파일: htr
//         // • 웹: html, htm, war
//         // • 서버 스크립트 파일: asp, aspx, ascx, ashx, axd, phtml, php, php3, php4, php5, inc, jsp, jspx, jsw, jsv, jspf, pl, pm, cgi, lib, cfm, cfml, cfc, dbm
//         return [
//             "crt", "cer",
//             "csr", "pem",
//             "der", "pfx",
//             "p12", "jks",
//             "key", "cdx",
//             "idc", "db",
//             "sql", "exe",
//             "com", "cmd",
//             "bat", "sh",
//             "apk", "htr",
//             "html", "htm",
//             "war", "asp",
//             "aspx", "ascx",
//             "ashx", "axd",
//             "phtml", "php",
//             "php3", "php4",
//             "php5", "inc",
//             "jsp", "jspx",
//             "jsw", "jsv",
//             "jspf", "pl",
//             "pm", "cgi",
//             "lib", "cfm",
//             "cfml", "cfc",
//             "dbm",
//         ]
//     }
//     , getBlockFileExt(fileExt) {
//         //
//         let meUtils = this;
//         let arrFileExts = meUtils.getFileExts();
//         let isExist = false;
//         for (let idx01 in arrFileExts) {
//             if (arrFileExts[idx01].toUpperCase() === fileExt.toUpperCase()) {
//                 //
//                 isExist = true;
//             }
//         }
//         return isExist
//     }
//     , checkResponse(filename, lineName, response, me) {
//         // file : 호출 할 때 파일명
//         // func : 호출 할 때 함수명
//         // cmm  : 호출 할 때 명령어
//         // toast : Toast 사용 유무
//         // response : axios 사용후 응답
//         // me : 호출 할 때 소속된 전체 객체, this
//         // cmm
//         // 대문자
//         // SAVE : 저장
//         // SEARCH : 조회
//         // UPDATE : 갱신
//         // DELETE : 삭제
//         // TOAST : 단순 toast 출력
//         // ETC : 기타 명령어
//         // =====================================================================
//         // response code
//         // =====================================================================
//         // HTTP : 200
//         // response : 100
//         // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 101
//         // "Your account has been disabled." 계정이 비활성 된 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 102
//         // "Full authentication is required to access this resource"
//         // 인증이 안 된 계정으로 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 104
//         // This session has been expired
//         // (possibly due to multiple concurrent logins being attempted as the same user)."
//         // 동일 아이디 동시 접속 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 105
//         // "Authentication request could not be processed due to internal server error."
//         // 내부 서버 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 106
//         // "Password mismatch"
//         // 입력한 현재 비밀번호 정보가 불일치했을 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 107
//         // "Password was recently used and is not valid for reuse."
//         // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//         // =====================================================================
//         // HTTP : 200
//         // response : 108
//         // "User ID already exists. Please use a different one."
//         // 이미 사용중인 ID로 사용자 추가하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 109
//         // "User not found."
//         // 존재하지 않는 사용자 ID를 수정하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 110
//         // "Invalid JSESSIONID."
//         // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 111
//         // "Delete the relevant user account before deleting the permissions.
//         // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//         // =====================================================================
//         // HTTP : 200
//         // response : 112
//         // "Role name is duplicated."
//         // =====================================================================
//         // 권한 이름 중복
//         // HTTP : 200
//         // response : 113
//         // "Group code is duplicated."
//         // =====================================================================
//         // 권한 그룹 코드 중복
//         // HTTP : 200
//         // response : 114
//         // "This session has been expired due to password change."
//         // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 115
//         // "This session has been expired due to account deactivation."
//         // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied"
//         //  권한 없는 메뉴가 호출되었습니다
//         // =====================================================================
//         let meUtils = this;
//         //
//         if (filename === "App" || filename === "loginInputBox") {
//             // App.
//             if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else {
//                 return true;
//             }
//         } else {
//             if (response.data.code === 0) {
//                 return true;
//             } else if (response.data.code === 200) {
//                 return true;
//             } else if (response.data.code === 100) {
//                 // HTTP : 200
//                 // response : 100
//                 // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//                 return false;
//             } else if (response.data.code === 101) {
//                 // HTTP : 200
//                 // response : 101
//                 // "Your account has been disabled." 계정이 비활성 된 경우
//                 return false;
//             } else if (response.data.code === 102) {
//                 // HTTP : 200
//                 // response : 102
//                 // "Full authentication is required to access this resource"
//                 // 인증이 안 된 계정으로 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.logOut();
//                     return false;
//                 }
//             } else if (response.data.code === 103) {
//                 // HTTP : 200
//                 // response : 103
//                 // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "권한없는 메뉴가 호출되었습니다.", function () {
//                         window.location.reload();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 105) {
//                 // HTTP : 200
//                 // response : 105
//                 // "Authentication request could not be processed due to internal server error."
//                 // 내부 서버 오류
//                 return false;
//             } else if (response.data.code === 106) {
//                 // HTTP : 200
//                 // response : 106
//                 // "Password mismatch"
//                 // 입력한 현재 비밀번호 정보가 불일치했을 때
//                 return false;
//             } else if (response.data.code === 107) {
//                 // HTTP : 200
//                 // response : 107
//                 // "Password was recently used and is not valid for reuse."
//                 // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//                 return false;
//             } else if (response.data.code === 108) {
//                 // HTTP : 200
//                 // response : 108
//                 // "User ID already exists. Please use a different one."
//                 // 이미 사용중인 ID로 사용자 추가하고자 할 때
//                 return false;
//             } else if (response.data.code === 109) {
//                 // HTTP : 200
//                 // response : 109
//                 // "User not found."
//                 // 존재하지 않는 사용자 ID를 수정하고자 할 때
//                 return false;
//             } else if (response.data.code === 110) {
//                 // HTTP : 200
//                 // response : 110
//                 // "Invalid JSESSIONID."
//                 // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//                 return false;
//             } else if (response.data.code === 111) {
//                 // HTTP : 200
//                 // response : 111
//                 // "Delete the relevant user account before deleting the permissions.
//                 // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//                 return false;
//             } else if (response.data.code === 112) {
//                 // HTTP : 200
//                 // response : 112
//                 // "Role name is duplicated."
//                 return false;
//             } else if (response.data.code === 113) {
//                 // HTTP : 200
//                 // response : 113
//                 // "Group code is duplicated."
//                 return false;
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 117) {
//                 // HTTP : 200
//                 // response : 117
//                 // 권한이 중간에 변경된 경우 해당 권한에 해당 하는 사용자는 로그아웃이 된다.
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "메뉴권한설정 정보가 변경되어 로그아웃 되었습니다.|재 로그인하세요.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     meUtils.emptyCode();
//                     return false;
//                 }
//             } else if (response.data.code === 1) {
//                 // HTTP : 200
//                 // response : 103
//                 // {"code":103, "msg":"Access is denied", "user": null}
//                 // 권한 없는 메뉴가 호출되었습니다
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "서버 오류로 인해 요청을 완료할 수 없습니다. 다시 시도해주세요.";
//                     meUtils.antNotice(null, null, message, function () { });
//                     return false;
//                 }
//             }
//         }
//     }
//     , logOut() {
//         try {
//             let meUtils = this;
//             meUtils.getLocationHref();
//         } catch (e) {
//         }
//     }
//     , consoleLog(e) {
//         let view = true;
//         if (view) {
//             console.log(e);
//         }
//     }
//     , graphYRange(num) {
//         // 1. y축에 0 눈금과 함께 5개의 눈금을 표시
//         // 2. 가장 긴 막대의 높이를 기준값으로하여 다음과 같이 눈금값을 표시
//         // 기준값: 0 ~ 5 -> y축 눈금값: 0, 1, 2, 3, 4, 5 (첨부파일: 최대값5이하.png)
//         // 기준값: 6 ~ 10 -> y축 눈금값: 0, 2, 4, 6, 8, 10 (첨부파일: 최대값10이하.png)
//         // 기준값: 11 ~ 50 -> y축 눈금값: 0, 10, 20, 30, 40, 50 (첨부파일:최대값50이하.png)
//         // 기준값: 51 ~ 100 -> y축 눈금값: 0, 20, 40, 60, 80, 100 (첨부파일:최대값100이하.png)
//         // 기준값: 101 ~ 500 -> y축 눈금값: 0, 100, 200, 300, 400, 500
//         // 기준값: 501 ~ 1000 -> y축 눈금값: 0, 200, 400, 600, 800, 1000
//         let rtn = [];
//         ///////////////////////////////////////////////////////////////////////
//         // 0
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) <= 0) {
//             rtn = [0];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 0 ~ 1
//         ///////////////////////////////////////////////////////////////////////
//         if (0.001 <= (num * 1) && (num * 1) <= 1) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1~10
//         ///////////////////////////////////////////////////////////////////////
//         if (1 <= (num * 1) && (num * 1) <= 5) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 11~100
//         ///////////////////////////////////////////////////////////////////////
//         if (11 <= (num * 1) && (num * 1) <= 50) {
//             rtn = [0, 10, 20, 30, 40, 50];
//         } else if (51 <= (num * 1) && (num * 1) <= 100) {
//             rtn = [0, 20, 40, 60, 80, 100];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 101~1000
//         ///////////////////////////////////////////////////////////////////////
//         if (101 <= (num * 1) && (num * 1) <= 500) {
//             rtn = [0, 100, 200, 300, 400, 500];
//         } else if (501 <= (num * 1) && (num * 1) <= 1000) {
//             rtn = [0, 200, 400, 600, 800, 1000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1001~10000
//         ///////////////////////////////////////////////////////////////////////
//         if (1001 <= (num * 1) && (num * 1) <= 5000) {
//             rtn = [0, 1000, 2000, 3000, 4000, 5000];
//         } else if (5001 <= (num * 1) && (num * 1) <= 10000) {
//             rtn = [0, 2000, 4000, 6000, 8000, 10000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10001~100000
//         ///////////////////////////////////////////////////////////////////////
//         if (10001 <= (num * 1) && (num * 1) <= 50000) {
//             rtn = [0, 10000, 20000, 30000, 40000, 50000];
//         } else if (50001 <= (num * 1) && (num * 1) <= 100000) {
//             rtn = [0, 20000, 40000, 60000, 80000, 100000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 100001~1000000
//         ///////////////////////////////////////////////////////////////////////
//         if (100001 <= (num * 1) && (num * 1) <= 500000) {
//             rtn = [0, 100000, 200000, 300000, 400000, 500000];
//         } else if (500001 <= (num * 1) && (num * 1) <= 1000000) {
//             rtn = [0, 200000, 400000, 600000, 800000, 1000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1000001~10000000
//         ///////////////////////////////////////////////////////////////////////
//         if (1000001 <= (num * 1) && (num * 1) <= 5000000) {
//             rtn = [0, 1000000, 2000000, 3000000, 4000000, 5000000];
//         } else if (5000001 <= (num * 1) && (num * 1) <= 10000000) {
//             rtn = [0, 2000000, 4000000, 6000000, 8000000, 10000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10000001~100000000
//         ///////////////////////////////////////////////////////////////////////
//         if (10000001 <= (num * 1) && (num * 1) <= 50000000) {
//             rtn = [0, 10000000, 20000000, 30000000, 40000000, 50000000];
//         } else if (50000001 <= (num * 1) && (num * 1) <= 100000000) {
//             rtn = [0, 20000000, 40000000, 60000000, 80000000, 100000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) > 100000000) {
//             rtn = [0, 100000000, 200000000, 300000000, 400000000, 500000000];
//         }
//         return rtn;
//     }
//     // phase 2 적용
//     , async getToolTipSpeed(callback) {
//         let meUtils = this;
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         try {
//             let URL = meUtils.getCurrentURL() + "/v1/setting/system/charge_speed";
//             axios.defaults.withCredentials = true;
//             let response = await axios.get(URL);
//             //
//             let rapid = response.data.data.rapid;
//             let fast = response.data.data.fast;
//             let slow = response.data.data.slow;
//             //
//             let tooltipText1 = "충전기 모델의 최대출력에 따라 충전속도가 구분됩니다. 초급속(" + rapid + "W 이상), 급속(" + fast + "kW 이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipText2 = "충전속도는 입력된 최대출력(kW) 값에 따라 자동으로 설정됩니다. 기준: 초급속(" + rapid + "kW 이상), 급속(" + fast + "kW이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipSpeed = {
//                 superfast: rapid
//                 , superfastMin: rapid
//                 , superfastMax: rapid
//                 , fast: fast
//                 , fastMin: fast
//                 , fastMax: rapid
//                 , slow: slow
//                 , slowMin: slow
//                 , slowMax: rapid
//                 , tooltipText1: tooltipText1
//                 , tooltipText2: tooltipText2
//             }
//             callback(tooltipSpeed);
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , emptyCode(str) {
//         // SonarLintd의 에러및 경고 표시 삭제용
//     }
// }
// export default U;/*
// * Copyright (c) 2019 LG Electronics Inc.
// * SPDX-License-Identifier: LicenseRef-LGE-Proprietary
// */
// import React from 'react';
// import axios from 'axios';
// import { Icon, notification } from 'antd';
// import { Modal } from 'antd';
// import Loading from '../../../src/resource/images/common/Loading.gif';
// import IcoNodata from '../../../src/resource/images/common/ico_nodata.png';
// //
// let responseCnt = 0;
// //
// const U = {
//     //
//     COOKIE_IS_LOGIN_DAYS: "1"
//     , COOKIE_NOTICE_NO_VIEW_DAYS: "1"
//     , COOKIE_REMEMBER_CHECKED_USERID_DAYS: "365"
//     , COOKIE_REMEMBER_USERID_DAYS: "365"
//     , SYNC_TIME: "5" // 동기화 기본 시간
//     , SYSTEM_CHECK: false // 공사중 화면 제어
//     , getURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         return url
//     }
//     , getCurrentURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let rtnUrl = "";
//         if (url === "localhost:3000") {
//             // rtnUrl = "https://" + "evci.duckdns.org";
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//             // rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "evci.duckdns.org") {
//             rtnUrl = "https://" + "evci.duckdns.org";
//         } else if (url === "evci.duckdns.org:9090") {
//             rtnUrl = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "evci.duckdns.org:5050") {
//             rtnUrl = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "csms.duckdns.org") {
//             rtnUrl = "https://" + "csms.duckdns.org";
//         }
//         return rtnUrl
//     }
//     , getJusoKeyUrl() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let obj = {
//             confmKey: ""
//             , URL: ""
//         };
//         if (url === "localhost:3000") {
//             // http는 http을 호출
//             // http는 https을 호출 불가
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNDQwMzEwOTU3NjE=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDMyNDExNTMzODEwOTU3Njc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:9090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMzAwNTU1NjExMDMyMDQ=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "evci.duckdns.org:5050") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMTAyMjE0MDkwNDExMDMxNzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "10.177.206.55:8090") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "devU01TX0FVVEgyMDIwMDMzMTE1MTU1MDEwOTYwMzk=";
//             obj.URL = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         } else if (url === "csms.duckdns.org") {
//             // https는 https을 호출
//             // https는 http을 호출
//             obj.confmKey = "U01TX0FVVEgyMDIwMDcxMDE2MjAxMjEwOTk0NTc=";
//             obj.URL = "https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do";
//         }
//         return obj;
//     }
//     , getKakaoJusoKey() {
//         let meUtils = this;
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         let key = "";
//         if (url === "localhost:3000") {
//             meUtils.emptyCode("1");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org") {
//             meUtils.emptyCode("2");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:9090") {
//             meUtils.emptyCode("3");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "evci.duckdns.org:5050") {
//             meUtils.emptyCode("4");
//             key = "d869a5906b6132b37e541599626e8eb3=";
//         } else if (url === "10.177.206.55:8090") {
//             meUtils.emptyCode("5");
//             key = "2e3471ee25f4ac9de697257197961318";
//         } else if (url === "csms.duckdns.org") {
//             meUtils.emptyCode("6");
//             key = "2e3471ee25f4ac9de697257197961318";
//         }
//         return key;
//     }
//     , getImgURL() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "https://evci.duckdns.org/") {
//             url = "https://" + "evci.duckdns.org";
//         } else if (url === "http://evci.duckdns.org:9090/") {
//             url = "http://" + "evci.duckdns.org:9090";
//         } else if (url === "http://evci.duckdns.org:5050/") {
//             url = "http://" + "evci.duckdns.org:5050";
//         } else if (url === "https://csms.duckdns.org/") {
//             url = 'https://' + 'csms.duckdns.org';
//         } else {
//             url = "http://" + url;
//         }
//         return url
//     }
//     , getOpenLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.open('about:blank').location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.open('about:blank').location.href = "https://" + U.getURL();
//         }
//     }
//     , getLocationHref() {
//         var url = window.location.href;
//         url = url.split('//');
//         url = url[1].substr(0, url[1].indexOf('/'));
//         if (url === "localhost:3000") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         } else if (url === "evci.duckdns.org:9090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "evci.duckdns.org:5050") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "10.177.206.55:8090") {
//             window.location.href = "http://" + U.getURL();
//         } else if (url === "csms.duckdns.org") {
//             window.location.href = "https://" + U.getURL();
//         }
//     }
//     , async getAday() {
//         let meUtils = this;
//         try {
//             let URL = U.getCurrentURL() + '/external/general/time?tz=Asia/Seoul';
//             axios.defaults.withCredentials = false;
//             let response = await axios.get(URL);
//             let currentDateTime = response.data.data.time;
//             let y = currentDateTime.substr(0, 4);
//             let m = currentDateTime.substr(5, 2);
//             let d = currentDateTime.substr(8, 2);
//             let dt = new Date(y, ((m * 1) - 1), d);
//             dt.setDate(dt.getDate() + 1);
//             return dt.toGMTString();
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , getFormatTel(tel) {
//         let rtn = "";
//         let tempTel = tel.replace(/-/gi, "");
//         if (
//             tempTel.substr(0, 3) === "010" ||
//             tempTel.substr(0, 3) === "011" ||
//             tempTel.substr(0, 3) === "016" ||
//             tempTel.substr(0, 3) === "017" ||
//             tempTel.substr(0, 3) === "019"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, 4);
//                 let thirth = tempTel.substr(tempTel.length - 4, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.substr(0, 2) === "02") {
//             // '010','011','016','017','019'
//             // 서울 : 02	인천: 032	대전:042	부산:051	울산:052	대구: 053	광주:062	제주: 064
//             // 경기: 031	강원:033	충남:041	충북:043	경북:054	경남:055	전남:061	전북:063
//             if (tempTel.length === 9) {
//                 // 9자 : 02 384  2247
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(5, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 10) {
//                 // 10자 : 02 3333 3333
//                 let first = tempTel.substr(0, 2);
//                 let sencond = tempTel.substr(2, tempTel.length - 6);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (
//             tempTel.substr(0, 3) === "032" ||
//             tempTel.substr(0, 3) === "042" ||
//             tempTel.substr(0, 3) === "051" ||
//             tempTel.substr(0, 3) === "052" ||
//             tempTel.substr(0, 3) === "053" ||
//             tempTel.substr(0, 3) === "062" ||
//             tempTel.substr(0, 3) === "064" ||
//             tempTel.substr(0, 3) === "031" ||
//             tempTel.substr(0, 3) === "033" ||
//             tempTel.substr(0, 3) === "041" ||
//             tempTel.substr(0, 3) === "043" ||
//             tempTel.substr(0, 3) === "054" ||
//             tempTel.substr(0, 3) === "055" ||
//             tempTel.substr(0, 3) === "061" ||
//             tempTel.substr(0, 3) === "063" ||
//             tempTel.substr(0, 3) === "070"
//         ) {
//             if (tempTel.length === 10) {
//                 // 10자 : 031 333  3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(6, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else if (tempTel.length === 11) {
//                 // 11자 : 031 3333 3333
//                 let first = tempTel.substr(0, 3);
//                 let sencond = tempTel.substr(3, tempTel.length - 7);
//                 let thirth = tempTel.substr(7, tempTel.length);
//                 rtn = first + "-" + sencond + "-" + thirth;
//             } else {
//                 rtn = tempTel;
//             }
//         } else if (tempTel.length === 8) {
//             // 8자 : 1544-2222
//             let first = tempTel.substr(0, 4);
//             let sencond = tempTel.substr(4, 8);
//             rtn = first + "-" + sencond;
//         } else {
//             rtn = tempTel;
//         }
//         return rtn;
//     }
//     , getIsError(connectorStatus) {
//         // 삼각형 에러 클래스 추출
//         // 충전대기 : available
//         // 충전예약 : reserved
//         // 충전중 : charging,  Preparing, SuspendedEVSE, SuspendedEV
//         // 충전완료 : finishing
//         // 점검중 : faulted  Unavailable
//         // 통신장애/상태미확인 : offline
//         // 시나리오
//         // v.99a
//         // p 105
//         // 커넥터타입
//         // •해당충전기커넥터타입표시
//         // •장애, 고장등으로커넥터사용이불가능한경우커넥터별로사용불가능이미지표시
//         let rtn = "";
//         if (connectorStatus === "Faulted") {
//             // 점검중 : faulted
//             rtn = "is_error";
//         }
//         return rtn;
//     }
//     , msToTime(duration) {
//         let milliseconds = parseInt((duration % 1000) / 100)
//             , seconds = parseInt((duration / 1000) % 60)
//             , minutes = parseInt((duration / (1000 * 60)) % 60)
//             , hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//         hours = (hours < 10) ? "0" + hours : hours;
//         minutes = (minutes < 10) ? "0" + minutes : minutes;
//         seconds = (seconds < 10) ? "0" + seconds : seconds;
//         let obj = {
//             "hours": hours
//             , "minutes": minutes
//             , "seconds": seconds
//             , "milliseconds": milliseconds
//         }
//         return obj;
//     }
//     , reverseNum(arr, total) {
//         // 게시판의 번호의 역순을 보낸다
//         // ((total * 1) + 1) 여기서  +1은 시작을 total번호부터
//         // 하기 위해서 이다.
//         for (let idx01 in arr) {
//             arr[idx01]["num"] = ((((total * 1) + 1) - (idx01 * 1)) - 1);
//         }
//         return arr;
//     }
//     , forceLogout(callback) {
//         //
//         // this.setCookie("isLogin", "false", this.COOKIE_IS_LOGIN_DAYS);
//         //
//         let updateMainData = {
//             mainData: {
//                 login: {
//                     cmd: "LOGIN_FROCE_LOG_OUT"
//                     , isLogin: false // 로그인 상태
//                     , code: "" // 로그인 상태 코드
//                     , msg: ""  // 로그인 상태 메세지
//                     , company: ""  // 회사
//                     , email: ""  // 이메일
//                     , role: ""  // 권한
//                     , userId: ""  // 사용자아이디
//                     , userName: ""  // 사용자명
//                     , passwordChangedDate: "" //
//                     , passwordChangePopup: ""// 비밀번호변경 팝업호출
//                     , personalInformationAgreementPopup: ""// 개인정보 팝업호출
//                     // "" 주면 성공과 실패가 아닌 중간 상황 즉, 변경유무 판단을 하지 않는 상황
//                 }
//             }
//         };
//         callback(updateMainData);
//     }
//     // , isSpecialCharacter(str) {
//     //     // 한글자 특수문자
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
//     //     return regExp.test(str);
//     // }
//     // , isAllSpecialCharacter(arr) {
//     //     // 모든 특수문자 (_ , - 는제외)
//     //     var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === true) {
//     //             return true;
//     //         }
//     //     }
//     //     return false;
//     // }
//     , isAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         return /^[a-zA-Z]+$/.test(str);
//     }
//     , isOneAlphabet(str) {
//         // 한글자 영문자 소문자, 영문자 대문자, 숫자
//         let isAlphabet = false;
//         for (let i = 0; i < str.length; i++) {
//             isAlphabet = /^[a-zA-Z]+$/.test(str[i]);
//             if (isAlphabet) {
//                 // true가 나오면 즉시 값을 돌려준다.
//                 i = str.length;
//             }
//         }
//         return isAlphabet;
//     }
//     , isAllAlphabet(arr) {
//         // 모든 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , isNumber(str) {
//         //  숫자
//         str = str.replace(/ /gi, "");
//         var regExp = /^[0-9]+$/;
//         return regExp.test(str);
//     }
//     , isAllAlphabetNumber(arr) {
//         // 영문자 소문자, 영문자 대문자, 숫자
//         var regExp = /^[a-zA-Z0-9]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     // , isAllAlphabetNumberSpecial(arr) {
//     //     //한글 제외한 나머지 글자
//     //     var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//     //     for (let idx in arr) {
//     //         if (regExp.test(arr[idx]) === false) {
//     //             return false;
//     //         }
//     //     }
//     //     return true;
//     // }
//     , formatIntegerDotFloat(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9.]/gi, ""); //숫자와 .만 허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , formatInteger(integerLength, floatLength, value) {
//         //
//         value = value.replace(/[,]/gi, ""); //, 삭제
//         value = value.replace(/[^0-9]/gi, ""); //숫자허용
//         //
//         if (value.split(".").length <= 1) {
//             if (value.length >= integerLength) {
//                 value = value.substr(0, integerLength);
//             }
//         } else {
//             if (value.split(".")[0].length >= integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0].substr(0, integerLength) + "." + "";
//                 }
//             } else if (value.split(".")[0].length < integerLength) {
//                 if (value.split(".")[1].length >= floatLength) {
//                     value = value.split(".")[0] + "." + value.split(".")[1].substr(0, floatLength);
//                 } else if (value.split(".")[1].length === 1) {
//                     value = value.split(".")[0] + "." + value.split(".")[1];
//                 } else if (value.split(".")[1].length <= 0) {
//                     value = value.split(".")[0] + "." + "";
//                 }
//             }
//         }
//         return value;
//     }
//     , numberDot(value) {
//         return value.replace(/[^0-9.]/gi, "");
//     }
//     , clearCommaDot(value) {
//         return value.replace(/[\,]/gi, "");
//     }
//     , numberAlphabetHypenUnderHypen(value) {
//         //         권한그룹코드
//         // • 영문, 숫자 조합하여 16자 이내로 입력 (한글 및 특수문자 입력 불가, 띄어쓰기 불가. 예외 : ‘-’, ‘_’)
//         return value.replace(/[^A-Za-z0-9\-\_]/gi, "");
//     }
//     , checkId(arr) {
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9_-]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     , getCheckedId(value) {
//         //영문자, 숫자, _, -
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9_-]/gi, "");
//     }
//     , checkPassword(str) {
//         let arr = str.split("");
//         //영문자, 숫자, _, -
//         var regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         for (let idx in arr) {
//             if (regExp.test(arr[idx]) === false) {
//                 return false;
//             }
//         }
//         // 8에서 13자의 비밀번호중에 영문자 1개, 특수문자 1개, 숫자 1개는 반드시
//         // 있어야 하고 이것이 조합의 규칙이다.
//         var regExpAlpha = /^[a-zA-Z]+$/;
//         var regExpNumber = /^[0-9]+$/;
//         var regExpSpecial = /^[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]+$/;
//         var isAlpha = false;
//         var isNumber = false;
//         var isSpecial = false;
//         for (let idx in arr) {
//             if (regExpAlpha.test(arr[idx]) === true) {
//                 isAlpha = true;
//             }
//             if (regExpNumber.test(arr[idx]) === true) {
//                 isNumber = true;
//             }
//             if (regExpSpecial.test(arr[idx]) === true) {
//                 isSpecial = true;
//             }
//         }
//         if (isAlpha === false || isNumber === false || isSpecial === false) {
//             return false;
//         }
//         return true;
//     }
//     , getCheckedPassword(value) {
//         let tempValue = value.substr(0, 13);
//         return tempValue.replace(/[^a-zA-Z0-9{\\[\]/?.,;:|)*~`!^\-+<>@#$%&\\=('"]/gi, "");
//     }
//     , getCheckedDepartmentCode(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // 영문또는숫자조합하여16자이내로입력(ex : 부서코드, 그룹코드,거래조건코드)
//         // -한글및 특수문자입력불가, 띄어쓰기불가
//         // -예외: -대표거래처코드및거래처그룹코드의경우, 영문, 숫자조합하여6자리이내로입력
//         // -장애코드관리의장애코드의경우, 영문, 숫자조합하여50자이내로입력
//         let tempValue = value.substr(0, 16);
//         return tempValue.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , getCheckedEmail(value) {
//         // 시나리오 1.2 beta p53
//         // 코드
//         // -영문또는숫자조합하여32자이내로입력
//         // -한글및특수문자입력불가(예외: '-', '_', '.', '@'), 띄어쓰기불가
//         let tempValue = value.substr(0, 32);
//         return tempValue.replace(/[^a-zA-Z0-9-_.@]/gi, "");
//     }
//     , hypenTellphone(str) {
//         return str ? str.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace('--', '-') : str;
//     }
//     , clearUndefinedNull(str) {
//         // 검사 undefined, null, space
//         let rtn = "";
//         if (str === undefined || str === "undefined" || str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , clearArrNull(arrObj) {
//         // 검사 undefined, null, space
//         let rtnArr = [];
//         for (let idx01 in arrObj) {
//             let oneObj = arrObj[idx01];
//             let keys = Object.keys(oneObj);
//             let rtnObj = {};
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 if (oneObj[key] === undefined || oneObj[key] === "undefined" || oneObj[key] === null || oneObj[key] === "null") {
//                     rtnObj[key] = "";
//                 } else {
//                     rtnObj[key] = oneObj[key];
//                 }
//             }
//             rtnArr.push(rtnObj);
//         }
//         return rtnArr;
//     }
//     , classArr(str) {
//         // c_typ typ1 is_error id_disabled 에서
//         // is_error, id_disabled을 추가 삭제을 하기위한
//         // 배열을 만든다.
//         return str.split(" ");
//     }
//     , round2(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return Math.floor(num);// 소숫점 버럼
//     }
//     , round(n, pos) {
//         let digits = Math.pow(10, pos);
//         let sign = 1; if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         let num = Math.round(n * digits) / digits;
//         num = num * sign;
//         return num.toFixed(pos);
//     }
//     , floor(n, pos) {
//         // 10은 소숫점 첫번째 자리에서 자름
//         let sign = 1;
//         n = n * 1;
//         if (n < 0) { sign = -1; }
//         // 음수이면 양수처리후 반올림 한 후 다시 음수처리
//         n = n * sign;
//         return Math.floor(n * (pos * 1)) / (pos * 1)
//     }
//     , numberCeil(num) {
//         // 소수점 올림, 정수 반환
//         return Math.ceil(num);
//     }
//     , numberFloor(num) {
//         // 소수점 버림, 정수 반환
//         return Math.floor(num);
//     }
//     , numberRound(num) {
//         // 소수점 반올림, 정수 반환
//         return Math.round(num);
//     }
//     , onlyNumber(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9.]/gi, "");
//     }
//     , onlyInteger(num) {
//         if (num === undefined || num === null || num === "") {
//             return "";
//         }
//         return num.toString().replace(/[^0-9]/gi, "");
//     }
//     , onlyAlphbetNumber(num) {
//         if (!num) {
//             return "";
//         }
//         return num.replace(/[^a-zA-Z0-9]/gi, "");
//     }
//     , numberFormat(num) {
//         if (num === null) {
//             return '';
//         }
//         if (num === "") {
//             return '';
//         }
//         if (num === undefined) {
//             return '';
//         }
//         num = num.toString().replace(/,/gi, "");
//         return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     , copyArrayObjct(arrObj) {
//         let arr = [];
//         arrObj.map(function (rec) {
//             let obj = {};
//             let keys = Object.keys(rec);
//             keys.map(function (keyname) {
//                 obj[keyname] = rec[keyname];
//             })
//             arr.push(obj);
//         });
//         return arr;
//     }
//     , strNullToSpace(str) {
//         let rtn = "";
//         if (str === null || str === "null") {
//             rtn = "";
//         } else {
//             rtn = str;
//         }
//         return rtn;
//     }
//     , objNullToSpace(obj) {
//         let rtn = "";
//         let keys = Object.keys(obj);
//         for (let idx01 in keys) {
//             if (obj[keys[idx01]] === null || obj[keys[idx01]] === "null") {
//                 obj[keys[idx01]] = "";
//             }
//         }
//         rtn = obj;
//         return rtn;
//     }
//     , arrNullToSpace(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , arrNullToHypen(arr) {
//         let rtn = "";
//         for (let idx01 in arr) {
//             let keys = Object.keys(arr[idx01]);
//             for (let idx02 in keys) {
//                 if (arr[idx01][keys[idx02]] === null || arr[idx01][keys[idx02]] === "null") {
//                     arr[idx01][keys[idx02]] = "-";
//                 }
//             }
//         }
//         rtn = arr;
//         return rtn;
//     }
//     , addKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key"] = (idx01 * 1) + 1;
//         }
//         return arr;
//     }
//     , add2kKey(arr) {
//         // key  부여
//         for (let idx01 in arr) {
//             arr[idx01]["key2k"] = (idx01 * 1) + 2 + "k";
//         }
//         return arr;
//     }
//     , debugProps(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.props);
//         }
//     }
//     , debugState(me, isView) {
//         let meUtils = this;
//         if (isView) {
//             meUtils.consoleLog(me.state);
//         }
//     }
//     , isCookie() {
//         // 쿠키 저장
//         let isCookie = document.cookie;
//         if (isCookie === undefined || isCookie === null || isCookie === "") {
//             return false;
//         }
//         return true;
//     }
//     , deleteAllCookie() {
//         // logout
//         document.cookie.split(";").forEach(function (c) {
//             document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//         });
//     }
//     , deleteCookie(cookieName) {
//         // 쿠키 삭제
//         try {
//             var expireDate = new Date();
//             expireDate.setDate(expireDate.getDate() - 1);
//             document.cookie = cookieName + "=" + ";expires=" + expireDate.toGMTString();
//         } catch (e) {
//         }
//     }
//     , debugAllCookie() {
//         let meUtils = this;
//         // 쿠키 디버깅
//         document.cookie.split(";")
//             .forEach(function (c) {
//                 meUtils.consoleLog(c);
//             });
//     }
//     , setCookie(cookieName, cookieValue, day) {
//         // 쿠키 저장
//         // let today = new Date();
//         // let yy = today.getFullYear();
//         // let mm = today.getMonth(); //January is 0!
//         // let dd = today.getDate();
//         // let hh = today.getHours();s
//         // let mi = today.getMinutes();
//         // let ss = today.getSeconds();
//         // var date = new Date(yy, mm, dd, 0, 0, 0);
//         var date = new Date();
//         date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
//         document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
//     }
//     , setCookieAt00(name, value, expiredays) {
//         var todayDate = new Date();
//         //
//         todayDate.setHours(23);
//         todayDate.setMinutes(59);
//         todayDate.setSeconds(59);
//         todayDate.setMilliseconds(59);
//         //
//         document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
//     }
//     , getCookie(cookieName) {
//         // 특정쿠키 가져오기
//         cookieName = cookieName + '=';
//         var cookieData = document.cookie;
//         var start = cookieData.indexOf(cookieName);
//         var cookieValue = '';
//         if (start !== -1) {
//             start += cookieName.length;
//             var end = cookieData.indexOf(';', start);
//             if (end === -1)
//                 end = cookieData.length;
//             cookieValue = cookieData.substring(start, end);
//         }
//         return unescape(cookieValue);
//     }
//     , mergeNormalState(currentState, updateState) {
//         // 일반적인 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(updateState.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = updateState.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , mergeState(currentState, action) {
//         // redux의 state
//         // state에 특정 값을 갱신 및 항목을 추가
//         // 2depth에서 갱신, 3depth부터 에러
//         let tempObj1 = {};
//         let tempObj2 = {};
//         let keys1 = Object.keys(currentState.mainData);
//         for (let idx01 in keys1) {
//             tempObj1[keys1[idx01]] = currentState.mainData[keys1[idx01]];
//         }
//         let keys2 = Object.keys(action.value.mainData);
//         for (let idx02 in keys2) {
//             tempObj2[keys2[idx02]] = action.value.mainData[keys2[idx02]];
//         }
//         let keys3 = Object.keys(tempObj1);
//         let newObj = {};
//         for (let idx03 in keys3) {
//             let keys4 = Object.keys(tempObj2);
//             for (let idx04 in keys4) {
//                 if (keys3[idx03] === keys4[idx04]) {
//                     let source = tempObj1[keys3[idx03]];
//                     let target = tempObj2[keys4[idx04]];
//                     newObj = Object.assign({}, source, target);
//                     tempObj1[keys3[idx03]] = newObj;
//                 }
//             }
//         }
//         let newMainData = {};
//         newMainData["mainData"] = tempObj1;
//         return newMainData;
//     }
//     , checkUndefinedNullSpace(str) {
//         // 검사 undefined, null, space
//         if (str === undefined || str === "undefined" || str === null || str === "null" || str.trim() === "") {
//             return true;
//         }
//         return false;
//     }
//     , checkUndefinedNull(obj) {
//         // 검사 undefined와 null이 동시에 아닐 경우
//         if (obj === undefined || obj === "undefined" || obj === null || obj === "null") {
//             return true;
//         }
//         return false;
//     }
//     , clearObject(obj) {
//         //
//         let objKeys = Object.keys(obj);
//         //
//         for (let idx01 in objKeys) {
//             if (typeof (obj[objKeys[idx01]]) === "object") {
//                 if (Array.isArray(obj[objKeys[idx01]])) {
//                     obj[objKeys[idx01]] = [];
//                 } else {
//                     obj[objKeys[idx01]] = {}
//                 }
//             } else {
//                 obj[objKeys[idx01]] = "";
//             }
//         }
//         return obj;
//     }
//     , cloneTypeOf(data) {
//         let keys = Object.keys(data);
//         let newData = {};
//         //
//         for (let idx01 in keys) {
//             if (data[keys[idx01]] !== null) {
//                 if (typeof (data[keys[idx01]]) === "object") {
//                     if (Array.isArray(data[keys[idx01]])) {
//                         newData[keys[idx01]] = [];
//                     } else {
//                         newData[keys[idx01]] = {};
//                     }
//                 } else if (typeof (data[keys[idx01]]) === "boolean") {
//                     newData[keys[idx01]] = false;
//                 } else {
//                     newData[keys[idx01]] = "";
//                 }
//             } else {
//                 newData[keys[idx01]] = "";
//             }
//         }
//         return newData;
//     }
//     , isChanged(original, current) {
//         //
//         let originalKeys = Object.keys(original);
//         let currentKeys = Object.keys(current);
//         //
//         for (let idx01 in originalKeys) {
//             for (let idx02 in currentKeys) {
//                 if (originalKeys[idx01] === currentKeys[idx02]) {
//                     if (typeof (original[originalKeys[idx01]]) === "object") {
//                         if (Array.isArray(original[originalKeys[idx01]])) {
//                             if (original[originalKeys[idx01]].length !== current[currentKeys[idx02]].length) {
//                                 return true;
//                             } else if (original[originalKeys[idx01]].length === current[currentKeys[idx02]].length) {
//                                 let originalArray = original[originalKeys[idx01]];
//                                 let currentArray = current[currentKeys[idx02]];
//                                 let isChaged = false;
//                                 for (let idx03 in originalArray) {
//                                     if (originalArray[idx03] !== currentArray[idx03]) {
//                                         isChaged = true;
//                                     }
//                                 }
//                                 if (isChaged === true) {
//                                     return true;
//                                 } else if (isChaged === false) {
//                                     return false;
//                                 }
//                             }
//                         }
//                     } else {
//                         if (original[originalKeys[idx01]] !== current[currentKeys[idx02]]) {
//                             return true;
//                         }
//                     }
//                 }
//             }
//         }
//         return false;
//     }
//     , compareObj(originalObj, targetObj, except) {
//         let rtn = false;
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let originalKeys = [];
//         let targetKeys = [];
//         if (except.length >= 1) {
//             // 비교 제외할 항목
//             for (let idx033 = 0; idx033 < except.length; idx033++) {
//                 originalKeys.push(except[idx033])
//                 targetKeys.push(except[idx033]);
//             }
//         }
//         //
//         //
//         for (let idx01 = 0; idx01 < originalKeys.length; idx01++) {
//             // original
//             let originalKeyName = originalKeys[idx01];
//             let originValue = originalObj[originalKeyName];
//             // target
//             let targetKeyName = originalKeyName;
//             let targetValue = targetObj[originalKeyName];
//             //
//             if (typeof (originalObj[originalKeyName]) === "object") {
//                 // array과 Object은 모두 object으로 표현된다.
//                 if (Array.isArray(originalObj[originalKeyName])) {
//                     // 배열이면
//                     let new2Arr = [];
//                     let originalArr = originalObj[originalKeyName];
//                     let targetArr = targetObj[targetKeyName];
//                     if (originalArr.length !== targetArr.length) {
//                         rtn = true;
//                         idx01 = ((originalKeys.length * 1) + 1);
//                     }
//                     for (let idx03 = 0; idx03 < originalArr.length; idx03++) {
//                         if (originalArr[idx03] !== targetArr[idx03]) {
//                             rtn = true;
//                             idx03 = ((originalArr.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     rtnObj[originalKeyName] = new2Arr;
//                     //
//                 } else if (!Array.isArray(originalObj[originalKeyName])) {
//                     // 객체이면
//                     let original2Obj = originalObj[originalKeyName];
//                     let target2Obj = targetObj[originalKeyName];
//                     let original2Keys = Object.keys(original2Obj);
//                     //  let target2Keys = Object.keys(target2Obj);
//                     //
//                     for (let idx044 = 0; idx044 < original2Keys.length; idx044++) {
//                         let key2 = original2Keys[idx044];
//                         if (original2Obj[key2] !== target2Obj[key2]) {
//                             rtn = true;
//                             idx044 = ((original2Keys.length * 1) + 1);
//                             idx01 = ((originalKeys.length * 1) + 1);
//                         }
//                     }
//                     //
//                 }
//             } else {
//                 if (originValue !== targetValue) {
//                     // 값이 틀리다면 true;
//                     rtn = true;
//                     idx01 = ((originalKeys.length * 1) + 1);
//                 }
//             }
//         }
//         return rtn;
//     }
//     , copyObj(targetObj) {
//         // 1 depth objct, array
//         // 복사 가능 그 이하는 안됨
//         let rtnObj = {};
//         let keys = Object.keys(targetObj);
//         //
//         for (let idx01 in keys) {
//             let keyName = keys[idx01];
//             //
//             rtnObj[keyName] = targetObj[keyName];
//             //
//             //
//             if (targetObj[keyName] !== null) {
//                 if (typeof (targetObj[keyName]) === "object") {
//                     //
//                     if (Array.isArray(targetObj[keyName])) {
//                         // Array
//                         let new2Arr = [];
//                         for (let idx03 in targetObj[keyName]) {
//                             new2Arr[idx03] = targetObj[keyName][idx03];
//                         }
//                         rtnObj[keyName] = new2Arr;
//                         //
//                     } else if (!Array.isArray(targetObj[keyName])) {
//                         // Object
//                         let target2Obj = targetObj[keyName];
//                         let newKeys = Object.keys(target2Obj);
//                         let newObj = {};
//                         for (let idx02 in newKeys) {
//                             newObj[newKeys[idx02]] = target2Obj[newKeys[idx02]];
//                         }
//                         rtnObj[keyName] = newObj;
//                     }
//                 }
//             }
//         }
//         return rtnObj;
//     }
//     , copyNewRefMainData(obj) {
//         // 인스턴스가 다른 mainData object을 복사
//         let keys = Object.keys(obj.mainData);
//         let newObj = {};
//         let newMainData = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = obj.mainData[keys[idx01]];
//         }
//         newMainData["mainData"] = newObj;
//         return newMainData;
//     }
//     , copyToNewRefObj(source) {
//         // 인스턴스가 다른  object을 복사
//         let keys = Object.keys(source);
//         let newObj = {};
//         for (let idx01 in keys) {
//             newObj[keys[idx01]] = source[keys[idx01]];
//         }
//         return newObj;
//     }
//     , copyToNewRefArr(source) {
//         // 인스턴스가 다른  array 복사
//         let newArr = [];
//         for (let idx01 in source) {
//             let newObj = {};
//             let keys = Object.keys(source[idx01]);
//             for (let idx02 in keys) {
//                 let key = keys[idx02];
//                 let val = source[idx01][key];
//                 newObj[key] = val;
//             }
//             newArr.push(newObj);
//         }
//         return newArr;
//     }
//     , fullScreen() {
//         // 전체화면
//         if (!document.fullscreenElement &&    // alternative standard method
//             !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.mozRequestFullScreen) {
//                 document.documentElement.mozRequestFullScreen();
//             } else if (document.documentElement.webkitRequestFullscreen) {
//                 document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.cancelFullScreen) {
//                 document.cancelFullScreen();
//             } else if (document.mozCancelFullScreen) {
//                 document.mozCancelFullScreen();
//             } else if (document.webkitCancelFullScreen) {
//                 document.webkitCancelFullScreen();
//             }
//         }
//     }
//     , partOfFullScreen(id) {
//         // 특정화면 전체화면
//         // 2019-10-16
//         // 대시보드 안쪽 영역에서의 전체화면으로 추정된다.
//         if (!document.getElementById(id).fullscreenElement &&    // alternative standard method
//             !document.getElementById(id).mozFullScreenElement &&
//             !document.getElementById(id).webkitFullscreenElement) {  // current working methods
//             if (document.getElementById(id).requestFullscreen) {
//                 document.getElementById(id).requestFullscreen();
//             } else if (document.getElementById(id).mozRequestFullScreen) {
//                 document.getElementById(id).mozRequestFullScreen();
//             } else if (document.getElementById(id).webkitRequestFullscreen) {
//                 document.getElementById(id).webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//             }
//         } else {
//             if (document.getElementById(id).cancelFullScreen) {
//                 document.getElementById(id).cancelFullScreen();
//             } else if (document.getElementById(id).mozCancelFullScreen) {
//                 document.getElementById(id).mozCancelFullScreen();
//             } else if (document.getElementById(id).webkitCancelFullScreen) {
//                 document.getElementById(id).webkitCancelFullScreen();
//             }
//         }
//     }
//     , getSliceYMD(str) {
//         return str.substr(0, 10);
//     }
//     , getTableDateTime(str) {
//         //+1000002019-01-01T00:00 -> 2019-01-01 00:00
//         let YYYY = str.substr(7, 4);
//         let MM = str.substr(12, 2);
//         let DD = str.substr(15, 2);
//         let HH = str.substr(18, 2);
//         let MI = str.substr(21, 2);
//         return YYYY + "-" + MM + "-" + DD + " " + HH + ":" + MI;
//     }
//     , titleYYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(4, 2);
//         let DD = str.substr(6, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , getYYYMMDDSPACEHHMM(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2) + " " + str.substr(11, 2) + str.substr(14, 2);
//     }
//     , getDateToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/:/gi, "");
//         tempStr = tempStr.replace(/ /gi, "");
//         tempStr = tempStr.replace(/T/gi, "");
//         tempStr = tempStr.replace(/-/gi, "");
//         tempStr = tempStr.replace(/\+/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     },
//     getPhoneToNum(str) {
//         // YYYMMDD
//         let tempStr = str.replace(/-/gi, "");
//         tempStr = tempStr * 1;
//         return tempStr;
//     }
//     , getYYYMMDD(str) {
//         // YYYMMDD
//         return str.substr(0, 4) + str.substr(5, 2) + str.substr(8, 2);
//     }
//     , getHHMM(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2);
//     }
//     , getHH(str) {
//         // HH
//         return str.substr(11, 2);
//     }
//     , getMM(str) {
//         // MM
//         return str.substr(14, 2);
//     }
//     , getYYYMMDDSPACEHHMMSS(str) {
//         // 2019-12-05T05:04:09.129272
//         // YYYYMMDD HHMMSS
//         return str.substr(0, 10) + " " + str.substr(11, 8)
//     }
//     , getHHMMSS(str) {
//         // YYYMMDD
//         return str.substr(11, 2) + " : " + str.substr(14, 2) + " : " + str.substr(17, 2);
//     }
//     , getYMD(str) {
//         // 날짜을 자른다.
//         // 2019-11-27 01:00:16
//         // 2019
//         // 11
//         // 27
//         // 01
//         // 00
//         // 16
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , splitDate(str) {
//         // 날짜을 자른다.
//         // "2019-11-08T11:24:39.992".substr(0,4)
//         // "2019-11-08T11:24:39.992".substr(5,2)
//         // "2019-11-08T11:24:39.992".substr(7,2)
//         // "2019-11-08T11:24:39.992".substr(8,2)
//         // "2019-11-08T11:24:39.992".substr(11,2)
//         // "2019-11-08T11:24:39.992".substr(14,2)
//         // "2019-11-08T11:24:39.992".substr(17,2)
//         let obj = {
//             YYYY: str.substr(0, 4)
//             , MM: str.substr(5, 2)
//             , DD: str.substr(8, 2)
//             , HH: str.substr(11, 2)
//             , MI: str.substr(14, 2)
//             , SS: str.substr(17, 2)
//         }
//         return obj;
//     }
//     , cutDate(str) {
//         // 날짜을 자른다.
//         // +100000 0000-01-01T00:00
//         return str.substr(7, str.length - 1);
//     }
//     , cut10Date(str) {
//         // 날짜을 자른다.
//         // 0000-01-01
//         return str.substr(0, 10);
//     }
//     , rangePickerDateTime(str) {
//         // 날짜을 자른다.
//         // 2015-06-06T12:33 2015-06-06 12:33
//         let tempStr = str.split(".");
//         let tempStr2 = "";
//         if (tempStr.length === 2) {
//             tempStr2 = tempStr[0];
//         } else if (tempStr.length === 1) {
//             tempStr2 = str;
//         }
//         return tempStr2.replace("T", " ");
//     }
//     , hangulYYMMDD(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "년" + " " + MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , noticeDate(str) {
//         let YYYY = str.substr(0, 4);
//         let MM = str.substr(5, 2);
//         let DD = str.substr(8, 2);
//         let rtn = YYYY + "-" + MM + "-" + DD;
//         return rtn;
//     }
//     , hangulMMDD(str) {
//         let MM = str.substr(5, 2) * 1;
//         let DD = str.substr(8, 2) * 1;
//         let rtn = MM + "월" + " " + DD + "일";
//         return rtn;
//     }
//     , localDateTime() {
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + mm + dd + hour + min + sec;
//         return dateTime;
//     }
//     , beforeAMonth(ymd) {
//         let y1 = ymd.substr(0, 4);
//         let m1 = ((ymd.substr(5, 2) * 1) - 1);
//         let d1 = ymd.substr(8, 2);
//         //
//         let dt = new Date(y1, m1, d1);
//         dt.setDate(dt.getDate() + 1);
//         //
//         let y2 = "";
//         let m2 = "";
//         let d2 = "";
//         //
//         y2 = dt.getFullYear() + "";
//         if ((dt.getMonth() * 1) < 10) {
//             m2 = "0" + ((dt.getMonth() * 1) + 1) + "";
//         } else {
//             m2 = ((dt.getMonth() * 1) + 1) + "";
//         }
//         if ((dt.getDate() * 1) < 10) {
//             d2 = "0" + dt.getDate() + "";
//         } else {
//             d2 = dt.getDate() + "";
//         }
//         //
//         let rtn = y2 + "-" + m2 + "-" + d2;
//         //
//         return rtn;
//     }
//     , localRangeDateTime() {
//         // 서버시간
//         // 로컬시간
//         let today = new Date();
//         let dd = today.getDate();
//         let mm = today.getMonth() + 1; //January is 0!
//         let yyyy = today.getFullYear();
//         let hour = today.getHours();
//         let min = today.getMinutes();
//         let sec = today.getSeconds();
//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         if (hour < 10) {
//             hour = '0' + hour;
//         }
//         if (min < 10) {
//             min = '0' + min;
//         }
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         let dateTime = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min;
//         return dateTime;
//     }
//     , getRefDate(strDate) {
//         //
//         let yy = strDate.substr(0, 4);
//         let mm = strDate.substr(5, 2) - 1;
//         let dd = strDate.substr(8, 2);
//         let hh = strDate.substr(11, 2);
//         let mi = strDate.substr(14, 2);
//         //
//         let dt = new Date(yy, mm, dd, hh, mi)
//         //
//         return dt;
//     }
//     , getConnectorStatusInfo() {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         return {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//     }
//     , getConnectorStatusOneInfo(str) {
//         // Available - 충전대기
//         // Reserved - 충전예약
//         // Charging - 충전중 (백엔드 내부적으로는 Preparing, SuspendedEVSE, SuspendedEV를 Charging으로 mapping하여 REST API로 제공합니다.)
//         // Finishing - 충전완료
//         // Faulted - 점검중 (백엔드 내부적으로는 Unavailable 도 Faulted로 mapping하여 REST API로 제공합니다.)
//         // Offline - 통신장애/상태미확인 (통신장애/상태미확인 모두 서버에서 충전기 상태가 확인되지 않는 경우로 백엔드에서는 동일한 로직으로 처리하여 제공합니다.)
//         // 점유와 통신장애(Warning)일때 보여준다
//         // data1: '#33cc33', // 충전대기
//         // data2: '#f153ff', // 충전예약
//         // data3: '#0183ef', // 충전중
//         // data3: '#ffc000', // 충전완료
//         // data3: '#ff0000', // 점검중
//         // data3: '#7f7f7f', // 통신장애
//         let obj = {
//             "Available": { "ename": "Available", "kname": "충전대기", "kename": "충전대기(Available)", "color": "typ1", "rgb": "#33cc33", "error": "" }
//             , "Reserved": { "ename": "Reserved", "kname": "충전예약", "kename": "충전예약(Reserved)", "color": "typ2", "rgb": "#f153ff", "error": "" }
//             , "Charging": { "ename": "Charging", "kname": "충전중", "kename": "충전중(Charging)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Preparing": { "ename": "Preparing", "kname": "충전중", "kename": "충전중(Preparing)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEVSE": { "ename": "SuspendedEVSE", "kname": "충전중", "kename": "충전중(SuspendedEVSE)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "SuspendedEV": { "ename": "SuspendedEV", "kname": "충전중", "kename": "충전중(SuspendedEV)", "color": "typ3", "rgb": "#0183ef", "error": "" }
//             , "Finishing": { "ename": "Finishing", "kname": "충전완료", "kename": "충전완료(Finishing)", "color": "typ4", "rgb": "#ffc000", "error": "" }
//             , "Faulted": { "ename": "Faulted", "kname": "점검중", "kename": "점검중(Faulted)", "color": "typ5", "rgb": "#ff0000", "error": "" }
//             , "Offline": { "ename": "Offline", "kname": "통신장애(Warning)", "kename": "통신장애(Warning)(Offline)", "color": "typ6", "rgb": "#7f7f7f", "error": "is_error" }
//         };
//         return obj[str];
//     }
//     , getChargingSpeedInfo() {
//         // SUPER_FAST, FAST, SLOW
//         return {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getChargingSpeedOneInfo(str) {
//         // SUPER_FAST, FAST, SLOW
//         let obj = {
//             "SUPER_FAST": { "ename": "SUPER_FAST", "kname": "초급속" }
//             , "FAST": { "ename": "FAST", "kname": "급속" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//         return obj[str];
//     }
//     , getConnectorTypeInfo() {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         return {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         };
//     }
//     , getConnectorTypeOneInfo(str) {
//         // DCCOMBO DC콤보
//         // DCCHADEMO DC차데모
//         // AC3PHASE AC3상
//         // SLOW 완속
//         let obj = {
//             "DCCOMBO": { "ename": "DCCOMBO", "kname": "DC콤보" }
//             , "DCCHADEMO": { "ename": "DCCHADEMO", "kname": "DC차데모" }
//             , "AC3PHASE": { "ename": "AC3PHASE", "kname": "AC3상" }
//             , "SLOW": { "ename": "SLOW", "kname": "완속" }
//         }
//         return obj[str];
//     }
//     , initParticularValidation(pId) {
//         // 특정 벨리데이션 초기화 함수
//         let oId = document.getElementById(pId);
//         if (oId.closest(".check_error").classList.contains("has_error")) {
//             oId.closest(".check_error").classList.remove("has_error");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ1")) {
//             oId.closest(".check_error").classList.remove("e_typ1");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ2")) {
//             oId.closest(".check_error").classList.remove("e_typ2");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ3")) {
//             oId.closest(".check_error").classList.remove("e_typ3");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ4")) {
//             oId.closest(".check_error").classList.remove("e_typ4");
//         }
//         if (oId.closest(".check_error").classList.contains("e_typ5")) {
//             oId.closest(".check_error").classList.remove("e_typ5");
//         }
//     }
//     , setValidationType(pId, pType) {
//         // type 벨리데이션 처리
//         let sId = pId;
//         let sType = pType
//         let oId1 = document.getElementById(sId);
//         if (oId1.closest(".check_error").classList.contains(sType)) {
//             oId1.closest(".check_error").classList.remove(sType);
//         }
//         if (oId1.closest(".check_error").classList.contains("has_error")) {
//             oId1.closest(".check_error").classList.remove("has_error");
//         }
//         oId1.closest(".check_error").classList.add("has_error");
//         oId1.closest(".check_error").classList.add(sType);
//         oId1.focus();
//     }
//     , sameObjForObj(source, target) {
//         // value가 값이 아니면 비교하지 않는다.
//         // 예 : 배열
//         let isSame = true;
//         let sourceKeys = Object.keys(source);
//         let targetKeys = Object.keys(target);
//         if (targetKeys.length <= 0) {
//             //비교대상이 없는 경우는 false
//             isSame = false;
//         }
//         for (let idx01 in sourceKeys) {
//             let sourceKey = sourceKeys[idx01];
//             let sourceValue = source[sourceKey];
//             for (let idx02 in targetKeys) {
//                 let targetKey = targetKeys[idx02];
//                 let targetValue = target[targetKey];
//                 if (!Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
//                     if (sourceKey === targetKey) {
//                         if (sourceValue !== targetValue) {
//                             isSame = false;
//                         }
//                     }
//                 }
//             }
//         }
//         return isSame;
//     }
//     , nullRequestCheck(str) {
//         let strReturn;
//         if (!str || str === 0) {
//             strReturn = null;
//         } else {
//             strReturn = str;
//         }
//         return strReturn;
//     }
//     , nullRequestArray(arr) {
//         let arrReturn;
//         if (arr.length === 0) {
//             arrReturn = [];
//         } else {
//             arrReturn = arr;
//         }
//         return arrReturn;
//     }
//     , datilHypone(str) {
//         let detailValue = "";
//         if (String(str) === "" || Number(str) === 0 || str === null) {
//             detailValue = "";
//         } else {
//             detailValue = str;
//         }
//         return detailValue;
//     }
//     , tableSort(str) {
//         let tableSort = "";
//         if (str === "-") {
//             tableSort = 9999999999999999999999999999999999999999;
//         } else {
//             tableSort = str
//         }
//         return tableSort
//     }
//     , padZero(str) {
//         if ((str * 1) < 10) {
//             str = "0" + str;
//         }
//         return str;
//     }
//     , inputTelNumber(obj) {
//         // 전화번호 format
//         var number = obj.replace(/[^0-9]/g, "");
//         var tel = "";
//         // 서울 지역번호(02)가 들어오는 경우
//         if (number.substring(0, 2).indexOf('02') === 0) {
//             if (number.length < 3) {
//                 return number;
//             } else if (number.length < 6) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2);
//             } else if (number.length < 10) {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 3);
//                 tel += "-";
//                 tel += number.substr(5);
//             } else {
//                 tel += number.substr(0, 2);
//                 tel += "-";
//                 tel += number.substr(2, 4);
//                 tel += "-";
//                 tel += number.substr(6);
//             }
//             // 서울 지역번호(02)가 아닌경우
//         } else {
//             if (number.length < 4) {
//                 return number;
//             } else if (number.length < 7) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3);
//             } else if (number.length < 9) {
//                 tel += number.substr(0, 4);
//                 tel += "-";
//                 tel += number.substr(4);
//             } else if (number.length < 11) {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 3);
//                 tel += "-";
//                 tel += number.substr(6);
//             } else {
//                 tel += number.substr(0, 3);
//                 tel += "-";
//                 tel += number.substr(3, 4);
//                 tel += "-";
//                 tel += number.substr(7);
//             }
//         }
//         return tel;
//     }
//     , getAnnounceCatagory(category, isComplete, warningLevel) {
//         // 알림 카테고리
//         //
//         // TROUBLE(고)
//         // WARNING(장애(Warning)
//         // OCCUPY(점유)
//         // COMM_FAULT(통신장애)
//         // UNKNOWN(상태미확인)
//         // INOPERATIVE(가용성변경)
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고장-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         // isComplete: false < 등록 : false , 완료 :  true
//         let troubleSubTitle = "";
//         let troubleSubColor = "";
//         let troubleSubColor2 = "";
//         if (category === "TROUBLE") {
//             if (isComplete === false) {
//                 troubleSubTitle = "등록";
//                 troubleSubColor = "typ1_1";
//                 troubleSubColor2 = "alert_typ1_1";
//             } else if (isComplete === true) {
//                 troubleSubTitle = "완료";
//                 troubleSubColor = "typ1_2";
//                 troubleSubColor2 = "alert_typ1_2";
//             }
//         }
//         let inoperativeSubTitle = "";
//         let inoperativeColor = "";
//         let inoperativeColor2 = "";
//         if (category === "INOPERATIVE") {
//             if (isComplete === true) {
//                 // opertive
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_4";
//                 inoperativeColor2 = "alert_typ1_4";
//             } else if (isComplete === false) {
//                 // inoperative
//                 inoperativeSubTitle = "가용성변경";
//                 inoperativeColor = "typ1_3";
//                 inoperativeColor2 = "alert_typ1_3";
//             }
//         }
//         let categoryColor = "";
//         let categoryColor2 = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 categoryColor = "typ3_2";
//                 categoryColor2 = "alert_typ3_2";
//             } else if (isComplete === false) {
//                 categoryColor = "typ3_1";
//                 categoryColor2 = "alert_typ3_1";
//             }
//         }
//         //
//         let knameOccupy = "";
//         let title1Occupy = "";
//         let title2Occupy = "";
//         if (category === "OCCUPY") {
//             if (isComplete === true) {
//                 knameOccupy = "점유해제";
//                 title1Occupy = "점유해제";
//                 title2Occupy = "점유해제";
//             } else if (isComplete === false) {
//                 knameOccupy = "점유";
//                 title1Occupy = "점유";
//                 title2Occupy = "점유";
//             }
//         }
//         // , "WARNING": {
//         //     ename: "WARNING"
//         //     , kname: "장애"
//         //     , title1: "장애(Warning)"
//         //     , title2: "장애(Warning)"
//         //     , color1: "typ2"
//         //     , color2: "alert_typ2"
//         let knameWarning = "";
//         let title1Warning = "";
//         let title2Warning = "";
//         //
//         //
//         if (category === "WARNING") {
//             if (warningLevel === "Undefined") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Undefined)";
//                 title2Warning = "장애(Undefined)";
//             } else if (warningLevel === "Warning") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Warning)";
//                 title2Warning = "장애(Warning)";
//             } else if (warningLevel === "Critical") {
//                 knameWarning = "장애";
//                 title1Warning = "장애(Critical)";
//                 title2Warning = "장애(Critical)";
//             }
//         }
//         //
//         // typ1_1(고장-등록)
//         // typ1_2(고장-완료)
//         // typ1_3(고장-가용성변경inoperative)
//         // typ1_4(고���-가용성변경operative)
//         // typ2(장애Warning)
//         // typ3_1(점유_red)
//         // typ3_2(점유_해제)
//         // typ4(통신장애)
//         // typ5(상태미확인)
//         //
//         // alert_typ1_1(고장-등록)
//         // alert_typ1_2(고장-완료)
//         // alert_typ1_3(고장-가용성변경inoperative)
//         // alert_typ1_4(고장-가용성변경operative)
//         // alert_typ2(장애Warning)
//         // alert_typ3_1(점유_red)
//         // alert_typ3_2(점유_해제)
//         // alert_typ4(통신장애)
//         // alert_typ5(상태미확인)
//         // alert_typ6(미확인알람)
//         //
//         let obj = {
//             "TROUBLE": {
//                 ename: "TROUBLE"
//                 , kname: "고장"
//                 , title1: "고장-" + troubleSubTitle
//                 , title2: "고장-" + troubleSubTitle
//                 , color1: troubleSubColor
//                 , color2: troubleSubColor2
//             }
//             , "WARNING": {
//                 ename: "WARNING"
//                 , kname: knameWarning
//                 , title1: title1Warning
//                 , title2: title2Warning
//                 , color1: "typ2"
//                 , color2: "alert_typ2"
//             }
//             , "OCCUPY": {
//                 ename: "OCCUPY"
//                 , kname: knameOccupy
//                 , title1: title1Occupy
//                 , title2: title2Occupy
//                 , color1: categoryColor
//                 , color2: categoryColor2
//             }
//             , "COMM_FAULT": {
//                 ename: "COMM_FAULT"
//                 , kname: "통신장애"
//                 , title1: "통신장애"
//                 , title2: "통신장애"
//                 , color1: "typ4"
//                 , color2: "alert_typ4"
//             }
//             , "UNKNOWN": {
//                 ename: "UNKNOWN"
//                 , kname: "상태미확인"
//                 , title1: "상태미확인"
//                 , title2: "상태미확인"
//                 , color1: "typ5"
//                 , color2: "alert_typ5"
//             }
//             , "INOPERATIVE": {
//                 ename: "INOPERATIVE"
//                 , kname: "가용성변경"
//                 , title1: inoperativeSubTitle
//                 , title2: inoperativeSubTitle
//                 , color1: inoperativeColor
//                 , color2: inoperativeColor2
//             }
//             , "NOTICE": {
//                 ename: "NOTICE"
//                 , kname: "미확인알림"
//                 , title1: "미확인알림"
//                 , title2: "미확인알림"
//                 , color1: "typ6"
//                 , color2: "alert_typ6"
//             }
//         };
//         let keys = Object.keys(obj);
//         for (let idx in keys) {
//             if (category === keys[idx]) {
//                 return obj[keys[idx]];
//             }
//         }
//     }
//     , getColor() {
//         return [
//             "#00a99d"
//             , "#ff7663"
//             , "#ffb74f"
//             , "#a2df53"
//             , "#2c97de"
//             , "#b771ed"
//             , "#c69c6d"
//             , "#64c2f8"
//             , "#6874a8"
//             , "#fe2f87"
//             , "#3f1c00"
//             , "#0065c6"
//             , "#5f8a1f"
//             , "#8c6239"
//             , "#c90126"
//             , "#a2b9bc"
//             , "#b2ad7f"
//             , "#878f99"
//             , "#6b5b95"
//             , "#feb236"
//             , "#d64161"
//             , "#ff7b25"
//             , "#d6cbd3"
//             , "#eca1a6"
//             , "#bdcebe"
//             , "#ada397"
//             , "#b5e7a0"
//             , "#86af49"
//             , "#af8a65"
//             , "#c4b7a6"
//             , "#3e4444"
//             , "#405d27"
//             , "#92a8d1"
//             , "#034f84"
//             , "#c94c4c"
//             , "#80ced6"
//             , "#618685"
//             , "#50394c"
//             , "#b2b2b2"
//             , "#36486b"
//             , "#313188"
//             , "#bc5a45"
//             , "#c5d5c5"
//             , "#65623c"
//             , "#77a8a8"
//             , "#b0aac0"
//             , "#563f46"
//             , "#7e4a35"
//             , "#cab577"
//             , "#838060"
//             , "#bbab9b"
//             , "#686256"
//             , "#c1502e"
//             , "#4285F4"
//             , "#34A853"
//             , "#3B5998"
//             , "#EA4335"
//             , "#F65314"
//             , "#7CBB00"
//             , "#7B0099"
//             , "#BE9EC9"
//             , "#006E6D"
//             , "#485167"
//             , "#944743"
//             , "#DBB1CD"
//             , "#BC70A4"
//             , "#D2691E"
//             , "#AF9483"
//             , "#AD5D5D"
//             , "#006E51"
//             , "#D8AE47"
//             , "#B76BA3"
//             , "#a6001a"
//             , "#172035"
//             , "#686b69"
//             , "#1c1d22"
//             , "#0b0b0d"
//             , "#a0333a"
//             , "#c98a71"
//             , "#428b64"
//             , "#9e7339"
//             , "#d6265d"
//             , "#ee7979"
//             , "#e63d3d"
//             , "#4c5364"
//             , "#1b1464"
//             , "#440e62"
//             , "#007236"
//             , "#3cb878"
//             , "#f06eaa"
//             , "#fff200"
//             , "#80FF00"
//             , "#00FFFF"
//             , "#0000FF"
//             , "#8000FF"
//             , "#FF00FF"
//             , "#C21460"
//             , "#4424d6"
//             , "#347C98"
//             , "#a1a1a1"
//         ];
//     }
//     , getMessage(file, call, action, message) {
//         let me = this;
//         if (action === "SAVE") {
//             me.antNotice(null, null, message + " 저장했습니다.", function () { });
//         } else if (action === "MODIFY") {
//             me.antNotice(null, null, message + " 수정했습니다.", function () { });
//         } else if (action === "IS_NUMBER") {
//             me.antNotice(null, null, "숫자만 입력가능합니다", function () { });
//         }
//     }
//     , weekCount(dt) {
//         const day = 1000 * 60 * 60 * 24;
//         var thisDay = dt;
//         var theFirstDay = new Date(dt.getFullYear(), 0, 1);
//         var theFirstDayOfWeek = theFirstDay.getDay();
//         if (theFirstDayOfWeek > 4) {
//             theFirstDay.setDate(theFirstDayOfWeek - 4 - 1 + 7);
//         } else {
//             theFirstDay.setDate(4 - theFirstDayOfWeek + 1);
//         }
//         var diff = Math.abs(thisDay.getTime() - theFirstDay.getTime()) / day;
//         return Math.ceil(diff / 7);
//     }
//     , getWeekOfMonth(dt) {
//         var selectedDayOfMonth = dt.getDate();
//         var first = new Date(dt.getFullYear(), dt.getMonth() + 1, 1);
//         var monthFirstDateDay = first.getDay();
//         return Math.ceil((selectedDayOfMonth + monthFirstDateDay) / 7);
//     }
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Common Guide > Component 정의> 팝업 시나리오 v1.1 p52
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소 :
//     // 입력된 내용있는 경우, 취소 확인(Confirm) 시스템팝업호출
//     // ( '작성중인{상세영역또는팝업창Header Title} 정보가 저장되지 않았습니다. 페이지를 나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 추가 - 취소 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전 상태)
//     // 추가 - 취소 - 확인 : 팝업창닫힘. 저장안됨. 메뉴default로 복귀
//     // 추가 - 취소 - 입력된 내용없는 경우, 메뉴 default로 복귀
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 저장 : 저장 확인(Confirm) 시스템팝업호출
//     // ( '{상세영역또는팝업창HeaderTitle} 정보를 저장하시겠습니까?’ [취소] [확인] )
//     //
//     // 추가 - 저장 - 취소 : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 추가 - 저장 - 확인 - Y :
//     // 팝업창 닫힘.
//     // 저장성공한경우, 저장완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보를 저장했습니다.')
//     //
//     // 추가 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert) 시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보저장에 실패했습니다.‘ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 삭제 :
//     // 삭제 확인(Confirm) 시스템 팝업 호출
//     // ( '{상세영역또는팝업창Header Title} 정보를 삭제하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 삭제 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 삭제 - 확인 - Y :
//     // 팝업창닫힘.
//     // 삭제성공한 경우 삭제완료(Success Notification) 시스템팝업(Toast)호출
//     // ( '{상세영역 또는 팝업창HeaderTitle} 정보를 삭제했습니다.' )
//     //
//     // 수정 - 삭제 - 확인 - N :
//     // 팝업창닫힘.
//     // 삭제실패한경우, 삭제실패알림(Alert)시스템팝업호출
//     // ( '{상세영역 또는 팝업창Header Title} 정보삭제에 실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 취소 :
//     // 입력된 내용있는 경우, 취소확인(Confirm) 시스템 팝업 호출
//     // ('작성중인{상세영역또는팝업창Header Title} 정보가저장되지않았습니다. 페이지를나가시겠습니까?‘ [취소] [확인] )
//     //
//     // 수정 - 취소 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 취소 - 확인 - N : 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 수정 - 취소 - 입력된내용없는경우, 메뉴default 상태로복귀
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 수정 - 저장 :
//     // 저장확인(Confirm)시스템팝업호출
//     // ('{상세영역또는팝업창Header Title} 정보를 저장하시겠습니까?’ [취소] [확인])
//     //
//     // 수정 - 저장 - 취소 - N : 팝업창닫힘. 이전화면복귀(저장이전상태)
//     // 수정 - 저장 - 확인 - Y :
//     // 팝업창닫힘.
//     // 저장성공한경우, 저장완료(Success Notification)시스템팝업(Toast)호출
//     // ('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//     //
//     // 수정 - 저장 - 확인 - N :
//     // 팝업창닫힘.
//     // 저장실패한경우, 저장실패알림(Alert)시스템팝업호출
//     // ( '{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인] )
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //   [Description]
//     // • 확인 시스템팝업 및 알림 시스템팝업에서는 제공하지 않음.
//     //   완료시스템팝업에서는 팝업창 닫기[X] 버튼 제공하며 클릭시, 팝업창 닫힘
//     //
//     // • [저장] 버튼default : 비활성화. 변경사항이 있는 경우에만 버튼활성화-[저장] 버튼클릭시,
//     //   validation check 진행후, 조건충족시에만 저장확인(Confirm)
//     //   시스템팝업 호출(validation 조건 미충족시, 알림(Alert) 팝업또는 필드하단에 도움말제공)
//     //
//     // • 메뉴 default : Control Area의 정보영역리스트 Deselect된 상태, Status Area 공백상태및 도움말제공(‘Click the item to read’)
//     //
//     // • 완료(Success Notification) 시스템팝업에 Toast 기능적용(팝업 호출되어 3초경과시, 팝업 자동닫힘. 모달팝업 아님)
//     //
//     // • 입력문구는 Common Guide를 따르며, 예외 케이스의 경우 상세시나리오 description을 따름
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 완료시스템팝업 Toast 기능추가
//     // 2) Ant design Modal 기능적용(적용하지 않을 경우, 브라우저 제공시스템 팝업 사용)
//     // 3) 저장/삭제 실패 케이스 추가
//     // 4) validation check 및확인시스템팝업순서규칙적용
//     // 1) 변경사항이 있는 경우 에만 [저장] 버튼활성화
//     // 2) 확인, 알림팝업에서는 닫기 버튼 미제공(Ant design)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) Ant design Modal 기능적용 (적용하지않을경우, 브라우저 제공시스템 팝업사용)
//     // 1) 팝업호출 되었을 때의 위치수정 (상단중앙영역)
//     // 2) 취소, 확인버튼위치는우측하단 (ant design제약)
//     // 3) 모달팝업내 닫기 버튼 삭제
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 취소 확인 시스템팝업 호출 Flow (새로운정보를 추가하거나 수정하는 경우 모두포함)
//     //
//     // 1) 내용 입력 또는 기존 설정 변경후, [취소] 버튼클릭시 취소확인 시스템팝업 호출
//     //    [취소] 팝업창 닫힘. 이전화면복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 메뉴default로복귀
//     // 2) 내용 입력 또는 기존 설정 변경후, Control Area의 정보영역(ex : Table영역) 클릭시 취소 확인 시스템 팝업 호출
//     //    [취소] 팝업창닫힘. 이전화면 복귀(저장이전상태)
//     //    [확인] 팝업창닫힘. 저장안됨. 클릭된리스트의 정보가 Status Area 상세영역에 표시
//     //
//     // 3) 다른메뉴(ex : ‘대시보드’ 메뉴버튼) 클릭시 취소 확인 시스템팝업호출 되지않음. 선택된 메뉴default 화면으로 이동
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     //
//     // • 팝업창 유형:
//     //   - 일반팝업: 팝업내입력된정보를화면에적용([그림2])
//     //   - 정보성팝업: 정보 제공 목적으로[확인] 버튼만 존재([그림3])
//     //   - 확인(Confirm) 시스템팝업: 사용자에게 선택에 대한 확인이 목적으로[확인], [취소] 버튼이 함께 제공됨. 모달적용
//     //   - 알림(Alert)시스템팝업: 알림, 사용자조작에 대한 Feedback Message 전달이 목적으로[확인] 버튼만 존재. 모달적용
//     //   - 완료(Success Notification) 시스템팝업: 사용자조작이 성공했을 때의 Feedback Message 전달이목적,
//     //     Toast (3초)기능적용되며[확인] 버튼이 존재하지 않음. 모달적용안함
//     //   - [닫기] 버튼항상제공. 버튼클릭시 저장없이 팝업창 닫힘(예외: 확인시스템팝업및알림시스템팝업에서는제공하지않음)
//     //
//     // • 팝업창은 활성화된 브라우저 중앙에 위치하며 화면은 dim 처리됨(Opacity 값은디자인가이드참고)
//     //
//     // • 정보의양에따라대/중/소로크기를선택하여구성
//     //
//     // • [팝업] + [팝업]은지양하나[팝업] + [알림(Alert)팝업] 또는[팝업] + [완료(Success Notification)]은사용가능
//     //
//     // • 팝업에서Acton Button은팝업창영역중앙최하단에배치
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 배경dim 처리description 보완
//     // 2) 팝업창 유형 내용 추가
//     // 1) 닫기 버튼 예외케이스 description 추가
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 취소확인시스템팝업문구통일
//     // 2) 저장확인시스템팝업예시추가
//     // 3) 완료시스템팝업Toast 기능추가
//     // 4) Ant design Modal 기능적용
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1) 확인, 알림팝업의위치description 추가(상단중앙영역)
//     // 2) 아이콘색상ant design 따름(확인/알림/완료)
//     // 3) 취소, 확인버튼위치는우측하단(ant design제약)
//     // 4) 모달팝업내닫기버튼삭제
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 1)그림2-3 추가(파일다운로드확인)
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //  Description
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // [Description]
//     // • 결과에 대한 피드백이 나오류등의 메시지 팝업은 Confirm, Alert, Notification 형태로 제공함
//     //
//     // • 확인(Confirm) 시스템팝업:
//     //   사용자에게 선택에 대한 확인이 필요한 경우, [확인], [취소] 버튼이 함께 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업 호출
//     //
//     // • 알림(Alert) 시스템팝업:
//     //   피드백을 제공하여 별도 선택버튼이 필요없는 경우,
//     //   팝업창에[확인] 버튼이 제공됨, 모달적용, 브라우저 상단 중앙영역에 팝업호출
//     //   - validation check 조건에 부합하지않은 경우, 또는 저장/등록/승인/수정/생성/삭제 실패 했을때 알림 시스템팝업호출
//     //   - 엑셀등의 파일 다운로드 성공여부를 확인하기 위한 알림 시스템팝업호출([그림2-3])
//     //
//     // • 완료(Success Notification) 시스템팝업: [확인] 버튼없이 Toast 기능 적용됨,
//     //   모달 적용안함
//     //   - 저장/등록/승인/수정/생성/삭제 성공했을때 완료시스템팝업호출 (실패한경우알림(Alert) 시스템팝업호출)
//     //   - Toast 기능은 브라우저 화면 Bottom Right 영역에 팝업호출후 3초가 지난뒤자동으로 팝업닫힘. 모달팝업이 아니며,
//     //     [닫기] 버튼클릭시, 3초경과하지않아도팝업닫힘
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // 추가 - 취소
//     , popupAddCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content = "작성중인 " + prefix + ' 정보가 저장되지\n 않았습니다. 페이지를 나가시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 취소
//     , popupModifyCancel(me, response, prefix, cancelFunc, okFunc) {
//         let content1 = "작성중인 " + prefix + " 정보가 저장되지 않았습니다. ";
//         let content2 = "페이지를 나가시겠습니까?";
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content1}<br />{content2}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 추가 - 저장
//     , popupNewAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 저장
//     , popupModifyAdd(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 저장하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 수정 - 삭제
//     , popupModifyDelete(me, response, prefix, cancelFunc, okFunc) {
//         let content = prefix + ' 정보를 삭제하시겠습니까?';
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: <div>{content}</div>
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 알림
//     , antNotice(me, response, content, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.info({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "알림"
//             , content: contentTag
//             , okText: '확인'
//             , onOk: okFunc
//         });
//     }
//     // 확인
//     , antConfirm(me, response, content, cancelFunc, okFunc) {
//         let contentTag = "";
//         if (content.split("|").length === 1) {
//             contentTag = <p>{content}</p>;
//         } else if (content.split("|").length === 2) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}</p>;
//         } else if (content.split("|").length === 3) {
//             contentTag = <p>{content.split("|")[0]}<br />{content.split("|")[1]}<br />{content.split("|")[2]}</p>;
//         } else {
//             contentTag = <p>{content}</p>;
//         }
//         Modal.confirm({
//             icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//             , title: "확인"
//             , content: contentTag
//             , cancelText: '취소'
//             , okText: '확인'
//             , onCancel: cancelFunc
//             , onOk: okFunc
//         });
//     }
//     // 저장
//     , antNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: failFunc
//             });
//         }
//     }
//     // 저장
//     , antNotification2(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         let failDescriptionTag = "";
//         if (failDescription.split("|").length === 1) {
//             failDescriptionTag = <p>{failDescription}</p>;
//         } else if (failDescription.split("|").length === 2) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}</p>;
//         } else if (failDescription.split("|").length === 3) {
//             failDescriptionTag = <p>{failDescription.split("|")[0]}<br />{failDescription.split("|")[1]}<br />{failDescription.split("|")[2]}</p>;
//         } else {
//             failDescriptionTag = <p>{failDescription}</p>;
//         }
//         if (response.data.code === 0 || response.data.msg === "success") {
//             // 팝업창닫힘. 저장성공한경우,
//             // 저장완료(Success Notification)시스템팝업(Toast)
//             // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//             notification.config({
//                 placement: 'bottomRight',
//                 duration: 2
//             });
//             notification.success({
//                 message: message
//                 , description: successDescription
//             });
//             successFunc();
//         } else {
//             //
//             failFunc();
//             //
//             // 팝업창닫힘. 저장실패한경우,
//             // 저장실패알림(Alert)시스템팝업호출
//             // ('{상세영역또는팝업창Header Title} 정보저장에실패했습니다.’ [확인])
//             Modal.info({
//                 icon: <Icon theme="outlined" type="exclamation-circle" style={{ color: '#faad14' }} />
//                 , title: "알림"
//                 , content: failDescriptionTag
//                 , okText: '확인'
//                 , onOk: function () { }
//             });
//         }
//     }
//     // 삭제 reponse 값에 성공 실패가 없는 상태의 값을 전달시 사용
//     , antDeleteNotification(me, response, message, successDescription, failDescription, successFunc, failFunc) {
//         // 팝업창닫힘. 저장성공한경우,
//         // 저장완료(Success Notification)시스템팝업(Toast)
//         // 호출('{상세영역또는팝업창Header Title} 정보를저장했습니다.')
//         notification.config({
//             placement: 'bottomRight',
//             duration: 3,
//         });
//         notification.success({
//             message: message
//             , description: successDescription
//         });
//         successFunc();
//     }
//     , tableStatusMessage(tableStatus, errorCode) {
//         //         <Table
//         //   locale={{ emptyText: (<span>
//         //     暂无订单数据
//         //     <img src="https://www.baidu.com/img/bd_logo1.png" />
//         //     <Button>do something</Button>
//         //     </span>)
//         //    }} />
//         if (tableStatus === undefined || tableStatus === null || tableStatus === "") {
//             tableStatus = "FIRST";
//             errorCode = "000-00-000";
//         }
//         let emptyText = "";
//         //데이터가 존재하지 않습니다.
//         //데이터 처리중입니다. 잠시만 기다려주세요.
//         //데이터로딩에 실패하였습니다. Error Code : 000-00-000
//         if (tableStatus === "FIRST") {
//             emptyText = (
//                 <>
//                     <img src={Loading} />
//                     <p>데이터 처리중입니다.<br /> 잠시만 기다려주세요.</p>
//                 </>
//             );
//         } else if (tableStatus === "EXIST") {
//             emptyText = ("");
//         } else if (tableStatus === "EMPTY") {
//             emptyText = (
//                 <>
//                     <img src={IcoNodata} />
//                     <p>데이터가 존재하지 않습니다.</p>
//                 </>
//             );
//         } else if (tableStatus === "FAIL") {
//             emptyText = (<p>데이터로딩에 실패하였습니다.<br /> Error Code :{errorCode}</p>);
//         }
//         return emptyText;
//     }
//     , lightenDarkenColor(col, amt) {
//         var usePound = false;
//         if (col[0] === "#") {
//             col = col.slice(1);
//             usePound = true;
//         }
//         var num = parseInt(col, 16);
//         var r = (num >> 16) + amt;
//         if (r > 255) r = 255;
//         else if (r < 0) r = 0;
//         var b = ((num >> 8) & 0x00FF) + amt;
//         if (b > 255) b = 255;
//         else if (b < 0) b = 0;
//         var g = (num & 0x0000FF) + amt;
//         if (g > 255) g = 255;
//         else if (g < 0) g = 0;
//         return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
//     }
//     , getFileExts() {
//         // TRR때 말씀드린 공지사항 첨부파일 업로드 제한 타입에 대한 이슈입니다.
//         // 내용 참고하셔서 반영 부탁드립니다. 감사합니다.
//         // 파일 타입 제한 : 확장자는 대소문자 구분하지 않아야 함.
//         // • 인증서 파일: crt, cer, csr, pem, der, pfx, p12, jks, key
//         // • DB: cdx, idc, db, sql
//         // • 실행 파일: exe, com, cmd, bat, sh, apk
//         // • 윈도우 패스워드 서비스 스크립트파일: htr
//         // • 웹: html, htm, war
//         // • 서버 스크립트 파일: asp, aspx, ascx, ashx, axd, phtml, php, php3, php4, php5, inc, jsp, jspx, jsw, jsv, jspf, pl, pm, cgi, lib, cfm, cfml, cfc, dbm
//         return [
//             "crt", "cer",
//             "csr", "pem",
//             "der", "pfx",
//             "p12", "jks",
//             "key", "cdx",
//             "idc", "db",
//             "sql", "exe",
//             "com", "cmd",
//             "bat", "sh",
//             "apk", "htr",
//             "html", "htm",
//             "war", "asp",
//             "aspx", "ascx",
//             "ashx", "axd",
//             "phtml", "php",
//             "php3", "php4",
//             "php5", "inc",
//             "jsp", "jspx",
//             "jsw", "jsv",
//             "jspf", "pl",
//             "pm", "cgi",
//             "lib", "cfm",
//             "cfml", "cfc",
//             "dbm",
//         ]
//     }
//     , getBlockFileExt(fileExt) {
//         //
//         let meUtils = this;
//         let arrFileExts = meUtils.getFileExts();
//         let isExist = false;
//         for (let idx01 in arrFileExts) {
//             if (arrFileExts[idx01].toUpperCase() === fileExt.toUpperCase()) {
//                 //
//                 isExist = true;
//             }
//         }
//         return isExist
//     }
//     , checkResponse(filename, lineName, response, me) {
//         // file : 호출 할 때 파일명
//         // func : 호출 할 때 함수명
//         // cmm  : 호출 할 때 명령어
//         // toast : Toast 사용 유무
//         // response : axios 사용후 응답
//         // me : 호출 할 때 소속된 전체 객체, this
//         // cmm
//         // 대문자
//         // SAVE : 저장
//         // SEARCH : 조회
//         // UPDATE : 갱신
//         // DELETE : 삭제
//         // TOAST : 단순 toast 출력
//         // ETC : 기타 명령어
//         // =====================================================================
//         // response code
//         // =====================================================================
//         // HTTP : 200
//         // response : 100
//         // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 101
//         // "Your account has been disabled." 계정이 비활성 된 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 102
//         // "Full authentication is required to access this resource"
//         // 인증이 안 된 계정으로 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 104
//         // This session has been expired
//         // (possibly due to multiple concurrent logins being attempted as the same user)."
//         // 동일 아이디 동시 접속 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 105
//         // "Authentication request could not be processed due to internal server error."
//         // 내부 서버 오류
//         // =====================================================================
//         // HTTP : 200
//         // response : 106
//         // "Password mismatch"
//         // 입력한 현재 비밀번호 정보가 불일치했을 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 107
//         // "Password was recently used and is not valid for reuse."
//         // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//         // =====================================================================
//         // HTTP : 200
//         // response : 108
//         // "User ID already exists. Please use a different one."
//         // 이미 사용중인 ID로 사용자 추가하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 109
//         // "User not found."
//         // 존재하지 않는 사용자 ID를 수정하고자 할 때
//         // =====================================================================
//         // HTTP : 200
//         // response : 110
//         // "Invalid JSESSIONID."
//         // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//         // =====================================================================
//         // HTTP : 200
//         // response : 111
//         // "Delete the relevant user account before deleting the permissions.
//         // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//         // =====================================================================
//         // HTTP : 200
//         // response : 112
//         // "Role name is duplicated."
//         // =====================================================================
//         // 권한 이름 중복
//         // HTTP : 200
//         // response : 113
//         // "Group code is duplicated."
//         // =====================================================================
//         // 권한 그룹 코드 중복
//         // HTTP : 200
//         // response : 114
//         // "This session has been expired due to password change."
//         // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 115
//         // "This session has been expired due to account deactivation."
//         // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//         // =====================================================================
//         // HTTP : 200
//         // response : 103
//         // "Access is denied"
//         //  권한 없는 메뉴가 호출되었습니다
//         // =====================================================================
//         let meUtils = this;
//         //
//         if (filename === "App" || filename === "loginInputBox") {
//             // App.
//             if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else {
//                 return true;
//             }
//         } else {
//             if (response.data.code === 0) {
//                 return true;
//             } else if (response.data.code === 200) {
//                 return true;
//             } else if (response.data.code === 100) {
//                 // HTTP : 200
//                 // response : 100
//                 // "Please check your ID or Password." 아이디 혹은 비밀번호 오류
//                 return false;
//             } else if (response.data.code === 101) {
//                 // HTTP : 200
//                 // response : 101
//                 // "Your account has been disabled." 계정이 비활성 된 경우
//                 return false;
//             } else if (response.data.code === 102) {
//                 // HTTP : 200
//                 // response : 102
//                 // "Full authentication is required to access this resource"
//                 // 인증이 안 된 계정으로 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.logOut();
//                     return false;
//                 }
//             } else if (response.data.code === 103) {
//                 // HTTP : 200
//                 // response : 103
//                 // "Access is denied" 인증은 되었으나 권한이 없는 API를 호출한 경우
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "권한없는 메뉴가 호출되었습니다.", function () {
//                         window.location.reload();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 104) {
//                 // HTTP : 200
//                 // response : 104
//                 // This session has been expired
//                 // (possibly due to multiple concurrent logins being attempted as the same user)."
//                 // 동일 아이디 동시 접속 오류
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "중복된 아이디 로그인으로 인해 자동 로그아웃 되었습니다.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 105) {
//                 // HTTP : 200
//                 // response : 105
//                 // "Authentication request could not be processed due to internal server error."
//                 // 내부 서버 오류
//                 return false;
//             } else if (response.data.code === 106) {
//                 // HTTP : 200
//                 // response : 106
//                 // "Password mismatch"
//                 // 입력한 현재 비밀번호 정보가 불일치했을 때
//                 return false;
//             } else if (response.data.code === 107) {
//                 // HTTP : 200
//                 // response : 107
//                 // "Password was recently used and is not valid for reuse."
//                 // 최근 사용한 비밀번호를 재사용 할 시 (4번째PW 갱신시, 기존PW 재사용가능)
//                 return false;
//             } else if (response.data.code === 108) {
//                 // HTTP : 200
//                 // response : 108
//                 // "User ID already exists. Please use a different one."
//                 // 이미 사용중인 ID로 사용자 추가하고자 할 때
//                 return false;
//             } else if (response.data.code === 109) {
//                 // HTTP : 200
//                 // response : 109
//                 // "User not found."
//                 // 존재하지 않는 사용자 ID를 수정하고자 할 때
//                 return false;
//             } else if (response.data.code === 110) {
//                 // HTTP : 200
//                 // response : 110
//                 // "Invalid JSESSIONID."
//                 // 유효하지 않은 JSESSIONID로 로그아웃 요청한 경우
//                 return false;
//             } else if (response.data.code === 111) {
//                 // HTTP : 200
//                 // response : 111
//                 // "Delete the relevant user account before deleting the permissions.
//                 // 권한 삭제시 해당 권한을 갖는 계정이 존재할 경우 (권한을 갖는 계정이 먼저 삭제되어야 함)
//                 return false;
//             } else if (response.data.code === 112) {
//                 // HTTP : 200
//                 // response : 112
//                 // "Role name is duplicated."
//                 return false;
//             } else if (response.data.code === 113) {
//                 // HTTP : 200
//                 // response : 113
//                 // "Group code is duplicated."
//                 return false;
//             } else if (response.data.code === 114) {
//                 // HTTP : 200
//                 // response : 114
//                 // "This session has been expired due to password change."
//                 // 계정 비밀번호 변경으로 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     meUtils.antNotice(null, null, "비밀번호 정보가 변경되어 로그아웃 되었습니다.|재로그인하세요.", function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 115) {
//                 // HTTP : 200
//                 // response : 115
//                 // "This session has been expired due to account deactivation."
//                 // 계정이 비활성화 되어 세션이 삭제된 경우 (자동 로그아웃)
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "해당 계정은 비활성화 상태로 전환되었습니다.|로그인 오류가 5회 초과한 경우에도 로그인 제한됩니다.|고객센터에 문의바랍니다.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     return false;
//                 }
//             } else if (response.data.code === 117) {
//                 // HTTP : 200
//                 // response : 117
//                 // 권한이 중간에 변경된 경우 해당 권한에 해당 하는 사용자는 로그아웃이 된다.
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "메뉴권한설정 정보가 변경되어 로그아웃 되었습니다.|재 로그인하세요.";
//                     meUtils.antNotice(null, null, message, function () {
//                         meUtils.logOut();
//                     });
//                     meUtils.emptyCode();
//                     return false;
//                 }
//             } else if (response.data.code === 1) {
//                 // HTTP : 200
//                 // response : 103
//                 // {"code":103, "msg":"Access is denied", "user": null}
//                 // 권한 없는 메뉴가 호출되었습니다
//                 responseCnt++;
//                 if (responseCnt === 1) {
//                     let message = "서버 오류로 인해 요청을 완료할 수 없습니다. 다시 시도해주세요.";
//                     meUtils.antNotice(null, null, message, function () { });
//                     return false;
//                 }
//             }
//         }
//     }
//     , logOut() {
//         try {
//             let meUtils = this;
//             meUtils.getLocationHref();
//         } catch (e) {
//         }
//     }
//     , consoleLog(e) {
//         let view = true;
//         if (view) {
//             console.log(e);
//         }
//     }
//     , graphYRange(num) {
//         // 1. y축에 0 눈금과 함께 5개의 눈금을 표시
//         // 2. 가장 긴 막대의 높이를 기준값으로하여 다음과 같이 눈금값을 표시
//         // 기준값: 0 ~ 5 -> y축 눈금값: 0, 1, 2, 3, 4, 5 (첨부파일: 최대값5이하.png)
//         // 기준값: 6 ~ 10 -> y축 눈금값: 0, 2, 4, 6, 8, 10 (첨부파일: 최대값10이하.png)
//         // 기준값: 11 ~ 50 -> y축 눈금값: 0, 10, 20, 30, 40, 50 (첨부파일:최대값50이하.png)
//         // 기준값: 51 ~ 100 -> y축 눈금값: 0, 20, 40, 60, 80, 100 (첨부파일:최대값100이하.png)
//         // 기준값: 101 ~ 500 -> y축 눈금값: 0, 100, 200, 300, 400, 500
//         // 기준값: 501 ~ 1000 -> y축 눈금값: 0, 200, 400, 600, 800, 1000
//         let rtn = [];
//         ///////////////////////////////////////////////////////////////////////
//         // 0
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) <= 0) {
//             rtn = [0];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 0 ~ 1
//         ///////////////////////////////////////////////////////////////////////
//         if (0.001 <= (num * 1) && (num * 1) <= 1) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1~10
//         ///////////////////////////////////////////////////////////////////////
//         if (1 <= (num * 1) && (num * 1) <= 5) {
//             rtn = [0, 1, 2, 3, 4, 5];
//         } else if (6 <= (num * 1) && (num * 1) <= 10) {
//             rtn = [0, 2, 4, 6, 8, 10];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 11~100
//         ///////////////////////////////////////////////////////////////////////
//         if (11 <= (num * 1) && (num * 1) <= 50) {
//             rtn = [0, 10, 20, 30, 40, 50];
//         } else if (51 <= (num * 1) && (num * 1) <= 100) {
//             rtn = [0, 20, 40, 60, 80, 100];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 101~1000
//         ///////////////////////////////////////////////////////////////////////
//         if (101 <= (num * 1) && (num * 1) <= 500) {
//             rtn = [0, 100, 200, 300, 400, 500];
//         } else if (501 <= (num * 1) && (num * 1) <= 1000) {
//             rtn = [0, 200, 400, 600, 800, 1000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1001~10000
//         ///////////////////////////////////////////////////////////////////////
//         if (1001 <= (num * 1) && (num * 1) <= 5000) {
//             rtn = [0, 1000, 2000, 3000, 4000, 5000];
//         } else if (5001 <= (num * 1) && (num * 1) <= 10000) {
//             rtn = [0, 2000, 4000, 6000, 8000, 10000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10001~100000
//         ///////////////////////////////////////////////////////////////////////
//         if (10001 <= (num * 1) && (num * 1) <= 50000) {
//             rtn = [0, 10000, 20000, 30000, 40000, 50000];
//         } else if (50001 <= (num * 1) && (num * 1) <= 100000) {
//             rtn = [0, 20000, 40000, 60000, 80000, 100000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 100001~1000000
//         ///////////////////////////////////////////////////////////////////////
//         if (100001 <= (num * 1) && (num * 1) <= 500000) {
//             rtn = [0, 100000, 200000, 300000, 400000, 500000];
//         } else if (500001 <= (num * 1) && (num * 1) <= 1000000) {
//             rtn = [0, 200000, 400000, 600000, 800000, 1000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 1000001~10000000
//         ///////////////////////////////////////////////////////////////////////
//         if (1000001 <= (num * 1) && (num * 1) <= 5000000) {
//             rtn = [0, 1000000, 2000000, 3000000, 4000000, 5000000];
//         } else if (5000001 <= (num * 1) && (num * 1) <= 10000000) {
//             rtn = [0, 2000000, 4000000, 6000000, 8000000, 10000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         // 10000001~100000000
//         ///////////////////////////////////////////////////////////////////////
//         if (10000001 <= (num * 1) && (num * 1) <= 50000000) {
//             rtn = [0, 10000000, 20000000, 30000000, 40000000, 50000000];
//         } else if (50000001 <= (num * 1) && (num * 1) <= 100000000) {
//             rtn = [0, 20000000, 40000000, 60000000, 80000000, 100000000];
//         }
//         ///////////////////////////////////////////////////////////////////////
//         if ((num * 1) > 100000000) {
//             rtn = [0, 100000000, 200000000, 300000000, 400000000, 500000000];
//         }
//         return rtn;
//     }
//     // phase 2 적용
//     , async getToolTipSpeed(callback) {
//         let meUtils = this;
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전기모델의최대출력에따라충전속도가구분됩니다. 초급속(350kW 이상), 급속(50kW 이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         // 충전속도는입력된최대출력(kW) 값에따라자동으로설정됩니다. 기준: 초급속(350kW 이상), 급속(50kW이상~ 350kW 미만), 완속(50kW 미만)
//         try {
//             let URL = meUtils.getCurrentURL() + "/v1/setting/system/charge_speed";
//             axios.defaults.withCredentials = true;
//             let response = await axios.get(URL);
//             //
//             let rapid = response.data.data.rapid;
//             let fast = response.data.data.fast;
//             let slow = response.data.data.slow;
//             //
//             let tooltipText1 = "충전기 모델의 최대출력에 따라 충전속도가 구분됩니다. 초급속(" + rapid + "W 이상), 급속(" + fast + "kW 이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipText2 = "충전속도는 입력된 최대출력(kW) 값에 따라 자동으로 설정됩니다. 기준: 초급속(" + rapid + "kW 이상), 급속(" + fast + "kW이상~ " + rapid + "kW 미만), 완속(" + slow + "kW 미만)";
//             let tooltipSpeed = {
//                 superfast: rapid
//                 , superfastMin: rapid
//                 , superfastMax: rapid
//                 , fast: fast
//                 , fastMin: fast
//                 , fastMax: rapid
//                 , slow: slow
//                 , slowMin: slow
//                 , slowMax: rapid
//                 , tooltipText1: tooltipText1
//                 , tooltipText2: tooltipText2
//             }
//             callback(tooltipSpeed);
//         } catch (e) {
//             meUtils.consoleLog(e);
//         }
//     }
//     , emptyCode(str) {
//         // SonarLintd의 에러및 경고 표시 삭제용
//     }
// }
// export default U;
