import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private session_token: string = '';
  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  public set(key: string, value: any) {
    this.session_token = value;
    this._storage?.set(key, value);
  }
  public get(key: string): Promise<any> | undefined {
    return this._storage?.get(key);
  }
  /**
   * Renvoie le token actuel
   * @returns le token actuel
   */
  public getToken(): string | undefined {
    return this.session_token;
  }
}

// export class StorageService {
//   private _storage: Storage | null = null;

//   constructor(private storage: Storage) {
//     this.init();
//   }

//   async init() {
//     // Si vous utilisez, définissez les pilotes ici : wait this.storage.defineDriver(/*...*/);
//     const storage = await this.storage.create();
//     this._storage = storage;
//   }

//  // Créer et exposer des méthodes que les utilisateurs de ce service peuvent
//    // appelle, par exemple :
//   public set(key: string, value: any) {
//     this._storage?.set(key, value);
//   }
// }
