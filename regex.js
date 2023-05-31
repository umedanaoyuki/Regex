正規表現まとめ

// 正規表現を適用させる文字列
const target = 'JavaScript and React are different. TypeScript is a great language.';
// [A-Z][a-zA-Z]+は、JavaScript, React, TypeScriptにマッチする正規表現です。
const regex = /[A-Z][a-zA-Z]+/g;
// matchメソッドを用いることで、文字列中から正規表現にマッチする文字列を取得できます。
console.log(target.match(regex)); // => [ 'JavaScript', 'React', 'TypeScript' ]


