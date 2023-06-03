//正規表現まとめ

// 正規表現を適用させる文字列
const target = 'JavaScript and React are different. TypeScript is a great language.';
// [A-Z][a-zA-Z]+は、JavaScript, React, TypeScriptにマッチする正規表現です。
const regex = /[A-Z][a-zA-Z]+/g;
// matchメソッドを用いることで、文字列中から正規表現にマッチする文字列を取得できます。
console.log(target.match(regex)); // => [ 'JavaScript', 'React', 'TypeScript' ]


const target2 = 'a c z # % @ b';
// [acz#]は、a, c, z, #のどれか1文字にマッチする正規表現です。
const regex2 = /[acz#]/g;
// matchメソッドを用いることで、文字列中から正規表現にマッチする文字列を取得できます。
console.log(target2.match(regex2));

const target3 = 'grey gray';
const regex3 = /gr[ae]y/g;
console.log(target3.match(regex3));

//最大量指定子
// 正規表現を適用させる文字列
const target4 = 'メラ メラメラ メラメラメラ';

// (メラ)+は、メラ, メラメラ, メラメラメラにマッチする正規表現です。
const regex4 = /(メラ)+/g;

// matchメソッドを用いることで、文字列中から正規表現にマッチする文字列を取得できます。
console.log(target4.match(regex4));

const target5 = 'environment enviroment';

//最大量指定子?は、直前の1文字があればマッチさせるが、なくてもよいという意味
// environ?mentは、environment enviromentにマッチする正規表現です。
const regex5 = /environ?ment/g;

// matchメソッドを用いることで、文字列中から正規表現にマッチする文字列を取得できます。
console.log(target5.match(regex5));

//最大量指定子+は、直前の1文字に1回以上の繰り返しマッチという意味を表し、最大量指定子*は、直前の1文字に0回以上の繰り返しマッチという意味
const target6 = 'ck cook coook cooook';

// * 存在しなくてもいい、+ 1文字以上は存在する必要がある
const regex6 = /co*k/g; // co*kは、ck cook coook cooookにマッチする正規表現
const regex7 = /co+k/g; // co+kは、cook coook cooookにマッチする正規表現

console.log(target6.match(regex6));
console.log(target6.match(regex7));






