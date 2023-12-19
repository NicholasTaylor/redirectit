const getUrlData = new Promise((resolve) => {
    resolve([document.querySelector('h1').innerText, document.querySelector('p').innerText.search('Your request has been blocked'), window.location.href])
});

const redirectit = () => {
    getUrlData.then((value) =>{
        const [ele_h1, ele_first_p, loc] = value;
        const is_blocked = ele_h1 === 'whoa there, pardner!' && ele_first_p !== -1 ? true : false;
        if (is_blocked){
            const badSubDomain = /www/i;
            const goodSubDomain = 'old';
            window.location.href = loc.replace(badSubDomain, goodSubDomain);
        }
    });
}

addEventListener('load', (event) => {redirectit()});
if (document.readyState === 'complete'){
    redirectit();
}