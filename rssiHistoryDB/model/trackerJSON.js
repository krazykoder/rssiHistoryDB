var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
    time : { type: Date, default: Date.now },
    location: String,
    BID: String,
    SID: String,
    FID: { type: String, default: "NA" },
    rssi: Number,
    isFlagged: { type: Boolean, default: false }
});
mongoose.model('TrackerJSON', blobSchema);


/*

[
   {
      "location":"5W",
      "BID":"Ping",
      "SID":"5W-SENS5",
      "rssi":0,
      "version":"2.0.9"
   },


*/