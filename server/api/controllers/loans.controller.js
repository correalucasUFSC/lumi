import Loan from '../../models/loan.js';
const healthConstants = require('../../../constants.json').HEALTH;

/**
 * Get all Loans with pagination
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
export async function getLoans(req, res) {
  const page = req.params.page;
  const limit = 10;
  const loansCount = Loan
    .find({})
    .count();
  const loans = Loan
    .find({})
    .sort({ name: 1 })
    .limit(limit)
    .skip(limit * (page - 1));
  const resultLoans = await loans.exec();
  const resultCount = await loansCount.exec();
  const pagesCount = Math.ceil(resultCount / limit);
  return res.send({loans: resultLoans, pages: pagesCount, page: page});
}

export function getIndustryNames(req, res) {
  return res.send(['Hospitality', 'Accomodation']);
}

/**
 * Get filtered loans with pagination
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
export async function getFilteredLoans(req, res) {
  const page = req.params.page;
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
  const loansCount = Loan
    .find({ industry: industrySelectValue, health: healthFilter })
    .count();
  const filteredLoans = Loan
    .find({ industry: industrySelectValue, health: healthFilter })
    .sort({ health: -1 })
    .limit(limit)
    .skip(limit * (page - 1));
  const resultLoans = await filteredLoans.exec();
  const resultCount = await loansCount.exec();
  const pagesCount = Math.ceil(resultCount / limit);
  return res.send({loans: resultLoans, pages: pagesCount, page: page});
}
