const moment = require("moment");
// export const gatePassHtml = (gatePassData) => {
//   let total = 0;
//   let count = 0;
//   return `<html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-countUA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//       <style>
//       tr{
//         border: 1px solid #dddddd;
//         text-align: left;
//         padding: 8px
//       }
//      </style>
//     </head>
//     <body>
//       <main style="padding: 20px">
//         <div
//           style="
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 20px;
//         "
//         >
//           <img src="./RunnerLogo.png" height="100px" width="150px" />
//           <div
//             style="
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: space-between;
//           "
//           >
//             <h4 style="margin: 0">Runner Automobile limited</h4>
//             <p style="margin: 0">DHAKA</p>
//           </div>
//           <p>PrintTime:11/7/2022 5:55:36 PM</p>
//         </div>
//         <div style="display: flex; align-items: center; padding: 20px">
//           <div style="flex: 2;">
//           <div style="display: flex; align-items: center; width:100%">
//           <span style="font-size: 20px; width:50%"> <b>Gate Pass No. </b></span>
//           <span><b>:</b>${gatePassData.gatePassCode}</span>
//           </div>
//           <div style="display: flex; align-items: center; width:100%">
//           <span style="font-size: 20px; width:50%"><b>Customer Code </b></span>
//           <span><b>:</b>${
//             gatePassData?.challan?.requisitionId?.toSalesPoint.salesPointExecutive
//               ?.userId
//           }</span>
//         </div>
//         <div style="display: flex; align-items: center; width:100%">
//         <span style="font-size: 20px; width:50%"><b>Customer Name : &nbsp;</b></span>
//         <span><b>:</b>${
//           gatePassData?.challan?.requisitionId?.toSalesPoint.salesPointExecutive
//             ?.fullName
//         }</span>
//       </div>
//             <div style="display: flex; align-items: center; width:100%">
//             <span style="font-size: 20px; width:50%"><b>Customer Phone No. </b></span>
//             <span><b>:</b>${
//               gatePassData?.challan?.requisitionId?.toSalesPoint
//                 ??.salesPointExecutive?.contactNo
//             }</span>
//           </div>
//            <div style="display: flex; align-items: center; width:100%">
//             <span style="font-size: 20px; width:50%"><b>Address. </b></span>
//             <span><b>:</b>12345</span>
//           </div>
//          </div>
//           <div style="flex: 2; padding-bottom: 30px">
//         <div style="display: flex; align-items: center; width:100%">
//           <span style="font-size: 20px;width:50%"><b>Date </b></span>
//           <span><b>:</b>${moment(gatePassData.gatePassDate).format(
//             "DD-MM-YYYY"
//           )}</span>
//         </div>
//           <div style="display: flex; align-items: center; width:100%">
//             <span style="font-size: 20px;width:50%"><b>Driver Name : &nbsp;</b></span>
//             <span><b>:</b>${gatePassData.driverName}</span>
//           </div>
//           <div style="display: flex; align-items: center;width:100%">
//             <span style="font-size: 20px;width:50%"><b>Driver Phone No. :&nbsp;</b></span>
//             <span><b>:</b>${gatePassData.driverContact}</span>
//           </div>
//           <div style="display: flex; align-items: center;width:100%">
//             <span style="font-size: 20px;width:50%"><b>Truck No. :&nbsp;</b></span>
//             <span><b>:</b>${gatePassData.vehicleNumber}</span>
//           </div>
//           </div>
//         </div>
//         <div>
//           <table
//             style="
//             font-family: arial, sans-serif;
//             border-collapse: collapse;
//             width: 100%;
//             margin-bottom: 70px;
//             border-top:2px solid black;
//           "
//           >
//             <tr style="border : 2px solid black";
//             >
//               <th>SL No.</th>
//               <th>BRAND</th>
//               <th>DESCRIPTION OF GOODS</th>
//               <th>CHASSIS NO.</th>
//               <th>ENGINE NO.</th>
//               <th>QTY</th>
//               <th>COLOR</th>
//             </tr>
//             ${gatePassData?.challan?.sku.map((item) =>
//               item.skuChallan.map((element, index) => {
//                 total += 1;
//                 count += 1;
//                 return (
//                   '<tr style="border-bottom : 2px solid black"><td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">' +
//                   count +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   element.sku.brand +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   element.sku.skuId +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   element.chassisNumber +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   element.engineNumber +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   1 +
//                   "</td><td style='border-right: 2px solid black;'>" +
//                   element.color +
//                   "</tr>"
//                 );
//               })
//             )}
//             <tr style="border-bottom : 2px solid black">
//             <td colspan="5" class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">total</td>
//             <td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">${total}</td>
//             <td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;"></td>
//           </tr>
//           </table>
//         </div>
//         <div
//           style="
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 20px;
//           margin-top:20px
//         "
//         >
//          <div
//          <div
//          style="
//            border-top: 2px solid black;
//            padding: 5px 0px;
//            width: 200px;
//            border-width: thin;
//          "
//        >
//          <h4 style="padding-left: 60px">Received By</h4>
//         </div>
//         <div
//         style="
//           border-top: 2px solid black;
//           padding: 5px 0px;
//           width: 200px;
//           border-width: thin;
//         "
//       >
//         <h4 style="padding-left: 60px">Prepared By</h4>
//         </div>
//         <div
//         style="
//           border-top: 2px solid black;
//           padding: 5px 0px;
//           width: 200px;
//           border-width: thin;
//         "
//       >
//         <h4 style="padding-left: 30px">Authorised Signature</h4>
//         </div>
//         </div>
//       </main>

