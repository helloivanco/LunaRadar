const { LCDClient } = require('@terra-money/terra.js');
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

onmessage = async function (e) {
  const { start, network } = e.data;
  const terra = new LCDClient(network);

  console.log({ start, network });

  let i = start;
  do {
    try {
      const tx = await terra.tx.txInfosByHeight(i);
      postMessage([JSON.stringify(tx), i]);
      i++;
    } catch (e) {}
    await delay(1000);
  } while (true);
};
