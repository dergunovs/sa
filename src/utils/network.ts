export function getNetworkAddress(ip: string, mask: string): string {
  const ipOctets = ip.split('.');
  const maskOctets = mask.split('.');
  return ipOctets.map((oct, i) => Number(oct) & Number(maskOctets[i])).join('.');
}

export function getAddressesCount(mask: string): number {
  let binary = '';
  for (const oct of mask.split('.')) {
    binary += Number(oct).toString(2).padStart(8, '0');
  }
  const zeros = 32 - binary.replace(/0/g, '').length;
  if (zeros === 0) return 1;
  if (zeros === 1) return 2;
 return Math.pow(2, zeros) - 2;
}
