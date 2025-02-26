(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fddc"],{ea9c:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"quiz-1"}},[e("nav",{staticClass:"text-sm font-semibold mb-6",attrs:{"aria-label":"Breadcrumb"}},[e("ol",{staticClass:"list-none p-0 inline-flex"},[e("li",{staticClass:"flex items-center text-blue-500"},[e("router-link",{staticClass:"text-gray-700",attrs:{to:"/dashboard"}},[t._v("Course")]),e("svg",{staticClass:"fill-current w-3 h-3 mx-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])],1),e("li",{staticClass:"flex items-center"},[e("router-link",{staticClass:"text-gray-600",attrs:{to:"/dashboard/quiz-1"}},[t._v("Quiz 1: Introduction Quiz")])],1)])]),t._m(0),e("div",{staticClass:"w-full xl:w-2/3 px-3 -mx-3 mb-10"},[e("div",{staticClass:"w-full bg-white border text-blue-400 rounded-lg p-6"},[t._m(1),t._l(t.questions,(function(s,r){return e("div",{key:r,staticClass:"mb-10"},[e("h3",{staticClass:"text-lg font-semibold mb-2"},[t._v(t._s(r+1)+". "+t._s(s.text))]),e("div",{staticClass:"flex flex-wrap gap-4"},t._l(s.options,(function(s,i){return e("button",{key:i,staticClass:"bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700",on:{click:function(e){return t.checkAnswer(r,i)}}},[t._v(" "+t._s(s)+" ")])})),0),t.feedback[r]?e("p",{staticClass:"mt-2 font-semibold",class:t.feedback[r].correct?"text-green-500":"text-red-500"},[t._v(" "+t._s(t.feedback[r].message)+" ")]):t._e()])}))],2)])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex justify-between items-center mb-6"},[e("p",{staticClass:"text-2xl font-semibold mb-2 lg:mb-0"},[t._v("Quiz 1: Introduction to Number Theory")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-10"},[e("h2",{staticClass:"text-xl font-semibold mb-4"},[t._v("Test Your Understanding")]),e("p",{staticClass:"text-gray-700"},[t._v(" This short quiz will check your understanding of fundamental number theory concepts. Select the best answer for each question. ")])])}],a={name:"Quiz1",data:function(){return{feedback:{},questions:[{text:"Which number is prime?",options:["12","17","20"],correct:1},{text:"What is the greatest common divisor (GCD) of 18 and 24?",options:["2","6","12"],correct:1},{text:"What is modular arithmetic primarily used for?",options:["Solving quadratic equations","Cryptography and security","Calculating probabilities"],correct:1},{text:"Which of these is an example of a composite number?",options:["11","13","15"],correct:2},{text:"What does the term 'divisibility' refer to?",options:["A number can be divided by another without leaving a remainder","A number is prime","A number is irrational"],correct:0},{text:"Which theorem is a fundamental result in number theory?",options:["Fermat's Last Theorem","Pythagorean Theorem","Binomial Theorem"],correct:0}]}},methods:{checkAnswer:function(t,e){var s=this.questions[t],r={correct:"Correct! 🎉",wrong:"Incorrect. Try again! ❌"};this.$set(this.feedback,t,{correct:e===s.correct,message:e===s.correct?r.correct:r.wrong})}}},o=a,n=s("2877"),c=Object(n["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22fddc.8f81d4bf.js.map