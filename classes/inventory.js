export default class Inventory {
  constructor() {
    this.ramos = [];
  }
  getRamo(ramoId) {
    const ramo = this.ramos.filter((ramo) => ramo.id === ramoId);
    return ramo[0];
  }
  getAllRamos() {
    return this.ramos;
  }

  addRamo(ramo) {
    this.ramos.push(ramo);
  }
  updateRamo(ramoId, updatedRamo) {
    const distinctRamos = this.ramos.filter(
      (ramo) => ramo.id != ramoId
    );

    distinctRamos.push(updatedRamo);
    console.log(distinctRamos);
  }
}