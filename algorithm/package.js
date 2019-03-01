// 背包问题

function packageMaxValue(weight, value, size) {
  let dp = [];
  let len = weight.length;
  // 初始化重量为0
  for(let i = 0 ; i < len ; i++) {
    dp[0][i] = 0;
  }
  for(let w = 0 ; w <= size ; w++) {
    dp[w] = [];
    for(let j = 1 ; j < len ; j++) {
      if(w < weight[j]) {
        dp[w][j] = dp[w][j - 1];
        continue;
      }

      dp[w][j] = Math.max(dp[w][j - 1], dp[w - weight[j] + value[j]]);
    }
  }

  return dp;
}