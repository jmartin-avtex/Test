/*  -----------------------------------------------------------
	PayPage JavaScript
--------------------------------------------------------------- */

/* Image/Text to display when Waiting */
function displayWait()
{
    document.getElementById('processingImg').innerHTML = '<img src="images/ani_gears.gif" border=0>';
    document.getElementById('processingText').innerHTML = 'Processing your transaction, please do not cancel!';
}


/* Action to take when hdrHprLnk is Clicked */
function hdrHprLnk_Click()
{
    location.replace('http://www.epx.com');
}

/* Action to take when resetBtn is Clicked */
function resetBtn_Click()
{
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
}

/* Action to take when cancelBtn is Clicked */
function cancelBtn_Click()
{
	var cancelUrl = document.getElementById('cancelUrl').value;
	if(cancelUrl.length > 0)
		location.replace(cancelUrl);
	else
		location.replace('http://www.epx.com');
}

function initPage()
{
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
	document.getElementById('radio4Lbl').value = 'Debit';		// Pinless
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

	document.getElementById('submitBtn').onclick = onSubmit;
	document.getElementById('submit2Btn').onclick = onSubmit;
	
	// Footer Controls
	document.getElementById('ftr0Lbl').innerHTML = "Powered by EPX (<a href='javascript:showEPX();'>www.epx.com</a>)";
	
	document.getElementById('mainDiv').style.display = 'block';
}

function onSubmit()
{
	disableSubmit(true);
	document.getElementById('tran_code').value = 'AUTH';
	document.getElementById('processForm').submit();
}

/*  -----------------------------------------------------------
	End PayPage JavaScript
--------------------------------------------------------------- */

/*  -----------------------------------------------------------
	Receipt Page JavaScript
--------------------------------------------------------------- */

/* Action to take when hdrHprLnk is Clicked */
function hdrHprLnkRcpt_Click()
{
    location.replace('http://www.epx.com');
}

function initRcptPage()
{
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
