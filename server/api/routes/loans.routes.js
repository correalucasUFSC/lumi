import { Router } from 'express';
import * as LoansController from '../controllers/loans.controller';
const router = new Router();

// Get all Loans
router.route('/loans').get(LoansController.getLoans);

// Get filtered Loans
router.route('/loans/:filter').get(LoansController.getFilteredLoans);

export default router;
