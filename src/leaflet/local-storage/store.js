export function getPets() {
    const petsItem = localStorage.getItem('Pets');
    const petsArray = petsItem ? JSON.parse(petsItem) : [];
    return petsArray;
}

export function addPet(pet) {
    const petsArray = getPets();
    petsArray.push(pet);
    localStorage.setItem('Pets', JSON.stringify(petsArray));
}

export function getZones() {
    const zonesItem = localStorage.getItem('Zones');
    const zonesArray = zonesItem ? JSON.parse(zonesItem) : [];
    return zonesArray;
}

export function addZone(zone) {
    const zonesArray = getZones();
    zonesArray.push(zone);
    localStorage.setItem('Zones', JSON.stringify(zonesArray));
}
