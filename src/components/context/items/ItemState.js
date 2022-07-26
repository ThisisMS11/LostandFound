import React, { useState, useRef } from 'react'
import ItemContext from './itemcontext'

//! firebase imports are here
import { app, database } from '../../../firebaseConfig'
import { collection, addDoc, getDocs, onSnapshot, where, query, doc, deleteDoc, updateDoc } from "firebase/firestore"



const ItemState = (props) => {

    // creating state for tag input

    // ? for the recodate_string time of our new item
    const currentTime = new Date();
    const localtime = currentTime.toLocaleString();


    // ! Firebase things
    const collectionRef = collection(database, 'items');



    // here i can create all the states and functions.
    // * just for test 
    const [final, setFinal] = useState('this is a state from context api');

    const [tag, setTag] = useState();

    // variable for resetting the category in update modal
    const [resettag, setResettag] = useState('All');


    const iteminitial = [];

    // creating useref hook for opening googlepop on click lost/found buttons without signin.
    const signupRef = useRef(null);



    // !variables for obtaining real time filter values from filterbox Component.

    const [categoryfilter, setcategoryfilter] = useState('All');
    const [durationfilter, setdurationfilter] = useState('All Time');
    const [tagfilter, settagfilter] = useState('All');


    //! variable for handling user specific notes in UserEnteries.js
    const [item, setitem] = useState(iteminitial)

    //! variable for all user's all notes to be displayed on the Cadate_stringsBox.js
    const [allitem, setallitem] = useState([]);


    //! this variable is for toggeling between no enteries div and cadate_stringbox component in ItemMainBox
    const [displaydecider, setDisplaydecider] = useState(true);


    // !for the loading bar progress
    const [progress, setprogress] = useState(30);




    //------------------------------------------------------------------------<<<<<<<<<<<<<<<<<<

    const giveid = (link) => {

        if (link = '') {
            return ''
        }
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


    //! for filtering the data based on last x days
    const givedatediff = (date_string, lastxdays) => {

        // console.log(
        //     'date string :', date_string
        // );
        const x = Number(lastxdays.slice(5, 7));

        // mm/dd/yy
        // holddate holds the string format of the recorded day,month and the year individually.
        const holddate = ['', '', ''];
        let counter = 0;

        // mm/dd/yy
        for (let i = 0; i < date_string.length; i++) {
            const s = date_string[i];
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
        const m1 = Number(holddate[0]);
        const d1 = Number(holddate[1]);
        const y1 = Number(holddate[2]);

        // console.log('recodate_string date', m1, d1, y1)

        const currentTime = new Date();
        const month = currentTime.getMonth() + 1;
        const day = currentTime.getDate();
        const year = currentTime.getFullYear();

        // console.log(`today's date `, month, day, year)
        // mm/dd/yy
        const Date1 = new Date(`${m1}/${d1}/${y1}`);
        const Date2 = new Date(`${month}/${day}/${year}`);
        const diffTime = Math.abs(Date2 - Date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        console.log('the difference is ', diffDays);
        // suppose the difference has to be lesser than the last x days
        // diffDays<=x
        if (diffDays <= x) {
            return true;
        }
        return false;
    }

    const handlefilter = (list) => {
        setprogress(30)
        // console.log('our input list is : ', list);
        // console.log('category filter : ', categoryfilter, 'durationfilter : ', durationfilter, 'tagfilter : ', tagfilter);

        let filteredData = [];
        let count = 0;

        list.map((e) => {
            if (e.Category == categoryfilter || categoryfilter == 'All') {
                if (e.Tag == tagfilter || tagfilter == 'All') {

                    console.log(' recorded date = ', e.Record_date, 'givedatediff ==> ', givedatediff(e.Record_date, durationfilter));

                    if (givedatediff(e.Record_date, durationfilter) || durationfilter == 'All Time') {
                        filteredData[count] = e;
                        count++;
                    }

                }
            }
            console.log('---------------->>>');
        })
        setprogress(70)

        setTimeout(() => {
            setprogress(100)
        }, 600);

        setallitem(filteredData)
        console.log('filtered items are :--> ', filteredData)
    }

    // fetchallitems available in the database

    const getallitems = async () => {

        setprogress(30);
        const querySnapshot = await getDocs(collectionRef);
        setprogress(70);


        let jsonhold = [];
        let count = 0;

        querySnapshot.forEach((doc) => {
            // return { ...item.data(), id: item.id };

            // to include the id of the item as well in allitem state.
            jsonhold[count] = { ...doc.data(), id: doc.id };
            count++;
        });


        //typeof jsonhold is of a  javascript object.
        setallitem(jsonhold)

        // console.log('jsonhold => ', jsonhold);
        setprogress(100)


        return jsonhold;
    }

    // Adding iteminfo to our database
    const additem = async (Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink, showalert) => {

        setprogress(30)

        console.log('additem triggered here');


        // if tag found undefined then it will have general as the default category
        if (tag == undefined) {
            tag = 'general'
        }

        if(Description===''){
            Description='No Description Provided'
        }


        let newitem = {
            Item_Name: Item_Name,
            Description: Description,
            User: localStorage.getItem('userid'),
            Tag: Tag,
            Place: Place,
            Time: Time,
            Contact_No: Contact_No,
            Status: Status,
            Category: Category,
            Record_date: localtime,
            GoogleDriveLink: GoogleDriveLink
        }

        await addDoc(collectionRef, newitem)
            .then((response) => {
                console.log('our new item added is ', response)
                setprogress(80)

                setTimeout(() => {
                    setprogress(100)
                }, 600);

                setallitem(allitem.concat(newitem));
                return true;
            })
            .catch((err) => {
                alert(err.message)
                return false;
            })
    }

    // fetching/getting items from our database of logged in user only
    const getitems = async () => {

        setprogress(30)
        setprogress(80)

        const useridquery = query(collectionRef, where("User", "==", localStorage.getItem('userid')));

        const querySnapshot = await getDocs(useridquery);
        let jsonhold = [];
        let count = 0;

        querySnapshot.forEach((doc) => {
            jsonhold[count] = { ...doc.data(), id: doc.id };
            count++;
        });

        setitem(jsonhold)

        setprogress(100)

        return jsonhold;

    }



    const deleteitem = (id, showalert) => {
        // setprogress(30)

        console.log('inside deleteitem');

        setTimeout(() => {
            setprogress(50)
        }, 200);

        const doctoupdate = doc(database, "items", id);

        const deleteditem = item.filter((item) => { return item.id == id })

        setTimeout(() => {
            setprogress(80)
        }, 200);

        deleteDoc(doctoupdate)
            .then(() => {
                showalert(`${deleteditem[0].Item_Name} successfully deleted`, 'success')
                const newitems = item.filter((item) => { return item.id !== id })
                const allnewitems = allitem.filter((item) => { return item.id !== id })
                setitem(newitems)
                setallitem(allnewitems)
            })
            .catch((err) => {
                alert(err.message)
            })
        setTimeout(() => {
            setprogress(100)
        }, 500);


    }

    //context api for updating the item 
    const updateitem = async (id, Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink, showalert) => {

        // API call for fetching data
        setprogress(30)


        setprogress(80)

        // setitem(newItem)

        const toupdateitem = doc(database, "items", id);

        // console.log('our tag is ', Tag);


        // ! there is nothing in response to updateDoc .
        await updateDoc(toupdateitem, {
            Item_Name: Item_Name,
            Description: Description,
            Place: Place,
            Tag: Tag,
            Time: Time,
            Contact_No: Contact_No,
            Status: Status,
            Category: Category,
            GoogleDriveLink: GoogleDriveLink
        })
            .catch((err) => {
                alert(err.message)
            })

        // const newitems = item.filter((item) => { return item.id == id })
        // const allnewitems = allitem.filter((item) => { return item.id !== id })
        // setitem(newitems)
        // setallitem(allnewitems)

        getallitems();
        getitems();

        showalert(`updation successful`, 'success')

        setprogress(100)
    }



    return (
        <ItemContext.Provider value={{ additem, tag, setTag, getitems, item, allitem, getallitems, deleteitem, updateitem, resettag, setResettag, giveid, categoryfilter, setcategoryfilter, durationfilter, setdurationfilter, tagfilter, settagfilter, progress, setprogress, setallitem, handlefilter, signupRef, displaydecider, setDisplaydecider, }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState