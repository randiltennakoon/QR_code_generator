function generateURL(width, height, data) {

    var qr_code_width = width;
    var qr_code_height = height;
    var qr_code_data = data;


    if(qr_code_width == "" || qr_code_height == "" || qr_code_data == "") {
        alert("Width, Height & Data cannot be empty");
        return false;
    }
    if(qr_code_width <= 100 || qr_code_height <= 100) {
        alert("Width & Height should be greater than 100");
        return false;
    }

    // if(typeof(qr_code_data) === 'number') {
    //     console.log(typeof(qr_code_data));
    //     alert("Data cannot be a number");
    //     return false;
    // }

    URL = `https://chart.googleapis.com/chart?&cht=qr&chs=${qr_code_width}x${qr_code_height}&chl="${qr_code_data}"&choe=UTF-8`;

    console.log(URL);

    window.open(URL, "_blank");

    

}

