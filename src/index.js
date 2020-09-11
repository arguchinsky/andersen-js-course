/* eslint-disable no-unused-vars */
import './styles/main.css';
import { GarbageView } from './elements/garbage/garbageView';
import { RecipesView } from './elements/recipes/recipesView';
import { GarbageModel } from './elements/garbage/garbageModel';
import { GarbageController } from './elements/garbage/garbageController';
import { storage } from './utils';

const garbageState = storage.load('garbage-state');

const garbageModel = new GarbageModel(garbageState);
const garbageView = new GarbageView(garbageModel.state);
const garbage = new GarbageController(garbageModel, garbageView);

const recipes = new RecipesView();

console.log('Hi');
