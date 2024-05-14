const character = {
    name: 'Simon',
    getCharacter ()  {
        return this.name;
    }
};
console.log(character.getCharacter());
// When a function is referred to a different variable it losess its this binding
// const giveMeTheCharacterNOW = character.getCharacter
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW()); 