export const getAddressesCount = (mask: string): number => {
  let binaryMask = '';

  for (const octet of mask.split('.')) {
    binaryMask += Number(octet).toString(2).padStart(8, '0');
  }

  const zerosCount = 32 - binaryMask.replaceAll('0', '').length;

  if (zerosCount === 0) return 1;
  if (zerosCount === 1) return 2;

  return 2 ** zerosCount - 2;
};


