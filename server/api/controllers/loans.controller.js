import Loan from '../../models/loan.js';
const healthConstants = require('../../../constants.json').HEALTH;

/**
 * Get all Loans with pagination
 * @param req
 * @param res
 * @returns {Promise.<void>}
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

/**
 * Get filtered loans with pagination
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
export async function getFilteredLoans(req, res) {
  const page = 1;
  const limit = 10;
  const filter = JSON.parse(req.params.filter);
  const { industrySelectValue, healthSelectValue } = filter;
  let healthFilter;
  switch (healthSelectValue) {
    case healthConstants.LOW:
      healthFilter = { $lt: 50 };
      break;
    case healthConstants.MEDIUM:
      healthFilter = { $gte : 50, $lte: 80 };
      break;
    case healthConstants.HIGH:
      healthFilter = { $gt : 80 };
      break;
    default:
      break;
  }
  const loans = Loan
    .find({ industry: industrySelectValue, health: healthFilter })
    .sort({ health: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  const result = await loans.exec();
  return res.send(result);
}
