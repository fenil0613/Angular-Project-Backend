const Model = require("../../models/model");

async function SearchListing(data) {
  console.log('IM SEARCHING')
  const newData = await Model.find({
    $or: [
      { name: { $regex: data.searchString, $options: "i" } },
      { description: { $regex: data.searchString, $options: "i" } },
      { property_type: { $regex: data.searchString, $options: "i" } },
      { "address.street": { $regex: data.searchString, $options: "i" } },
      { "address.country": { $regex: data.searchString, $options: "i" } },
      { "address.suburb": { $regex: data.searchString, $options: "i" } },
      { amenities: { $regex: data.searchString, $options: "i" } },
      { summary: { $regex: data.searchString, $options: "i" } },
    ],
  }).limit(1);

  const response = {
    error: false,
    newData,
  };
  //   console.log("con", response);
  return response;
}
module.exports = SearchListing;
