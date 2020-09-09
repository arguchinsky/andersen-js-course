import './styles/main.css';
import { GarbageView } from './elements/garbage/garbageView';
import { GarbageModel } from './elements/garbage/garbageModel';
import { GarbageController } from './elements/garbage/garbageController';
import { storage } from './utils';

const garbageState = storage.load('garbage-state');

const garbageModel = new GarbageModel(garbageState);
const garbageView = new GarbageView(garbageModel.state);
const garbage = new GarbageController(garbageModel, garbageView);

console.log(garbage);
console.log('Hi');
