import axios from 'axios';
import jwt from "jwt-simple";
import { toast } from 'sonner';


interface paymentDataType{
    unique_id:string
    price:number
}


const generatePaymentToken = async (paymentData:paymentDataType) => {

    var jwtTokenDecode:any;
    try {
        let payload = {
            "merchantID": "702702000002346",
            // "merchantID": "JT01",

            "invoiceNo": `${paymentData.unique_id}`,
            "description": "Meowcademy",
            "amount": `${paymentData.price}`,
            "currencyCode": "SGD",
            "type":"meowcademy"
            // "nonceStr": "a8092512-b144-41b0-8284-568bb5e9264c",
            // "paymentChannel": [],
            // "request3DS": "Y",
        }
        const secretKey = '083819787D08A2D3AC086136238A108F7D797CDCD2FE9D4DABBED0079159B758';
        // const secretKey = 'ECC4E54DBA738857B84A7EBC6B5DC7187B8DA68750E88AB53AAA41F548D6F2D9';

        var jwtToken = await jwt.encode(payload, secretKey);

        await axios({
            method: 'post',
            url: 'https://pgw.2c2p.com/payment/4.1/paymentToken',
            data: {
                "payload": `${jwtToken}`
            },
            headers: { 'Content-Type': 'application/json' }

        }).then((val) => {

            jwtTokenDecode = jwt.decode(val.data.payload, secretKey);
        });


        return jwtTokenDecode?.webPaymentUrl;

    } catch (error) {
        toast.error("Something Went Wrong");
        throw error;
    }
};



export default generatePaymentToken;