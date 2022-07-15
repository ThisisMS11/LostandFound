let Items = [

    {
        "_id": {
            "$oid": "62ca583abd085c07f814f84f"
        },
        "Item_Name": "Samsung F-12",
        "User": {
            "$oid": "62c6c4c8bbdec4e1e9d72a44"
        },
        "Description": "No description provided",
        "Tag": "smartphone",
        "Place": "near ojas canteen h3 hostel",
        "Time": "Mon, 11 oct 2022 17:28:35",
        "Record_date": "10/7/2022, 10:10:24 am",
        "Contact_No": 9680453581,
        "Status": true,
        "Category": "Lost",
        "__v": 0
    }


]
// console.log(Items[0].Description)
// console.log(JSON.stringify(Items[0]))

const link = 'https://drive.google.com/file/d/144Rsd4FUiPGn1WyNC6ku-rB5bM6dssWt/view?usp=sharing';

console.log(link.length)


const giveid = (link) => {
    let id = '';
    for (let i = 0; i < link.length; i++) {
        const element = link[i];
        if (element == 'd') {
            if (link[i + 1] == '/') {
                for (let j = i + 2; j < link.length; j++) {
                    if (link[j] == '/') {
                        break;
                    }
                    id = id + link[j];
                }
            }
        }
    }
    return id;
}

console.log("our id from function is",giveid(link))


