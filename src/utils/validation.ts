export function isIpValid(ip: string): boolean {
  if (!ip) return false;
  const match = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return false;
  return match.slice(1).every((octet) => {
    const num = Number(octet);
    return num >= 0 && num <= 255;
  });
}
