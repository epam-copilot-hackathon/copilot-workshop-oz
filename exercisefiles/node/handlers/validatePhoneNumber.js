const validatePhoneNumber = (phoneNumber) => {
    // Regular expression to validate Spanish phone numbers
    const phoneRegex = /^\+34\d{9}$/;

    console.log(phoneRegex.test(phoneNumber));
    console.log("" + phoneNumber);

    if (phoneRegex.test(phoneNumber)) {
        
        return "valid";
    } else {
        return "invalid";
    }
};

module.exports = (req, res) => {
    console.log(req.phoneNumber)
    console.log(req)
    let phoneNumber = req.phoneNumber;

    if (phoneNumber) {
        // Ensure phoneNumber is a string
        phoneNumber = String(phoneNumber);
        const result = validatePhoneNumber(phoneNumber);
        res.end(result);
    } else {
        res.end("phoneNumber not passed");
    }
};
