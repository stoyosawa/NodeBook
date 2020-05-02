#!/usr/bin/env node
// 2019-12-14

// 和集合 (union) - set A と B から set を作成
Set.prototype.union = function(B) {
  return new Set([...this, ...B]).sort();
}

// 積集合 (intersection) - set A と B のどちらにあるものを返す
Set.prototype.intersection = function(B) {
  let intersection = new Set();     // 空集合
  for(let elem of B) {
    if (this.has(elem))
      intersection.add(elem);
  }
  return intersection.sort();
}

// 差集合 (A - B) - set A から B にあるものを削除
Set.prototype.difference = function(B) {
  let difference = new Set(this);
  for(let elem of B)
    difference.delete(elem);
  return difference.sort();
}

// 排他論理和 (xor) - 和集合から積集合を引いたもの
Set.prototype.xor = function(B) {
  let union = this.union(B);
  let intersection = this.intersection(B);
  return union.difference(intersection).sort();
}

// ソート - Set.sort はないので、一度 array に戻す
Set.prototype.sort = function() {
  let sorted = Array.from(this).sort(function(x, y) {
    return x - y;
  });
  return new Set(sorted);
}
  
// 素数と奇数を8個ずつ
let prime = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
let odd =   new Set([1, 3, 5, 7,  9, 11, 13, 15]);
let methods = ['union', 'intersection', 'difference', 'xor'];
let pad = methods.reduce(function(accum, current) {
  return Math.max(accum, current.length);
}, 0) + 1;
for(let elem of methods) {
  process.stdout.write(elem.padEnd(pad, ' '));
  console.log(prime[elem](odd));
}
