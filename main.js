// populate an html table using javascript

const Customers = [{
        Id: 1,
        FirstName: "Vivienne",
        LastName: "Caskey",
        Email: "vcaskey0@liveinternet.ru",
        Gender: "Male",
        Age: 35,
        Date_of_Employment: "1/15/2022",
        Designation: "Research and Development",
        IpAddress: "244.148.45.230"
    },
    {
        Id: 2,
        FirstName: "Wilhelmina",
        LastName: "Braidman",
        Email: "wbraidman1@yellowpages.com",
        Gender: "Female",
        Age: 35,
        Date_of_Employment: "12/12/2021",
        Designation: "Business Development",
        IpAddress: "249.66.112.172"
    },
    {
        Id: 3,
        FirstName: "Adele",
        LastName: "Fassbender",
        Email: "afassbender2@jugem.jp",
        Gender: "Male",
        Age: 22,
        Date_of_Employment: "11/24/2021",
        Designation: "Product Management",
        IpAddress: "177.70.75.145"
    },
    {
        Id: 4,
        FirstName: "Annabelle",
        LastName: "Schutze",
        Email: "aschutze3@google.ru",
        Gender: "Genderqueer",
        Age: 35,
        Date_of_Employment: "1/15/2022",
        Designation: "Training",
        IpAddress: "102.105.237.38"
    },
    {
        Id: 5,
        FirstName: "Robers",
        LastName: "Umbers",
        Email: "Genderqueer",
        Gender: "Male",
        Age: 35,
        Date_of_Employment: "1/15/2022",
        Designation: "Research and Development",
        IpAddress: "244.148.45.230"
    },
    {
        Id: 6,
        FirstName: "Felisha",
        LastName: "Caskey",
        Email: "rumbers4@cbslocal.com",
        Gender: "Female",
        Age: 38,
        Date_of_Employment: "1/15/2022",
        Designation: "Training",
        IpAddress: "53.104.250.105"
    },
    {
        Id: 7,
        FirstName: "Mike",
        LastName: "Bence",
        Email: "mbence6@marketwatch.com",
        Gender: "Male",
        Age: 37,
        Date_of_Employment: "7/1/2022",
        Designation: "Legal",
        IpAddress: "244.148.45.230"
    },
    {
        Id: 8,
        FirstName: "Priscilla",
        LastName: "Pheasant",
        Email: "ppheasanta@auda.org.au",
        Gender: "Female",
        Age: 21,
        Date_of_Employment: "1/15/2022",
        Designation: "Business Development",
        IpAddress: "10.15.88.142"
    },
    {
        Id: 9,
        FirstName: "Cherice",
        LastName: "Haversum",
        Email: "chaversum8@fda.gov",
        Gender: "Female",
        Age: 45,
        Date_of_Employment: "1/15/2022",
        Designation: "Services",
        IpAddress: "229.161.175.19"
    },
    {
        Id: 10,
        FirstName: "Elmo",
        LastName: "Gartrell",
        Email: "egartrell9@fc2.com",
        Gender: "Male",
        Age: 35,
        Date_of_Employment: "9/12/2021",
        Designation: "Marketing",
        IpAddress: "231.91.100.36"
    },
];






const table = document.getElementById("tableBody");
Customers.map(customer => {
    let row = table.insertRow();
    let num = row.insertCell(0);
    num.innerHTML = customer.Id;
    let f_name = row.insertCell(1);
    f_name.innerHTML = customer.FirstName;
    let l_name = row.insertCell(2);
    l_name.innerHTML = customer.LastName;
    let email = row.insertCell(3);
    email.innerHTML = customer.Email;
    let gender = row.insertCell(4);
    gender.innerHTML = customer.Gender;
    let age = row.insertCell(5);
    age.innerHTML = customer.Age;
    let doe = row.insertCell(6);
    doe.innerHTML = customer.Date_of_Employment;
    let designation = row.insertCell(7);
    designation.innerHTML = customer.Designation;
    let ipaddress = row.insertCell(8);
    ipaddress.innerHTML = customer.IpAddress;
});