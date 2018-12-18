// eraseField will erase the value of an input field

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula a neque elementum, viverra maximus libero tempor. Curabitur sed faucibus elit. Quisque accumsan augue ac lacinia fermentum. Etiam maximus vestibulum augue a tempus. Aliquam id dignissim ipsum, sed lobortis tortor. Sed ac erat sapien. Duis euismod massa odio, et euismod lorem blandit non. Nulla venenatis, neque feugiat ullamcorper luctus, ligula est molestie elit, a cursus ex leo sed ligula. Proin sed tortor ac elit tempor posuere. Proin quis ante urna. Proin ornare tempor nunc, auctor facilisis magna finibus viverra. Nullam ac lorem libero. Nunc non magna ac leo rhoncus fermentum. Praesent non dolor vel lectus gravida bibendum eget vitae quam. Curabitur lorem erat, faucibus non mi sit amet, pulvinar ultricies lacus. Aenean vitae imperdiet nisl. Pellentesque viverra odio nec nulla pellentesque, ut mattis dui ornare. Etiam ipsum sapien, mattis non vulputate eu, vestibulum sit amet sem. Vestibulum tristique rutrum erat eget bibendum. Duis ac quam et ligula congue auctor eu et tortor. Aliquam nibh nulla, venenatis vitae elementum id, volutpat eu est. Maecenas in porttitor enim. Ut sit amet cursus mauris, ut consectetur ligula. Aliquam efficitur quis purus id iaculis. Pellentesque eu velit eu urna iaculis porttitor vel eu tellus. Curabitur aliquam gravida lectus, in convallis turpis sollicitudin non. Mauris porta, nibh id lacinia fermentum, felis tortor egestas tortor, vel porta magna lorem suscipit neque. Etiam tincidunt varius lorem sit amet dapibus. Donec sollicitudin felis quam, et mollis libero finibus vel. Aliquam erat volutpat. Morbi rhoncus ante nec tortor cursus tempus non a massa. Suspendisse imperdiet ante nisi, et cursus nunc sollicitudin eu. Vivamus ut massa et neque sagittis posuere ut eu nulla. Donec aliquam eu velit vel auctor. Praesent mollis justo ipsum. Suspendisse vitae odio ac nunc laoreet rutrum quis eu nulla. Quisque at neque nec sapien blandit euismod. Fusce vulputate nisl nulla, vitae faucibus purus finibus eu. Nunc convallis, libero vitae fermentum tempor, erat arcu ornare enim, vitae fringilla nulla quam ac purus. Cras facilisis augue libero, ut sodales nibh scelerisque vitae. Maecenas viverra tristique accumsan. Nullam vel rhoncus neque. Maecenas convallis nunc sed purus lobortis, non laoreet nisl ornare. Suspendisse convallis velit purus, vel faucibus quam venenatis a. Vivamus in dolor sit amet erat ornare ultricies. Vestibulum malesuada blandit suscipit. Morbi aliquam felis orci, condimentum placerat nibh tincidunt sed. Nunc at ex imperdiet nunc egestas tincidunt nec sed diam. Morbi tempus velit ante, non gravida ligula hendrerit eu. Duis consequat tortor facilisis, aliquam dolor ut, efficitur ex. Nullam blandit convallis aliquet. Duis ullamcorper augue non tellus facilisis, sit amet feugiat purus gravida. Ut id laoreet leo. Aliquam mattis, ligula at mattis ornare, orci nisi molestie dui, vel porttitor purus sapien finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.";



$(document).ready(function() {
  $('#dummy-text').append(lorem); // append dummy text
})

function eraseField(e) {
  // console.log(e);
  e.value="";
}

function toPassword(e) {
  e.value="";
  e.type = "password";
}

function setFields() {
  document.getElementsById('username').value = "Richard";
  document.getElementsById('password').value = "123Rich123";
}
