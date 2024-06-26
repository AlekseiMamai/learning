const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employers.forEach((employer) => {
    if (employer.length > 0 && employer.length != '') {
        employersNames.push(employer);
    }
});

employersNames = employersNames.map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    // const everyCash = Array.prototype.slice.call(arguments);
    // let total = own;
    // for (var i = 0; i < everyCash[1].length; i++) {
    //     total += +everyCash[1][i];
    // }

    const {cash} = sponsors;
    let total = own;
    cash.forEach(item => total+= +item);
    return total;
}

const money = calcCash();

function makeBusiness(owner, director = 'Victor', cash, emp) {
    const sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);