// Iteration 1: Names and Input
let hacker1 = 'Ola';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Fin';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
  }else if (hacker1.length < hacker2.length) {
    console.log(`${hacker2} has the longest name, it has ${hacker2.length} characters`);
  }else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
// Iteration 3.1

// Solution 1
const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

// Solution 2
let driver = "Ola";
let newDriverName = "";

for (let i = 0; i < driver.length; i++){
  newDriverName += driver[i] + " ";
}
console.log(newDriverName.toUpperCase());

// Iteration 3.2
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(hacker2));

// Iteration 3.3
if (hacker1[0] < hacker2[0]){
  console.log(`The driver's name goes first. `)
}else if(hacker2[0] < hacker1[0]){
  console.log(`Yo, the navigator goes first definitely.`)
}else{
  console.log(`What?! You both have the same name?`)
}

//BONUS

const stringToCheck = "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vitae odio commodo convallis vel quis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec leo enim, iaculis ut gravida sed, porttitor vel velit. Curabitur at lacinia neque. Nullam convallis mattis orci vitae mollis. Aenean pellentesque felis tincidunt lacus facilisis, eget fringilla enim porta. Maecenas auctor fermentum nisi nec rhoncus.
Nullam maximus diam ac lacinia tempus. Aenean et congue justo, id tempor neque. Fusce et lacus id lectus faucibus volutpat. Suspendisse auctor, risus id vulputate posuere, ante nulla consectetur diam, in vehicula nisi elit eu odio. Donec imperdiet tincidunt est, id porta nibh varius eu. In ullamcorper imperdiet consequat. Donec a hendrerit felis. Mauris vitae pulvinar massa, ac lobortis tellus. Quisque id nunc consectetur, varius justo non, egestas erat. Ut blandit gravida augue nec varius. Aenean nec tellus pharetra, pulvinar purus ac, fringilla est.
Sed rhoncus id purus in lobortis. Curabitur tempus erat ut vulputate varius. Aliquam ac ante augue. Cras id felis sapien. Nullam efficitur dolor maximus varius dignissim. Aenean aliquet auctor dolor nec cursus. Curabitur ut quam vitae erat aliquet egestas non a felis. Sed dictum velit sem, sed egestas nisi ultricies eget. Donec nec accumsan nisl. Morbi pharetra interdum faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum elit non neque mollis, scelerisque mattis lorem faucibus. "
