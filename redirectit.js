const redirectit = () => {
    if (isBlocked()){
        const badSubDomain = /www/i;
        const goodSubDomain = 'old';
        window.location.href = window.location.href.replace(badSubDomain, goodSubDomain);
    }
}

const isBlocked = () => {
    const test_h1 = document.querySelector('h1').innerText === 'whoa there, pardner!';
    const test_first_p = document.querySelector('p').innerText.search('Your request has been blocked') !== -1;
    return test_h1 && test_first_p ? true : false
}

addEventListener('load', (event) => {redirectit()});