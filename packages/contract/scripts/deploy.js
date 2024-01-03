async function main() {
  const TextStorage = await hre.ethers.getContractFactory("TextStorage");
  const textStorageContract = await TextStorage.deploy("First Text");
  await textStorageContract.deployed();
  console.log("deployed to: ", textStorageContract.address);
  
  let tx = await textStorageContract.viewText();
  console.log(tx);

  let ts = await textStorageContract.setText("Good, bye!");
  ts.wait();

  tx = await textStorageContract.viewText();
  console.log(tx);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
