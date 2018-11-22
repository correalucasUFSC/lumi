/**
 * Get all Loans
 * @param req
 * @param res
 * @returns void
 */
export function getLoans(req, res) {
  // This is just sample data. Please structure your code in the best way possible. Don't feel obliged to stick to this structure
  return res.send([
    {
      name: 'Nick Tong\'s Salad Tong Store',
      industry: 'Retail',
      health: 84,
    },
    {
      name: 'Paul\'s Pizzeria',
      industry: 'Hospitality',
      health: 85,
    },
  ]);
}
