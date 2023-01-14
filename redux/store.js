import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import home from "./home";
import transaction from "./transaction";
import schedule from "./schedulePayment";
import paymentLinks from "./requestMoney";
import billPayment from "./billPayment";
import payroll from "./payroll";
import invoice from "./invoice";
import pos from "./pos";
import card from "./card";
import verifications from "./verifications";
import settings from "./settings";

const initialState = {};
const store = configureStore({
  reducer: {
    user,
    home,
    transaction,
    schedule,
    paymentLinks,
    billPayment,
    payroll,
    invoice,
    pos,
    card,
    verifications,
    settings,
  },
});

export default store;
