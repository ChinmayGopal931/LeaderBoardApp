export const formatValue = (
  value: number,
  isPercentage: boolean,
  currency: string
): string => {
  if (isPercentage) {
    return formatPercentage(value / 100);
  }
  return commaString(formatCurrency(value, currency));
};

const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

const formatCurrency = (value: number, currency: string): string => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: currency ? "currency" : "decimal",
    currency: currency || undefined,
    minimumFractionDigits: value > 10000 && value < 99999 ? 0 : 2,
    maximumFractionDigits: value > 10000 && value < 99999 ? 0 : 2,
    currencyDisplay: "narrowSymbol",
  });

  switch (true) {
    case value >= 1000000:
      return numberFormat.format(value / 1000000) + "M";
    case value >= 100000:
      return numberFormat.format(value / 10000) + "K";
    default:
      return numberFormat.format(value);
  }
};

export const commaString = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// create hex number foramtter to show only 4 at the end
export const truncatehex = (address: string, start: number, end: number) => {
  return `${address?.slice(0, start)}...${address?.slice(-end)}`;
};

export const decimalCount = (decimalNumber: string) => {
  // String Contains Decimal
  if (decimalNumber.includes(".")) {
    return decimalNumber.split(".")[1].length;
  }
  // String Does Not Contain Decimal
  return 0;
};

export const fromStringToNumber = (value: string) => {
  // Use parseFloat to convert the string to a number,
  // and then use the toFixed() method to format the number with two decimal places.
  let num = parseFloat(value);
  let rounded = num.toFixed(2);

  // Return the formatted number as a string
  return rounded.toString();
};

export const getTimeElapsed = (timestamp: number) => {
  const now = Date.now() / 1000;
  const seconds = Math.floor(now - timestamp);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};

export const dateOut = (date: any, { days, years }: any) => {
  if (!date) return;
  let dateOut = date;
  days && dateOut.setDate(date.getDate() + days);
  years && dateOut.setFullYear(date.getFullYear() + years);
  return dateOut;
};

export const getSymbolByAddress = (address: string) => {
  switch (address) {
    case "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8":
      return "USDC";
    default:
      return "";
      break;
  }
};
