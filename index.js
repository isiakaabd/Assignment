// inputNumber = prompt("enter a Number", 6);
// inputNumber = ' ' ? (alert("no number inputed")) : (alert(inputNumber))




// inputNumber = prompt("enter a Number", 6);
// inputNumber = parseInt(inputNumber);
// if (inputNumber >= 100) {
//     document.write("century or above")
// } else {
//     document.write("you entered " + inputNumber)
// }

input = prompt("Welcome to REMLAD VENTURES \n 1. Airtime-self \n 2. Airtime-others \n 3. Data \n 4. Transfer-GTB \n 5. Transfer-others  \n 6. Cable Subscription ")
input = parseInt(input);
if (input === 1) {
    networkSelection = prompt("Select your network \n 1. MTN \n 2. Glo \n 3. Airtel \n 4. others \n")
    networkSelection = parseInt(networkSelection);
    if (networkSelection === 1 || networkSelection === 2 || networkSelection === 3) {
        selection = prompt("Enter your amount", "500");
        selection = parseInt(selection);
        if (selection < 50) {
            alert("enter a value of N 50 and above")


        } else {
            alert(`You have successfully recharged N${selection} `)
        }
    }
} else if (input === 2) {

    selection = prompt("Enter your amount", "500");
    selection = parseInt(selection);
    if (selection < 100) {
        alert("enter a value of N 100 and above")
    } else {
        phoneNumber = prompt("Enter the recipient phone-number", '070XXXXXXX')
        phoneNumber = parseInt(phoneNumber);
        if (phoneNumber < 11) {
            alert("enter a valid phone number")
        } else {
            alert(`You have successfully recharged N${selection} on  0${phoneNumber}`)
        }
    }


} else if (input === 3) {
    dataInput = prompt("Purchase for: \n 1. self \n 2. 3rd Party")
    dataInput = parseInt(dataInput)
    if (dataInput === 1) {
        dataSelection = prompt("select MTN Data: \n 1-100MB 1day N100 \n 2-1000MB 30day N400 \n 3-2000MB 30days N750 \n 4-3000MB 30days N1100 \n 5-Mega deal \n 6-NEXT ")
        dataSelection = parseInt(dataSelection);
        switch (dataSelection) {
            case 1:
                alert("you have been credited with 100MB data, data expires in 24hrs");
                break;
            case 2:
                alert("you have been credited with 1000MB data, data expires in the next 30days");
                break;
            case 3:
                alert("you have been credited with 2000MB data, data expires in the next 30days");
                break;
            case 4:
                alert("you have been credited with 3000MB data, data expires in the next 30days");
                break;
            case 5:
                alert("kindly contact our support line");
                break;

        }

    } else if (dataInput === 2) {
        phoneNumber = prompt("Enter the recipient phone-number", '070XXXXXXX');
        phoneNumber = parseInt(phoneNumber);
        if (phoneNumber < 11) {
            alert("enter a valid phone number")
        } else {
            dataSelection = prompt("select MTN Data: \n 1-100MB 1day N100 \n 2-1000MB 30day N400 \n 3-2000MB 30days N750 \n 4-3000MB 30days N1100 \n 5-Mega deal \n 6-NEXT ")
            dataSelection = parseInt(dataSelection);
            switch (dataSelection) {
                case 1:
                    alert(`you have been credited 0${phoneNumber} with 100MB data, data expires in 24hrs`);
                    break;
                case 2:
                    alert(`you have been credited 0${phoneNumber} with 1000MB data, data expires in the next 30days`);
                    break;
                case 3:
                    alert(`you have been credited 0${phoneNumber} with 2000MB data, data expires in the next 30days`);
                    break;
                case 4:
                    alert(`you have been credited 0${phoneNumber} with 3000MB data, data expires in the next 30days`);
                    break;
                case 5:
                    alert("kindly contact our support line");
                    break;

            }
        }
    }
} else if (input === 4) {

    transferAmount = prompt(" Please Enter amount: \n");
    transferAmount = parseInt(transferAmount);
    transferAccount = prompt(" Please Enter recipient's account number or Phone No or Surname: \n");
    transferAccount = parseInt(transferAccount);
    if (transferAccount < 10) {
        alert('invalid account number')
    } else {
        transferBank = prompt(`Transfer of N${transferAmount} to ${ transferAccount} \n please enter your PIN: `)
        transferBank = parseInt(transferBank);
        confirmTransfer = confirm("Do you want to complete the transfer?")
        if (confirmTransfer === true) {
            successTransfer = alert(`you have successfully transferred N${transferAmount} to ${ transferAccount} `)

        } else {
            alert("transaction declined \n THANK YOU FOR BANKING WITH US")
        }
    }

} else if (input === 5) {

    transferAmount = prompt(" Please Enter amount: \n");
    transferAmount = parseInt(transferAmount);
    transferAccount = prompt(" Please Enter recipient's account number or Phone No or Surname: \n");
    transferAccount = parseInt(transferAccount);
    if (transferAccount < 10) {
        alert('invalid account number')
    } else {
        transferBank_Ng = prompt(`Transfer of N${transferAmount} to ${ transferAccount} \n select recipient's bank: \n 1->Zenith Bank \n 2->Jaiz Bank\n 3->union Bank\n 4->FCMB \n 5->NEXT `)
        transferBank_Ng = parseInt(transferBank_Ng);
        // switch (transferBank_Ng) {
        //     case 'transferBank_Ng':

        //         break;
        //     case 2:
        //         alert("Jaiz Bank");
        //         break;
        //     case 3:
        //         alert("union Bank");
        //         break;
        //     case 4:
        //         alert("FCMB");
        //         break;
        // }
        transferBank = prompt(`Transfer of N${transferAmount} to  ${transferBank_Ng} ${ transferAccount} \n please enter your PIN: `)
        transferBank = parseInt(transferBank);
        confirmTransfer = confirm("Do you want to complete the transfer?")
        if (confirmTransfer === true) {
            successTransfer = alert(`you have successfully transferred N${transferAmount} to ${transferBank_Ng} ${ transferAccount} \n THANK YOU FOR BANKING WITH US`)

        } else {
            alert("transaction declined \n THANK YOU FOR BANKING WITH US")
        }
    }

} else if (input === 6) {
    smartCard = prompt("cable subscription \n  please enter your Smart Card Number:")
    smartCard = parseInt(smartCard);
    if (smartCard <= 9) {
        alert("enter a  valid smart card number")
    } else {
        smartCardSub = prompt("Choose your cable network \n 1-GOTV \n 2-DSTV \n 3-MITV ")
        smartCardSub = parseInt(smartCardSub);
        switch (smartCardSub) {
            case 1:
                alert(`you have successfully subscribe to  our  ${smartCardSub} monthly. you will receive a message shorthly`);
                break;
            case 2:
                alert(`you have successfully subscribe to  our  ${smartCardSub[2]} monthly. you will receive a message shorthly`);
                break;
            case 3:
                alert(`you have successfully subscribe to  our  ${smartCardSub[3]} monthly. you will receive a message shorthly`);
                break;


        }
    }
}