//     </body>
//   </html>`;
// };
export const gatePassHtml = (gatePassData?) => {
  let total = 0;
  let count = 0;
  return `<!doctype html>
  <html lang="en">
  
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Gate Pass Report</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  
  
      <style>
        img {
          height: 40px;
          width: 80px;
        }
  
        .customTable {
          width: 80%;
          height: 20%;
        }
  
        .HRClass {
          margin-top: 100px;
        }
  
      </style>
    </head>
  
    <body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"
        defer></script>
  
      <div class="container text-center mt-4 mb-5">
        <div class="row">
          <div class="col" style="margin-left: -150px;">
            <img src="http://localhost:4000/sys-files/RunnerLogo.png" alt="Logo">
  
          </div>
          <div class="col">
            <h6>Runner Automobiles Ltd</h6>
            <span>Dhaka</span>
          </div>
          <div class="col">
            <p className='pt-2'> <b>PrintTime: </b><span>12:12:12</span> </p>
          </div>
        </div>
      </div>
  
      <!-- <div class="container text-left mt-4 ml-3" style="display: none;">
        <div class="row">
          <div class="col"> <b>Gate Pass No. :</b></div>
          <div class="col">${gatePassData?.gatePassCode}</div>
          <div class="col"><b>Date :</b> </div>
          <div class="col">10-Nov-2022</div>
        </div> 
  
      </div>
  
      <div class="container text-left mt-4" style="display: none;">
        <div class="row">
          <div class="col"> <b>Customer Code :</b></div>
          <div class="col">${
            gatePassData?.challan?.requisitionId?.toSalesPoint
              ?.salesPointExecutive?.userId
          }</div>
          <div class="col"><b>Driver Name :</b> </div>
          <div class="col">user</div>
        </div>
  
      </div> -->
  
      <div class="container mt-5 mb-3">
        <div class="row">
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td><b>Gate Pass No. :</b></td>
                  <td>${gatePassData?.gatePassCode}</td>
                </tr>
  
                <tr>
                  <td><b>Customer Code :</b></td>
                  <td>${
                    gatePassData?.challan?.requisitionId?.toSalesPoint
                      ?.salesPointExecutive?.userId
                  } </td>
                </tr>
  
                <tr>
                  <td><b>Customer Name :</b></td>
                  <td>${
                    gatePassData?.challan?.requisitionId?.toSalesPoint
                      ?.salesPointExecutive?.fullName
                  } </td>
                </tr>
  
                <tr>
                  <td><b>Customer Phone No :</b></td>
                  <td>${
                    gatePassData?.challan?.requisitionId?.toSalesPoint
                      ?.salesPointExecutive?.contactNo
                  } </td>
                </tr>
  
  
  
                <tr>
                  <td><b>Address :</b></td>
                  <td></td>
                </tr>
  
                <tr>
                  <td><b>Delivery Order No :</b></td>
                  <td> </td>
                </tr>
  
                <tr>
                  <td><b>Delivery Order Date :</b></td>
                  <td></td>
                </tr>
  
              </tbody>
            </table>
          </div>
  
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td><b>Date :</b></td>
                  <td>${moment(gatePassData?.gatePassDate).format(
                    "DD-MM-YYYY"
                  )}</td>
                </tr>
  
                <tr>
                  <td><b>Driver Name :</b></td>
                  <td>${gatePassData?.driverName}</td>
                </tr>
  
                <tr>
                  <td><b>Driver Phone No. :</b></td>
                  <td>${gatePassData?.driverContact}</td>
                </tr>
  
                <tr>
                  <td><b>Truck No :</b></td>
                  <td>${gatePassData?.vehicleNumber}</td>
                </tr>
  
              </tbody>
            </table>
          </div>
  
        </div>
      </div>
  
      <table class="table table-striped col table-bordered customTable mt-5 mb-5">
        <thead>
          <tr>
            <th scope="col">SL No.</th>
            <th scope="col">BRAND</th>
            <th scope="col">DESCRIPTION OF GOODS</th>
            <th scope="col">CHASSIS NO</th>
            <th scope="col">ENGINE NO</th>
            <th scope="col">QTY</th>
            <th scope="col">COLOR</th>
          </tr>
        </thead>
        <tbody>
        ${gatePassData?.challan?.sku.map((item) =>
          item.skuChallan.map((element, index) => {
            total += 1;
            count += 1;
            return (
              '<tr style="border-bottom : 2px solid black"><td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">' +
              count +
              "</td><td style='border-right: 2px solid black;'>" +
              element.sku.brand +
              "</td><td style='border-right: 2px solid black;'>" +
              element.sku.skuId +
              "</td><td style='border-right: 2px solid black;'>" +
              element.chassisNumber +
              "</td><td style='border-right: 2px solid black;'>" +
              element.engineNumber +
              "</td><td style='border-right: 2px solid black;'>" +
              1 +
              "</td><td style='border-right: 2px solid black;'>" +
              element.color +
              "</tr>"
            );
          })
        )}
      <tr style="border-bottom : 2px solid black">
        <td colspan="5" class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">total</td>
        <td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;">${total}</td>
        <td class="table-data" style="border-right: 2px solid black;border-left: 2px solid black;"></td>
      </tr>
        </tbody>
      </table>
  
      <div class="container text-left pt-2">
        <div class="row">
          <div class="col">
            Note :
          </div>
        </div>
      </div>
  
      <div class="container text-center HRClass">
        <div class="row">
          <div class="col">
            <hr>
            <b>Received By</b>
          </div>
          <div class="col">
            <hr>
            <b>Prepared By</b>
          </div>
          <div class="col">
            <hr>
            <b>Authorised Signature</b>
          </div>
        </div>
      </div>
  
  
    </body>
  
  </html>`;
};

