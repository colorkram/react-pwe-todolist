export const formatNumber = (amount: number | string | null, checkDot: boolean = false) => {
    if (amount === null) {
      return null; // or return a default value for null
    }
  
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  
    if (!isNaN(numericAmount)) {
      const formattedAmount = Intl.NumberFormat("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(numericAmount);
  
      // Check if the number is an integer
      const isInteger = Number.isInteger(numericAmount);
  
      // If it's an integer, remove the decimal part
      return isInteger ? formattedAmount.slice(0, -3) : formattedAmount;
    } else {
      return amount;
    }
  };
  