function customFetch(url) {
    return new Promise((resolve, reject) => {

        //step 1
        const xhr = new XMLHttpRequest();

        //step 2
        xhr.open('GET', url,true);
        
        //step 3 // instead of readyState we can also use only status
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = () => {
            reject(new Error('Request failed'));
        };
        
        //step 4
        xhr.send();
    });
}

export {customFetch}

//STATUS CODE :
//https://www.infidigit.com/blog/http-status-codes/