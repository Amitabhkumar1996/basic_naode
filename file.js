const https = require('https');
const fs = require('fs');
let urls = [
    "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD",
    "https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history",
    "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD",
    "https://api.github.com/users/mralexgray/repos"
]

const featchData = async (url) => {
    https.get(url, (res) => {
        let body = "";

        res.on("data", async (chunk) => {
            body += chunk;
        });

        res.on("end", async () => {
            try {
                let json = await JSON.parse(body);
                let data = JSON.stringify(json).toString();

                fs.appendFile('data.txt', url + "-" + data + "\r\n", 'utf8', function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });

}

urls.map((url) => {
    featchData(url);
})

// for (let i = 0; i < urls.length; i++) {
//     featchData(urls[i])
// }



