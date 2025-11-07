import mongoose from 'mongoose';
//const uri = "mongodb+srv://mongoKoshovec:2600kosha2600@cluster0.obbylcp.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://mongoKoshovec:2600kosha2600@cluster0.obbylcp.mongodb.net/boards?retryWrites=true&w=majority";

function runConnect() {
  mongoose.connect(uri);
  console.log('MongoDB online...');
};

export default uri;