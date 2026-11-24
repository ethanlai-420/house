async function loadSummary() {
  // TODO 1：用 fetch 請求 /api/properties/summary，用 await 等回應
  const response = await fetch("/api/properties/summary");
  console.log(response);

  // TODO 2：用 await 把回應轉成 JSON
  const data = await response.json();

  // TODO 3：用 console.log 印出結果
  console.log(data);

  // TODO 4：把 data 裡的 totalPrice、count、remainingPrincipal、ltvPercent、equity 填入對應的 HTML 元素
  const totalPrice = formatWan(data.totalPrice);
  document.getElementById("totalPrice").textContent = totalPrice;

  const count = `${data.count}筆房產`;
  document.getElementById("count").textContent = count;

  const remainingPrincipal = formatWan(data.remainingPrincipal);
  document.getElementById("remainingPrincipal").textContent =
    remainingPrincipal;

  let ltvPercent;
  if (data.ltvPercent !== null) {
    ltvPercent = `貸款成數：${data.ltvPercent}%`;
  } else {
    ltvPercent = "貸款成數：—";
  }
  document.getElementById("ltvPercent").textContent = ltvPercent;

  const equity = formatWan(data.equity);
  document.getElementById("equity").textContent = equity;
}

function formatWan(amount) {
  const amountInWan = Math.round(amount / 10000).toLocaleString("zh-TW");
  return `NT$ ${amountInWan}萬`;
}

loadSummary();