export const invoicePDF = (gatePassData) => {
  let totalAmount = 0;
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        th {
          height: 40px;
          border: 1px solid black;
          text-align: center;
        }
        table,
        td {
          border: 1px solid black;
          height: 30px;
          text-align: center;
        }
        table {
          border-collapse: collapse;
        }
      </style>
    </head>
    <body>
      <main style="padding: 20px; width: 1200px; margin: auto">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
          "
        >
          <img
            src="http://localhost:4000/sys-files/RunnerLogo.png"
            height="100px"
            width="150px"
          />
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            "
          >
            <h3 style="margin: 0"><b>Runner Automobile limited</b></h3>
            <p style="margin: 10px 0px">Invoice</p>
          </div>
          <p>PrintTime:11/7/2022 5:55:36 PM</p>
        </div>
    
        <div style="width: 300px; margin: auto;  font-size:20px  ">
          <div style="display: flex; justify-content: space-between">
            <span> <b> Customer Number :</b> </span> <span> ${
              gatePassData?.challan?.requisitionId?.toSalesPoint
                ?.salesPointExecutive?.userId
            }</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span> <b>Invoice Date :</b></span> <span> ${moment(
              gatePassData.gatePassDate
            ).format("DD-MM-YYYY")}</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span> <b> Invoice Number :</b> </span> <span>${
              gatePassData.invoiceCode
            } </span>
          </div>
        </div>
  
        <div
          style="
            display: flex;
            align-items: center;
            padding: 20px 40px;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            margin: 16px 0px;
            font-size:20px
          "
        >
          <div style="flex: 2">
            <p><b> Delivery Address: </b></p>
            <p><b> Ship Via : </b></p>
            <p><b> Forward Agent : </b></p>
            <p><b> Label Note : </b></p>
            <p><b> Purchase Order No : </b></p>
            <p><b> Payment Reference : </b></p>
          </div>
          <div style="flex: 2; padding-bottom: 30px">
            <p><b> Invoice Address  : </b></p>
            <p><b> Terms Of Delivery   : </b></p>
            <p><b> Delivery Terms Location  : </b></p>
            <p><b> Latest Ship Date  : </b></p>
            <p><b> Due Date  : </b></p>
            <p><b> Terms Of Payment  : </b></p>
          </div>
        </div>
        <div>
          <table
            style="
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
              margin-bottom: 70px;
            "
          >
            <tr style="border: 1px solid #dddddd; text-align: left; padding: 8px">
              <th>SL No.</th>
              <th>Product Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Vat</th>
              <th>Discount</th>
              <th>Amount</th>
            </tr>
            ${gatePassData.challan.sku.map((item, index) => {
              console.warn(item.skuChallan);

              totalAmount += item.itemsAdded * item?.skuChallan[0]?.price;
              return (
                "<tr><td>" +
                (index + 1) +
                "</td><td>" +
                item.sku.skuId +
                "</td><td>" +
                item.itemsAdded +
                "</td><td>" +
                item?.skuChallan[0]?.price +
                "</td><td>" +
                "-" +
                "</td><td>" +
                "-" +
                "</td><td>" +
                item.itemsAdded * item?.skuChallan[0]?.price +
                "</td></tr>"
              );
            })}
            <tr>
              <td colspan="6">total</td>
              <td>${totalAmount}</td>
            </tr>
          </table>
        </div>
      </main>
    </body>
  </html>
  `;
};

export const mushakPDF = (gatePassData) => {
  let totalAmount = 0;

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      th {
        min-width: 50px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
      }
      table,
      td {
        min-width: 50px;
        border: 1px solid black;
        height: 30px;
        text-align: center;
      }
      table {
        border-collapse: collapse;
      }
    </style>
  </head>
  <body>
    <main style="padding: 20px; width: 900px; margin: auto">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
        "
      >
        <div></div>
        <div style="display: flex; flex-direction: column">
          <span>*গণপ্রজাতন্ত্রী বাংলাদেশ সরকার, জাতীয় রাজস্ব বোর্ড, ঢাকা</span>
          <span style="text-align: center"><b>কর চালানপত্র</b></span>
          <span style="margin-bottom: 20px"
            >[বিধি (৪০) এর উপ-বিধি (১) এর দফা (গ) ও দফা (চ) দ্রষ্টব্য ]</span
          >
          <div style="display: flex; justify-content: space-between">
            <span> নিবন্ধিত ব্যক্তির নাম :</span>
            <span> 1218PROD</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span> নিবন্ধিত ব্যক্তির বিআইএন :</span>
            <span> 1218PROD</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span> চালানপত্র ইস্যুর ঠিকানা : </span>
            <span> 1218PROD</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: column">
          <span>প্রথম কপি </span>
          <span><b>মূসক~৬.৩</b></span>
        </div>
      </div>
      <!-- <div style="width: 250px; margin: auto"> -->

      <!-- </div> -->
      <div
        style="
          display: flex;
          align-items: center;
          padding: 20px 40px;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          margin: 16px 0px;
        "
      >
        <div style="flex: 2">
          <p><b> ক্রেতার নাম &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b> ${
            gatePassData?.challan?.requisitionId?.toSalesPoint
              .salesPointExecutive?.fullName
          }</p>
          <p><b> ক্রেতার বিআইএন &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b></p>
          <p>
            <b> সরবরাহের গন্তব্যস্থল &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>
          </p>
        </div>
        <div style="flex: 2; padding-bottom: 30px">
          <p>
            <b> চালানপত্র নম্বর &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>
            ${gatePassData.invoiceCode}
          </p>
          <p>
            <b> ইস্যুর তারিখ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>
            ${moment(gatePassData.gatePassDate).format("DD-MM-YYYY")}
          </p>
          <p>
            <b> ইস্যুর সময় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>
            ${moment(gatePassData.gatePassDate).format("HH:mm")}
          </p>
        </div>
      </div>
      <div>
        <table
          style="
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 70px;
          "
        >
          <tr style="border: 1px solid #dddddd; text-align: left; padding: 8px">
            <th>ক্র. নং.</th>
            <th>পণ্য বা সেবার বর্ণনা(প্রযোজ্য ক্ষেত্রে ব্র্যান্ড নামসহ)</th>
            <th>সরবরাহের একক</th>
            <th>পরিমান</th>
            <th>এককমূল্য ১(টাকায়)</th>
            <th>মোট মূল্য ১(টাকায়)</th>
            <th>সম্পূরক শুল্কের পরিমান (টাকায়)</th>
            <th>মূল্য সংযোজন করের হার / সুনির্দিষ্ট কর</th>
            <th>মূল্য সংযোজন কর / সুনির্দিষ্ট করের পরিমান(টাকায়)</th>
            <th>সকল প্রকার শুল্ক ও করসহ মূল্য</th>
          </tr>
          ${gatePassData.challan.sku.map((item, index) => {
            totalAmount += item.itemsAdded * item?.skuChallan[0]?.price;
            return (
              "<tr><td>" +
              (index + 1) +
              "</td><td>" +
              item.sku.skuId +
              "</td><td>" +
              "Unit" +
              "</td><td>" +
              item.itemsAdded +
              "</td><td>" +
              item?.skuChallan[0]?.price +
              "</td><td>" +
              item.itemsAdded * item?.skuChallan[0]?.price +
              "</td><td>" +
              "" +
              "</td><td>" +
              "" +
              "</td><td>" +
              "" +
              "</td><td>" +
              item.itemsAdded * item?.skuChallan[0]?.price +
              "</td></tr>"
            );
          })}
          <tr>
            <td colspan="6">সর্বমোট</td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td >${totalAmount}</td>
          </tr>
        </table>
      </div>
      <div style="display: flex; flex-direction: column">
        <span
          >প্রতিষ্ঠান কর্তৃপক্ষের দায়িত্বপ্রাপ্ত ব্যক্তির নাম
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span
        >
        <span
          >পদবী
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span
        >
        <span
          >স্বাক্ষর
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span
        >
        <span
          >সীল
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span
        >
      </div>
      <div>
        <p>
          *উৎসে কর্তনযোগ্য সরবরাহের ক্ষেত্রে ফরমটি সমন্বিত কর চালানপত্র ও উৎসে
          কর কর্তন সনদপত্র হিসেবে বিবেচিত হইবে এবং উহা উৎসে কর কর্তনযোগ্য
          সরবরাহের ক্ষেত্রে প্রযোজ্য হবে ।
        </p>
        <p>
          ১ সকল প্রকার কর ব্যতীত মূল্য &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
        </p>
      </div>
    </main>
  </body>
</html>
`;
};

