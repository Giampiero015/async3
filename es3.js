function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
      const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
      setTimeout(() => {
        if (tempoCaricamento < 1500) {
          resolve(`Il modulo ${modulo} è stato caricato.`);
        } else {
          reject(`Errore durante il caricamento del modulo ${modulo}.`);
        }
      }, tempoCaricamento);
    });
  }
  async function lanciaVeicoloSpaziale() {
    try {
        console.log(await caricaModulo("modulo A"));
        console.log(await caricaModulo("Modulo B"));
        console.log(await caricaModulo("Modulo C"));
        console.log("Veicolo spaziale pronto per il lancio!");
    } catch (error) {
        console.log(error);
    }

}
lanciaVeicoloSpaziale();
