//basic examples

const shape = [4,2];
const data = tf.tensor([4,6,5,9,13,25,1,57], shape);

const data2 = tf.variable(tf.zeros([8])); 

data2.print();

//add and multiplies tensors
const a = tf.tensor1d([3,4,5,6]);
const b = tf.tensor1d([5,8,5,2]);

a.add(b).print();
a.mul(b).print();