import { permutationsRepetitions } from "../src/lib/utilities/vectorHelpers";

const vectorProps = ["x", "y", "z", "w"];

const green = (str: { toString() }) => `\x1b[32m${str.toString()}\x1b[0m`;
const cyan = (str: { toString() }) => `\x1b[36m${str.toString()}\x1b[0m`;

if (process.argv.length < 3) {
  console.error("Please provide vector size between 2 and 4");
  process.exit(1);
}

let isSwizzling = false;
if (process.argv.length > 3) {
  if (process.argv[3] === "--swizzling") {
    isSwizzling = true;
  } else {
    console.error("Unknown option, available options are:\n --swizzling");
    process.exit(1);
  }
}

const vectorSize = parseInt(process.argv[2]);

if (vectorSize < 2 || vectorSize > 4) {
  console.error("Please provide vector size between 2 and 4");
  process.exit(1);
}

let result = "";

vectorProps.slice(0, vectorSize).forEach((prop) => {
  result += `  ${cyan(prop)}: ${green("number")};\r\n`;
});

for (let i = 2; i <= 4; i++) {
  const swizzles = permutationsRepetitions(vectorProps.slice(0, vectorSize), i);
  for (const swizzle of swizzles) {
    const swizzleName = swizzle.join("");
    result += `  ${cyan(swizzleName)}: ${green(
      `${isSwizzling ? "swizzlingV" : "v"}ec${i}`
    )};\r\n`;
  }
}

console.log(result);
