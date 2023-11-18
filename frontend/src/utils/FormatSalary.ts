const formatSalary = (salary?: number): string => {
    if (salary === undefined) return '0';
  
    if (salary >= 1000) {
      const formattedSalary = (salary / 1000).toFixed(1);
      return formattedSalary.endsWith('.0') ? formattedSalary.slice(0, -2) + 'k' : formattedSalary + 'k';
    } else {
      return salary.toString();
    }
  };
  
  export default formatSalary;
  