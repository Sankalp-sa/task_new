export const fetchTransactions = async (user_address) => {
  const result = await fetch(
    `https://api.etherscan.io/api?module=account&action=txlist&address=${user_address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=CCDBJ3EFT2ABRJBCD18H4U46FGRV6J7IRU`
  );

  const data = await result.json();

  const transactions = data.result;

  return transactions;
};

export function calculateTotalExpenses(transactions) {
  let totalExpenses = 0;
  transactions.forEach(tx => {
    const gasUsed = parseInt(tx.gasUsed);
    const gasPrice = parseInt(tx.gasPrice);
    const expense = (gasUsed * gasPrice) / 1e18; // Convert wei to ether
    totalExpenses += expense;
  });
  return totalExpenses;
}
