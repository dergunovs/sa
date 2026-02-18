export const getNetworkAddress = (ip: string, mask: string): string => {
  const ipOctets = ip.split('.');
  const maskOctets = mask.split('.');
  const result: number[] = [];

  for (let index = 0; index < 4; index += 1) {
    result.push(Number(ipOctets[index]) & Number(maskOctets[index]));
  }

  return `${result[0]}.${result[1]}.${result[2]}.${result[3]}`;
};


