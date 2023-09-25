const storedGetDonations = () =>{
    const getStored = localStorage.getItem('donate-item');
    if(getStored){
        return JSON.parse(getStored)
    }
    else{
        return [];
    }
};

const savedDonations = title =>{
    const setDonation = storedGetDonations();
    const exists = setDonation.find(donation => donation === title);
    if(!exists){
        setDonation.push(title);
        localStorage.setItem('donate-item', JSON.stringify(setDonation));
    }
    
 

}

export {savedDonations, storedGetDonations};