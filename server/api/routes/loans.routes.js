import { Router } from 'express';
import * as LoansController from '../controllers/loans.controller';
const router = new Router();

// Get all Loans
router.route('/loans/:page').get(LoansController.getLoans);

// Get filtered Loans
router.route('/loans/:filter/:page').get(LoansController.getFilteredLoans);

// Get industry names
router.route('/industries').get(LoansController.getIndustryNames);

export default router;
