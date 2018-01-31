var BRICSTORAGE;
(function (BRICSTORAGE) {
    var Functions = (function () {
        function Functions() {
        }
        /*  -----------------------------------------------------------
            PayPage JavaScript
        --------------------------------------------------------------- */
        Functions.prototype.initStyling = function () {
            document.getElementById('issue_nbr').style.width = '4em';
            document.getElementById('swipeSP').style.position = 'absolute';
            document.getElementById('swipeSP').style.top = '0px';
            document.getElementById('swipeSP').style.left = '375px';
            document.getElementById('swipeBtn').style.position = 'absolute';
            document.getElementById('swipeBtn').style.top = '0px';
            document.getElementById('swipeBtn').style.left = '550px';
            document.getElementById('startMonthDDL').style.left = '5px';
            document.getElementById('startYearDDL').style.left = '5px';
        };
        /* Action to take when resetBtn is Clicked */
        Functions.prototype.resetBtn_Click = function () {
            document.getElementById('first_name').value = '';
            document.getElementById('last_name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('zip').value = '';
            document.getElementById('phone_hm').value = '';
            document.getElementById('account_nbr').value = '';
            document.getElementById('routing_nbr').value = '';
            document.getElementById('ach_account_nbr').value = '';
            document.getElementById('monthDDL').selectedIndex = 0;
            document.getElementById('yearDDL').selectedIndex = 0;
            document.getElementById('exp_date').value = '';
            document.getElementById('cvv2').value = '';
            document.getElementById('invoice_nbr').value = '';
            document.getElementById('startMonthDDL').selectedIndex = 0;
            document.getElementById('startYearDDL').selectedIndex = 0;
            document.getElementById('issue_nbr').value = '';
            document.getElementById('declinedSP').innerHTML = '';
            document.getElementById('first_name').disabled = false;
            document.getElementById('last_name').disabled = false;
            document.getElementById('account_nbr').disabled = false;
            document.getElementById('monthDDL').disabled = false;
            document.getElementById('yearDDL').disabled = false;
            document.getElementById('miscMessageRow').style.display = 'none';
            document.getElementById('miscMessageSpacerRow').style.display = 'none';
            document.getElementById('first_name_msg').style.display = 'none';
            document.getElementById('last_name_msg').style.display = 'none';
            document.getElementById('address_msg').style.display = 'none';
            document.getElementById('cityStateZip_msg').style.display = 'none';
            document.getElementById('phone_hm_msg').style.display = 'none';
            document.getElementById('phone_cell_msg').style.display = 'none';
            document.getElementById('phone_wk_msg').style.display = 'none';
            document.getElementById('user_data_1_msg').style.display = 'none';
            document.getElementById('amount_msg').style.display = 'none';
            document.getElementById('invoice_nbr_msg').style.display = 'none';
            document.getElementById('account_nbr_msg').style.display = 'none';
            document.getElementById('exp_date_msg').style.display = 'none';
            document.getElementById('cvv2_msg').style.display = 'none';
            document.getElementById('routing_nbr_msg').style.display = 'none';
            document.getElementById('ach_account_nbr_msg').style.display = 'none';
            document.getElementById('check_nbr_msg').style.display = 'none';
            document.getElementById('start_date_msg').style.display = 'none';
            document.getElementById('issue_nbr_msg').style.display = 'none';
        };
        Functions.prototype.initPage = function () {
            // Header Controls
            document.getElementById('hdr0Lbl').innerHTML = 'Electronic Payment Exchange';
            // see function hdrHprLnk_Click to set Redirect for hdrHprLnk
            document.getElementById('hdrHprLnk').innerHTML = 'Close / Exit';
            // Body Controls
            document.getElementById('firstNameLbl').value = 'First Name:';
            document.getElementById('lastNameLbl').value = 'Last Name:';
            document.getElementById('addressLbl').value = 'Address:';
            document.getElementById('cityStZipLbl').value = 'City,St,Zip:';
            document.getElementById('phoneHMLbl').value = 'Home Phone:';
            document.getElementById('userData1Row').style.display = 'none';
            document.getElementById('acctTypeSRB').style.display = 'none';
            document.getElementById('acctTypeSLbl').style.display = 'none';
            /*
                EPX supports user data fields, fields our merchants can populate with information
                of their choosing.  Define user data labels here.
            */
            document.getElementById('userData1Lbl').value = 'User Data 1:';
            document.getElementById('creditCardLbl').value = 'Card Number:';
            document.getElementById('expDateLbl').value = 'Expiration Date:';
            document.getElementById('cvv2Lbl').value = 'CVV Value:';
            document.getElementById('startDateLbl').value = 'Start Date:';
            document.getElementById('issueNumLbl').value = 'Issue #:';
            document.getElementById('rtNumLbl').value = 'Routing Number:';
            document.getElementById('achAcctLbl').value = 'Account Number:';
            document.getElementById('acctTypeLbl').value = 'Account Type:';
            document.getElementById('acctTypeCLbl').value = 'Checking';
            document.getElementById('acctTypeSLbl').value = 'Saving';
            amt = document.getElementById('amount');
            amt.readOnly = 'readonly';
            amt.tabIndex = -1;
            document.getElementById('radioLbl').value = 'Transaction Type';
            document.getElementById('radio1Lbl').value = 'Check Card';
            document.getElementById('radio2Lbl').value = 'Credit';
            document.getElementById('radio3Lbl').value = 'Debit';
            document.getElementById('radio4Lbl').value = 'Debit'; // Pinless
            document.getElementById('radio5Lbl').value = 'ACH';
            // Disclaimer Text
            document.getElementById('achDisclaimerTxt').value = 'BY CLICKING ON THE SUBMIT BUTTON, I AGREE TO THE TERMS AND CONDITIONS OF USING MY BANK ACCOUNT AS A PAYMENT METHOD, WHICH ARE LISTED BELOW, AND AUTHORIZE EPX (OR ITS AGENT) TO DEBIT MY BANK ACCOUNT FOR THE AMOUNT SPECIFIED.\n\nTerms and Conditions\n\nBy choosing to use a bank account as your method of payment, you will be able to complete your payment using any valid United States based financial institution automated clearing house ("ACH") enabled bank account. You are authorizing EPX (or its agent) to debit your bank account for the amount specified. To complete your transaction, EPX, or an agent acting on its behalf, will create an electronic funds transfer or bank draft, which will be presented to your bank or financial institution for payment from your bank account. You agree that: (a) you have read, understand and agree to these Terms and Conditions, and that this agreement constitutes a "writing signed by you" under any applicable law or regulation, (b) you consent to the electronic delivery of the disclosures contained in these Terms and Conditions, (c) you authorize EPX (or its agent) to initiate one or more ACH debit entries (withdrawals) for the specified amount(s) from your bank account, and you authorize the financial institution that holds your bank account to deduct such payments. EPX, in its sole discretion, may refuse this payment option service to anyone or any user without notice for any reason at any time.';
            document.getElementById('debitDisclaimerTxt').innerHTML = 'NOTE: If you make payment with a debit card, the payment amount will be immediately deducted from your checking account.  The deduction cannot be reversed or voided upon deduction from your account.';
            document.getElementById('miscCardImageLbl').value = 'We support the following financial networks:';
            // Buttons Controls
            document.getElementById('submitBtn').value = 'Submit';
            document.getElementById('submit2Btn').value = 'Submit';
            document.getElementById('resetBtn').value = 'Reset';
            document.getElementById('reset2Btn').value = 'Reset';
            document.getElementById('cancelBtn').value = 'Cancel';
            document.getElementById('cancel2Btn').value = 'Cancel';
            document.getElementById('swipeBtn').value = 'Swipe';
            // Messaging Controls
            document.getElementById('miscMessage1').innerHTML = 'Important Messages';
            document.getElementById('miscMessage2').innerHTML = 'There was a problem with your request.';
            // Footer Controls
            document.getElementById('ftr0Lbl').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
            if (document.getElementById("user_data_7").value == "ACHSTORAGE") {
                document.getElementById('radio2Row').style.display = 'none';
                document.getElementById('radio4Row').style.display = 'none';
                document.getElementById('radio2RB').style.display = 'none';
                document.getElementById('radio4RB').style.display = 'none';
                document.getElementById('radio5RB').onclick = this.tranTypeRadioClick;
                document.getElementById('radio5RB').checked = true;
                Functions.prototype.eventFire(document.getElementById('radio5RB'), 'click');
            }
            else {
                document.getElementById('radio2RB').onclick = this.tranTypeRadioClick;
                document.getElementById('radio5RB').onclick = this.tranTypeRadioClick;
                //hide debit
                document.getElementById('radio4Row').style.display = 'none';
                document.getElementById('radio4RB').onclick = this.tranTypeRadioClick;
            }
            document.getElementById('debitDisclaimerRow').style.display = "none";
            document.getElementById('mainDiv').style.display = 'block';
            if (document.getElementById('radio2RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            else if (document.getElementById('radio4RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            else if (document.getElementById('radio5RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'none';
                document.getElementById('achGroupDiv').style.display = 'inline';
            }
            else {
                document.getElementById('radio2RB').checked = true;
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            document.getElementById('submitBtn').onclick = this.onSubmit;
        };
        Functions.prototype.eventFire = function (el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            }
            else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        };
        Functions.prototype.tranTypeRadioClick = function (e) {
            var evt = e ? e : (window.event) ? window.event : "";
            if (evt) {
                var elem = evt.target ? evt.target : evt.srcElement;
                switch (elem.id) {
                    case "radio2RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio5RB":
                        document.getElementById('ccGroupDiv').style.display = 'none';
                        document.getElementById('achGroupDiv').style.display = 'inline';
                        break;
                }
            }
        };
        Functions.prototype.onSubmit = function () {
            disableSubmit(true);
            // Credit
            if (document.getElementById('radio2RB').checked)
                sTranCode = 'STORAGE';
            else if (document.getElementById('radio4RB').checked)
                sTranCode = 'STORAGE';
            else if (document.getElementById('radio5RB').checked) {
                if (document.getElementById('acctTypeCRB').checked)
                    sTranCode = 'ACHSTORAGE_C';
                else
                    sTranCode = 'ACHSTORAGE_S';
            }
            else {
                disableSubmit(false);
                return false;
            }
            document.getElementById('tran_code').value = sTranCode;
            /*
                document.getElementById('first_name').disabled = false;
                document.getElementById('last_name').disabled = false;
                document.getElementById('account_nbr').disabled = false;
            */
            //	document.getElementById('amount').disabled = true;
            document.getElementById('processForm').submit();
        };
        return Functions;
    }());
    BRICSTORAGE.Functions = Functions;
})(BRICSTORAGE || (BRICSTORAGE = {}));
//# sourceMappingURL=EPX_BRICSTORAGE.js.map

var BRICORDERSTORAGE;
(function (BRICORDERSTORAGE) {
    var Functions = (function () {
        function Functions() {
        }
        /*  -----------------------------------------------------------
            PayPage JavaScript
        --------------------------------------------------------------- */
        Functions.prototype.initStyling = function () {
            document.getElementById('issue_nbr').style.width = '4em';
            document.getElementById('swipeSP').style.position = 'absolute';
            document.getElementById('swipeSP').style.top = '0px';
            document.getElementById('swipeSP').style.left = '375px';
            document.getElementById('swipeBtn').style.position = 'absolute';
            document.getElementById('swipeBtn').style.top = '0px';
            document.getElementById('swipeBtn').style.left = '550px';
            document.getElementById('startMonthDDL').style.left = '5px';
            document.getElementById('startYearDDL').style.left = '5px';
        };
        /* Action to take when resetBtn is Clicked */
        Functions.prototype.resetBtn_Click = function () {
            document.getElementById('first_name').value = '';
            document.getElementById('last_name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('zip').value = '';
            document.getElementById('phone_hm').value = '';
            document.getElementById('account_nbr').value = '';
            document.getElementById('routing_nbr').value = '';
            document.getElementById('ach_account_nbr').value = '';
            document.getElementById('monthDDL').selectedIndex = 0;
            document.getElementById('yearDDL').selectedIndex = 0;
            document.getElementById('exp_date').value = '';
            document.getElementById('cvv2').value = '';
            document.getElementById('invoice_nbr').value = '';
            document.getElementById('startMonthDDL').selectedIndex = 0;
            document.getElementById('startYearDDL').selectedIndex = 0;
            document.getElementById('issue_nbr').value = '';
            document.getElementById('declinedSP').innerHTML = '';
            document.getElementById('first_name').disabled = false;
            document.getElementById('last_name').disabled = false;
            document.getElementById('account_nbr').disabled = false;
            document.getElementById('monthDDL').disabled = false;
            document.getElementById('yearDDL').disabled = false;
            document.getElementById('miscMessageRow').style.display = 'none';
            document.getElementById('miscMessageSpacerRow').style.display = 'none';
            document.getElementById('first_name_msg').style.display = 'none';
            document.getElementById('last_name_msg').style.display = 'none';
            document.getElementById('address_msg').style.display = 'none';
            document.getElementById('cityStateZip_msg').style.display = 'none';
            document.getElementById('phone_hm_msg').style.display = 'none';
            document.getElementById('phone_cell_msg').style.display = 'none';
            document.getElementById('phone_wk_msg').style.display = 'none';
            document.getElementById('user_data_1_msg').style.display = 'none';
            document.getElementById('amount_msg').style.display = 'none';
            document.getElementById('invoice_nbr_msg').style.display = 'none';
            document.getElementById('account_nbr_msg').style.display = 'none';
            document.getElementById('exp_date_msg').style.display = 'none';
            document.getElementById('cvv2_msg').style.display = 'none';
            document.getElementById('routing_nbr_msg').style.display = 'none';
            document.getElementById('ach_account_nbr_msg').style.display = 'none';
            document.getElementById('check_nbr_msg').style.display = 'none';
            document.getElementById('start_date_msg').style.display = 'none';
            document.getElementById('issue_nbr_msg').style.display = 'none';
        };
        Functions.prototype.initPage = function () {
            // Header Controls
            document.getElementById('hdr0Lbl').innerHTML = 'Electronic Payment Exchange';
            // see function hdrHprLnk_Click to set Redirect for hdrHprLnk
            document.getElementById('hdrHprLnk').innerHTML = 'Close / Exit';
            // Body Controls
            document.getElementById('firstNameLbl').value = 'First Name:';
            document.getElementById('lastNameLbl').value = 'Last Name:';
            document.getElementById('addressLbl').value = 'Address:';
            document.getElementById('cityStZipLbl').value = 'City,St,Zip:';
            document.getElementById('phoneHMLbl').value = 'Home Phone:';
            document.getElementById('userData1Row').style.display = 'none';
            document.getElementById('acctTypeSRB').style.display = 'none';
            document.getElementById('acctTypeSLbl').style.display = 'none';
            /*
                EPX supports user data fields, fields our merchants can populate with information
                of their choosing.  Define user data labels here.
            */
            document.getElementById('userData1Lbl').value = 'User Data 1:';
            document.getElementById('creditCardLbl').value = 'Card Number:';
            document.getElementById('expDateLbl').value = 'Expiration Date:';
            document.getElementById('cvv2Lbl').value = 'CVV Value:';
            document.getElementById('startDateLbl').value = 'Start Date:';
            document.getElementById('issueNumLbl').value = 'Issue #:';
            document.getElementById('rtNumLbl').value = 'Routing Number:';
            document.getElementById('achAcctLbl').value = 'Account Number:';
            document.getElementById('acctTypeLbl').value = 'Account Type:';
            document.getElementById('acctTypeCLbl').value = 'Checking';
            document.getElementById('acctTypeSLbl').value = 'Saving';
            amt = document.getElementById('amount');
            amt.readOnly = 'readonly';
            amt.tabIndex = -1;
            document.getElementById('radioLbl').value = 'Transaction Type';
            document.getElementById('radio1Lbl').value = 'Check Card';
            document.getElementById('radio2Lbl').value = 'Credit';
            document.getElementById('radio3Lbl').value = 'Debit';
            document.getElementById('radio4Lbl').value = 'Debit'; // Pinless 
            document.getElementById('radio5Lbl').value = 'ACH';
            // Disclaimer Text
            document.getElementById('achDisclaimerTxt').value = 'BY CLICKING ON THE SUBMIT BUTTON, I AGREE TO THE TERMS AND CONDITIONS OF USING MY BANK ACCOUNT AS A PAYMENT METHOD, WHICH ARE LISTED BELOW, AND AUTHORIZE EPX (OR ITS AGENT) TO DEBIT MY BANK ACCOUNT FOR THE AMOUNT SPECIFIED.\n\nTerms and Conditions\n\nBy choosing to use a bank account as your method of payment, you will be able to complete your payment using any valid United States based financial institution automated clearing house ("ACH") enabled bank account. You are authorizing EPX (or its agent) to debit your bank account for the amount specified. To complete your transaction, EPX, or an agent acting on its behalf, will create an electronic funds transfer or bank draft, which will be presented to your bank or financial institution for payment from your bank account. You agree that: (a) you have read, understand and agree to these Terms and Conditions, and that this agreement constitutes a "writing signed by you" under any applicable law or regulation, (b) you consent to the electronic delivery of the disclosures contained in these Terms and Conditions, (c) you authorize EPX (or its agent) to initiate one or more ACH debit entries (withdrawals) for the specified amount(s) from your bank account, and you authorize the financial institution that holds your bank account to deduct such payments. EPX, in its sole discretion, may refuse this payment option service to anyone or any user without notice for any reason at any time.';
            document.getElementById('debitDisclaimerTxt').innerHTML = 'NOTE: If you make payment with a debit card, the payment amount will be immediately deducted from your checking account.  The deduction cannot be reversed or voided upon deduction from your account.';
            document.getElementById('miscCardImageLbl').value = 'We support the following financial networks:';
            // Buttons Controls
            document.getElementById('submitBtn').value = 'Submit';
            document.getElementById('submit2Btn').value = 'Submit';
            document.getElementById('resetBtn').value = 'Reset';
            document.getElementById('reset2Btn').value = 'Reset';
            document.getElementById('cancelBtn').value = 'Cancel';
            document.getElementById('cancel2Btn').value = 'Cancel';
            document.getElementById('swipeBtn').value = 'Swipe';
            // Messaging Controls
            document.getElementById('miscMessage1').innerHTML = 'Important Messages';
            document.getElementById('miscMessage2').innerHTML = 'There was a problem with your request.';
            // Footer Controls
            document.getElementById('ftr0Lbl').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
            document.getElementById('radio2RB').onclick = this.tranTypeRadioClick;
            document.getElementById('radio5RB').onclick = this.tranTypeRadioClick;
            //hide debit
            document.getElementById('radio4Row').style.display = 'none';
            document.getElementById('radio5Row').style.display = 'none'; //hide ACH 
            document.getElementById('radio4RB').onclick = this.tranTypeRadioClick;
            document.getElementById('debitDisclaimerRow').style.display = "none";
            document.getElementById('mainDiv').style.display = 'block';
            if (document.getElementById('radio2RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            else if (document.getElementById('radio4RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            else if (document.getElementById('radio5RB').checked) {
                document.getElementById('ccGroupDiv').style.display = 'none';
                document.getElementById('achGroupDiv').style.display = 'inline';
            }
            else {
                document.getElementById('radio2RB').checked = true;
                document.getElementById('ccGroupDiv').style.display = 'inline';
                document.getElementById('achGroupDiv').style.display = 'none';
            }
            document.getElementById('submitBtn').onclick = this.onSubmit;
        };
        Functions.prototype.eventFire = function (el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            }
            else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        };
        Functions.prototype.tranTypeRadioClick = function (e) {
            var evt = e ? e : (window.event) ? window.event : "";
            if (evt) {
                var elem = evt.target ? evt.target : evt.srcElement;
                switch (elem.id) {
                    case "radio2RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio5RB":
                        document.getElementById('ccGroupDiv').style.display = 'none';
                        document.getElementById('achGroupDiv').style.display = 'inline';
                        break;
                }
            }
        };
        Functions.prototype.onSubmit = function () {
            disableSubmit(true);
            // Credit
            if (document.getElementById('radio2RB').checked)
                sTranCode = 'STORAGE';
            else if (document.getElementById('radio4RB').checked)
                sTranCode = 'STORAGE';
            else if (document.getElementById('radio5RB').checked) {
                if (document.getElementById('acctTypeCRB').checked)
                    sTranCode = 'ACHSTORAGE_C';
                else
                    sTranCode = 'ACHSTORAGE_S';
            }
            else {
                disableSubmit(false);
                return false;
            }
            document.getElementById('tran_code').value = sTranCode;
            /*
                document.getElementById('first_name').disabled = false;
                document.getElementById('last_name').disabled = false;
                document.getElementById('account_nbr').disabled = false;
            */
            //	document.getElementById('amount').disabled = true;
            document.getElementById('processForm').submit();
        };
        return Functions;
    }());
    BRICORDERSTORAGE.Functions = Functions;
})(BRICORDERSTORAGE || (BRICORDERSTORAGE = {}));
//# sourceMappingURL=EPX_BRICORDERSTORAGE.js.map

var BRICAUTH;
(function (BRICAUTH) {
    var Functions = (function () {
        function Functions() {
        }
        /*  -----------------------------------------------------------
            PayPage JavaScript
        --------------------------------------------------------------- */
        Functions.prototype.initStyling = function () {
            document.getElementById('amount').style.width = '8em';
            document.getElementById('check_nbr').style.width = '8em';
            document.getElementById('amount').style.border = '0';
            document.getElementById('amountRow').style.display = 'inline';
            document.getElementById('chkNumRow').style.display = 'inline';
            document.getElementById('invoiceNumRow').style.display = 'inline';
            document.getElementById('radio1Row').style.display = 'inline';
            document.getElementById('achDisclaimerRow').style.display = 'inline';
            document.getElementById('debitDisclaimerRow').style.display = 'inline';
        };
        /* Action to take when resetBtn is Clicked */
        Functions.prototype.resetBtn_Click = function () {
            document.getElementById('first_name').value = '';
            document.getElementById('last_name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('zip').value = '';
            document.getElementById('phone_hm').value = '';
            document.getElementById('account_nbr').value = '';
            document.getElementById('routing_nbr').value = '';
            document.getElementById('ach_account_nbr').value = '';
            document.getElementById('monthDDL').selectedIndex = 0;
            document.getElementById('yearDDL').selectedIndex = 0;
            document.getElementById('exp_date').value = '';
            document.getElementById('cvv2').value = '';
            document.getElementById('invoice_nbr').value = '';
            document.getElementById('declinedSP').innerHTML = '';
            document.getElementById('miscMessageRow').style.display = 'none';
            document.getElementById('miscMessageSpacerRow').style.display = 'none';
            document.getElementById('first_name_msg').style.display = 'none';
            document.getElementById('last_name_msg').style.display = 'none';
            document.getElementById('address_msg').style.display = 'none';
            document.getElementById('cityStateZip_msg').style.display = 'none';
            document.getElementById('phone_hm_msg').style.display = 'none';
            document.getElementById('phone_cell_msg').style.display = 'none';
            document.getElementById('phone_wk_msg').style.display = 'none';
            document.getElementById('user_data_1_msg').style.display = 'none';
            document.getElementById('amount_msg').style.display = 'none';
            document.getElementById('invoice_nbr_msg').style.display = 'none';
            document.getElementById('account_nbr_msg').style.display = 'none';
            document.getElementById('exp_date_msg').style.display = 'none';
            document.getElementById('cvv2_msg').style.display = 'none';
            document.getElementById('routing_nbr_msg').style.display = 'none';
            document.getElementById('ach_account_nbr_msg').style.display = 'none';
            document.getElementById('check_nbr_msg').style.display = 'none';
        };
        Functions.prototype.initPage = function () {
            // Header Controls
            document.getElementById('hdr0Lbl').innerHTML = 'Electronic Payment Exchange';
            // see function hdrHprLnk_Click to set Redirect for hdrHprLnk
            document.getElementById('hdrHprLnk').innerHTML = 'Close / Exit';
            // Body Controls
            document.getElementById('firstNameLbl').value = 'First Name:';
            document.getElementById('lastNameLbl').value = 'Last Name:';
            document.getElementById('addressLbl').value = 'Address:';
            document.getElementById('cityStZipLbl').value = 'City,St,Zip:';
            document.getElementById('phoneHMLbl').value = 'Home Phone:';
            document.getElementById('userData1Row').style.display = 'none';
            document.getElementById('invoiceNumRow').style.display = 'none';
            document.getElementById('radio1Row').style.display = 'none';
            document.getElementById('radio4Row').style.display = 'none';
            document.getElementById('radio5Row').style.display = 'none';
            setTimeout(function () {
                document.getElementById('radio2RB').click();
            }, 300);
            /*
                EPX supports user data fields, fields our merchants can populate with information
                of their choosing.  Define user data labels here.
            */
            document.getElementById('userData1Lbl').value = 'User Data 1:';
            document.getElementById('creditCardLbl').value = 'Card Number:';
            document.getElementById('expDateLbl').value = 'Expiration Date:';
            document.getElementById('cvv2Lbl').value = 'CVV Value:';
            document.getElementById('rtNumLbl').value = 'Routing Number:';
            document.getElementById('achAcctLbl').value = 'Account Number:';
            document.getElementById('acctTypeLbl').value = 'Account Type:';
            document.getElementById('acctTypeCLbl').value = 'Checking';
            document.getElementById('acctTypeSLbl').value = 'Saving';
            document.getElementById('chkNumLbl').value = 'Check Number:';
            document.getElementById('amountLbl').value = 'Amount:';
            amt = document.getElementById('amount');
            amt.readOnly = 'readonly';
            amt.tabIndex = -1;
            document.getElementById('invoiceNumLbl').value = 'Invoice Number:';
            document.getElementById('radioLbl').value = 'Transaction Type';
            document.getElementById('radio1Lbl').value = 'Check Card';
            document.getElementById('radio2Lbl').value = 'Credit';
            document.getElementById('radio3Lbl').value = 'Debit';
            document.getElementById('radio4Lbl').value = 'Debit'; // Pinless
            document.getElementById('radio5Lbl').value = 'ACH';
            // Disclaimer Text
            document.getElementById('achDisclaimerTxt').value = 'BY CLICKING ON THE SUBMIT BUTTON, I AGREE TO THE TERMS AND CONDITIONS OF USING MY BANK ACCOUNT AS A PAYMENT METHOD, WHICH ARE LISTED BELOW, AND AUTHORIZE EPX (OR ITS AGENT) TO DEBIT MY BANK ACCOUNT FOR THE AMOUNT SPECIFIED.\n\nTerms and Conditions\n\nBy choosing to use a bank account as your method of payment, you will be able to complete your payment using any valid United States based financial institution automated clearing house ("ACH") enabled bank account. You are authorizing EPX (or its agent) to debit your bank account for the amount specified. To complete your transaction, EPX, or an agent acting on its behalf, will create an electronic funds transfer or bank draft, which will be presented to your bank or financial institution for payment from your bank account. You agree that: (a) you have read, understand and agree to these Terms and Conditions, and that this agreement constitutes a "writing signed by you" under any applicable law or regulation, (b) you consent to the electronic delivery of the disclosures contained in these Terms and Conditions, (c) you authorize EPX (or its agent) to initiate one or more ACH debit entries (withdrawals) for the specified amount(s) from your bank account, and you authorize the financial institution that holds your bank account to deduct such payments. EPX, in its sole discretion, may refuse this payment option service to anyone or any user without notice for any reason at any time.';
            document.getElementById('debitDisclaimerTxt').innerHTML = 'NOTE: If you make payment with a debit card, the payment amount will be immediately deducted from your checking account.  The deduction cannot be reversed or voided upon deduction from your account.';
            document.getElementById('miscCardImageLbl').value = 'We support the following financial networks:';
            // Buttons Controls
            document.getElementById('submitBtn').value = 'Submit';
            document.getElementById('submit2Btn').value = 'Submit';
            document.getElementById('resetBtn').value = 'Reset';
            document.getElementById('reset2Btn').value = 'Reset';
            document.getElementById('cancelBtn').value = 'Cancel';
            document.getElementById('cancel2Btn').value = 'Cancel';
            document.getElementById('swipeBtn').value = 'Swipe';
            // Messaging Controls
            document.getElementById('miscMessage1').innerHTML = 'Important Messages';
            document.getElementById('miscMessage2').innerHTML = 'There was a problem with your request.';
            document.getElementById('submitBtn').onclick = this.onSubmit;
            document.getElementById('submit2Btn').onclick = this.onSubmit;
            // Footer Controls 
            document.getElementById('ftr0Lbl').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
            document.getElementById('mainDiv').style.display = 'block';
        };
        Functions.prototype.onSubmit = function () {
            disableSubmit(true);
            document.getElementById('tran_code').value = 'AUTH';
            document.getElementById('processForm').submit();
        };
        /*  -----------------------------------------------------------
            End PayPage JavaScript
        --------------------------------------------------------------- */
        return Functions;
    }());
    BRICAUTH.Functions = Functions;
})(BRICAUTH || (BRICAUTH = {}));
//# sourceMappingURL=EPX_BRICAUTH.js.map

var BRICSALES;
(function (BRICSALES) {
    var Functions = (function () {
        function Functions() {
        }
        /*  -----------------------------------------------------------
            PayPage JavaScript
        --------------------------------------------------------------- */
        Functions.prototype.initStyling = function () {
            document.getElementById('amount').style.width = '8em';
            document.getElementById('zip').style.width = '8em';
            document.getElementById('check_nbr').style.width = '8em';
            document.getElementById('amountRow').style.display = 'inline';
            document.getElementById('chkNumRow').style.display = 'inline';
            document.getElementById('invoiceNumRow').style.display = 'inline';
            document.getElementById('radio1Row').style.display = 'inline';
            document.getElementById('achDisclaimerRow').style.display = 'inline';
            document.getElementById('debitDisclaimerRow').style.display = 'inline';
            document.getElementById('amountSpaceRow').style.display = 'inline';
            document.getElementById('trantypeSpaceRow').style.display = 'inline';
            document.getElementById('button2SpaceRow').style.display = 'inline';
        };
        /* Action to take when resetBtn is Clicked */
        Functions.prototype.resetBtn_Click = function () {
            document.getElementById('first_name').value = '';
            document.getElementById('last_name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('zip').value = '';
            document.getElementById('phone_hm').value = '';
            document.getElementById('account_nbr').value = '';
            document.getElementById('routing_nbr').value = '';
            document.getElementById('ach_account_nbr').value = '';
            document.getElementById('monthDDL').selectedIndex = 0;
            document.getElementById('yearDDL').selectedIndex = 0;
            document.getElementById('exp_date').value = '';
            document.getElementById('cvv2').value = '';
            document.getElementById('invoice_nbr').value = '';
            document.getElementById('declinedSP').innerHTML = '';
            document.getElementById('miscMessageRow').style.display = 'none';
            document.getElementById('miscMessageSpacerRow').style.display = 'none';
            document.getElementById('first_name_msg').style.display = 'none';
            document.getElementById('last_name_msg').style.display = 'none';
            document.getElementById('address_msg').style.display = 'none';
            document.getElementById('cityStateZip_msg').style.display = 'none';
            document.getElementById('phone_hm_msg').style.display = 'none';
            document.getElementById('phone_cell_msg').style.display = 'none';
            document.getElementById('phone_wk_msg').style.display = 'none';
            document.getElementById('user_data_1_msg').style.display = 'none';
            document.getElementById('amount_msg').style.display = 'none';
            document.getElementById('invoice_nbr_msg').style.display = 'none';
            document.getElementById('account_nbr_msg').style.display = 'none';
            document.getElementById('exp_date_msg').style.display = 'none';
            document.getElementById('cvv2_msg').style.display = 'none';
            document.getElementById('routing_nbr_msg').style.display = 'none';
            document.getElementById('ach_account_nbr_msg').style.display = 'none';
            document.getElementById('check_nbr_msg').style.display = 'none';
        };
        Functions.prototype.initPage = function () {
            // Header Controls
            document.getElementById('hdr0Lbl').innerHTML = 'Electronic Payment Exchange';
            // see function hdrHprLnk_Click to set Redirect for hdrHprLnk
            document.getElementById('hdrHprLnk').innerHTML = 'Close / Exit';
            // Body Controls
            document.getElementById('firstNameLbl').value = 'First Name:';
            document.getElementById('lastNameLbl').value = 'Last Name:';
            document.getElementById('addressLbl').value = 'Address:';
            document.getElementById('cityStZipLbl').value = 'City,St,Zip:';
            document.getElementById('phoneHMLbl').value = 'Home Phone:';
            /*
                EPX supports user data fields, fields our merchants can populate with information
                of their choosing.  Define user data labels here.
            */
            document.getElementById('userData1Lbl').value = 'User Data 1:';
            document.getElementById('creditCardLbl').value = 'Card Number:';
            document.getElementById('expDateLbl').value = 'Expiration Date:';
            document.getElementById('cvv2Lbl').value = 'CVV Value:';
            document.getElementById('rtNumLbl').value = 'Routing Number:';
            document.getElementById('achAcctLbl').value = 'Account Number:';
            document.getElementById('acctTypeLbl').value = 'Account Type:';
            document.getElementById('acctTypeCLbl').value = 'Checking';
            document.getElementById('acctTypeSLbl').value = 'Saving';
            document.getElementById('chkNumLbl').value = 'Check Number:';
            document.getElementById('amountLbl').value = 'Amount:';
            amt = document.getElementById('amount');
            amt.readOnly = 'readonly';
            amt.tabIndex = -1;
            document.getElementById('invoiceNumLbl').value = 'Invoice Number:';
            document.getElementById('radioLbl').value = 'Transaction Type';
            document.getElementById('radio1Lbl').value = 'Check Card';
            document.getElementById('radio2Lbl').value = 'Credit';
            document.getElementById('radio3Lbl').value = 'Debit';
            document.getElementById('radio4Lbl').value = 'Debit'; // Pinless
            document.getElementById('radio5Lbl').value = 'ACH';
            // Disclaimer Text
            document.getElementById('achDisclaimerTxt').value = 'BY CLICKING ON THE SUBMIT BUTTON, I AGREE TO THE TERMS AND CONDITIONS OF USING MY BANK ACCOUNT AS A PAYMENT METHOD, WHICH ARE LISTED BELOW, AND AUTHORIZE EPX (OR ITS AGENT) TO DEBIT MY BANK ACCOUNT FOR THE AMOUNT SPECIFIED.\n\nTerms and Conditions\n\nBy choosing to use a bank account as your method of payment, you will be able to complete your payment using any valid United States based financial institution automated clearing house ("ACH") enabled bank account. You are authorizing EPX (or its agent) to debit your bank account for the amount specified. To complete your transaction, EPX, or an agent acting on its behalf, will create an electronic funds transfer or bank draft, which will be presented to your bank or financial institution for payment from your bank account. You agree that: (a) you have read, understand and agree to these Terms and Conditions, and that this agreement constitutes a "writing signed by you" under any applicable law or regulation, (b) you consent to the electronic delivery of the disclosures contained in these Terms and Conditions, (c) you authorize EPX (or its agent) to initiate one or more ACH debit entries (withdrawals) for the specified amount(s) from your bank account, and you authorize the financial institution that holds your bank account to deduct such payments. EPX, in its sole discretion, may refuse this payment option service to anyone or any user without notice for any reason at any time.';
            document.getElementById('debitDisclaimerTxt').innerHTML = 'NOTE: If you make payment with a debit card, the payment amount will be immediately deducted from your checking account.  The deduction cannot be reversed or voided upon deduction from your account.';
            document.getElementById('miscCardImageLbl').value = 'We support the following financial networks:';
            // Buttons Controls
            document.getElementById('submitBtn').value = 'Submit';
            document.getElementById('submit2Btn').value = 'Submit';
            document.getElementById('resetBtn').value = 'Reset';
            document.getElementById('reset2Btn').value = 'Reset';
            document.getElementById('cancelBtn').value = 'Cancel';
            document.getElementById('cancel2Btn').value = 'Cancel';
            document.getElementById('swipeBtn').value = 'Swipe';
            // Messaging Controls
            document.getElementById('miscMessage1').innerHTML = 'Important Messages';
            document.getElementById('miscMessage2').innerHTML = 'There was a problem with your request.';
            // Footer Controls
            document.getElementById('ftr0Lbl').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
            document.getElementById('mainDiv').style.display = 'block';
        };
        Functions.prototype.eventFire = function (el, etype) {
            if (el.fireEvent) {
                el.fireEvent('on' + etype);
            }
            else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
            }
        };
        Functions.prototype.tranTypeRadioClick = function (e) {
            var evt = e ? e : (window.event) ? window.event : "";
            if (evt) {
                var elem = evt.target ? evt.target : evt.srcElement;
                switch (elem.id) {
                    case "radio2RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio3RB":
                        document.getElementById('ccGroupDiv').style.display = 'inline';
                        document.getElementById('achGroupDiv').style.display = 'none';
                        break;
                    case "radio5RB":
                        document.getElementById('ccGroupDiv').style.display = 'none';
                        document.getElementById('achGroupDiv').style.display = 'inline';
                        break;
                }
            }
        };
        return Functions;
    }());
    BRICSALES.Functions = Functions;
})(BRICSALES || (BRICSALES = {}));
//# sourceMappingURL=EPX_BRICSALES.js.map




/* Image/Text to display when Waiting */
function displayWait() {
    document.getElementById('processingImg').innerHTML = '<img src="images/ani_gears.gif" border=0>';
    document.getElementById('processingText').innerHTML = 'Processing your transaction, please do not cancel!';
}


/* Action to take when hdrHprLnk is Clicked */
function hdrHprLnk_Click() {
    location.replace('http://www.epx.com');
}

/* Action to take when resetBtn is Clicked */
function resetBtn_Click() {
    if (document.getElementById("user_data_7").value == "STORAGE" || document.getElementById("user_data_7").value == "ACHSTORAGE") {
        BRICSTORAGE.Functions.prototype.resetBtn_Click();
    } else if (document.getElementById("user_data_7").value == "STORAGE-ORDER") {
        BRICORDERSTORAGE.Functions.prototype.resetBtn_Click();
    } else if (document.getElementById("user_data_7").value == "AUTH") {
        BRICAUTH.Functions.prototype.resetBtn_Click();
    } else if (document.getElementById("user_data_7").value == "SALES" || document.getElementById("user_data_7").value == "SALE") {
        BRICSALES.Functions.prototype.resetBtn_Click();
    }
}

/* Action to take when cancelBtn is Clicked */
function cancelBtn_Click() {
    var cancelUrl = document.getElementById('cancelUrl').value;
    if (cancelUrl.length > 0)
        location.replace(cancelUrl);
    else
        location.replace('http://www.epx.com');
}

function initPage() {
    document.getElementById('submit2Btn').style.display = 'none';
    document.getElementById('reset2Btn').style.display = 'none';
    document.getElementById('hdrHprLnk').style.display = 'none';
    document.getElementById('cancel2Btn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
    if (document.getElementById("user_data_7").value == "STORAGE" || document.getElementById("user_data_7").value == "ACHSTORAGE") {
        BRICSTORAGE.Functions.prototype.initStyling();
        BRICSTORAGE.Functions.prototype.initPage();
    } else if (document.getElementById("user_data_7").value == "STORAGE-ORDER") {
        BRICORDERSTORAGE.Functions.prototype.initStyling();
        BRICORDERSTORAGE.Functions.prototype.initPage(); 
    } else if (document.getElementById("user_data_7").value == "SALES") {
        BRICSALES.Functions.prototype.initStyling();
        BRICSALES.Functions.prototype.initPage();
    } else if (document.getElementById("user_data_7").value == "AUTH") {
        BRICAUTH.Functions.prototype.initStyling();
        BRICAUTH.Functions.prototype.initPage();
    }
}

/*  -----------------------------------------------------------
	Receipt Page JavaScript
--------------------------------------------------------------- */

/* Action to take when hdrHprLnk is Clicked */
function hdrHprLnkRcpt_Click() {
    location.replace('http://www.epx.com');
}

function initRcptPage() {
    // Header Controls
    document.getElementById('hdr0LblRcpt').innerHTML = 'Electronic Payment Exchange';
    document.getElementById('hdrHprLnkRcpt').innerHTML = 'Close / Exit';
    // Buttons Controls
    document.getElementById('printBtn').value = 'Print';
    document.getElementById('continueBtn').value = 'Continue';
    document.getElementById('closeBtn').value = 'Close';
    // Results Controls
    document.getElementById('responseTextLbl').value = 'Your transaction was approved!';
    document.getElementById('respMsgLbl').value = 'Response Text:';
    document.getElementById('respAuthLbl').value = 'Authorization Number:';
    document.getElementById('respCodeLbl').value = 'Response Code:';
    document.getElementById('respGuidLbl').value = 'Reference Guid:';
    document.getElementById('respAmountLbl').value = 'Amount:';
    // Receipt Pad Controls
    document.getElementById('inv_nbrLbl').value = 'Invoice:';
    document.getElementById('merch_nbrLbl').value = 'Merchant ID:';
    document.getElementById('batch_idLbl').value = 'Batch ID#:';
    document.getElementById('tran_idLbl').value = 'Tran ID#:';
    document.getElementById('server_operLbl').value = 'Operator:';
    document.getElementById('acct_nbrLbl').value = 'Acct #:';
    document.getElementById('auth_codeLbl').value = 'Auth Code:';
    document.getElementById('avs_respLbl').value = 'AVS:';
    document.getElementById('cvv2_rcpt_Lbl').value = 'CVV:';
    document.getElementById('guidLbl').value = 'Ref #:';
    document.getElementById('usrData1Lbl').value = 'User Data 1:';
    document.getElementById('usrData2Lbl').value = 'User Data 2:';
    document.getElementById('usrData3Lbl').value = 'User Data 3:';
    document.getElementById('usrData4Lbl').value = 'User Data 4:';
    document.getElementById('usrData5Lbl').value = 'User Data 5:';
    document.getElementById('usrData6Lbl').value = 'User Data 6:';
    document.getElementById('usrData7Lbl').value = 'User Data 7:';
    document.getElementById('usrData8Lbl').value = 'User Data 8:';
    document.getElementById('usrData9Lbl').value = 'User Data 9:';
    document.getElementById('usrData10Lbl').value = 'User Data 10:';
    document.getElementById('tran_amountLbl').value = 'Total:';
    document.getElementById('signature').innerHTML = 'Signature';
    // Footer Controls
    document.getElementById('ftr0LblRcpt').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
}
