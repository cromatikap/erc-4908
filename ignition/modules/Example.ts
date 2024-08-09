import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
require('@dotenvx/dotenvx').config();

const ExampleERC4908 = buildModule("ExampleERC4908", (m) => {

  const example = m.contract("Example");

  return { example };
});

export default ExampleERC4908;
