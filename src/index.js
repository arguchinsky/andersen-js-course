import './styles/main.css';
import { GarbageView } from './elements/garbage/garbageView';
import { GarbageModel } from './elements/garbage/garbageModel';
import { GarbageController } from './elements/garbage/garbageController';
import { initialGarbageState } from './utils';

const garbageModel = new GarbageModel(initialGarbageState);
const garbageView = new GarbageView(garbageModel);
const garbage = new GarbageController(garbageModel, garbageView);

console.log(garbage);
console.log('Hi');
