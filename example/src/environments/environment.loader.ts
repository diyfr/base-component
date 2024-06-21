import { environment } from "./environment";

const CONFIG_URL = "./assets/config/environment.json";

export default class EnvironmentLoader {
  constructor() {

  }

  public async load(): Promise<void> {
    try {
      const response = await fetch(CONFIG_URL);
      if (!response.ok) {
        console.log(`Chargement impossible de ${CONFIG_URL} :${response.statusText}`);
        return;
      }
      environment.settings = await response.json();
    } catch (err) {
      console.log(`Erreur chargement config ${err}`);
    }
  }

}