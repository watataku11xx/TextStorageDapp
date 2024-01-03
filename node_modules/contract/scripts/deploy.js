async function main() {
  const TextStorage = await hre.ethers.getContractFactory("TextStorage");
  const textStorageContract = await TextStorage.deploy("good, good");
  await textStorageContract.deployed();
  console.log("deployed to: ", textStorageContract.address);
  
  let tx = await textStorageContract.viewText();
  console.log(tx);

  await textStorageContract.setText("Good, bye!");
  tx = await textStorageContract.viewText();
  console.log(tx);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
