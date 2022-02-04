import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EMPLOYES } from './employe/EMPLOYES';
export class InMemoryDataService implements InMemoryDbService {
createDb() {
let employes = EMPLOYES;
return { employes };
}
}