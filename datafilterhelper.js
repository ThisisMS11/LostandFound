const data = [
    {
        "_id": {
            "$oid": "62d142498a5a4fe6728490b1"
        },
        "Item_Name": "samsung f-1234",
        "User": {
            "$oid": "62cfc741e6685a5c6c1e118c"
        },
        "Description": "has a blueback cover",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "clothing",
        "Place": "near girls hostel",
        "Time": "2022-07-19",
        "Record_date": "15/7/2022, 4:00:48 pm",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "62d17c70f26ae938f1fec487"
        },
        "Item_Name": "money",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "i should add a description here",
        "GoogleDriveLink": "https://drive.google.com/file/d/14J08HMKT_PkmPf6s1L6rHG1xEtsWZA_n/view?usp=sharing",
        "Tag": "money",
        "Place": "near indian bank",
        "Time": "2022-09-29",
        "Record_date": "15/7/2022, 7:58:50 pm",
        "Contact_No": 1234567890,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "62d1876b7b615ac0079feb43"
        },
        "Item_Name": "sddfgd123",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "Adidas company 2",
        "GoogleDriveLink": "https://drive.google.com/file/d/149uGfmF1ttP9faZC_r5yiUDPUlsWqVPs/view?usp=sharing",
        "Tag": "documents",
        "Place": "playground",
        "Time": "2022-05-19",
        "Record_date": "15/7/2022, 8:55:28 pm",
        "Contact_No": 8233235495,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "62d25512b00d96861abd5cfa"
        },
        "Item_Name": "samsung jio phone",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "item2 is losto",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "documents",
        "Place": "near h3 hostel",
        "Time": "2022-10-08",
        "Record_date": "16/7/2022, 11:34:39 am",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Found",
        "__v": 0
    }
]
// ! this fitlered data will hold the filteredData for us ohk.

const filtervalues = ['Lost', 'last 3 days', 'clothing'];

let filteredData=[];

// data.map((e) => {
//     if (e.Category == filtervalues[0]) {
//         if (e.Tag == filtervalues[2]) {
//             filteredData[0]=e;
//         }
//     }
// })

// console.log(filteredData[0])

const currentTime = new Date();
const month=currentTime.getMonth();
const day=currentTime.getDate()+1;
const year=currentTime.getFullYear();
const todaydate=month+'/'+day+'/'+year;
console.log('todaydate is ',todaydate);

const jsondate='2022-05-19';
console.log(jsondate)


// const localtime = currentTime.toLocaleString();
// dd/mm/yy -> mm/dd/yy
// console.log(localtime.slice(0, 9))

// const date1 = new Date(localtime);
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");
