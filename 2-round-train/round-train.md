# Round train.
## Your task in this assignment is to determine quantity of carriages in the train.

There is a train which consists of random number of carriages. The last carriage is connected with the first carriage, so it is the round train. Each carriage has light-on or -off inside it in random order. You are inside some of the carriages and you can move in any direction through the train carriage by carriage. The only one way you can mark the carriages is to switch-on or switch-off light in it. Your assignment is determine quantity of carriages in the train.

### Train example
```
       +------------------+    +------------------+    +------------------+    +------------------+
...<-->| isLightOn: true  |<-->| isLightOn: false |<-->| isLightOn: false |<-->| isLightOn: true  |<-->...
       +------------------+    +------------------+    +------------------+    +------------------+
```
###

### Structure of a carriage
```
{
  previous: [Object],
  next: [Object],
  isLightOn: [boolean],
}
```

Your implementation should contain a function which generates a train with given number of carriages in it, it should returns initial carriage where you are at this moment ```generateTrain(carriageQuantity)``` and a function which determines quantity of carriages in the train, it accepts initial carriage object as an argument ```countTrainCarriages(initialCarriage)```.
Of course you are not restricted only with two these functions, you can create other helper functions if you need.