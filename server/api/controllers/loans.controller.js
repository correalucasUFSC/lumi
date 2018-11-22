import Loan from '../../models/loan.js';

/**
 * Get all Loans
 * @param req
 * @param res
 * @returns void
 */
export async function getLoans(req, res) {
  const page = 1;
  const limit = 10;
  const loans = Loan
    .find({})
    .sort({ name: 1 })
    .limit(limit)
    .skip(limit * (page - 1));
  const result = await loans.exec();
  return res.send(result);
}
