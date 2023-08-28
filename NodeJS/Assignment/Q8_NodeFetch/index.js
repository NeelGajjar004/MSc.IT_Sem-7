// Q8. Fetch data of google page using note-fetch using async-await model.
const fetch = require('node-fetch');
const express = require("express");
const app = express();
async function FetchGooglePage() {
    try {
        const response = await fetch('https://www.google.com');
        if (!response.ok) {
            throw new Error(`Failed to fetch the Google page. \n Status : ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching the Google page :', error);
        throw error;
    }
}

// Call the function and handle the result

server.listen(8000,()=>{
    console.log("Server Listening Port on 8000...")
})

app.use((req, res) => {
    FetchGooglePage()
        .then((data) => {
            // console.log('Fetched data from Google page:', data);
            res.send(data);
        })
        .catch((error) => {
            console.error('Error occurred :', error);
            res.send(error);

        });

})