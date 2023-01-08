#!/usr/bin/env node

import inquirer from 'inquirer';
import axios from 'axios';

inquirer
  .prompt([
    {
      type: 'question',
      name: 'pokemonName',
      message: 'Name of pokemon',
      default: 'pikachu',
    },
  ])
  .then(async (answers) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${answers.pokemonName}`
      );
      console.log(res.data.types.map((type) => type.type.name));
    } catch (err) {
      console.error('Pokemon not found, try again.');
    }
  });
