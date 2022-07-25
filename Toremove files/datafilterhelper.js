const data = [
    {
        //! last 10 days
        "_id": {
            "$oid": "62d142498a5a4fe6728490b1"
        },
        "Item_Name": "samsung f-1234",
        "User": {
            "$oid": "62cfc741e6685a5c6c1e118c"
        },
        "Description": "has a blueback cover",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "documents",
        "Place": "near girls hostel",
        "Time": "2022-07-19",
        "Record_date": "10/7/2022, 4:00:48 pm",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },
    // !last 5 days
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
        "Tag": "documents",
        "Place": "near indian bank",
        "Time": "2022-09-29",
        "Record_date": "14/7/2022, 7:58:50 pm",
        "Contact_No": 1234567890,
        "Status": "off",
        "Category": "Found",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "62d1876b7b615ac0079feb43"
        },
        "Item_Name": "hahahahaha",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "Adidas company 2",
        "GoogleDriveLink": "https://drive.google.com/file/d/149uGfmF1ttP9faZC_r5yiUDPUlsWqVPs/view?usp=sharing",
        "Tag": "electronics",
        "Place": "playground",
        "Time": "2022-05-19",
        "Record_date": "15/7/2022, 8:55:28 pm",
        "Contact_No": 8233235495,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },

    //! LAST 3 DAYS
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
        "Tag": "electronics",
        "Place": "playground",
        "Time": "2022-05-19",
        "Record_date": "16/7/2022, 8:55:28 pm",
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
    },
    //! LAST 1 DAY
    {
        "_id": {
            "$oid": "62d25512b00d96861abd5cfa"
        },
        "Item_Name": "airtel smartphone",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "item2 is losto",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "documents",
        "Place": "near h3 hostel",
        "Time": "2022-10-08",
        "Record_date": "17/7/2022, 11:34:39 am",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "62d25512b00d96861abd5cfa"
        },
        "Item_Name": "airtel smartphone",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "item2 is losto",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "documents",
        "Place": "near h3 hostel",
        "Time": "2022-10-08",
        "Record_date": "18/7/2022, 11:34:39 am",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    },

    {
        "_id": {
            "$oid": "62d25512b00d96861abd5cfa"
        },
        "Item_Name": "mohit smartphone",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "item2 is losto",
        "GoogleDriveLink": "https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing",
        "Tag": "documents",
        "Place": "near h3 hostel",
        "Time": "2022-10-08",
        "Record_date": "24/7/2022, 11:34:39 am",
        "Contact_No": 9680453581,
        "Status": "off",
        "Category": "Lost",
        "__v": 0
    }
]
// ! this fitlered data will hold the filteredData for us ohk.

const filtervalues = ['Lost', 'last 10 days', 'electronics'];

const x = Number(filtervalues[1].slice(5, 7));
// console.log('the last ', x, ' days ');

let filteredData = [];

// Recorded:
// 7/24/2022, 7:29:47 PM

const givedatediff = (date_string, lastxdays) => {
    // const x = Number(lastxdays.slice(5, 7));
    const d1 = Number(date_string.slice(0, 2));
    const m1 = Number(date_string.slice(3, 4));
    const y1 = Number(date_string.slice(5, 9));

    // console.log('record date', m1, d1, y1)

    const currentTime = new Date();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    // console.log(`today's date `, month, day, year)
    // mm/dd/yy
    const Date1 = new Date(`${m1}/${d1}/${y1}`);
    const Date2 = new Date(`${month}/${day}/${year}`);
    const diffTime = Math.abs(Date1 - Date2);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    // console.log('the difference is ', diffDays);
    // suppose the difference has to be lesser than the last x days
    // diffDays<=x
    if (diffDays <= x) {
        return true;
    }
}

// let count = 0;
// data.map((e) => {
//     if (e.Category == filtervalues[0]) {
//         if (e.Tag == filtervalues[2]) {
//             if (givedatediff(e.Record_date, x)) {
//                 filteredData[count] = e;
//                 count++;
//             }

//         }
//     }
// })

// console.log(filteredData)

// console.log(filteredData[0])


// 7/24/2022, 7:29:47 PM
const rd = '7/24/2022, 7:29:47 PM';

// 
const holddate = ['', '', ''];
let counter = 0;

// mm/dd/yy
for (let i = 0; i < rd.length; i++) {
    const s = rd[i];
    if (s != '/' && s != ',') {
        holddate[counter] += s;
    }
    else if (s == ',') {
        break;
    }
    else {
        counter++;
    }
}

for (let i = 0; i < holddate.length; i++) {
    const element = Number(holddate[i]);
    console.log('--->', element * 10);
}

