export function getThreadType(properties, setProperties, setValue) {
  let fast = properties[0].fastDia;
  let threadType = undefined;
  if (
    fast === "#6-20" ||
    fast === "#8-18" ||
    fast === "#10-16" ||
    fast === "#12-14" ||
    fast === "1/4-14" ||
    fast === "5/16-12" ||
    fast === "3/8-12"
  ) {
    threadType = "spaced";
  } else threadType = "unc";
  let temp = properties.slice();
  temp[0].threadType = threadType;
  setProperties(temp);
  setValue("threadType", threadType);
}

export function getDiameter(properties, setProperties, setValue) {
  let D = undefined;
  let K = undefined;
  if (properties[0].fastDia.includes("#6")) {
    D = 0.138;
    K = 0.099;
  } else if (properties[0].fastDia.includes("#8")) {
    D = 0.164;
    K = 0.116;
  } else if (properties[0].fastDia.includes("#10")) {
    D = 0.19;
    K = 0.135;
  } else if (properties[0].fastDia.includes("#12")) {
    D = 0.216;
    K = 0.157;
  } else if (properties[0].fastDia.includes("1/4")) {
    D = 0.25;
    K = 0.185;
  } else if (properties[0].fastDia.includes("5/16")) {
    D = 0.3125;
    K = 0.236;
  } else if (properties[0].fastDia.includes("3/8")) {
    D = 0.375;
    K = 0.299;
  }
  let temp = properties.slice();
  temp[0].nomDia = D;
  temp[0].minorDia = K;
  setProperties(temp);
  setValue("nomDia", D);
}

export function getThreadCount(
  properties,
  setProperties,
  allInput,
  setAllInput
) {
  let N = undefined;
  if (properties[0].fastDia.includes("32")) N = 32;
  else if (properties[0].fastDia.includes("24")) N = 24;
  else if (properties[0].fastDia.includes("20")) N = 20;
  else if (properties[0].fastDia.includes("18")) N = 18;
  else if (properties[0].fastDia.includes("16")) N = 16;
  else if (properties[0].fastDia.includes("14")) N = 14;
  else if (properties[0].fastDia.includes("12")) N = 12;
  let temp = properties.slice();
  temp[0].threadCount = N;
  setProperties(temp);
}

export function getFastType(properties, setProperties, allInput, setAllInput) {
  let type = undefined;
  let Fu = undefined;
  let Fy = undefined;
  if (properties[0].fastMatInput === "SAE Gr. 2") {
    type = "cs";
    Fu = 74000;
    Fy = 57000;
  } else if (properties[0].fastMatInput === "SAE Gr. 5") {
    type = "cs";
    Fu = 120000;
    Fy = 92000;
  }
  //Cond AF needs to be kept before A to prevent accidental use of A properties when AF is chosen.
  else if (properties[0].fastMatInput.includes("Alloy A1/A2/A3 Cond AF")) {
    type = "ss";
    Fu = 65000;
    Fy = 20000;
  } else if (properties[0].fastMatInput.includes("Alloy A1/A2/A3 Cond A")) {
    type = "ss";
    Fu = 75000;
    Fy = 30000;
  } else if (properties[0].fastMatInput.includes("Alloy A1/A2/A3 Cond CW")) {
    type = "ss";
    Fu = 100000;
    Fy = 65000;
  } else if (properties[0].fastMatInput.includes("Alloy A1/A2/A3 Cond SH")) {
    type = "ss";
    Fu = 120000;
    Fy = 95000;
  } else if (properties[0].fastMatInput.includes("Alloy A4 Cond A")) {
    type = "ss";
    Fu = 55000;
    Fy = 30000;
  }
  //Cond HT needs to be kept before H to prevent accidental use of H properties when HT is chosen.
  else if (properties[0].fastMatInput.includes("Alloy A5 Cond HT")) {
    type = "ss";
    Fu = 160000;
    Fy = 120000;
  } else if (properties[0].fastMatInput.includes("Alloy A5 Cond H")) {
    type = "ss";
    Fu = 110000;
    Fy = 90000;
  }
  let temp = properties.slice();
  temp[0].fastMat = type;
  temp[0].fastFu = Fu;
  temp[0].fastFy = Fy;
  setProperties(temp);
}

export function getMatType(properties, setProperties, allInput, setAllInput) {
  let temp = properties.slice();

  if (properties[0].comp1Mat === "6005A-T61") {
    temp[0].comp1Fu = 38000;
    temp[0].comp1Fy = 35000;
  } else if (properties[0].comp1Mat === "6063-T6") {
    temp[0].comp1Fu = 30000;
    temp[0].comp1Fy = 25000;
  } else if (properties[0].comp1Mat === "6063-T5") {
    temp[0].comp1Fu = 22000;
    temp[0].comp1Fy = 16000;
  } else if (properties[0].comp1Mat === "6061-T6") {
    temp[0].comp1Fu = 38000;
    temp[0].comp1Fy = 35000;
  } else if (properties[0].comp1Mat === "5005-H34") {
    temp[0].comp1Fu = 20000;
    temp[0].comp1Fy = 15000;
  } else if (properties[0].comp1Mat === "3003-H14") {
    temp[0].comp1Fu = 20000;
    temp[0].comp1Fy = 17000;
  }

  if (properties[0].comp2Mat === "6005A-T61") {
    temp[0].comp2Fu = 38000;
    temp[0].comp2Fy = 35000;
  } else if (properties[0].comp2Mat === "6063-T6") {
    temp[0].comp2Fu = 30000;
    temp[0].comp2Fy = 25000;
  } else if (properties[0].comp2Mat === "6063-T5") {
    temp[0].comp2Fu = 22000;
    temp[0].comp2Fy = 16000;
  } else if (properties[0].comp2Mat === "6061-T6") {
    temp[0].comp2Fu = 38000;
    temp[0].comp2Fy = 35000;
  } else if (properties[0].comp2Mat === "5005-H34") {
    temp[0].comp2Fu = 20000;
    temp[0].comp2Fy = 15000;
  } else if (properties[0].comp2Mat === "3003-H14") {
    temp[0].comp2Fu = 20000;
    temp[0].comp2Fy = 17000;
  }

  setProperties(temp);
}