export const GRNPDF = (gatePassData) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      th {
        min-width: 50px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
      }
      td {
        min-width: 50px;
        border: 1px solid black;
        height: 30px;
        text-align: center;
      }
      table {
        border-collapse: collapse;
      }
    </style>
  </head>
  <body>
    <main style="padding: 20px; width: 900px;">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
        "
      >
        <div style="display: flex; flex-direction: column">
          <span><b> Runner Automobiles Ltd </b></span>
          <span style="text-align: center"
            >রানার অটোমোবাইলস লিমিটেড, ফ্যাক্টরী</span
          >
          <span style="margin-bottom: 20px">গিফট সামগ্রী বুঝে পাওয়ার সনদ</span>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <span> প্রথম কপি</span>
          <span> PrintTime : </span>
        </div>
      </div>
      <!-- <div style="width: 250px; margin: auto"> -->

      <!-- </div> -->
      <div style="margin: 20px 0px">
        <span style="text-align: left">গেট পাশ নং</span>
      </div>
      <div>
        <table
          style="
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 70px;
          "
        >
          <tr style="border: 1px solid #dddddd; text-align: left; padding: 8px">
            <th colspan="2">মোবাইল :</th>
            <th colspan="8">01711612387, 01711612387</th>
            <th colspan="2">মেইল :</th>
            <th colspan="5"></th>
          </tr>
          <tr style="border: 1px solid #dddddd; text-align: left; padding: 8px">
            <th colspan="2">ডিলার নাম :</th>
            <th colspan="8">Sheikh Motors</th>
            <th colspan="2">তারিখ :</th>
            <th colspan="5">03-Jul-2022</th>
          </tr>
          <tr style="border: 1px solid #dddddd; text-align: left; padding: 8px">
            <th>ক্রমিক নং</th>
            <th>মডেল</th>
            <th>মোট বাইক</th>
            <th>হেলমেট</th>
            <th>লুকিং গ্লাস</th>
            <th></th>
            <th></th>
            <th>Side Stand</th>
            <th>রেইনকোট</th>
            <th>এসিড</th>
            <th>রাবার</th>
            <th>ফেনডার</th>
            <th>ওয়ারেন্টি কার্ড</th>
            <th>ম্যানুয়াল</th>
            <th>চাবির রিং</th>
            <th>পেন ড্রাইভ</th>
            <th>ব্যাটারী ক্যাপ</th>
          </tr>
          <tr>
            <td class="table-data">1</td>
            <td class="table-data">BIKE RT</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>
          <tr>
            <td class="table-data">2</td>
            <td class="table-data">AD80S(ALLOY)</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>
          <tr>
            <td class="table-data">3</td>
            <td class="table-data">AD80S(DELUXE)</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">4</td>
            <td class="table-data">BULLET 100</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">5</td>
            <td class="table-data">ROYAL+</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">6</td>
            <td class="table-data">CHEETA</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">7</td>
            <td class="table-data">F100-6A</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">8</td>
            <td class="table-data">TURBO-125</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">9</td>
            <td class="table-data">COM/Sport</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">10</td>
            <td class="table-data">KITE+</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">11</td>
            <td class="table-data">KNIGHT RIDER</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
          </tr>

          <tr>
            <td class="table-data">12</td>
            <td class="table-data">LML</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">13</td>
            <td class="table-data">XT/SKOOTY</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">14</td>
            <td class="table-data">APA</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data">15</td>
            <td class="table-data">VPA</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data"></td>
            <td class="table-data">*</td>
            <td class="table-data">*</td>
          </tr>

          <tr>
            <td class="table-data"></td>
            <td class="table-data">সর্বমোট</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">লাল:</td>
            <td class="table-data">কালো:</td>
            <td class="table-data">নীল:</td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data"></td>
            <td class="table-data">লাল:</td>
            <td class="table-data">কালো:</td>
            <td class="table-data">নীল:</td>
            <td class="table-data"></td>
            <td class="table-data">লাল:</td>
            <td class="table-data">কালো:</td>
            <td class="table-data">নীল:</td>
          </tr>
        </table>
      </div>

      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px;
        "
      >
        <div
          style="
            border-top: 2px solid black;
            padding: 15px 0px;
            width: 150px;
            border-width: thin;
          "
        >
          <span style="padding: 35px">Prepared By</span>
        </div>
        <div
          style="
            border-top: 2px solid black;
            padding: 15px 0px;
            width: 150px;
            border-width: thin;
          "
        >
          <span style="padding: 30px">Received By</span>
        </div>
        <div
          style="
            border-top: 2px solid black;
            padding: 15px 0px;
            width: 150px;
            border-width: thin;
          "
        >
          <span style="padding: 34px">Loading By</span>
        </div>
        <div
          style="
            border-top: 2px solid black;
            padding: 15px 0px;
            width: 150px;
            border-width: thin;
          "
        >
          <span style="padding: 6px">Authorised Signature</span>
        </div>
      </div>
    </main>
  </body>
</html>

  `;
};
