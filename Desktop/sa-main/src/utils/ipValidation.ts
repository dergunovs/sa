export function isIpValid(ip: string): boolean {
  return (
    /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(ip) &&
    ip.split('.').every((octet) => Number(octet) <= 255)
  );
}

